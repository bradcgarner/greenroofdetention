import IntroColumn from "./intro-column";

export default function IntroRow(props){

  const row = Array.isArray(props.row) ? props.row : [];

  const col0 = row[0] ? row[0] : {};
  const col1 = row[1] ? row[1] : {};

  return <div className='intro'>

    <IntroColumn 
      h  ={col0.h}
      p  ={col0.p}
      src={col0.src}
      alt={col0.alt} />

    <IntroColumn 
      reverse={true}
      h  ={col1.h}
      p  ={col1.p}
      src={col1.src}
      alt={col1.alt} />
      
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
    `}</style>
  </div>
}