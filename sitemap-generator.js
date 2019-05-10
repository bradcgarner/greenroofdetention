'use strict';

const fs = require('fs');
const fetch = require('isomorphic-unfetch');
const { siteMapStatic } = require('./helpers/sitemap-static');
const BUTTER = process.env.REACT_APP_BUTTERCMS;
const thisUrl = process.env.THIS_URL;

const today = new Date();
const yr = today.getFullYear();
const mo = today.getMonth()+1 < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1 ;
const da = today.getDate() < 10 ? `0${today.getDate()+1}` : today.getDate()+1 ;

const staticJsArr = Array.isArray(siteMapStatic) ? siteMapStatic : [];

const staticXmlArr = staticJsArr.map(p=>{
  return `
    <url>
      <loc>${thisUrl}/${p.path}</loc>
      <lastmod>${p.lastmod || '2019-01-01'}</lastmod>
      <changefreq>${p.changefreq || 'yearly'}</changefreq>
      <priority>${p.priority || 0.5}</priority>
    </url>
  `;
});

const staticXmlString = staticXmlArr.join(' ');
let xmlString = '';
let dynamicJsString = '';

fetch(`https://api.buttercms.com/v2/posts/?page=1&page_size=100&auth_token=${BUTTER}`)
  .then(res=>{
    return res.json();
  })
  .then(p=>{
    const posts = p.data;
    return posts;
  })
  .then(posts=>{
    const dynamicXml = posts.map(p=>{
      return `
    <url>
      <loc>${thisUrl}/post/${p.slug}/</loc>
      <lastmod>${p.published}</lastmod>
      <changefreq>yearly</changefreq>
      <priority>1</priority>
    </url>
      `;
    });

    xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticXmlString} 
  ${dynamicXml.join(' ')}
</urlset>`;

    const dynamicJsArr = posts.map(p=>{
      const lastmod = typeof p.published === 'string' ? p.published.slice(0,10) : `${yr}-${mo}-${da}`;
      const title = typeof p.title === 'string' ? p.title.split("'").join('') : 'blog post';
      const description = typeof p.meta_description === 'string' ? p.meta_description.split("'").join('') : 'no description yet';
      return `
  {
    title: '${title}',
    description: '${description}',
    image: '${p.featured_image}',
    alt: '${title}',
    path: '${thisUrl}/post/${p.slug}/',
    url: '${thisUrl}/post/${p.slug}/',
    lastmod: '${lastmod}',
    changefreq: 'yearly',
    priority: '1.0'
  },`;
    });

    dynamicJsString = `'use strict';

const siteMapDynamic = [
  ${dynamicJsArr.join(' ')}

];

module.exports = {
  siteMapDynamic,
};`;

    return fs.writeFile('static/sitemap.xml', xmlString, function (err) {
      if (err) throw err;
      console.log('Generated dynamic sitemap.xml');
    });
  })
  .then(()=>{
    fs.writeFile('helpers/sitemap-dynamic.js', dynamicJsString, function (err) {
      if (err) throw err;
      console.log('Generated dynamic sitemap-dynamic.js');
    });
  })
  .catch(err=>{
    console.error(err);
  });
