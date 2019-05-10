import { 
  modalCard, 
  headerFontColor, 
  fadedHeaderColor }      from '../../helpers/common-styles';
import { formatRawHtml }  from '../../helpers/format-html';

export default props => {
  
  const member = props.member;

  const fullName = `${member.firstName} ${member.lastName}`

  const header = <div className='header'>
    <div className='image-container'>
      <img className='image' src={`${member.headshot}`} alt={`${fullName} headshot`}/>
    </div>
    <h2 className='name'>{fullName}</h2>
    <h3 className='title'>{member.title}</h3>
    <style jsx>{`
      .header {
        flex-direction: column;
        align-items: center;
      }
      .image-container {
        width: 250px;
        overflow: hidden;
        border-radius: 50%;
        margin-bottom: 10px;
      }
      .image {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .name {
        font-size: 18px;
        text-align: center;
        color: ${headerFontColor};
        margin-bottom: 5px;
      }
      .title {
        font-size: 16px;
        text-align: center;
        color: ${fadedHeaderColor};
        margin-bottom: 15px;
      }
    `}</style>
  </div>

  const bio =
    typeof member.bio === 'string' ? formatRawHtml(member.bio) :
      Array.isArray(member.bio) ? member.bio.map((b,i)=>{
        return formatRawHtml(b);
      }).join(' ') : 
        '' ;
  
  return <div className='card'
    onClick={()=>{}}>
    {header}
    <div className='bio' dangerouslySetInnerHTML={{__html: bio}} />
    <style jsx>{`
      .card {
        ${modalCard}
        min-height: 400px;
        align-items: center;
        max-width: 800px;
      }
      .bio {
        flex-direction: column;
        max-width: 600px;
        align-items: center;
        margin: 0 auto;
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