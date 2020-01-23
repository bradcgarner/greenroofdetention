import { isObjectLiteral } from 'conjunction-junction';
import { 
  defQuoteStyle as defTextStyle, 
  defEmStyle, 
} from './common-styles';
import { fireGtmHover } from './tag-manager';

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

export const createElements = (arr, textStyle, emStyle, _tableStyle, _tdStyle) => {

  const tableStyle = _tableStyle ? _tableStyle : '';
  const tdStyle = _tdStyle ? _tdStyle : textStyle;

  const divs = Array.isArray(arr) ? arr.map((c,i)=>{

    const element = 

      typeof c === 'string' ?
        <p key={i} className='text'>
          {c}
          <style jsx>{`
            .text {
              ${textStyle}
            }
          `}</style>
        </p> :
      !isObjectLiteral(c) ? null :

      c.element === 'h2' ?
        <h2 key={i} className='header2'
          id={c.id || `element-id-${i}`}
          onMouseEnter={()=>fireGtmHover(c.id)}>
          {c.text}
          <style jsx>{`
          .header2 {
            ${emStyle}
            font-size: 26px;
            margin-top: 50px;
            margin-bottom: 10px;
            ${c.style ? c.style : ''}
          }
        `}</style>
      </h2> :

      c.element === 'h3' ?
        <h3 key={i} className='header3'
          id={c.id || `element-id-${i}`}
          onMouseEnter={()=>fireGtmHover(c.id)}>
          {c.text}
          <style jsx>{`
            .header3 {
              ${emStyle}
              font-size: 22px;
              margin-top: 30px;
              margin-bottom: 5px;
              ${c.style ? c.style : ''}
            }
        `}</style>
        </h3> :

      // c.element === 'image' ?
      //   <div key={i} className='image-container'
      //     id={c.id || `element-id-${i}`}
      //     style={c.style ? c.style : {}}
      //     onMouseEnter={()=>fireGtmHover(c.id)}>
      //     <img className='image'
      //       src={c.url} alt={c.alt} />
      //     <figcaption className='caption'
      //       style={c.captionStyle ? c.captionStyle : {}} >
      //       {c.caption}
      //     </figcaption>
      //     <style jsx>{`
      //       .image-container {
      //         display: block;
      //         width: 100%;
      //       }
      //       .image {
      //         object-fit: contain;
      //         width: 100%;
      //         margin: 0 auto;
      //       }
      //       .caption {
              
      //       }
      //     `}</style>
      //   </div> :

      c.element === 'ul-with-em' ?
        <ul key={i} className='list'
          style={c.style ? c.style : {}}
          id={c.id || `element-id-${i}`}
          onMouseEnter={()=>fireGtmHover(c.id)}>
          {
            c.list.map((l,j)=>{
              if(typeof l === 'string'){
                const arr = l.split('!!')

                return <li key={j} className='ul-li' >
                  {
                    arr.map((span,k)=>{
                      if(k%2===0){
                        return <span key={k} className='normal'>{span} </span>
                      }
                      else {
                        return <span key={k} className='em'>{span} </span>
                      }
                    })
                  }
                </li>
              }
              return null;
            })
          }
          <style jsx>{`
            .list {
              margin-left: 20px;
            }
            .ul-li {
              ${textStyle}
              list-style: initial;
            }
            .normal,
            .em {
              font-size: inherit;
              color: inherit;
            }
            .em {
              ${emStyle}
            }
          `}</style>
        </ul> :

      c.element === 'ul' ?
        <ul key={i} className='list'
          style={c.style ? c.style : {}}
          id={c.id || `element-id-${i}`}
          onMouseEnter={()=>fireGtmHover(c.id)}>
          {
            c.list.map((l,j)=>{
              if(typeof l === 'string'){
                return <li key={j} className='ul-li' >
                  {l}
                </li>
              } else if(isObjectLiteral(l) && l.element === 'ol' && Array.isArray(l.list)){
                const olItems = l.list.map((item,k)=>{
                  return <li key={k} className='ol-li' >
                    {item}
                  </li>
                });
                return <li key={j} className='list-nested'>
                  <ol className='ol'>
                    {olItems}
                  </ol>
                </li>
              }
              return null;
            })
          }
          <style jsx>{`
            .list {
              margin-left: 20px;
            }
            .ul-li {
              ${textStyle}
              list-style: initial;
              ${c.ulLiStyle ? c.ulLiStyle : ''}
            }
            .ol-li {
              ${textStyle}
              list-style: decimal;
              margin-bottom: 5px;
              ${c.olLiStyle ? c.olLiStyle : ''}
            }
            .list-nested {
              margin-left: 20px;
              ${c.nestedLiStyle ? c.nestedLiStyle : ''}
            }
          `}</style>
        </ul> :

      c.element === 'ol' ?
        <ol key={i} className='list'
          id={c.id || `element-id-${i}`}
          onMouseEnter={()=>fireGtmHover(c.id)}>
          {c.list.map((l,j)=>{
            return <li key={j} className='ol-li' >
              {l}
            </li>
          })}
          <style jsx>{`
            .list {
              margin-left: 20px;
            }
            .ol-li {
              ${textStyle}
              list-style: decimal;
              margin-bottom: 5px;
            }
          `}</style>
        </ol> :
                
      c.element === 'table' && Array.isArray(c.table) ?
        <table key={i} className='table'
          id={c.id || `element-id-${i}`}
          style={c.style ? c.style : {}}
          onMouseEnter={()=>fireGtmHover(c.id)}>
          <tbody>
            {c.table.map((l,j)=>{
              return <tr key={j} className='row' >
                {
                  Array.isArray(l) ?
                    l.map((c,k)=>{
                      return <td key={k} className='td'
                        style={c.tdStyle ? c.tdStyle : {}}>{c}</td>
                    }) :
                  <td></td>
                }
              </tr>
            })}
          </tbody>
          <style jsx>{`
            .table {
              margin-left: 20px;
              margin-bottom: 20px;
              ${tableStyle}
            }
            .td {
              border: 1px solid #ccc;
              padding: 5px;
              ${tdStyle}
            }
          `}</style>
        </table> :

      c.element === 'equation' ?
        <div key={i} className='equation-container'
          id={c.id || `equation-id-${i}`} 
          onMouseEnter={()=>fireGtmHover(c.id)}>
          {!Array.isArray(c.html) ? null :
          c.html.map((line,idx)=>{
            if(typeof line === 'string'){
              return <div key={idx} className='equation'
              dangerouslySetInnerHTML={{__html: line}} />
            }
            return null;
          })}
          <div className='citation'>
            <h5 className='citation-header'>Citation</h5>
            <p className='citation-text'>
              <span className='citation-span citation-text-author'>
                {c.citation ? c.citation.author : null }.
              </span>
              <span className='citation-span citation-text-title'>
                "{c.citation ? c.citation.title : null }".
              </span>
              <span className='citation-span citation-text-journal'>
                {c.citation ? c.citation.journal : null }
              </span>
              <span className='citation-span citation-text-issue'>
                {c.citation ? c.citation.issue : null }.
              </span>
              <span className='citation-span citation-text-specifics'>
                {c.citation ? c.citation.specifics : null }
              </span>
            </p>
            <p className='citation-text source'>
              Find it at:{` `}
              <a href={c.citation ? c.citation.url : '/' }
                target='_blank'>{c.citation ? c.citation.website : null }</a>
            </p>
          </div>
          <style jsx>{`
            .equation-container {
              background-color: ${modelModalMessageBackground};
              border: 2px solid ${modelModalMessageBorderColor};
              border-bottom: 20px solid ${modelModalMessageBorderColor};
              flex-direction: column;
              padding: 20px;
              margin-bottom: 20px;
              box-shadow: rgba(${cardShadowColorRGB}, 0.3) 3px 3px 5px 0px;
            }
            .equation {
              ${textStyle}
              color: ${purpleDarker};
            }
            .citation {
              flex-direction: column;
            }
            .citation-header {
              font-weight: bold;
              color: ${purpleDarker};
              margin-bottom: 10px;
            }
            .citation-text {
              margin-left: 20px;
              line-height: 20px;
            }
            .citation-span {
              padding-right: 5px;
            }
            .citation-text-journal {
              font-style: italic;
            }
          `}</style>
        </div> :

      c.element === 'component' 
        && React.isValidElement(c.component) ?
        c.component :

      c.element === 'html' ?
        <div key={i} className='html-container'
          id={c.id || `element-id-${i}`}
          onMouseEnter={()=>fireGtmHover(c.id)}>
          {!Array.isArray(c.html) ? null :
          c.html.map((line,idx)=>{
            if(typeof line === 'string'){
              return <div key={idx} className='custom-html'
              dangerouslySetInnerHTML={{__html: line}} />
            }
            return null;
          })}
          <style jsx>{`
            .html-container {
              flex-direction: column;
              padding-bottom: 30px;
              ${typeof c.style === 'string' ? c.style : ''}
            }
          `}</style>
        </div> :

      c.element === 'text' ?
      <div key={i} className='text-container'
        id={c.id || `text-id-${i}`}
        onMouseEnter={()=>fireGtmHover(c.id)}>
        {
          typeof c.text === 'string' ?
            <div className='string-to-html'
              dangerouslySetInnerHTML={{
                __html: formatRawHtml(
                  c.text, 
                  c.textStyle || textStyle, 
                  c.emStyle   || emStyle)
              }} />:
          !Array.isArray(c.text) ? null :
          c.text.map((line,idx)=>{
            if(typeof line === 'string'){
              const html = formatRawHtml(
                line, 
                c.textStyle || textStyle, 
                c.emStyle   || emStyle)
              return <div key={idx} className='strings-to-html'
              dangerouslySetInnerHTML={{__html: html}} />
            }
            return null;
          })
        }
        <style jsx>{`
          .text-container {
            flex-direction: column;
            padding-bottom: 30px;
            ${typeof c.style === 'string' ? c.style : ''}
          }
        `}</style>
      </div> :

      null ;

    return element;
  }) : null ;

  return divs;


}