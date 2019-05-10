import React                  from 'react';
import { 
  immutableArraySplice,
 }                            from 'conjunction-junction';
import { 
  updateFilter, 
  filterItems }               from './helpers';
import FormGenActions         from './3form-gen';
import Selectors              from './4selectors';
import FormSpecialActions     from './3form-special';

export default class SearchFormTests extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // submit
      testsIdsSelected: [],
      groupOnMount: true,
      // form data
      tests: {array:[], object: {}},
      // form display
      editing: true,
      isFiltering: false,
      filter: {},
      favorite: null,
      // config
      favoriteAllow: true,
      groupAllow: true,
    };
    this.toggleOverlay          =this.toggleOverlay.bind(this);
    this.toggleRainOnly         =this.toggleRainOnly.bind(this);
    this.toggleResetForm        =this.toggleResetForm.bind(this);
    this.listHandleFilter       =this.listHandleFilter.bind(this);
    this.toggleFilterMode       =this.toggleFilterMode.bind(this);
    this.testListHandleCheckbox=this.testListHandleCheckbox.bind(this);
    this.favoriteSelect         =this.favoriteSelect.bind(this);
    this.handleSubmit           =this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(){
    if(this.props.tests !== this.state.tests){
      if(!this.state.isFiltering){
        this.setState({tests: this.props.tests});
      }
    }
  }

  toggleResetForm(){
    this.setState({
      isFiltering: false,
      filter: {},
      testsIdsSelected: [],
      groupOnMount: true,
      editing: true,
      favorite: null,
    });
  }

  testListHandleCheckbox(event){
    const value = parseInt(event.target.value,10);
    const index = this.state.testsIdsSelected.findIndex(id=>id===value);
    const testsIdsSelected = 
      index >= 0 ? 
        immutableArraySplice(index, this.state.testsIdsSelected) :
        [...this.state.testsIdsSelected, value];
    this.setState({
      testsIdsSelected,
      editing: true,
      favorite: null,
    });    
  }

  favoriteSelect(event){
    const value = event && event.target ? event.target.value : null ;
    if(value === 'none'){
      this.setState({
        favorite: 'none',
      });
      return;
    }
    const idsArr = typeof value === 'string' ? value.split(',') : null ;
    const testsIdsSelected = Array.isArray(idsArr) ?
      idsArr.map(id=>parseInt(id,10)) : null ;
    if(testsIdsSelected){
      this.setState({
        testsIdsSelected,
        editing: true,
        favorite: value,
      });
    }
  }

  toggleOverlay(value){
    const groupOnMount = typeof value === 'boolean' ? value : !this.state.groupOnMount ;
    this.setState({
      groupOnMount,
      editing: true,
    });
  }

  toggleRainOnly(){
    this.setState({
      rainOnly: !this.state.rainOnly,
      editing: true,
    });
  }

  listHandleFilter(isFiltering, event, key, type){
    const value = event && event.target ? event.target.value : null ;
    const filter = updateFilter(this.state.filter, value, key, type);
    
    const tests = filterItems(
      this.props.tests,
      filter,
      this.state.testsIdsSelected
    );

    this.setState({
      isFiltering,
      filter,
      tests,
    });
  }

  toggleFilterMode(){
    if(this.state.isFiltering){
      this.setState({
        isFiltering: false,
        tests: this.props.tests,
        filter: {},
      });
    } else {
      this.setState({
        isFiltering: true,
        filter: {},
      });
    }
  }

  handleSubmit(e){
    e.preventDefault();
    return this.props.getTestData({
      testsIdsSelected: this.state.testsIdsSelected,
      groupOnMount:      this.state.groupOnMount,
      rainOnly:          this.state.rainOnly,
    })
    .then(()=>{
      this.setState({editing: false});
    })
    .catch(err=>{
      console.error(err);
    });
  }

  render(){    
    
    const tests = Array.isArray(this.state.tests) ? this.state.tests : [];

    return <form className='search-form'
        onSubmit={this.handleSubmit}>
        <FormGenActions
          toggleResetForm ={this.toggleResetForm}
          toggleFilterMode={this.toggleFilterMode}
          isFiltering     ={this.state.isFiltering}
          icons           ={this.props.icons}
          countPassing    ={tests.length}
          idsSelected     ={this.state.testsIdsSelected}
          accentFontColor ={this.props.accentFontColor}
          testsCount      ={this.state.testsIdsSelected.length}
        />
        <FormSpecialActions 
          groupAllow       ={this.props.groupAllow}
          groupOnMount     ={this.state.groupOnMount}
          toggleOverlay    ={this.toggleOverlay}
          favoriteAllow    ={this.props.favoriteAllow}
          favoriteOptions  ={this.props.favoriteOptions}
          favoriteSelect   ={this.favoriteSelect}
          accentFontColor  ={this.props.accentFontColor}
          favorite         ={this.state.favorite}
        />
        <Selectors
          items            ={tests}
          idsSelected      ={this.state.testsIdsSelected}
          filter           ={this.state.filter}
          isFiltering      ={this.state.isFiltering}
          columns          ={this.props.columns}
          accentFontColor  ={this.props.accentFontColor}
          handleSelection        ={this.testListHandleCheckbox} 
          listHandleFilter       ={this.listHandleFilter}
        />
      <style>{`
        .search-form-container {
          flex-direction: column;
          min-height: 100px;
        }
        .search-form-container-hide {
          display: none;
        }
        .search-form {
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </form>
  }
}