import { isObjectLiteral } from 'conjunction-junction';
import { defQuoteStyle, 
  defEmStyle, 
  fontBlog,
  globalHeaderColor,
  globalFontColor }        from '../helpers/common-styles';
import { fireGtmHover } from './tag-manager';

export const formatButterCMSBody = string => {
  const s1 = typeof string === 'string' ? string : '' ;
  if(!s1) return '' ;
  if(
    s1.includes('<script') ||
    s1.includes('</script') ||
    s1.includes('< script') ||
    s1.includes('</ script')
    ) return '<p>Sorry... we just detected a problem.</p>';

  const color = `color: ${globalFontColor}`;
  const colorHeader = `color: ${globalHeaderColor}`
  const font  = fontBlog;
  const size  = 'font-size: 14px';
  const fsize = 'font-size: 12px';
  const ht    = 'line-height: 170%';
  const wt    = 'font-weight: normal';
  const block = 'font-style: italic';
  const cMargin = 'margin: 5px 0 5px 0;'
  const pMargin = 'margin: 10px 0 10px 0;'
  const hMargin = 'margin: 10px 0 10px 0;'

  const n1 = s1.split('&nbsp;');
  const n2 = n1.join('');

  const pi1 = n2.split('<p><iframe');
  const pi2 = pi1.join('<iframe');
  const pi3 = pi2.split('</iframe></p>');
  const pi4 = pi3.join('</iframe>');

  const i1 = pi4.split('<iframe');
  const i2 = i1.join(`<div class="resp-container"
    style="position: relative;
    overflow: hidden;
    padding-top: 56.25%; max-height: 56vw;
    margin-bottom: 15px;">
  <iframe
    style="
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;"`);
  const i3 = i2.split('</iframe>');
  const i4 = i3.join('</iframe></div>');

  const h1a = i4.split('<h1>');
  const h1b = h1a.join(`<h1  style="color: ${colorHeader}; ${font}; ${hMargin}; font-size: 26px;">`);

  const h1c = h1b.split('<h1 style="');
  const h1d = h1c.join(`<h1  style="color: ${colorHeader}; ${font}; ${hMargin}; font-size: 26px; `);

  const h2a = h1d.split('<h2>');
  const h2b = h2a.join(`<h2  style="color: ${colorHeader}; ${font}; ${hMargin}; font-size: 24px;">`);

  const h2c = h2b.split('<h2 style="');
  const h2d = h2c.join(`<h2  style="color: ${colorHeader}; ${font}; ${hMargin}; font-size: 24px; `);

  const h3a = h2d.split('<h3>');
  const h3b = h3a.join(`<h3  style="color: ${colorHeader}; ${font}; ${hMargin}; font-size: 22px;">`);

  const h3c = h3b.split('<h3 style="');
  const h3d = h3c.join(`<h3  style="color: ${colorHeader}; ${font}; ${hMargin}; font-size: 22px; `);

  const h4a = h3d.split('<h4>');
  const h4b = h4a.join(`<h4  style="color: ${colorHeader}; ${font}; ${hMargin}; font-size: 20px;">`);

  const h4c = h4b.split('<h4 style="');
  const h4d = h4c.join(`<h4  style="color: ${colorHeader}; ${font}; ${hMargin}; font-size: 20px; `);

  const h5a = h4d.split('<h5>');
  const h5b = h5a.join(`<h5  style="color: ${colorHeader}; ${font}; ${hMargin}; font-size: 18px;">`);

  const h5c = h5b.split('<h5 style="');
  const h5d = h5c.join(`<h5  style="color: ${colorHeader}; ${font}; ${hMargin}; font-size: 18px; `);

  const h6a = h5d.split('<h6>');
  const h6b = h6a.join(`<h6  style="color: ${colorHeader}; ${font}; ${hMargin}; font-size: 16px;">`);

  const h6c = h6b.split('<h6 style="');
  const h6d = h6c.join(`<h6  style="color: ${colorHeader}; ${font}; ${hMargin}; font-size: 16px; `);

  const p1 = h6d.split('<p style="');
  const p2 = p1.join(`<p  style="color: ${color}; ${font}; ${pMargin}; ${size}; ${wt}; ${ht}; `);

  const p3 = p2.split('<p>');
  const p4 = p3.join(`<p  style="color: ${color}; ${font}; ${pMargin}; ${size}; ${wt}; ${ht};">`);

  const t1 = p4.split('<td style="');
  const t2 = t1.join(`<td style="color: ${color}; ${font}; ${size}; ${wt}; text-align: center;  `);

  const l1 = t2.split('<li>');
  const l2 = l1.join(`<li style="color: ${color}; ${font}; ${size}; ${wt}; ${ht};">`);
  
  const f1 = l2.split('<figure class="image">');
  const f2 = f1.join(`<figure class="image" style="margin-left: 0; margin-right: 0; flex-direction: column;">`);

  const f3 = f2.split('<figure class="image" style="');
  const f4 = f3.join(`<figure class="image" style="margin-left: 0; margin-right: 0; flex-direction: column; `);

  const c1 = f4.split('<figcaption>');
  const c2 = c1.join(`<figcaption style="color: ${color}; ${font}; ${cMargin}; ${fsize}; ${wt};">`);

  const b1 = c2.split('<blockquote>');
  const b2 = b1.join(`<blockquote style="${block};">`);

  const m1 = b2.split('<img style=');
  const m2 = m1.join('<img style="max-width: 100%; object-fit: contain; ');
  
  const m3 = m2.split('<img src=');
  const m4 = m3.join('<img style="max-width: 100%; object-fit: contain;" src=');

  return m4;

}

