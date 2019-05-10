import Frame              from '../components/_frame';
import content            from '../helpers/content';
import MonitoringContent  from '../components/monitoring/content';
import { getMeta }        from '../helpers/meta';
import { fireNewPageView } from '../helpers/tag-manager';

export default class Monitoring extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    fireNewPageView();
  }
  
  render(){

    const c = content.monitoring || {} ;

    const meta = getMeta('monitoring');

    return <Frame 
      hideHeader={false} 
      meta={meta} >
      <section className='section'>
      <MonitoringContent />
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