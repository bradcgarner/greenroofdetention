import React                 from 'react';
import { 
  immutableArraySplice,
 }                           from 'conjunction-junction';
import { 
  dateRanges, 
  updateFilter,
  filterItems}              from './helpers';
import FormGenActions        from './3form-gen';
import Selectors             from './4selectors';
import FormSpecialActions    from './3form-special';

export default class SearchFormPlatforms extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // submit
      eventsIdsSelected: [],
      groupOnMount:      false,
      rainOnly:          false,
      // form data
      events:     this.props.events,
      dateRanges: dateRanges || [],
      // form display
      editing:     true,
      isFiltering: false,
      filter:      {},
      favorite:    null,
    };
    this.toggleOverlay          =this.toggleOverlay.bind(this);
    this.toggleRainOnly         =this.toggleRainOnly.bind(this);
    this.toggleResetForm        =this.toggleResetForm.bind(this);
    this.listHandleFilter       =this.listHandleFilter.bind(this);
    this.toggleFilterMode       =this.toggleFilterMode.bind(this);
    this.eventListHandleCheckbox=this.eventListHandleCheckbox.bind(this);
    this.favoriteSelect         =this.favoriteSelect.bind(this);
    this.handleSubmit           =this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(){
    if(this.props.events !== this.state.events){
      if(!this.state.isFiltering){
        this.setState({events: this.props.events});
      }
    }
  }

  toggleResetForm(){
    this.setState({
      isFiltering: false,
      filter: {},
      eventsIdsSelected: [],
      groupOnMount: false,
      editing: true,
      favorite: null,
    });
  }

  eventListHandleCheckbox(event){
    const value = event && event.target ? event.target.value : null ;
    const index = this.state.eventsIdsSelected.findIndex(id=>id===value);
    if(index >= 0){
      // REMOVE
      const _eventsIdsSelected = immutableArraySplice(index, this.state.eventsIdsSelected);
      const eventsIdsSelected = 
        _eventsIdsSelected.length >= 3 ? 
        _eventsIdsSelected.slice(0,3) : 
        _eventsIdsSelected ;
      this.setState({
        eventsIdsSelected,
        editing: true,
        favorite: null,
      }); 
    } else {
      // ADD
      const eventsIdsSelected = this.state.eventsIdsSelected.length > 2 ? this.state.eventsIdsSelected.slice(0,2) : this.state.eventsIdsSelected ;
      this.setState({
        eventsIdsSelected: [...eventsIdsSelected, value],
        editing: true,
        favorite: null,
      });
    }
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
    const eventsIdsSelected = Array.isArray(idsArr) ?
      idsArr.map(id=>parseInt(id,10)) : null ;
    if(eventsIdsSelected){
      this.setState({
        eventsIdsSelected,
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

    const events = filterItems(
      this.props.events,
      filter,
      this.state.eventsIdsSelected
    );

    this.setState({
      isFiltering,
      filter,
      events,
    });
  }

  toggleFilterMode(){
    if(this.state.isFiltering){
      this.setState({
        isFiltering: false,
        events: this.props.events,
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
    // platformsLoFreqEventsIds: [ 845, 846, 847, 848 ]
    return this.props.getPlatformData({
      eventsIdsSelected: this.state.eventsIdsSelected,
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

    const events = Array.isArray(this.state.events) ? this.state.events : [];

    return <form className='search-form'
        onSubmit={this.handleSubmit}>
        <FormGenActions
          toggleResetForm ={this.toggleResetForm}
          toggleFilterMode={this.toggleFilterMode}
          isFiltering     ={this.state.isFiltering}
          icons           ={this.props.icons}
          countPassing    ={events.length}
          accentFontColor ={this.props.accentFontColor}

          idsSelected     ={this.state.eventsIdsSelected}
        />
        <FormSpecialActions 
          groupAllow       ={this.props.groupAllow}
          groupOnMount     ={this.state.groupOnMount}
          toggleOverlay    ={this.toggleOverlay}
          rainOnly         ={this.state.rainOnly}
          toggleRainOnly   ={this.toggleRainOnly}
          favoriteAllow    ={this.props.favoriteAllow}
          favoriteSelect   ={this.favoriteSelect}
          favorite         ={this.state.favorite}
          accentFontColor  ={this.props.accentFontColor}
          favoriteOptions  ={this.props.favoriteOptions}
        />
        <Selectors
          items            ={this.state.events}
          columns          ={this.props.columns}
          idsSelected      ={this.state.eventsIdsSelected}
          filter           ={this.state.filter}
          isFiltering      ={this.state.isFiltering}
          accentFontColor  ={this.props.accentFontColor}
          handleSelection        ={this.eventListHandleCheckbox} 
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