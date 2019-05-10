import Link                from 'next/link';
import { isObjectLiteral } from 'conjunction-junction';
import SidebarSimilarLinks        from './sidebar-similar-links';
import content             from '../../helpers/content';
import {
  sidebarTitleCSS,
  accentFontColorHover,
  sideBarBottomBarBreakpoint,
}                          from '../../helpers/common-styles';
import { formatButterUrl,
 }        from '../../helpers/fetch-butter';
import { thirdClass } from '../../helpers/tag-manager';

export default class PostSidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pubIsOpened: !this.props.pub ? false : !this.props.pub.slug ? false : true ,
      pub:    this.props.pub,
      recents: [],
    };
  }

  componentDidMount(){
    this.createLists(this.state.pub);
  }

  componentDidUpdate(){
    if(this.props.pub !== this.state.pub){
      this.setState({pub: this.props.pub});
      this.createLists(this.props.pub);
    }
  }

  createLists(thisPub){
    const recentUrl = formatButterUrl({ type: 'listAll', start: 1, qty: 10 });

    return fetch(recentUrl)
      .then(_recent=>{
        return _recent.json();
      })
      .then(recent=>{
        const recentArr = Array.isArray(recent.data) ? recent.data : [] ; 
        const recents = recentArr.filter(p=>{
          return p.slug !== thisPub.slug;
        });
        this.setState({recents});
        return;
      })
      .catch(err=>{
        console.log(err);
      });
  }

  render() {

    const pubs = isObjectLiteral(content.pubs) ? {...content.pubs} : {};

    const thisPub     = this.state.pub || {};
    const _thisAuthor = thisPub.author || {};
    const thisAuthor  = `${_thisAuthor.first_name} ${_thisAuthor.last_name}`;

    const showAllPostsLink = <Link href='/publications'>
        <a className='link-to-menu'>
          {pubs.linkToMenu}
          <style jsx>{`
            .link-to-menu {
              ${sidebarTitleCSS}
              text-decoration: none;
            }
            .link-to-menu:hover {
              color: ${accentFontColorHover};
            }
          `}</style>
        </a>
      </Link> ;

    const scrollTrackingDivs = <div className='sidebar-bottom'>
      <div className={thirdClass} id={25}></div>
      <div className={thirdClass} id={50}></div>
      <div className={thirdClass} id={75}></div> 
      <style jsx>{`
        .sidebar-bottom {
          flex: 1;
          width: 100%;
          flex-direction: column;
          justify-content: space-between;
        }
        .third {
          width: 100%;
          height: 33.33%;
        }
      `}</style>     
    </div>

    return <aside className='side-bar'>
      <div className='side-bar-inner'>
        <SidebarSimilarLinks 
          pubs={pubs}
          thisAuthor={thisAuthor}
          recents={this.state.recents} />
        {showAllPostsLink}
        {scrollTrackingDivs}
      </div>
      <style jsx>{`
        .side-bar {
          width: 100vw;
          flex-direction: column;
          margin-bottom: 10px;
          min-height: 75vh;
          position: relative;
        }
        .side-bar-inner {
          position: relative;
          width: 100vw;
          flex-direction: column;
          flex: 1;
          padding: 0 25px 10px 10px;
        }

        @media (min-width: ${sideBarBottomBarBreakpoint}px){
          .side-bar {
            width: 25vw;
          }
          .side-bar-inner {
            width: 25vw;
            position: fixed;
            top: 100px;
            right: 0;
          }
        }
      `}</style>
    </aside>
  }
  
}