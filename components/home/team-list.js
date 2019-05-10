import LazyLoad         from 'react-lazyload';
import { isPrimitiveNumber, 
  isObjectLiteral }     from 'conjunction-junction';
import content          from '../../helpers/content';
import HomeTeam         from './team';
import HomeTeamFocus    from './team-focus';
import { mainHeaderCSS, 
  section,  
  backgroundMid }       from '../../helpers/common-styles';
import { fireGtmHover } from '../../helpers/tag-manager';

export default class TeamList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      team:    content.team || {},
      members: [],
      cards:   [],
      activeIndex: 0,
      paused:  true,
    };
    this.handleIndexChange = this.handleIndexChange.bind(this);
  }

  componentDidMount(){
    const t = isObjectLiteral(content.team) ? content.team : {} ;
    const members = Array.isArray(t.members) ? t.members : [] ;
  
    const cards = members.map((c, i) => {
      return <HomeTeam 
        key         = {i}
        content     = {c}
        toggleModal = {this.props.toggleModal}
        buttonLabel = {this.state.team.buttonLabel}
        handleClick = {this.handleIndexChange}
        clickParam  = {i} />  
    });
    this.setState({
      members,
      cards,
    });
    this.handleIndexChange(Math.floor(Math.random() * this.state.team.length));
  }

  handleIndexChange(index){
    if(!isPrimitiveNumber(index)) return;
    const i = 
      index <= 0 ? 0 :
      index >= this.state.members.length ? 0 :
      index ;
    if(i !== this.state.activeIndex){
      this.setState({
        activeIndex: i,
        paused: true,
      });
      // this is more reliable than letting GTM set a timer
      setTimeout(()=>{
        if(this.state.paused){
          this.setState({paused: false})
        }
      }, 1000);
    }
  }
  
  render() {

    const nav = isObjectLiteral(this.state.team.mainNav) ? this.state.team.mainNav : {} ;  

    return <section id={nav.id} 
      className='section'
      onMouseEnter={()=>fireGtmHover(nav.id)}>
      <h2 className='header'>{nav.divHeader}</h2>
      <div className='content-team-list'>
        <LazyLoad height='100%'>
          <HomeTeamFocus
            paused      = {this.state.paused}
            content     = {this.state.members[this.state.activeIndex]}
            toggleModal = {this.props.toggleModal}
            buttonLabel = {this.state.team.buttonLabel} />
        </LazyLoad>
        <div className='cards-team-thumbs'>
          {this.state.cards}
        </div>
      </div>
      <style jsx>{`
        .section {
          ${section}
          flex-direction: column;
          align-self: center;
          align-items: center;
          justify-content: center;
          ${backgroundMid}
        }
        .header {
          ${mainHeaderCSS}
        }
        .content-team-list {
          width: 90%;
          height: 75vh;
          min-height: 600px;
          margin: 0;
          flex-direction: column;
        }
        @media (min-width: 1160px) {
          .content-team-list {
            flex-direction: row;
          }
        }
        .cards-team-thumbs {
          justify-content: space-between;
          overflow-y: hidden;
          overflow-x: scroll;
          width: 100%;
          height: 165px;
          box-shadow: rgba(27, 39, 51, 0.25) 5px 5px 10px 0px;
        }
        @media (min-width: 1160px) {
          .cards-team-thumbs {
            flex-direction: column;
            overflow-y: scroll;
            overflow-x: hidden;
            height: auto;
            width: 150px;
          }
        }

      `}</style>
    </section>;
  }
  
}
