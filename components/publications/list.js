import content             from '../../helpers/content';
import PostCard            from '../pub-card';
import { pubContent, 
  pubContentInner, 
  pubTitle, 
  gray}              from '../../helpers/common-styles';

export default props => {

  const pubs = content.pubs || {} ;
  const noPubs = pubs.noPubs || {} ;

  const pubCards = 
    Array.isArray(props.pubs) && props.pubs.length > 0 ? 
    props.pubs.map((c,i)=>{
      return <PostCard key={i} index={i} content={c}/>
    }) :
    <div className='no-pubs'>
      <h3 className='no-pubs-header'>
        {noPubs.header}
      </h3>
      <p className='no-pubs-text'>
        {noPubs.text}
      </p>
      <style jsx>{`
        .no-pubs {
          flex-direction: column;
          align-items: center;
        }
        .no-pubs-header {
          text-align: center;
          font-size: 24px;
          margin-bottom: 24px;
          color: ${gray};
        }
        .no-pubs-text {
          text-align: center;
          color: ${gray};
          font-style: italic;
          line-height: 20px;
        }
      `}</style>
    </div> ;

  return <div className='content'>
    <h1 className='title'>
      {content.pubs.menuHeader}
    </h1>
    <div className='content-inner'>
      <div className='cards'>
        {pubCards}
      </div>
    </div>
    <style jsx>{`
      .content {
        ${pubContent}
        width: 100%;
      }
      .title {
        ${pubTitle}
        margin-bottom: 20px;
      }
      .content-inner {
        ${pubContentInner}
        align-items: center;
        width: 100%;
      }
      .cards {
        justify-content: center;
        width: 100%;
        margin-top: 25px;
        margin-bottom: 25px;
        flex-wrap: wrap;
      }
    `}</style>
  </div>

}