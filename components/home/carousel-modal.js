import LazyLoad      from 'react-lazyload';
import { modalCard } from '../../helpers/common-styles';

export default props => {

  const content = props.content || {} ;
  const img = content.img || '' ;
  const caption = content.caption || '' ;
  const alt = typeof content.alt === 'string' ? content.alt : '' ;
  
  return <figure className='card'
    onClick={()=>{}}>
    <div className='image-container'>
      <LazyLoad height='100%'>
        <img className='image' src={img} alt={alt}/>
      </LazyLoad>
    </div>
    <figcaption className='caption'>{caption}</figcaption>

    <style jsx>{`
      .card {
        ${modalCard}
        flex-direction: column;
        max-height: 85vh;
        z-index: 9999;
      }
      .image-container {
        width: 100%;
        height: 85%;
        overflow: hidden;
      }
      .image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        margin: 0 auto;
      }
      .caption {
        margin-top: 10px;
        font-weight: normal;
        font-style: italic;
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
  </figure>
}