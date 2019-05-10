import LazyLoad            from 'react-lazyload';
import { 
  isPrimitiveNumber }      from 'conjunction-junction';
import content             from '../../helpers/content';
import ToolTipCSS          from '../../helpers/tooltip-css';
import { 
  pubTitle, 
  pageContent,
  pageContentInner,
  accentFontColor,
  defEmStyle,
  fontReading,
  red }                    from '../../helpers/common-styles';
import { makeParagraphs, 
  makeFaq }                from '../../helpers/format-html';
import { monitoringVideo, 
  monitoringSearch, 
  monitoringFaq }          from '../../helpers/tag-manager';
import ReviewPlatformPage  from './review-wrapper';

export default class MonitoringContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      priorRuns: typeof window !== 'undefined' && window.localStorage && window.localStorage.userHistory ? parseInt(window.localStorage.monitoring, 10) : 0 ,
      minRepeatRuns: 2,
      isRepeatUser: false,
    };
    this.callbackOnRun = this.callbackOnRun.bind(this);
  }

  componentDidMount(){
    const isRepeatUser = this.state.priorRuns > this.state.minRepeatRuns ;
    this.setState({isRepeatUser});
  }

  callbackOnRun(){
    if(typeof window !== 'undefined'){
      if(window.localStorage && window.localStorage.userHistory){
        const priorRuns = isPrimitiveNumber(this.state.priorRuns) ? this.state.priorRuns : 0 ;
        const newRuns = priorRuns + 1 ;
        // do not update state so that the update only occurs when refreshing the page
        // this.setState({priorRuns: newRuns});
        window.localStorage.setItem('monitoring', newRuns);
      }
    }
  }

  render(){

    const c = content.monitoring || {} ;
    const nav = c.mainNav || {} ;

    const options = {
      textCSS: `
        margin-bottom: 15px;
        line-height: 1.2em;
        ${fontReading}
      `
    };
    const optionsEm = {
      textCSS: `
        margin-bottom: 15px;
        line-height: 1.2em;
        ${fontReading}
      `,
      emCSS: defEmStyle,
      splitter: '?'
    }
    const topText = makeParagraphs(c.topText, options);
    const middleText = makeParagraphs(c.middleText, options);
    const videoText = makeParagraphs(c.videoText, options);
    const searchTopText = makeParagraphs(c.searchTopText, options);
    const faq = makeFaq(c.faq, optionsEm);

    const video = <div className='video-container'
      id={monitoringVideo}
      onMouseEnter={()=>fireGtmHover(monitoringVideo)}>
      <h3 className='subheader'>{c.videoTitle}</h3>
      <div className="resp-container">
        <iframe className='iframe'
          src={c.videoLink} 
          allowFullScreen="allowfullscreen" />
      </div>
      {videoText}
      <style jsx>{`
        .video-container {
          flex-direction: column;
        }
        .subheader {
          color: ${accentFontColor};
          text-align: center;
          margin-top: 30px;
          margin-bottom: 15px;
          font-size: 24px;
        }
        .resp-container {
          position: relative;
          overflow: hidden;
          padding-top: 56.25%; 
          max-height: 56vw;
          margin-bottom: 15px;
        }
        .iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;"
        }
      `}</style>
    </div>

    const topOfPageOpen = <div className='monitoring-top'>
      {topText}
      <div className='image-container'>
        <LazyLoad height='100%'>
          <img className='image' 
            src={c.teaserImage}
            alt={c.teaserAlt} />
        </LazyLoad>
      </div>
      {middleText}
      {video}
      <style>{`
        .monitoring-top {
          flex-direction: column;
        }
        .image-container {
          display: block;
          width: 100%;
          margin-bottom: 20px;
        }
        .image {
          width: 100%;
          max-height: 70vh;
          object-fit: contain;
        }
      `}</style>
    </div>

    const topOfPageClosed = <div className='monitoring-top'>
      {topText}
      <div className='image-row'>
        
        <div className='image-container-half'>
          <div className="resp-container-row">
            <LazyLoad height='100%'>
              <img className='image'
                src={c.teaserImage}
                alt={c.teaserAlt} />
            </LazyLoad>
          </div>
        </div>
        
        <div className='image-container-half'>
          <div className="resp-container-row">
            <LazyLoad height='100%'>
              <iframe className='iframe'
                src={c.videoLink} 
                allowFullScreen="allowfullscreen" />
            </LazyLoad>
          </div>
        </div>

      </div>
      {videoText}
      <style jsx>{`
        .monitoring-top {
          flex-direction: column;
        }
        .image-row {
          justify-content: space-between;
          max-height: 30vh;
          margin-bottom: 20px;
        }
        .image-container-half {
          width: 50%;
        }
        .resp-container-row {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding-top: 56.25%; 
          max-height: 56%;
          margin-bottom: 15px;
        }
        .iframe, 
        .image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;"
        }
      `}</style>
    </div>

    const search = <ReviewPlatformPage/> 

    const leadingSearchText = this.state.isRepeatUser ? null :
      <div className='search-text'>
        {searchTopText}
        <style jsx>{`
          .search-text {
            flex-direction: column;
            width: 100%;
          }
        `}</style>
      </div>;

    const searchDivider = <div className='search-divider'>
      <style jsx>{`
        .search-divider {
          height: 75px;
          border-bottom: 5px solid ${red};
          margin-bottom: 75px;
          width: 100%;
        }
      `}</style>
    </div>

    const trailingSearchText = this.state.isRepeatUser ?
      <div className='search-text'>
        {searchTopText}
        <style jsx>{`
          .search-text {
            flex-direction: column;
            width: 100%;
          }
        `}</style>
      </div> : null ;

    const searchMain = <div 
      className='search-main-container-leading'
      id={monitoringSearch} >
      <h3 className='subheader'>{c.searchTopHeader}</h3>
      {leadingSearchText}
      {search}
      {trailingSearchText}
      {searchDivider}
      <h3 className='subheader'
        id={monitoringFaq}>{c.faqHeader}</h3>
      <div className='search-text'>
        {faq}
      </div>
      <style jsx>{`
        .search-main-container-leading {
          flex-direction: column;
          align-items: center;
        }
        .subheader {
          color: ${accentFontColor};
          text-align: center;
          margin-top: 30px;
          margin-bottom: 15px;
          font-size: 24px;
        }
        .search-text {
          flex-direction: column;
          width: 100%;
        }
      `}</style>
    </div>

    const topOfPage = this.state.isRepeatUser ? topOfPageClosed : topOfPageOpen ;

    return <div className='content'>
      <h1 className='title'>{nav.pageHeader}</h1>
      <div className='content-inner'>
        {topOfPage}
        {searchMain}
      </div> 
      <ToolTipCSS/>
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
          min-height: auto;
        }
      `}</style>
      <style>{`
        .search-outer-container {
          padding-top: 15px;
        }
        .search-modal-container {
          position: fixed;
        }
      `}</style>
    </div>
  }
  
}