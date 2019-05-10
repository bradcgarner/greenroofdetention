import { 
  getPlatformData,
  fetchKeys,
  listEvents }                from './helpers';
import { accentFontColor }    from '../../helpers/common-styles';
import * as icons             from '../graphics/icons'
import Review                 from './review';
import GraphWrapper           from 'react-chart-js-preprocessor';

const eventColumnsReview = [
  {
    key: 'event_num',
    label: 'event_num',
    filter: 'number',
  },
  {
    key: 'timestamp_start',
    label: 'start',
    className: 'above-400',
  },
  {
    key: 'timestamp_end',
    label: 'end',
    className: 'above-400',
  },
  {
    key: 'rain_rate_peak_in_sf_hr',
    label: 'peak in/sf/hr',
    className: 'above-400',
    filter: 'number',
  },
  {
    key:'rain_volume_in_sf',
    label: 'vol in/sf',
    className: 'above-500',
    filter: 'number',
  },
  {
    key: 'durationHrs',
    label: 'hrs (rain)',
    className: 'above-400',
    filter: 'number',
  },
  {
    key: 'readyPct',
    label: 'ready',
    className: 'above-500',
  },
  {
    key: 'notes',
    label: 'notes',
    className: 'above-1000',
  },
];

export default class ReviewPlatformPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ready: false,
      events: {},
      favoriteOptions: [],
    };
  }
  
  componentDidMount(){
    return listEvents()
    .then(eventsRaw=>{
      const events = Array.isArray(eventsRaw.array) ? eventsRaw.array : [] ;
      const eventsObject = (eventsRaw.object) ? eventsRaw.object : {} ;
      return this.setState({
        events,
        eventsObject
      });
    })
    .then(()=>{
      return fetchKeys()
      .then(keys=>{
        this.setState({
          abbrevs:          keys.abbrevs,
          defs:             keys.defs,
          labels:           keys.labels,
          units:            keys.units,
          styles:           keys.styles,
          preSets:          keys.graphPreSets ? keys.graphPreSets.platforms: {},
          yAxisUnitOptions: keys.yAxisUnitOptions,
        });
      })
    })
    .then(()=>{
      this.setState({ready: true});
    })
    .catch(err=>{
      console.error(err);
    })
  }

  render(){

    const page = this.state.ready ?  <Review
      // data
      type            ='events'
      events          ={this.state.events}
      eventsObject    ={this.state.eventsObject}
      columns         ={eventColumnsReview}
      favoriteOptions ={null}
      // functions
      getData         ={getPlatformData}
      // saveItem        ={saveItem}
      // config
      groupAllow           ={true}
      graphBackgroundColor ='white'
      includeReadyColumn   ={false}
      includeRecent        ={false}
      favoriteAllow        ={false}
      // general overhead
      GraphWrapper    ={GraphWrapper}
      accentFontColor ={accentFontColor}
      icons           ={icons}
      abbrevs         ={this.state.abbrevs}
      defs            ={this.state.defs}
      keys            ={this.state.keys}
      labels          ={this.state.labels}
      preSets         ={this.state.preSets}
      styles          ={this.state.styles}
      units           ={this.state.units}
      yAxisUnitOptions={this.state.yAxisUnitOptions}
    /> :
    <div style={{marginTop:100, justifyContent: 'center', width: '100vw'}}>...loading...</div> ;


    return  <section className='section'>
       {page}
        <style jsx>{`
          .section {
            display: flex;
            flex-direction: row;
            width: 100vw;
          }
        `}</style>
      </section>
  }
}