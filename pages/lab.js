import Frame              from '../components/_frame.js';
import content            from '../helpers/content';
import LabContent         from '../components/lab/content.js';
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

    const c = content.lab || {} ;

    const meta = getMeta('lab');

    return <Frame 
      hideHeader={false} 
      meta={meta} >
      <section className='section'>
        <LabContent />
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