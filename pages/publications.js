import fetch              from 'isomorphic-unfetch';
import Frame              from '../components/_frame.js';
import PublicationsList   from '../components/publications/list.js';
import { 
  sideBarBottomBarBreakpoint 
}                         from '../helpers/common-styles';
import { getMeta }        from '../helpers/meta';
import { fireNewPageView } from '../helpers/tag-manager.js';

const BUTTER = process.env.REACT_APP_BUTTERCMS;

export default class Publications extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pubs: this.props.pubs,
    };
  }

  componentDidMount(){
    fireNewPageView();
  }
  
  render(){

    const meta = getMeta('pubsMenu');

    return <Frame 
      hideHeader={false} 
      meta={meta} >
      <section className='section'>
        <PublicationsList
          pubs={this.state.pubs} />
        <style jsx>{`
          .section {
            display: flex;
            flex-direction: row;
            width: 100vw;
          }

          @media (max-width: ${sideBarBottomBarBreakpoint}px){
            .section{
              flex-direction: column;
            }
          }
        `}</style>
      </section>
    </Frame>
  }
}

Publications.getInitialProps = async function() {
  const res = await fetch(`https://api.buttercms.com/v2/posts/?page=1&page_size=10&auth_token=${BUTTER}`);
  const f = await res.json();
  return {
    pubs: f.data,
  };
}