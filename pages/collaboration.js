import Frame              from '../components/_frame.js';
import CollabContent      from '../components/collab/content.js';
import { getMeta }        from '../helpers/meta';
import { fireNewPageView } from '../helpers/tag-manager.js';

export default class Lab extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    fireNewPageView();
  }
  
  render(){

    const meta = getMeta('collab');

    return <Frame 
      hideHeader={false} 
      meta={meta} >
      <section className='section'>
        <CollabContent />
        <style jsx>{`
          .section {
            display: flex;
            flex-direction: row;
            width: 100vw;
          }
        `}</style>
      </section>
    </Frame>
  }
}