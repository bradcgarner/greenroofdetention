import { modalCard, 
  globalHeaderColor, 
  accentFontColor }      from '../../helpers/common-styles';
import { formatRawHtml } from '../../helpers/format-html';

export default props => {

  const content = props.content ? props.content : {} ;

  const mission = 
    typeof content.narrative === 'string' ?
      formatRawHtml(content.narrative) :
        Array.isArray(content.narrative) ?
          content.narrative.map((p,i)=>{
            return formatRawHtml(p);
          }).join(' ') :
            '' ;
  
  return <div className='card'
    onClick={()=>{}}>
    <h2 className='header'>{content.modalTitle}</h2>
    <div className='content'
      dangerouslySetInnerHTML={{__html: mission}}/>
    <style jsx>{`
      .card {
        ${modalCard}
      }
      .content {
        flex-direction: column;
      }
      .header {
        font-size: 40px;
        border-bottom: 7px solid ${accentFontColor};
        text-align: center;
        color: ${globalHeaderColor};
        margin-bottom: 20px;
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
  </div>
}