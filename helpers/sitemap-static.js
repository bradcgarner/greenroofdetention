'use strict';

const today = new Date();
const yr = today.getFullYear();
const mo = today.getMonth()+1 < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1 ;
const da = today.getDate() < 10 ? `0${today.getDate()+1}` : today.getDate()+1 ;

const siteMapStatic = [ // list these in the same order as the menu
  {
    key: 'index',
    path: '',
    lastmod: `${yr}-01-01`,
    changefreq: 'yearly',
    priority: '1.0'
  },
  {
    key: 'monitoring',
    path: 'monitoring/',
    lastmod: `${yr}-${mo}-01`,
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    key: 'collab',
    path: 'collaboration/',
    lastmod: `${yr}-01-01`,
    changefreq: 'yearly',
    priority: '0.8'
  },
  {
    key: 'pubs',
    path: 'publications/',
    lastmod: `${yr}-01-${da}`,
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    key: 'contact',
    path: 'contact/',
    lastmod: `${yr}-01-01`,
    changefreq: 'yearly',
    priority: '0.7'
  },
  {
    key: 'privacy',
    path: 'privacy/',
    lastmod: `${yr}-01-01`,
    changefreq: 'yearly',
    priority: '0.1'
  },
];

module.exports = {
  siteMapStatic,
};