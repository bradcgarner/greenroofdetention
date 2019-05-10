import fetch               from 'isomorphic-unfetch';
import Frame               from '../components/_frame.js';
import { formatButterUrl } from '../helpers/fetch-butter';
import PostContent         from '../components/publications/content';
import PostSidebar         from '../components/publications/sidebar';
import { sideBarBottomBarBreakpoint 
  }                        from '../helpers/common-styles';
  import { getMeta }        from '../helpers/meta';
import { fireNewPageView } from '../helpers/tag-manager.js';

export default class Publication extends React.Component {

  componentDidMount(){
    fireNewPageView();
  }
  
  render(){

    const p = this.props.pub ? this.props.pub : {} ;
    const meta = getMeta('pubs', p);


    return <Frame 
      hideHeader={false} 
      meta={meta} 
      pub={p} >
      <section className='section'>
        <PostContent 
          meta={meta}
          pub={p}/>
        <PostSidebar 
          pub={p} />
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

Publication.getInitialProps = async function (context) {
  const { slug } = context.query;
  const fetchOptions = { type: 'slug', slug };
  const url = formatButterUrl(fetchOptions);
  const res = await fetch(url);
  const pub = await res.json();
  return {
    pub: pub.data,
  };
};