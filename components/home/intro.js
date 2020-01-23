import content from '../../helpers/content';
import IntroRow from "./intro-row";

export default function Intro(props){

  const rows = Array.isArray(content.intro) ? content.intro : [];

  return <div className='intro-container'>
    <div className='tagline-div'>
      <h1>{content.tagline}</h1>
    </div>
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
      }
      .tagline-div {
        width: 95%;
        border-top: 5px solid #1e6d05;
        border-bottom: 5px solid #1e6d05;
        padding-top: 25px;
        padding-bottom: 25px;
        align-items: center;
        margin-top: 15px;
      }
      h1 {
        width: 100%;
        font-size: 32px;
        font-weight: bold;
        text-align: center;
      }
    `}</style>
  </div>
}