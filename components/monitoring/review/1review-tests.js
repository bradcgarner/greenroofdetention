import React               from 'react';
// import GraphWrapper        from '../graph';
import GraphWrapper        from 'react-chart-js-preprocessor';
import {
  loadVariablesTests,
  formatTestGraphTitle}    from './helpers';
import SearchFormTests     from './2form-tests';

export default class ReviewTestsContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataType1:            [],
      graph:                false,
      graphHasLoaded:       false,
      // config
      groupAllow:           props.groupAllow,
      graphBackgroundColor: props.graphBackgroundColor,
      favoriteAllow:        props.favoriteAllow,
      groupAllow:           props.groupAllow,
    };
    this.getTestData=this.getTestData.bind(this);
    this.handleBackgroundColor=this.handleBackgroundColor.bind(this);
  }

  componentDidMount(){
    const variables = loadVariablesTests(this.state);
    const favoriteOptions = Array.isArray(this.props.favoriteOptions)?
      this.props.favoriteOptions.map((o,i)=>{
      return <option key={i}
        value={o.idsSelected}>
        {o.label}
      </option>
    }) : [] ;
    this.setState({
      ...variables,
      favoriteOptions,
    });
  }

  getTestData(submission){
    const graphTitleText = formatTestGraphTitle(
      this.props.testsObject, 
      submission,
    );
    return this.props.getData(submission)
      .then(dataType1=>{
        const newState = {
          ...variables,
          testsIdsSelected: submission.testsIdsSelected,
          groupOnMount:     submission.groupOnMount,
          dataType1:        dataType1,
          graphTitleText,
        };
        const variables = loadVariablesTests(newState);
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
        window.scrollTo(0,0);
      })
      .catch(err=>{
        console.error(err);
      })
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
    const componentIsReady = Array.isArray(this.props.tests) && this.props.tests.length > 0 ;

    // @@@@@@@@@@ GRAPH @@@@@@@@@

    const graphIsReady = componentIsReady && this.state.graph && Array.isArray(this.state.dataType1) && this.state.dataType1.length > 0 ;

    const graph = graphIsReady ?
      <GraphWrapper
        developerWarnings={true}
        // general CSS and display
        graphName            ={'test_measurements'}
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
        selectorsAllow       ={true}
        icons                ={this.props.icons}
        // GraphWrapper allows an onMount function to be passed, but it would run at the same time as this.props.onGraphLoad(), so we won't use it. Later, if we see need to pass a different graph onLoad function versus this wrapper component, we can do that.
        // onMount              ={this.props.onGraphLoad}
      />  : null

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

    return componentIsReady ? <div className='review-outer-wrapper'>
      {graphContainer}
      <h1>Search Lab Tests</h1>
      <SearchFormTests 
        hideReadyColumn  ={false}
        icons            ={this.props.icons}
        tests            ={this.props.tests} 
        columns          ={this.props.columns}
        groupAllow       ={this.props.groupAllow}
        favoriteAllow    ={this.props.favoriteAllow}
        favoriteOptions  ={this.state.favoriteOptions}
        accentFontColor  ={this.props.accentFontColor}

        getTestData={this.getTestData}
        />
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