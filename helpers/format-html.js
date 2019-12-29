import { 
  defQuoteStyle as defTextStyle, 
  defEmStyle, 
} from './common-styles';

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