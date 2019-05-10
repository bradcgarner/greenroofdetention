import Link                  from 'next/link';
import LazyLoad              from 'react-lazyload';
import { convertTimestampToString,
  convertStringToTimestamp } from 'conjunction-junction';
import { card, 
  fontReading, 
  accentFontColor, 
  cardHoverColor, 
  green,
  red }                      from '../helpers/common-styles';
import { postLink }          from '../helpers/tag-manager';
import { calcCardsWide }     from '../helpers/read-window';
import { renderTest }        from '../helpers/render-test';

export default props => {

  const c = props.content;
  const cardHeight    = 310;

  const summaryFontSize = 12;
  const summaryLines  = 7;
  const summaryLineHeightPx = 14;

  const titleFontSize = 24;
  const titleLines = 3;
  const titleLineHeightPx = 26;

  const borderThickness = 3;
  const dotSize = 16;

  const cardsWide = calcCardsWide();

  const header = <div className='header'>
    <h4 className='title'>
      {c.title}
    </h4>
    <h5 className='author'>
      {c.author.first_name}{` `}{c.author.last_name}
    </h5>
    <h6 className='date'>
      {convertTimestampToString(convertStringToTimestamp(c.published), 'yyyy-mm-dd')}
    </h6>
    <div className='dot dot1'><div className='inner-dot'></div></div>
    <div className='dot dot2'><div className='inner-dot'></div></div>
    <style jsx>{`
      .header {
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        margin-bottom: 25px;
        flex-shrink: 0;
        border-bottom-width: ${borderThickness}px;
        border-style: solid;
        border-color: inherit;
        color: inherit;
        background-color: inherit;
        background-inherit;
        /*title, (title margin, author, author margin, date, date margin)*/
        height: calc(${titleLines * titleLineHeightPx}px + ${1.1*( 10 + 14 + 10 + 14 + 10 )}px );
      }
      .title {
        text-align: center;
        font-size: ${titleFontSize}px;
        color: inherit;
        margin-bottom: 10px;

        display: block;
        width: 100%;
        overflow: hidden;
        position: relative; 
        line-height: ${titleLineHeightPx}px;
        max-height: ${titleLines * titleLineHeightPx}px; 
        margin-right: -${titleFontSize}px;
        padding-right: ${titleFontSize}px;
        background: inherit;
        width: calc(100% + ${titleFontSize}px);
      }
      .title:before {
        content: '...';
        position: absolute;
        right: 0;
        bottom: 0;
      }
      .title:after {
        content: '';
        position: absolute;
        right: 0;
        width: ${titleFontSize}px;
        height: ${titleFontSize}px;
        background: inherit;
      }
      .author,
      .date {
        text-align: center;
        font-size: 14px;
        font-style: italic;
        color: inherit;
        margin-bottom: 10px;
      }
      .dot {
        position: absolute;
        justify-content: center;
        align-items: center;
        height: ${dotSize}px;
        width: ${dotSize}px;
        bottom: -${dotSize/2 + borderThickness/2}px;
        background-color: inherit;
        border-color: inherit;
      }
      .inner-dot {
        background-color: ${green};
        height: 1px;
        width: 1px;
        border-radius: 50%;
        border-style: solid;
        border-color: inherit;
        border-width: 5px;
      }
      .dot1 {
        left: 0;
      }
      .dot2 {
        right: 0;
      }
      @media (max-width: 1160px) {
        .title {
          font-size: 18px;
        }
      }
    `}</style>
  </div>

  const win = typeof window !== 'undefined' ? window : {} ;
  const path = win.location && win.location.pathname ? win.location.pathname : '' ;
  const pathClass = path === '/' ? 'home' : path ? path : 'no-path';

  return <div className={`card ${postLink} ${pathClass} ${c.slug} card-${props.index}-${cardsWide}`}>
    <Link as={`/publication/${c.url}`} href={`/publication/?slug=${c.slug}`}>
      <div className='card-clickable'>
        {header}
        <div className='summary-container'>
          <p className='summary'>
            {c.summary}
            {renderTest}
          </p>
        </div>
      </div>
    </Link>
    <style jsx>{`
      .card {
        ${card}
        padding: 0;
        margin: 0 20px 10px 0;
        height: ${cardHeight}px;
        width: ${0.75 * cardHeight}px;
        flex-shrink: 0;
      }
      .card-clickable {
        border-radius: 5px;
        flex-direction: column;
        height: 100%;
        width: 100%;
        padding: 10px 30px;
        cursor: pointer;
        background-color: inherit;
        border-color: ${green};
      }
      .card-clickable:hover {
        background-color: ${cardHoverColor};
        color: ${accentFontColor};
        border-color: ${red};
      }
      .summary-container {
        overflow: hidden;
        margin-bottom: 7px;
        display: block;
        color: inherit;
        background: inherit;
      }
      .summary {
        display: block;
        ${fontReading}
        font-size: ${summaryFontSize}px;
        width: 100%;
        overflow: hidden;
        position: relative; 
        line-height: ${summaryLineHeightPx}px;
        max-height: ${summaryLines * summaryLineHeightPx}px; 
        text-align: justify;  
        margin-right: -${summaryFontSize}px;
        padding-right: ${summaryFontSize}px;
        color: inherit;
        vertical-align: text-bottom;
        background: inherit;
      }
      .summary:before {
        content: '...';
        position: absolute;
        right: 0;
        bottom: 0;
      }
      .summary:after {
        content: '';
        position: absolute;
        right: 0;
        width: ${summaryFontSize}px;
        height: ${summaryFontSize}px;
        background: inherit;
      }
    `}</style>
  </div>

  }