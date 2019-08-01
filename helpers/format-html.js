import { defQuoteStyle as defTextStyle, 
  defEmStyle, 
  fontBlog,
  globalFontColor,
  globalHeaderColor,
  purpleDarker,
  purpleLighter} from './common-styles';

// export const formatButterCMSBody = string => {
//   const s1 = typeof string === 'string' ? string : '' ;
//   if(!s1) return '' ;
//   if(
//     s1.includes('<script') ||
//     s1.includes('</script') ||
//     s1.includes('< script') ||
//     s1.includes('</ script')
//     ) { return '<p>Sorry... we just detected a problem.</p>'; }

//   if(process.env.CHECK_LINKS){
//     const badIndex = s1.indexOf('purple-roof-site.herokuapp.com');
//     if(badIndex > -1){
//       console.error('FIX HYPERLINK', s1.slice(badIndex, badIndex + 200));
//     } else {
//       const badIndex1 = s1.indexOf('purple-roof-site');
//       if(badIndex > -1){
//         console.error('FIX HYPERLINK', s1.slice(badIndex1, badIndex1 + 200));
//       } else {
//         const badIndex2 = s1.indexOf('https://purple-roof.com');
//         if(badIndex2 > -1){
//           console.error('FIX HYPERLINK', s1.slice(badIndex2, badIndex2 + 200));
//         }
//       }
//     }
//   }

//   const color = globalFontColor;
//   const font  = fontBlog;
//   const size  = 'font-size: 14px';
//   const fsize = 'font-size: 12px';
//   const ht    = 'line-height: 170%';
//   const wt    = 'font-weight: normal';
//   const block = 'font-style: italic';
//   const cMargin = 'margin: 5px 0 5px 0;'
//   const pMargin = 'margin: 10px 0 10px 0;'
//   const hMargin = 'margin: 10px 0 10px 0;'

//   const n1 = s1.split('&nbsp;');
//   const n2 = n1.join('');

//   const pi1 = n2.split('<p><iframe');
//   const pi2 = pi1.join('<iframe');
//   const pi3 = pi2.split('</iframe></p>');
//   const pi4 = pi3.join('</iframe>');

//   const i1 = pi4.split('<iframe');
//   const i2 = i1.join(`<div class="resp-container"
//     style="position: relative;
//     overflow: hidden;
//     padding-top: 56.25%; max-height: 56vw;
//     margin-bottom: 15px;">
//   <iframe
//     style="
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     border: 0;"`);
//   const i3 = i2.split('</iframe>');
//   const i4 = i3.join('</iframe></div>');

//   const h1a = i4.split('<h1>');
//   const h1b = h1a.join(`<h1  style="color: ${globalHeaderColor}; ${font}; ${hMargin}; font-size: 26px;">`);

//   const h1c = h1b.split('<h1 style="');
//   const h1d = h1c.join(`<h1  style="color: ${globalHeaderColor}; ${font}; ${hMargin}; font-size: 26px; `);

//   const h2a = h1d.split('<h2>');
//   const h2b = h2a.join(`<h2  style="color: ${globalHeaderColor}; ${font}; ${hMargin}; font-size: 24px;">`);

//   const h2c = h2b.split('<h2 style="');
//   const h2d = h2c.join(`<h2  style="color: ${globalHeaderColor}; ${font}; ${hMargin}; font-size: 24px; `);

//   const h3a = h2d.split('<h3>');
//   const h3b = h3a.join(`<h3  style="color: ${globalHeaderColor}; ${font}; ${hMargin}; font-size: 22px;">`);

//   const h3c = h3b.split('<h3 style="');
//   const h3d = h3c.join(`<h3  style="color: ${globalHeaderColor}; ${font}; ${hMargin}; font-size: 22px; `);

//   const h4a = h3d.split('<h4>');
//   const h4b = h4a.join(`<h4  style="color: ${globalHeaderColor}; ${font}; ${hMargin}; font-size: 20px;">`);

//   const h4c = h4b.split('<h4 style="');
//   const h4d = h4c.join(`<h4  style="color: ${globalHeaderColor}; ${font}; ${hMargin}; font-size: 20px; `);

//   const h5a = h4d.split('<h5>');
//   const h5b = h5a.join(`<h5  style="color: ${globalHeaderColor}; ${font}; ${hMargin}; font-size: 18px;">`);

//   const h5c = h5b.split('<h5 style="');
//   const h5d = h5c.join(`<h5  style="color: ${globalHeaderColor}; ${font}; ${hMargin}; font-size: 18px; `);

//   const h6a = h5d.split('<h6>');
//   const h6b = h6a.join(`<h6  style="color: ${globalHeaderColor}; ${font}; ${hMargin}; font-size: 16px;">`);

//   const h6c = h6b.split('<h6 style="');
//   const h6d = h6c.join(`<h6  style="color: ${globalHeaderColor}; ${font}; ${hMargin}; font-size: 16px; `);

