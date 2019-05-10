import { isObjectLiteral } from 'conjunction-junction';
import LazyLoad            from 'react-lazyload';

import QuoteBefore         from '../graphics/quote-before';
import QuoteAfter          from '../graphics/quote-after';
import ModalTeam           from './modal-team';
import ModalContent        from './modal-content';
import { formatRawHtml }   from '../../helpers/format-html';
import { 
  fontAuthor, 
  accentFontColor,
  fadedHeaderColor,
  green,
  homeContentHeaderCSS }  from '../../helpers/common-styles';
import { oopsClick, 
  modalOpen }             from '../../helpers/tag-manager';

export default props => {

  const member = isObjectLiteral(props.member) ? props.member : {} ;

  const teamModal    = <ModalTeam    member={member}/>
  const contentModal = <ModalContent member={member}/>

  const quotes = member.quotes.map((q, j) => {
    const quoteHtml = formatRawHtml(q);

    return <div key={j} className='text-container'>
      <div className='quotes' dangerouslySetInnerHTML={{__html: quoteHtml}}/>
      <style jsx>{`
        .text-container {
          display: flex;
        }
      `}</style>
    </div>;
  });

  const author = `${member.firstName} ${member.lastName}, ${member.title}`
    
  const quotesDiv = <div className='quote-container'>
    <div className='quote-symbol quote-before'>
      <QuoteBefore/>
    </div>
    {quotes}
    <div className='quote-symbol quote-after'>
      <QuoteAfter/>
    </div>
    <style jsx>{`
      .quote-container {
        flex-direction: column;
        position: relative;
      }
      .quote-symbol {
        display: block;
        position: absolute;
        height: 28px;
        width: 40px;
      }
      .quote-before {
        left: -55px;
        top: 0%;
      }
      .quote-after {
        right: -55px;
        bottom: 0%;
      }
    `}</style>
  </div>

  return <div className='content'>
    <div className={`${oopsClick} headshot-in-content`}>
      <LazyLoad>
        <img className='image' src={member.headshot} alt={`${member.firstNameKey} headshot`}/>
      </LazyLoad>
    </div>
    
    <h2 className='header'>{member.contentTitle}</h2>
    {quotesDiv}
    <div className={`read-more-div ${modalOpen} ${member.firstNameKey} story story`}>
      <p className='read-more'
        onClick={()=>props.toggleModal(contentModal)}>
        ... read more ...
      </p>
    </div>

    <div className={`author-container ${modalOpen} ${member.firstNameKey} bio story`}
      onClick={()=>props.toggleModal(teamModal)}>
      <div className='author-inner-container'>
        <p className='author'>~ {author}</p>
      </div>
    </div>
    
    <style jsx>{`
    .content {
      flex-direction: column;
      align-items: center;
      width: 44%;
      border-radius: 2px;
      padding: 40px 70px 0 70px;
    }
    .headshot-in-content {
      width: 120px;
      height: 120px;
      position: relative;
      overflow: hidden;
      border-radius: 50%;
    }
    .image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background-color: #ccc;
    }
    .header {
      ${homeContentHeaderCSS}
    }
    .author-container {
      justify-content: flex-end;
    }
    .author {
      text-align: right;
      ${fontAuthor}
      color: ${accentFontColor};
      cursor: pointer;
    }
    .read-more-div {
      width: 100%;
      justify-content: flex-end;
      margin-bottom: 15px;
    }
    .read-more {
      padding-bottom: 10px;
      display: flex;
      font-size: 85%;
      color: ${fadedHeaderColor};
      font-style: italic;
      cursor: pointer;
    }
    .read-more:hover {
      color: ${green};
    }

    @media (max-width: 1160px) {
      .content {
        width: 75%;
        border-radius: 2px;
        padding: 50px;
      }
    }
    @media (max-width: 740px) {
      .content {
        width: 90%;
      }
      .header {
        font-size: 20px;
        text-align: center;
      }
    }
    `}</style>
  </div>

  }