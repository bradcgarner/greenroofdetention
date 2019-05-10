import content             from '../../helpers/content';
import HomeContent         from './content';
import Carousel            from '../carousel';
import { section, 
  backgroundMid }          from '../../helpers/common-styles';
import { fireGtmHover }    from '../../helpers/tag-manager';

export default props => {

  const team = content.team;
  const sections = team.members.map((member, i) => {
    const reverseClass = i % 2 === 0 ? '' : 'reverse';
  
    return <section key={i} 
      className={`section ${reverseClass}`}
      id={`team-${member.firstNameKey}`}
      onMouseEnter={()=>fireGtmHover(member.firstNameKey)}>
      <HomeContent 
        member      = {member}
        toggleModal = {props.toggleModal}/>
      <Carousel 
        member      = {member}
        toggleModal = {props.toggleModal} />
      <style jsx>{`
        .section {
          ${section}
          flex-direction: column;
          padding-top: 20px;
          padding-left: 0;
          padding-right: 0;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          min-height: 600px;
        }
        .reverse {
          ${backgroundMid}
        }

        @media (min-width: 1160px) {
          .section {
            flex-direction: row;
            align-items: flex-start;
          }
          .reverse {
            flex-direction: row-reverse;
          }
        }
      `}</style>
    </section>;
  });
  
  return sections;
}
