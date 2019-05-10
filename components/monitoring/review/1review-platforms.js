import React               from 'react';
// import GraphWrapper        from '../graph';
import GraphWrapper        from 'react-chart-js-preprocessor';
import { convertTimestampToString } from 'conjunction-junction';
import { calcDescription,
  loadVariablesPlatforms,
  formatPlatformGraphTitle,
  formatPlatformSearch, 
  preprocessEvents,
  dateRangesRecent }       from './helpers';
import SearchFormPlatforms from './2form-platforms';

export default class ReviewPlatformsContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataType1:            [],
      graph:                false,
      graphHasLoaded:       false,
      // config
      groupAllow:           props.groupAllow,
      graphBackgroundColor: props.graphBackgroundColor,
      includeReadyColumn:   props.includeReadyColumn,
      includeRecent:        props.includeRecent,
      favoriteAllow:        props.favoriteAllow,
      groupAllow:           props.groupAllow,
    };
    this.getPlatformData=this.getPlatformData.bind(this);
    this.handleBackgroundColor=this.handleBackgroundColor.bind(this);
    this.handleFetchAdvanceRequest=this.handleFetchAdvanceRequest.bind(this);
  }

  componentDidMount(){
    const variables = loadVariablesPlatforms(this.state);
    const dateRangesRecentObject = {};
    if(Array.isArray(dateRangesRecent)){
      dateRangesRecent.forEach(range=>{
        const days = parseInt(range.id) ;
        const name = days ? 
          `Last ${days} days / since ${convertTimestampToString(range.timestamp_start, 'yyyy-mm-dd')}` :
          range.id === 'r' ?
          'Since most recent analyzed event' :
          undefined ;
        dateRangesRecentObject[range.id] = {
          id: range.id,
          event_num: range.event_num,
          name,
        }
      });
    }
    const favoriteOptions = Array.isArray(this.props.favoriteOptions)?
      this.props.favoriteOptions.map((o,i)=>{
      return <option key={i}
        value={o.idsSelected}>
        {o.label}
      </option>
    }) : [] ;
    this.setState({
      ...variables,
      dateRangesRecentObject,
      favoriteOptions,
    });
  }

  getPlatformData(selection, advanceBy){
    const submission = formatPlatformSearch(
      this.props.eventsObject,
      {
        ...this.state,
        ...selection,
        advanceBy,
      }
    );
    const graphTitleText = formatPlatformGraphTitle(
      { ...this.state.dateRangesRecentObject,
        ...this.props.eventsObject,
      }, 
      submission,
    );
    return this.props.getData(submission)
      .then(dataType1=>{
        const legendDescription = calcDescription(
          this.props.eventsObject,
          submission.eventsIdsSelected
        );
        const newState = {
          ...variables,
          eventsIdsSelected: submission.eventsIdsSelected,
          groupOnMount:      submission.groupOnMount,
          rainOnly:          submission.rainOnly,
          dataType1:         dataType1.array,
          legendDescription,
          graphTitleText,
        };
        const variables = loadVariablesPlatforms(newState);
        this.setState({
          ...newState,
          ...variables,
          graph: false,
        });
      })
      .then(()=>{
        setTimeout(()=>{
          this.setState({
            graph: true,
            graphHasLoaded: true,
          });
        }, 100);
        // window.scrollTo(0,0); // <<< THIS IS CUSTOM
      })
      .catch(err=>{
        console.error(err);
      })
  }

  handleFetchAdvanceRequest(advanceBy){
    this.getPlatformData({}, advanceBy);
  }

  handlePreSetSave(preSet){
    return this.props.saveItem('preset',preSet)
      .then(returned=>{
        console.log('preset saved',returned);
      })
  }

  handleBackgroundColor(color){
    this.setState({graphBackgroundColor:color});
  }

  render(){
    const componentIsReady = Array.isArray(this.props.events) && this.props.events.length > 0 ;

    // @@@@@@@@@@ GRAPH @@@@@@@@@

    const graphIsReady = componentIsReady && this.state.graph && Array.isArray(this.state.dataType1) && this.state.dataType1.length > 0 ;

    const graph = graphIsReady ?
      <GraphWrapper
        developerWarnings={true}
        // general CSS and display
        graphName            ={'platforms'}
        titleText            ={this.state.graphTitleText}
        cssBackground        ={this.state.backgroundColor || 'white'}
        cssLegendPosition    ='bottom'
        cssWidthOuter        ={this.state.cssWidthOuter}
        cssHeightOuter       ={this.state.cssHeightOuter}
        // data
        dataType             ={1}
        dataType1            ={this.state.dataType1}
        handleFetchAdvanceRequest={this.handleFetchAdvanceRequest}
        // group
        groupByOnMount       ={this.state.groupByOnMount}
        groupTrue            ={this.state.groupByOnMount}
        groupsSub            ={this.state.groupsSub}
        groupAllow           ={this.state.groupAllow}  
        groupColors          ={this.state.groupColors}
        // handleToggleGroupTrue={this.props.handleToggleGroupTrue} 
        // x-axis
        xLabelKey            ={this.state.xLabelKey}
        xLabel               ={this.state.xLabel}
        advanceAllow         ={this.state.advanceAllow}
        retreatAllow         ={this.state.retreatAllow}
        yAxisUnitOptions     ={this.props.yAxisUnitOptions}
        // data legend
        legendUnits          ={this.props.units}
        legendAbbrevs        ={this.props.abbrevs}
        legendLabels         ={this.props.labels}
        legendDefinitions    ={this.props.defs} // this is new!!!
        legendDescription    ={this.state.legendDescription}
        // pre-sets
        preSets              ={this.props.preSets || {} }
          // this.props.preSets[this.props.formType]}
        preSetGroupEditMode  ={this.state.preSetGroupEditMode}
        preSetSaveSettings   ={this.state.preSetSaveSettings}
        styles               ={this.props.styles}
        handlePreSetSave     ={this.handlePreSetSave}
        handleBackgroundColor={this.handleBackgroundColor}
        // configure controls
        closeAllow           ={false}
        printAllow           ={true}
        backgroundAllow      ={true}
        yAxisAllow           ={true}
        selectorsAllow       ={false} // <<< THIS IS CUSTOM
        icons                ={this.props.icons}
        // GraphWrapper allows an onMount function to be passed, but it would run at the same time as this.props.onGraphLoad(), so we won't use it. Later, if we see need to pass a different graph onLoad function versus this wrapper component, we can do that.
        // onMount              ={this.props.onGraphLoad}
      /> : null;

    const graphContainer = this.state.graphHasLoaded ?
      <div className='graph-wrapper background-color'>
        {graph}
      <div style={{
        width: '100%', 
        borderBottom: `7px solid ${this.props.accentFontColor}`,
        marginBottom: 100,
      }}/> 
      <style jsx>{`
        .graph-wrapper.background-color {
          min-height: 100vh;
          width: 100vw;
          flex-direction: column;
          padding-top: 100px;
          background-color: ${this.state.graphBackgroundColor};
        }
      `}</style>
    </div> : null

    // @@@@@@@@@@@@@@ SELECTORS @@@@@@@@@@@@@

    const realEvents = Array.isArray(this.props.events) ? this.props.events : [] ; 
    const events = this.state.includeRecent ? [
      ...dateRangesRecent,
      ...realEvents,
    ] : realEvents ;

    const processedEvents = preprocessEvents(events, realEvents);

    const columns = this.state.includeReadyColumn ?
      this.props.columns :
      Array.isArray(this.props.columns) ?
      this.props.columns.filter(c=>{
        return c.key !== 'readyPct';
      }) : [] ;

    return componentIsReady ? <div className='review-outer-wrapper'>
      {graphContainer}
      <h1>Search Platforms</h1>
      <SearchFormPlatforms 
        hideRecentEvents ={false}
        hideReadyColumn  ={false}
        icons            ={this.props.icons}
        favoriteAllow    ={this.props.favoriteAllow}
        favoriteOptions  ={this.state.favoriteOptions}
        accentFontColor  ={this.props.accentFontColor}
        columns          ={columns}
        events           ={processedEvents} 
        getPlatformData={this.getPlatformData}/>
      <style>{`
        .review-outer-wrapper {
          flex-direction: column;
          align-items: center;
          width: 100vw;
        }
        h1 {
          margin-top: 100px;
        }
      `}</style>
    </div> :
    <h4 className='loading'>
      ...Loading...
      <style>{`
        .loading {
          flex-direction: column;
          margin-top: 100px;
        }
      `}</style>
    </h4>
  }
};