//   const p1 = h6d.split('<p style="');
//   const p2 = p1.join(`<p  style="color: ${color}; ${font}; ${pMargin}; ${size}; ${wt}; ${ht}; `);

//   const p3 = p2.split('<p>');
//   const p4 = p3.join(`<p  style="color: ${color}; ${font}; ${pMargin}; ${size}; ${wt}; ${ht};">`);

//   const t1 = p4.split('<td style="');
//   const t2 = t1.join(`<td style="color: ${color}; ${font}; ${size}; ${wt}; text-align: center;  `);

//   const l1 = t2.split('<li>');
//   const l2 = l1.join(`<li style="color: ${color}; ${font}; ${size}; ${wt}; ${ht}; list-style-type: initial; margin-left: 1em; margin-bottom: 5px;">`);
  
//   const f1 = l2.split('<figure class="image">');
//   const f2 = f1.join(`<figure class="image" style="margin-left: 0; margin-right: 0; flex-direction: column;">`);

//   const f3 = f2.split('<figure class="image" style="');
//   const f4 = f3.join(`<figure class="image" style="margin-left: 0; margin-right: 0; flex-direction: column; `);

//   const c1 = f4.split('<figcaption>');
//   const c2 = c1.join(`<figcaption style="color: ${color}; ${font}; ${cMargin}; ${fsize}; ${wt};">`);

//   const c3 = c2.split('<figcaption style="');
//   const c4 = c3.join(`<figcaption style="color: ${color}; ${font}; ${cMargin}; ${fsize}; ${wt};`);

//   const b1 = c4.split('<blockquote>');
//   const b2 = b1.join(`<blockquote style="${block};">`);

//   const m1 = b2.split('<img style=');
//   const m2 = m1.join('<img style="max-width: 100%; object-fit: contain; ');
  
//   const m3 = m2.split('<img src=');
//   const m4 = m3.join('<img style="max-width: 100%; object-fit: contain;" src=');

//   const s3 = m4.split('</strong>'); // We were adding a space inside, but that creates other problems.
//   const s4 = s3.join('</strong>');

//   return s4;

// }

const _formatRawHtmlInner = (string, qStyle, mStyle, i=1) => {

  const arr1 = string.split('!!');
  const arr2 = [];
  arr1.forEach((s,i)=>{
    if(i===0){
      arr2.push(`<p key=${i} class='text' style="${qStyle}">`);
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

  const html = arr2.join(' ');
  return html;
}

export const formatRawHtml = (string, textStyle, emStyle) => {

  const qStyle = typeof textStyle === 'string' ? textStyle : defTextStyle ; 
  const mStyle = typeof emStyle   === 'string' ? emStyle   : defEmStyle   ; 

  const html = Array.isArray(string) ?
    string.map((s,i)=>{
      return _formatRawHtmlInner(s,qStyle,mStyle,i);
    }).join(' ') :
    typeof string === 'string' ?
    _formatRawHtmlInner(string,qStyle,mStyle) :
    '' ;

  return html;

};


export const makeParagraphsEm = (arr, options) => {
  if(!Array.isArray(arr)){
    return null;
  }
  return arr.map((t,i)=>{
    if(typeof t !== 'string'){
      return '';
    }
    const arr = t.split('.');
    const intro = arr[0];
    const rest = arr.slice(1,arr.length-1).join('.');
    return <p key={i} className='text'>
      <span className='em'>{intro}.</span>{rest}
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
  if(options.emCSS) {
    return makeParagraphsEm(arr, options);
  }
  if(!Array.isArray(arr)){
    return null;
  }
  return arr.map((t,i)=>{
    return <p key={i} className='text'>
      {t}
      <style jsx>{`
        .text {
          ${options.textCSS}
          margin-left: ${options.bulletCSS ? '20px' : 'inherit'};
        }
        .text:after {
          ${options.bulletCSS || ''}
        }
      `}</style>
    </p>
  }); 
};

// export const makeTeam = (members, options) => {
//   if(!Array.isArray(members)){
//     return null;
//   }
//   const team = members.map((member,i)=>{
//     return <span key={i} className='team-span'>
//       {member.role}: <a className='link'
//         href={member.url}
//         target='_blank'>{member.name}</a>
//       <style jsx>{`
//         .team-span {
//           ${options.textCSS}
//           padding-right: 5px;
//         }
//         .link {
//           ${options.textCSS}
//           text-decoration: none;
//           color: ${purpleDarker};
//         }
//         .link:hover {
//           color: ${purpleLighter};
//           text-decoration: underline;
//         }
//       `}</style>
//     </span>
//   }); 

//   return <p className='team-text'>
//     {team}
//     <style jsx>{`
//       .team-text {
//         ${options.textCSS}
//       }
//     `}</style>
//   </p>
// };