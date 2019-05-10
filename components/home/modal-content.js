import { isObjectLiteral } from 'conjunction-junction';
import { 
  modalCard, 
  green, 
  accentFontColor }       from '../../helpers/common-styles';

export default props => {
  
  const member = props.member || {} ;
  const stories = Array.isArray(member.story) ? member.story : [] ;

  const author = `${member.firstName} ${member.lastName}, ${member.title}`

  const formatImage = story => {
    if(!isObjectLiteral(story)){
      return null;
    }
    return <div className='image-container'>
      <img className='image' src={story.img} alt={story.alt}/>
      <figcaption className='caption'>{story.caption}</figcaption>
      <style jsx>{`
        .image-container {
          width: 50%;
          height: calc(100% - 33px);
          overflow: hidden;
          flex-direction: column;
        }
        .image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .caption {
          margin-top: 5px;
          font-weight: normal;
          font-style: italic;
          font-size: 12px;
          line-height: 14px;
          height: 28px;
          width: 100%;
          padding-right: 5px;
        }
        `}</style>
    </div>
  };
  const divs = stories.map((story,i)=>{

    const leftImage = i%2===0 ? formatImage(story) : null ;
    const rightImage = i%2===0 ? formatImage(stories[i+1]) : null ;

    const images = leftImage || rightImage ?
      <div className='image-pair-container'>
        {leftImage}
        {rightImage}
        <style jsx>{`
          .image-pair-container {
            min-height: 100px;
            margin-bottom: 15px;
          }
        `}</style>
      </div> : null ;

    return <div key={i} className='content-container'>
      <p className='content'>{story.text}</p>   
      {images}
      <style jsx>{`
        .content-container {
          flex-direction: column;
        }
        .content {
          font-size: 12px;
          line-height: 18px;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  });

  return <div className='card'
    onClick={()=>{}}>
    <h2 className='header'>{member.contentTitle}</h2>
    {divs}
    <div className='author-container'>
      <p className='author'>~ {author}</p>
    </div>  
    <style jsx>{`
      .card {
        ${modalCard}
      }
      .header {
        font-size: 28px;
        color: ${green};
        margin-bottom: 15px;
      }
      .author-container {
        justify-content: flex-end;
        margin-bottom: 15px;
      }
      .author {
        text-align: right;
        color: ${accentFontColor};
      }

      @media (min-width: 600px){
        .card {
          width: 80vw;
        }
      }
      @media (min-width: 900px){
        .card {
          width: 70vw;
        }
      }
    `}</style>
  </div>
}