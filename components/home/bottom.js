import content         from '../../helpers/content';

export default function Bottom(props){

  const bottom = content.bottom || {};

  return <div className='bottom'>

    <h3 className='header'>{bottom.header}</h3>
    <p>{bottom.text[0]}</p>

    <style jsx>{`
      .bottom {
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
      }
    `}</style>
  </div>
}