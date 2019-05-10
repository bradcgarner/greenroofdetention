import content         from '../../helpers/content';
import LazyLoad        from 'react-lazyload';
import { 
  pubTitle, 
  fontReading,
  accentFontColor,
  green,
  pageContent,
  pageContentInner,
}                     from '../../helpers/common-styles';
import { 
  makeParagraphs }    from '../../helpers/format-html';
import { scrollBoard, 
  scrollSupporters, 
  fireGtmHover }      from '../../helpers/tag-manager';

export default props => {

  const win = typeof window !== 'undefined' ? window : {};
  const width = win.innerWidth;
  const bp = 500;

  const c = content.collab || {};
  const nav = c.mainNav || {} ;

  const textCSS = `
    ${fontReading}
    line-height: 1.2rem;
    margin-bottom: 15px;
  `;

  const textWrapCSS = `
    ${textCSS}
    flex-grow: 1;
    flex-basis: 300px;
    flex-shrink: 0;
  `;

  const options = {
    textCSS: textCSS,
  };

  const optionsLi = {
    textCSS: `
      ${textCSS}
      position: relative;
    `,
    bulletCSS: `
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      top: 10px;
      left: -20px;
      background-color: ${green};
      border-radius: 50%;
    `,
    textHoverCSS: `
      color: ${accentFontColor};
    `
  };

  const optionsEm = {
    textCSS: `${textWrapCSS}
    padding-right: 15px;`,
    emCSS: `font-size: 18px;
    color: ${green};`
  };

  const textTop      = makeParagraphs(c.textTop, options);
  const waysList     = makeParagraphs(c.waysList, optionsEm);
  const boardIntro   = makeParagraphs(c.boardIntro, options);
  const boardList    = makeParagraphs(c.boardList, optionsLi);
  const fundingIntro = makeParagraphs(c.fundingIntro, options);
  const fundersIntro = makeParagraphs(c.fundersIntro, options)
  const fundersList  = makeParagraphs(c.fundersList, optionsLi);
  const fundOther    = makeParagraphs(c.fundOther, options);

  return <div className='content'>
    <h1 className='title'>{nav.pageHeader}</h1>
    <div className='content-inner'>
      <h3 className='subheader'>
        {c.subheader}
      </h3>

      <div className='text-no-wrap'>
        {textTop}
      </div>

      <h4 className='subsubheader'>
        {c.waysHeader}
      </h4>
      <div className='text-wrap border-bottom'>
        {waysList}
      </div>

      {width >= bp ? <LazyLoad><div className='fixed-image'/></LazyLoad> : null }

      <h4 className='subsubheader'
        id={scrollBoard}>
        {c.boardHeader}
      </h4>
      <div className='text-wrap border-bottom'
        onMouseEnter={()=>fireGtmHover('collab-board')}>
        <div className='paragraph'>
          {boardIntro}
        </div>
        <ul className='list'>
          {boardList}
        </ul>
      </div>   

      {width >= bp ? <div className='fixed-image'/> : null }

      <h4 className='subsubheader'
        id={scrollSupporters}>
        {c.fundingHeader}
      </h4>
      <div className='text-no-wrap'>
        {fundingIntro}
      </div>

      <div className='text-wrap'
       onMouseEnter={()=>fireGtmHover('collab-supporters')}>
        <div className='paragraph'>
          {fundersIntro}
        </div>
        <ul className='list'>
          {fundersList}
        </ul>
      </div>   
      
      <div className='text-no-wrap'>
        {fundOther}
      </div> 
    </div>  

    <style jsx>{`
      .content {
        ${pageContent}
      }
      .content-inner {
        ${pageContentInner}
      }
      .title {
        ${pubTitle}
        margin-bottom: 20px;
      }
      .subheader {
        color: ${accentFontColor};
        font-size: 22px;
        text-align: center;
        font-style: italic;
        margin-top: 30px;
        margin-bottom: 15px;
      }
      .subsubheader {
        width: 100%;
        color: ${accentFontColor};
        font-size: 18px;
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .fixed-image {
        display: none;
      }
      .border-bottom {
        border-bottom: 4px solid ${accentFontColor};
        margin-bottom: 50px;
        padding-bottom: 25px;
      }
      @media(min-width: ${bp}px){
        .fixed-image {
          display: flex;
          width: 100%;
          height: 125px;
          background-attachment: fixed;
          background-size: cover;
          background-image: url(${c.bannerImage});
          margin-bottom: 50px;
          margin-top: 50px;
        }
        .border-bottom {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
      }
      .text-no-wrap {
        flex-direction: column;
        width: 100%;
      }
      .text-wrap {
        flex-direction: row;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .paragraph {
        padding-right: 15px;
      }
      .paragraph,
      .list {
        flex-grow: 1;
        flex-basis: 300px;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </div>
}