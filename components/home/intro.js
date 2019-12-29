import IntroRow from "./intro-row";

export default function Intro(props){

  const rows = Array.isArray(props.rows) ? props.rows : [];

  return <div className='intro-container'>

    {
      rows.map((r,i)=>{
        return <IntroRow
          key={i} 
          row={r}
        />
      })
    }
    
    <style jsx>{`
      .intro-container {
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
      }
    `}</style>
  </div>
}