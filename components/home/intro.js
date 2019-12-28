export default function Intro(props){

  return <div className='intro'>

    <div className='column column-1'>
      <div className='column-content column-content-1'>
        <div className='column-text-container'>
          <h3 className='header'>{props.h1}</h3>
          <p>{props.p1}</p>
        </div>
        <div className='image-container'>
          <img  className='image'
            src='https://cdn.buttercms.com/JbXv6qWuR8urwkSr1mtv'
            alt='' />
        </div>
      </div>

    </div>

    <div className='column column-2'>
      <div className='column-content column-content-2'>
        <div className='column-text-container'>
        <h3 className='header'>{props.h2}</h3>
          <p>{props.p2}</p>
        </div>
        <div className='image-container'>
          <img className='image'
            src='https://cdn.buttercms.com/JbXv6qWuR8urwkSr1mtv'
            alt='' />
        </div>
      </div>
      
    </div>
    <style jsx>{`
      .intro {
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
      }
      @media (min-width: 500px){
        .intro {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
        }
      }
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
        .column-content-2 {
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