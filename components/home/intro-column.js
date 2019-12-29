export default function IntroColumn(props){

  const reverse = props.reverse ? 'column-reverse' : '' ;

  return <div className={`column ${reverse}`}>
    <div className='column-content'>
      {
        props.p || props.h ?
          <div className='column-text-container'>
            {
              props.h ? 
                <h3 className='header'>{props.h}</h3> :
                null 
            }
            {
              typeof props.p === 'string' ?
                <p>{props.p}</p> :

              Array.isArray(props.p) ?
                props.p.map((p,i)=><p key={i}>{p}</p>) :
                null 
            }
          </div> : null
      }
      {
        props.src ?
          <div className='image-container'>
            <img  className='image'
              src={props.src}
              alt={props.alt} />
          </div> : null
      }
       
    </div>

    <style jsx>{`
      .column {
        flex-direction: column;
        width: 90%;
        align-items: center;
      }
      @media (min-width: 500px){
        .column {
          width: 45%;
        }
      }
      .column-content {
        width: 100%;
        flex-direction: column;
      }
      @media (min-width: 500px){
        .column-reverse {
          flex-direction: column-reverse;
        }
      }
      .column-text-container {
        width: 100%;
        flex-direction: column;
      }
      .header {
        width: 100%;
        text-align: center;
        font-size: 18px;
        margin-top: 15px;
        margin-bottom: 15px;
      }
      .image-container {
        display: block;
        width: 100%;
        height: 30vh;
        max-height: 300px;
        overflow: hidden;
      }
      .image {
        width: 100%;
        object-fit: contain;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    `}</style>
  </div>
}