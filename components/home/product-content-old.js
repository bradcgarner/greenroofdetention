import React               from 'react';
import LazyLoad            from 'react-lazyload';
import { isObjectLiteral } from 'conjunction-junction';
import content             from '../../helpers/content';
import { 
  pageTitle, 
  pageContent,
  pageContentInner,
  fontReading,
  accentFontColor,
  accentFontColorHover,
}                          from '../../helpers/common-styles';
import { makeParagraphs }  from '../../helpers/format-html';
import { FilePdf }         from '../graphics/icons';
import { 
  downloadLink, 
  fireGtmHover }           from '../../helpers/tag-manager';
import Link from 'next/link';

export default function ProductContent(props) {

  const c = content.products || {} ;
  const nav = c.mainNav || {} ;

  const textCSS = `
    ${fontReading}
    line-height: 1.2rem;
    margin-bottom: 15px;
  `;

  const options = {
    textCSS: textCSS,
  };

  const textTop = Array.isArray(c.textTop) ? c.textTop : [] ;
  const leadingText = makeParagraphs(textTop, options);

  const list = Array.isArray(c.list) ? c.list : [] ;
  const productsList = list.map((l,i)=>{

    const text = makeParagraphs(l.text, options);

    const pdf = isObjectLiteral(l.pdf) ? 
      <div className='read-more'>
        <a className={`link ${downloadLink} products ${l.pdf.link} true`} 
        href={l.pdf.link} 
          target='_blank'>
          <FilePdf style={{height: 40, width: 40}}/>
        </a>
        <p className='read-more-text'>
          {l.pdf.text}
        </p>
        <style jsx>{`
          .read-more {
            align-items: flex-end;
          }
          .read-more-text {
            ${fontReading}
          }
          .link {
            color: ${accentFontColor}
          }
          .link:hover {
            color: ${accentFontColorHover};
          }
        `}</style>
      </div> : null ;

    return <div key={i} className='project-container'
      id={l.id || `project-id-${i}`}
      onMouseEnter={()=>fireGtmHover(l.id)}
      onTouchMove={()=>fireGtmHover(l.id)} >
      <div className='image-container'>
        {
          Array.isArray(l.images)?
            l.images.map((img,idx)=>{
              return <LazyLoad height={400} offset={100}>
                <img key={idx}
                  src={img.image} 
                  alt={img.alt}
                  className='image'/>
              </LazyLoad>
            }) :
          <LazyLoad height={400} offset={100}>
            <img src={l.image} 
              alt={l.alt}
              className='image'/>
          </LazyLoad> 
        }
      </div>
      <div className='text'>
        {text}
      </div>
      {pdf}
      <style jsx>{`
        .project-container {
          flex-direction: column;
          width: 100%;
          margin-bottom: 75px;
        }
        .image-container {
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-bottom: 15px;
          min-height: 400px;
        }
        .image {
          width: 100%;
          object-fit: contain;
          overflow: hidden;
        }
        .text {
          flex-direction: column;
          width: 100%;
        }
      `}</style>
    </div>
  });

  const links = [
    'polderdak',
    'purple-roof',
    'hydrotech',
    'hydroventive',
    'haybase',
    'custom'
  ].map((l,i)=>{
    return <Link key={i} href={`/${l}`}><a>{l}</a></Link>
  });

    return <div className='content'>

      <div className='products'>
        <p>These products will be shown</p>
        {links}
      </div> 

      <h1 className='title'>{nav.pageHeader}</h1>
      <div className='content-inner'>
        <div className='leading-text'>
          {leadingText}
        </div>
        {productsList}
      </div>  
      <style jsx>{`
        .content {
          ${pageContent}
        }
        .title {
          ${pageTitle}
          margin-bottom: 20px;
        }
        .leading-text {
          flex-direction: column;
          margin-bottom: 25px;
        }
        .content-inner {
          ${pageContentInner}
        }
        .text {
          margin-bottom: 15px;
          line-height: 1.2em;
        }
      `}</style>
    </div>
  }