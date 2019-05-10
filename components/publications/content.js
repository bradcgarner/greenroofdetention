import { 
  convertTimestampToString,
convertStringToTimestamp }   from 'conjunction-junction';
import content               from '../../helpers/content';
import { 
  formatButterCMSBody }      from '../../helpers/format-html';
import { 
  pubContent, 
  pubTitle, 
  pubContentInner, 
  accentFontColor,
  sideBarBottomBarBreakpoint
}                            from '../../helpers/common-styles';
import SocialShare           from '../social/share';
import { oopsClick, 
  scrollPost2040, 
  scrollPost4060, 
  scrollPost6080, 
  scrollPost8099 }           from '../../helpers/tag-manager';
import { renderTest }        from '../../helpers/render-test';

export default props => {

  const c = content.pubs || {};
  const nav = c.mainNav || {} ;

  const p = props.pub ? props.pub : {};
  const html = formatButterCMSBody(p.body);

  const author = p.author || {};
  const authorName = `${author.first_name} ${author.last_name}`
  const publishedTs = convertStringToTimestamp(p.published);
  const publishedFormatted = convertTimestampToString(publishedTs,'print');

  return <div className='content'>
    <div id='quad'>
      <div id='quad-0' className='quad' />
      <div id={scrollPost2040}  className='quad' />
      <div id={scrollPost4060}  className='quad' />
      <div id={scrollPost6080}  className='quad' />
      <div id={scrollPost8099}  className='quad' />
    </div>
    <h1 className='title'>
      {p.title}{renderTest}
    </h1>
    <h4 className={`${oopsClick} author-container`}>
      by {authorName} on {publishedFormatted}
    </h4>
    <div className='content-inner' dangerouslySetInnerHTML={{__html: html}}/>
    <SocialShare pub={p} meta={props.meta}/>
    <style jsx>{`
    .content {
      ${pubContent}
    }
    .content-inner {
      ${pubContentInner}
    }
    .title {
      ${pubTitle}
    }
    .author-container {
      width: 100%;
      max-width: 800px;
      margin-top: 25px;
      margin-bottom: 40px;
      color: ${accentFontColor};
    }

    @media (max-width: ${sideBarBottomBarBreakpoint}px){
      .content {
        width: 100vw;
      }
    }
    #quad {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 10px;
      z-index: -99;
      flex-direction: column;
      justify-content: space-around;
    }
    .quad {
      width: 10px;
      flex: 1;
    }
    `}</style>
  </div>

  }