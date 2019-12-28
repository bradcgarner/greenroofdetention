import content         from '../../helpers/content';

export default function Concepts(props){

  const concepts = content.concepts || [];

  return <div className='concepts'>

    <h3 className='header'>{concepts.header}</h3>
    { concepts.map((c,i)=>{
    return <p key={i}>{c}</p>
    })
  }
    <style jsx>{`
      .concepts {
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
      }
    `}</style>
  </div>
}