import LazyLoad      from 'react-lazyload';

export default function ImageContainer(props){

  return <div className='image-container'>
    <LazyLoad height={'100%'} offset={100}>
      <img className='image'
        src={props.src}
        alt={props.alt} />
      </LazyLoad>
    <p className='caption'>
      {props.caption}
    </p>
    <style jsx>{`
      .image-container {
        width: 100%;
        flex-direction: column;
        align-items: center;
      }
      .image {
        object-fit: contain;
        width: 100%;
      }
      .caption {
        font-size: 14px;
        font-style: italic;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 25px;
        line-height: 17px;
      }
    `}</style>
  </div>
}