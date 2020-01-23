import content from '../../helpers/content';
import { createElements } from '../../helpers/format-html';
import { globalHeaderColor, fontReading } from '../../helpers/common-styles';

export default function Intro(props){

  const defQuoteStyle = `
    font-size:   14px;
    line-height: 18px;
    text-align:  justify;
    color:       ${globalHeaderColor};
    margin-top: 10px;
    margin-bottom: 10px;
    ${fontReading}
  `;

  const defEmStyle = `
    font-size: 16px;
    font-weight: bold;
    color:    #8bad33;
  `;

  return <div className='intro-container'>
    <div className='tagline-div'>
      <h1>{content.tagline}</h1>
    </div>
    <div className='two-columns'>
      <div className='column'>
        {createElements(content.column1, defQuoteStyle, defEmStyle)}
      </div>
      <div className='column'>
        {createElements(content.column2, defQuoteStyle, defEmStyle)}
      </div>
    </div>
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
      .two-columns {
        flex-direction: column;
        align-items: center;
        width: 90%;
      }
      .column {
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
      @media (min-width: 500px){
        .two-columns {
          flex-direction: row;
          justify-content: space-around;
          align-items: flex-start;
        }
        .column {
          width: 45%;
        }
      }
    `}</style>
  </div>
}