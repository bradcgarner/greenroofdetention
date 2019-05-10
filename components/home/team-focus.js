import { isObjectLiteral } from 'conjunction-junction';
import { card,
  hotButton,
  teamBackgroundColor,
  hotButtonHover }         from '../../helpers/common-styles';
import ModalTeam           from './modal-team';
import { teamFocusClass, 
  modalOpen }              from '../../helpers/tag-manager';

export default props => {
  
  const member    = isObjectLiteral(props.content) ? props.content : {} ;
  const fullName  = `${member.firstName} ${member.lastName}`;
  const nameTitle = `${fullName}, ${member.title}`;

  const teamModal = <ModalTeam 
    member={member}/>

  const backgroundStyle = `
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-size: 110%;
    background-repeat: no-repeat;
    background-origin: content-box;
    background-position: center;
  `;
  const centerAll = `
    justify-content: center;
    align-items: center;
  `;

  let singleDivObject = {};

  const formatDivs = key => {
    const montage = member.montage || {} ;
    const arr = Array.isArray(montage[key]) ? montage[key] : [] ; 

    const divs = arr.map((p,i)=>{
      const style = typeof p.style === 'string' ? p.style : '' ;
      const text = isObjectLiteral(p.text) ? p.text : {} ;
      const textStyle = typeof text.style === 'string' ? text.style : '' ; 
      const textContent = 
        text.content === true ? nameTitle :
        typeof text.content === 'string' ? text.content :
        '' ;
      const textElement = textContent ?
        <p className='text'>
          {textContent}
          <style jsx>{`
            .text {
              width: 100%;
              text-align: center;
              ${textStyle}
            }
            @media(max-width: 500px){ /* on narrow vertical phone cards, no custom color */
              .text {
                color: inherit;
              }
            }
          `}</style>
        </p> : 
        null ;

      const photoCredit = p.photoCredit ?
        <p className='photo-credit'>
          {p.photoCredit}
          <style jsx>{`
            .photo-credit {
              font-size: 10px;
              font-style: italic;
              text-align-center;
              margin-top: 7px;
              opacity: 0.8;
            }
          `}</style>
        </p> : null ;

      const button = p.button ?
        <button className={`button ${modalOpen} ${member.firstNameKey} bio team`}
          type='button'
          onClick={()=>props.toggleModal(teamModal)}>
            {props.buttonLabel}
            <style jsx>{`
              .button {
                ${hotButton}
                margin-top: 20px;
                height: 35px;
                width: 90px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
              .button:hover {
                ${hotButtonHover}
              }
            `}</style>
        </button> : null ;

      const backgroundImage = p.url ? `background-image: url('${p.url}');` : '' ;

      const backgroundPosition = 
         p.backgroundPosition ? p.backgroundPosition :
         p.mainHeadshot       ? 'background-position: center top;' :
         key === 'bottomLeft' ? 'background-position: center bottom;' :
         i === 0              ? 'background-position: center top;' :
         i === arr.length-1   ? 'background-position: center bottom;' : 
         '' ;

      const theDiv = <div key={i} className='team-focus-block'>
        {textElement}
        {button}
        {photoCredit}
        <style jsx>{`
          .team-focus-block {
            flex-direction: column;
            ${backgroundImage}
            background-color: ${p.backgroundColor};
            ${backgroundStyle}
            ${backgroundPosition}
            ${style}
          }
        `}</style>
      </div> 


      if(p.mainHeadshot) {
        singleDivObject.mainHeadshot = <div className='team-focus-block'>
          <style jsx>{`
            .team-focus-block {
              flex-direction: column;
              flex: 3;
              background-image: url('${p.url}');
              background-color: ${teamBackgroundColor};
              ${backgroundStyle}
            }
          `}</style>
        </div>
      } else if(button){
        singleDivObject.button = <div className='team-focus-block'>
          {textElement}
          {button}
          <style jsx>{`
            .team-focus-block {
              flex: 1;
              background-image: url('${p.url}');
              background-color: ${teamBackgroundColor};
              ${backgroundStyle}
            }
          `}</style>
        </div>
      } else if(textElement){
        singleDivObject.text = <div className='team-focus-block'>
          {textElement}
          <style jsx>{`
            .team-focus-block {
              flex: 1;
              background-image: url('${p.url}');
              background-color: ${teamBackgroundColor};
              ${backgroundStyle}
            }
          `}</style>      
        </div>
        }

      return theDiv;

    });
    return divs;
  };

  const formatSingleDiv = div => {
    return <div className='single'>
      {div.mainHeadshot}
      {div.text}
      {div.button}
      <style jsx>{`
        .single {
          display: flex;
          flex-direction: column;
          flex: 1;
          height: 100%;
        }
        @media (min-width: 500px) {
          .single {
            display: none;
          }
        }
      `}</style>
    </div>
  };

  const topLeftDivs    = formatDivs('topLeft');
  const bottomLeftDivs = formatDivs('bottomLeft');
  const centerDivs     = formatDivs('center');
  const rightDivs      = formatDivs('right');

  const singleDiv = formatSingleDiv(singleDivObject);

  const trigger = props.paused ? null :
    <div className={`${teamFocusClass} ${member.firstNameKey} trigger`}>
      <style jsx>{`
        .trigger {
          position: absolute;
          top: 50%;
          left: 50%; 
          height: 50px; 
          width: 50px;
        }
      `}</style>
    </div>

  return <div className={`card-team-focus ${member.firstNameKey}`}>
    {singleDiv}
    <div className='left'>
      <div className='top-left'>
        {topLeftDivs}
      </div>
      <div className='bottom-left'>
        {bottomLeftDivs}
      </div>
    </div>
    <div className='center'>
      {centerDivs}
    </div>
    <div className='right'>
      {rightDivs}
    </div>
    {trigger}
      
    <style jsx>{`
      .card-team-focus {
        ${card}
        position: relative;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 10px;
        flex: 1;
        flex-shrink: 0;
        background-color: ${teamBackgroundColor};
      }
      .left {
        flex-direction: column;
        ${centerAll}
        display: none;
        flex: 3;
        height: 100%;
      }
      .top-left {
        ${centerAll}
        height: 75%;
        width: 100%;
      }
      .bottom-left {
        flex-direction: row;
        ${centerAll}
        height: 25%;
        width: 100%;
      }
      .center {
        flex-direction: column;
        ${centerAll}
        display: none;
        height: 100%;
        flex: 1;
      }
      .right {
        flex-direction: column;
        ${centerAll}
        height: 100%;
        display: none;
        flex: 2;
      }
      .button {
        ${hotButton}
        margin-top: 20px;
        height: 35px;
        width: 90px;
      }
      .button:hover {
        ${hotButtonHover}
      }

      @media (min-width: 500px) {
        .left {
          display: flex;
        }
        .right {
          display: flex;
        }
      }

      @media (min-width: 700px) {
        .center {
          display: flex;
        }
      }
      
    `}</style>
  </div>
}