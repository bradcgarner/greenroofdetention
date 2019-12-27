'use strict';

/*  NOTE: 
 *  CHANGES TO THIS FILE ONLY TAKE EFFECT
 *  AFTER RUNNING THE SCRIPT TO PARSE THIS FILE.
 *  BRAD CURRENTLY RUN THIS MANUALLY, BUT IT COULD BE SET TO RUN WHEN THE SERVER RE-STARTS
 *  THIS FILE IS PARSED BY THE SERVER FOR O(1) USE BY THE UI
 */

const U    = 'U';
const SE   = 'SE';
const KU   = 'KU';
const NLSM = 'NLSM';
const SWCC = 'SWCC';
const AH   = 'AH';
const M    = 'M';

const partnerList = [
  // this is used for drop-down list
  {
    name: 'N/A',
    code: 'NA',
    exclude: true,
    cc: true,
    detailsLegend: false,
  },
  {
    name: 'Purple-Roof (concept)',
    code: 'PR',
    link: 'https://www.purple-roof.com',
    productName: null, // i.e. there is no "product" called Purple-Roof
    productUrl: 'https://www.purple-roof.com/specs',
    logo: 'https://cdn.buttercms.com/Fe508d8Tx6GSBqMr5Qxg',
    exclude: true,
    cc: false,
    detailsLegend: true,
    detailsLegendReady: true,
  },
  {
    name: 'American Hydrotech',
    code: AH,
    link: 'https://www.hydrotechusa.com',
    productName: 'Garden Roof+',
    productUrl: 'https://www.hydrotechusa.com',
    logo: 'https://cdn.buttercms.com/CO9BJ59IRL6RJTYEZ2Xq',
    cc: true,
    detailsLegend: true,
    detailsLegendReady: false,
  },
  { 
    name: 'Knauf Insulation',
    code: KU,
    productName: 'Urbanscape Detention Roof',
    productUrl: 'http://www.green-urbanscape.com',
    link: 'http://www.green-urbanscape.com',
    logo: 'https://cdn.buttercms.com/v0qVSnKOTKas1CbJRQM9',
    cc: true,
    detailsLegend: true,
    detailsLegendReady: false,
  },
  {
    name: 'Next Level Stormwater Management',
    code: NLSM,
    productName: 'StormCap+ Detention',
    productUrl: 'https://www.nlsm.ca/systems-technical-info/extensive-systems/detention', 
    link: 'https://www.nlsm.ca',
    logo: 'https://cdn.buttercms.com/FiZ181bRHaihV5Cmae4X',
    cc: true,
    detailsLegend: true,
    detailsLegendReady: true,
  },
  {
    name: 'Sempergreen',
    code: SE,
    productName: 'Detention Roof',
    productUrl: 'https://www.sempergreen.com',
    link: 'https://www.sempergreen.com',
    logo: 'https://cdn.buttercms.com/s14Lm9n3SiqMc7wktJDb',
    cc: true,
    detailsLegend: false,
    detailsLegendReady: false,
  },
  {
    name: 'Sempergreen USA',
    nameBroken: 'Sempergreen USA', // necessary to allow word wrap where we want it
    code: M,
    productName: 'Sempergreen Purple-Roof',
    productUrl: 'https://www.sempergreen.com',
    link: 'https://www.sempergreen.com',
    logo: 'https://cdn.buttercms.com/YTk8KX2SpSjBl2YpGnBB',
    cc: true,
    detailsLegend: false,
    detailsLegendReady: false,
  },
  { 
    name: 'Stormwater Capture Co.',
    code: SWCC,
    productName: 'StormCap+',
    productUrl: 'https://stormwatercaptureco.com/products/stormcapdetention', 
    link: 'https://stormwatercaptureco.com',
    logo: 'https://cdn.buttercms.com/Q5CvZv8MQR8lar7KBA1F',
    cc: true,
    detailsLegend: true,
    detailsLegendReady: true,
  },
  {
    name: 'Uniseal',
    code: U,
    productName: 'Urbanscape Purple-Roof',
    productUrl: 'http://uniseal.com.sg',
    link: 'http://uniseal.com.sg',
    logo: 'https://cdn.buttercms.com/w5JmYNiTLmYWHRTHcZdQ',
    cc: true,
    detailsLegend: false,
    detailsLegendReady: false,
  },
];

module.exports = {
  partnerList,
};