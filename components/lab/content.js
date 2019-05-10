import LazyLoad          from 'react-lazyload';
import content           from '../../helpers/content';
import { 
  pubTitle, 
  fontFinePrint,
  fontReading,
  accentFontColor,
  green,
  pageContent,
  pageContentInner, 
}                        from '../../helpers/common-styles';
import { scrollLabText,
  fireGtmHover }         from '../../helpers/tag-manager';

export default props => {
  const c = content.lab || {} ;
  const nav = c.mainNav || {} ;

  const images = c.images.map((u,i)=>{
    return <div key={i} className='image-container'
      id={`lab-image-${i}`}
      onMouseEnter={()=>fireGtmHover(`lab-image-${i}`)}>
      <LazyLoad height='100%'>
        <img className='image' src={u.url} alt={u.alt}/>
      </LazyLoad>
      <figcaption className='caption'>
        {u.caption}
      </figcaption>
      <style jsx>{`
        .image-container {
          flex-direction: column;
          flex-grow: 1;
          flex-basis: 300px;
          flex-shrink: 0;
        }
        .image {
          height: 100%;
          width: 100%;
          object-fit: contain;
          overflow: hidden;
        }
        .caption {
          margin-top: 10px;
          margin-bottom: 20px;
          ${fontFinePrint}
          height: 43px; /* for neat grid alignment */
          overflow: hidden;
        }
      `}</style>
    </div>
  });

  const textCSS = `
    flex-grow: 1;
    flex-basis: 300px;
    flex-shrink: 0;
    ${fontReading}
    line-height: 1.2rem;
    margin-bottom: 15px;
    padding-right: 15px;
  `;

  const textTop = c.textTop.map((t,i)=>{
    return <p key={i} className='text'>
      {t}
      <style jsx>{`
        .text {
          ${textCSS}
        }
      `}</style>
    </p>
  });

  const textBottom = c.textBottom.map((t,i)=>{
    const arr = t.split('.');
    const intro = arr[0];
    const rest = arr.slice(1,arr.length-1).join('.');
    return <p key={i} className='text'>
      <span className='em'>{intro}.</span>{rest}
      <style jsx>{`
        .text {
          ${textCSS}
        }
        .em {
          font-size: 18px;
          color: ${green};
        }
      `}</style>
    </p>
  });

  return <div className='content'>
    <h1 className='title'>
      {nav.pageHeader}
    </h1>
    <div className='content-inner'>
      <div className='text-top'>
        {textTop}
      </div>
      <div className='image-wrap'>
        {images}
      </div>
      <h3 className='subheader'
        id={scrollLabText}>
        {c.subheader}
      </h3>
      <div className='text-wrap'
        onMouseEnter={()=>fireGtmHover('lab-text-bottom')}>
        {textBottom}
      </div>
    </div>
    <style jsx>{`
      .content {
        ${pageContent}
      }
      .title {
        ${pubTitle}
        margin-bottom: 20px;
      }
      .content-inner {
        ${pageContentInner}
      }
      .text-top,
      .image-wrap,
      .text-wrap {
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      .text {
        ${fontReading}
        line-height: 1.2rem;
        margin-bottom: 15px;
      }
      .subheader {
        color: ${accentFontColor};
        text-align: center;
        margin-top: 30px;
        margin-bottom: 15px;
        font-size: 24px;
      }
    `}</style>
  </div>
}