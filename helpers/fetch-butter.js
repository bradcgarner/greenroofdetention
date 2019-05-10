import { isObjectLiteral } from 'conjunction-junction';
const BUTTER = process.env.REACT_APP_BUTTERCMS;


export const formatButterUrl = options => {
  const T    = `&auth_token=${BUTTER}`;
  const base = 'https://api.buttercms.com/v2/';
  const excl = '&exclude_body=true';

  const type   = options.type   ? options.type   : 'listAll';
  const start  = options.start  ? options.start  : 1  ;
  const qty    = options.qty    ? options.qty    : 10 ;
  const slug   = options.slug   ? options.slug   : '' ;
  const query  = options.query  ? options.query  : '' ;
  const author = options.author ? options.author : '' ;
  const categ  = options.categ  ? options.categ  : '' ;
  const tag    = options.tag    ? options.tag    : '' ;

  const page = `page=${start}&page_size=${qty}`;

  if (type === 'slug')           { return `${base}posts/${slug}?${T}`; }
  else if (type === 'listAll')   { return `${base}posts/?${page}${excl}${T}`;}
  else if (type === 'author')    { return `${base}posts/?${page}${excl}${T}&author_slug=${author}`;}
  else if (type === 'category')  { return `${base}posts/?${page}${excl}${T}&category_slug=${categ}`;}
  else if (type === 'tag')       { return `${base}posts/?${page}${excl}${T}&tag_slug=${tag}`;}

  else if (type === 'categories'){ return `${base}categories/?${T}`;}
  else if (type === 'tags')      { return `${base}tags/?${T}`;}

  else if (type === 'search') { return `${base}search/?query=${query}&${T}`;}
  else if (type === 'rss')    { return `${base}feeds/rss/?${T}`;}
  else if (type === 'atom')   { return `${base}feeds/atom/?${T}`;}
  else if (type === 'sitemap'){ return `${base}feeds/sitemap/?${T}`;}
}

export const createTopicUrls = post => {
  const urls = [];
  const p = isObjectLiteral(post) ? post : {} ;
  const categories = Array.isArray(p.categories) ? p.categories : [] ;
  const tags       = Array.isArray(p.tags)       ? p.tags       : [] ;
  
  categories.forEach(c=>{
    const options = {type: 'category', categ: c.slug};
    const url = formatButterUrl(options);
    if(url) {
      urls.push(url);
    }
  });
  tags.forEach(t=>{
    const options = {type: 'tag', tag: t.slug};
    const url = formatButterUrl(options);
    if(url) {
      urls.push(url);
    }
  });
  return urls;
};