export const formatRawHtml = (string, quoteStyle, emStyle) => {

  const qStyle = typeof quoteStyle === 'string' ? quoteStyle : defQuoteStyle ; 
  const mStyle = typeof emStyle    === 'string' ? emStyle    : defEmStyle    ; 

  const arr1 = string.split('!!');
  const arr2 = [];
  arr1.forEach((s,i)=>{
    if(i===0){
      arr2.push(`<p class='text' style="${qStyle}">`);
      arr2.push(s);
    } else if (i%2===1) {
      // is odd
      arr2.push(`<span class='emphasis' style="${mStyle}">`);
      arr2.push(s);
      arr2.push('</span>')
    } else {
      arr2.push(s);
    }
  });

  arr2.push('</p>');

  const arr3 = arr2.join(' ').split('!u!');
  const arr4 = [];
  arr3.forEach((s,i)=>{
    if (i%2===1) {
      // is odd
      arr4.push(`<span class='emphasis' style="${mStyle} text-decoration: underline;">`);
      arr4.push(s);
      arr4.push('</span>')
    } else {
      arr4.push(s);
    }
  });

  const html = arr4.join(' ');
  return html;

};

export const makeParagraphsEm = (arr, options) => {
  const splitter = options.splitter ? options.splitter : '.' ;
  return arr.map((t,i)=>{
    const t_arr = t.split(splitter);
    const isMult = t_arr.length > 1;
    const intro = isMult ? t_arr[0] : null ;
    const rest = isMult ? t_arr.slice(1,arr.length-1).join(splitter) : t_arr.slice().join(' ') ;
    return <p key={i} className='text'>
      <span className='em'>{intro}{isMult?splitter:null}</span>{rest}
      <style jsx>{`
        .text {
          ${options.textCSS}
        }
        .em {
          ${options.emCSS}
        }
      `}</style>
    </p>
  });
};

export const makeParagraphs = (arr, options) => {
  if(!Array.isArray(arr)){
    return null;
  }
  if(options.emCSS) {
    return makeParagraphsEm(arr, options);
  }
  return arr.map((t,i)=>{

    if(isObjectLiteral(t) && t.url){
      return <p key={i} className='text'>
      <a className='link' href={t.url} target='_blank'>
        {t.text}
      </a>
      <style jsx>{`
        .text {
          ${options.textCSS}
          margin-left: ${options.bulletCSS ? '20px' : 'inherit'};
        }
        .text:after {
          ${options.bulletCSS}
        }
        .text:hover {
          ${options.textHoverCSS}
        }
        .link {
          text-decoration: none;
          font: inherit;
          height: 100%;
          width: 100%;
        }
      `}</style>
    </p>

    } else if(isObjectLiteral(t)){
      return <p key={i} className='text'>
      {t.text}
      <style jsx>{`
        .text {
          ${options.textCSS}
          margin-left: ${options.bulletCSS ? '20px' : 'inherit'};
        }
        .text:after {
          ${options.bulletCSS}
        }
      `}</style>
    </p>

    } else if(typeof t === 'string'){
      return <p key={i} className='text'>
      {t}
      <style jsx>{`
        .text {
          ${options.textCSS}
          margin-left: ${options.bulletCSS ? '20px' : 'inherit'};
        }
        .text:after {
          ${options.bulletCSS}
        }
      `}</style>
    </p>
    }
    return null;
  }); 
};

export const makeFaq = (arr, options) => {
  if(!Array.isArray(arr)){
    return null;
  }
  return arr.map((t,i)=>{
    const q = typeof t.q === 'string' ? 
      <span className='question'>{t.q}
        <style jsx>{`
          .question {
            ${options.emCSS}
          }
        `}</style>
      </span> :
      null ;

    const body = typeof t.a === 'string' ? 
      <p className='text'>{q} {t.a}
        <style jsx>{`
          .text {
            ${options.textCSS}
          }
        `}</style>
      </p> :
      Array.isArray(t.a) ? 
      t.a.map((text, i)=>{
        const q1 = i === 0 ? q : null ;
        return <p key={i} className='text'>{q1} {text}
          <style jsx>{`
            .text {
              ${options.textCSS}
            }
          `}</style>
        </p> 
      }) :
      null ;

    const image = typeof t.image === 'string' ?
      <div className='image-container'
        id={`monitoring-faq-image-${i}`}>
        <img src={t.image}
          className='image' 
          alt={t.alt} />
        <style jsx>{`
          .image-container {
            display: block;
            width: 100%;
            margin-bottom: 20px;
          }
          .image {
            width: 100%;
            object-fit: contain;
          }
        `}</style>
      </div> : null ;

    return <div key={i} className='faq'
      onMouseEnter={()=>fireGtmHover(`monitoring-faq-${i}`)}>
      {image}
      {body}
      <style jsx>{`
        .faq {
          flex-direction: column;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  });
};