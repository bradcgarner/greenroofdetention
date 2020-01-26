export const red =                    '#c12b5b';
export const green =                  '#74bf08';
export const greenDarker =            '#1e6d05';
export const greenDarkerRGB =         '30,109,5';
export const greenLighter =           '#a2bd5b';
export const gray =                   '#464143';
export const black =                  '#231f20';
export const menuBackgroundColor =    '#eee';
export const navHoverColor       =    '#ddd';
export const mainHeaderColor =        green;
export const consentFontColor =       '#fff';
export const fontOnColorColor =       'white';
export const fontOnColorColorHover =  '#efe086';
export const disabledButtonColor   =  '#ccc';
export const carouselDotColor =       '#bbb';
export const carouselDotColorActive = '#717171';
export const carouselArrowColor =     'white';
export const accentFontColor =        '#73308a';
export const accentFontColorHover =   '#8d798d';
export const purple =                 '#73308a';
export const detentionBlue          = '#4c4cff';

export const purpleRGB =              '115,48,138';
export const headerFontColor =        accentFontColor;
export const headerFontColorHover =   '#a28ba2';
export const headerBackgroundColor =  '#fafafa';
export const footerBackgroundColor =  '#fafafa';
export const globalFontColor =        '#2a171c';
export const globalHeaderColor =      '#3c2727';
export const fadedHeaderColor =       '#4c414c';
export const burgerMenuFontColor =    '#fff';
export const burgerMenuFontColorHover = accentFontColorHover;
export const imageBackgroundColor =   '#d8c7d8';
export const modalHeaderColor =       accentFontColor;
export const cardHoverColor =         '#f7f1f7';
export const cardShadowColor =        '#2a17ac';
export const cardShadowColorRGB =     '35,31,32';
export const modalBackground =        'rgba(0, 0, 0, 0.6)';
export const mediumGray =             '#8d798d';

export const backgroundLight = 'background-color: #fff;';
export const backgroundMid   = 'background-color: #f8f9f9;';
export const backgroundDark  = 'background-color: #e6e6e6;';
export const backgroundVDark = 'background-color: #8d798d;';
export const backgroundDkGreen = `background-color: ${greenDarker};`;

// this is in the Myers reset in _frame.js
export const fontNormal = `
  font-family: Source Sans Pro, sans-serif;
`;
export const fontFinePrint = `
  font-family: Open Sans Condensed, sans-serif;
`;
export const fontReading = `
  font-family: Nanum Gothic, sans-serif
`;

/* IMPORTANT! THIS GOES IN _FRAME.JS TO LOAD GOOGLE FONTS */
const fontsToLoadArr = [
  'Nanum+Gothic', // blog
  'Source+Sans+Pro', // normal
  'Open+Sans:700', // blog menu
  'Open+Sans+Condensed:300', // fine print
  'Roboto', // ONLY to check meta tags!!!
];
export const fontsToLoad = fontsToLoadArr.join('%7C'); // encoded pipe | character

export const section = `
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 70px 20px 20px 20px;
  overflow: hidden;
`;

export const card = `
  flex-direction: column;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(${cardShadowColorRGB}, 0.25) 5px 5px 10px 0px;
`;

export const modalCard = `
  position: relative;
  -webkit-transform: translate3d(0,0,0);
  display: block;
  height: 70vh;
  min-height: 400px;
  width: 90vw;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(${cardShadowColorRGB}, 0.25) 5px 5px 10px 0px;
  z-index: 9999;
  overflow-y: scroll;
`;

const _bigButton = `
  ${fontNormal}
  font-size: 14px;
  align-self: center;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 2px;
  padding-top: 3px;
`;

export const bigButton = `
  ${_bigButton}
  background-color: #888;
  color: #fff;
`;

export const bigButtonHover =`
  border: 1px solid #ddd;
  background-color: #fff;
  color: #888;
`;

export const footerElementMargins = `
  margin: 0 20px 50px 20px;
`;

export const pageContent = `
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 40px 20px;
  margin-top: 75px;
`;

export const pageContentInner = `
  flex-direction: column;
  min-height: 75vh;
  width: 100%;
  max-width: 800px;
`;

export const boxShadow = `box-shadow: rgba(${cardShadowColorRGB}, 0.3) 3px 3px 5px 0px;`

export const hotButton = `
  ${_bigButton}
  background-color: ${green};
  color: #fff;
`;

export const hotButtonHover = `
  border: 1px solid #ddd;
  background-color: rgba(${greenDarkerRGB},0.7);
`;

export const pageTitle = `
  font-size: 30px;
  text-align: center;
  color: ${globalHeaderColor};
`;

export const transparent = `
  opacity: 0.1;
  cursor: initial;
`;

export const defQuoteStyle = `
  font-size:   14px;
  line-height: 18px;
  text-align:  justify;
  color:       ${globalHeaderColor};
  margin-top: 10px;
  margin-bottom: 10px;
  ${fontReading}
`;

export const defEmStyle = `
  font-size: 16px;
  font-weight: bold;
  color:    #8bad33;
`;