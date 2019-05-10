import React              from 'react';

const Dummy = () => {
  return null;
}

export default function FormGenActions(props) {

  const bigIconStyle = {height: 60};
  const i = props.icons || {} ;
  const SearchIcon  = typeof i.Search === 'function' ? i.Search : typeof i.search === 'function' ? i.search : Dummy ;
  const RefreshIcon = typeof i.Sync   === 'function' ? i.Sync   : typeof i.sync   === 'function' ? i.sync   : Dummy ;
  const FilterIcon  = typeof i.Filter === 'function' ? i.Filter : typeof i.filter === 'function' ? i.filter : Dummy ;

  const submitButtonLabel = 'search' ;

  const idsArr = Array.isArray(props.idsSelected) ? props.idsSelected : [] ;
  const idsSelected = idsArr.join(', ') ;
  const idsSelectedClass = idsArr.length > 0 ? idsArr.join('-') : 'no-ids';
  
  const eventsSelectedMessage = 
    idsArr.length >= 3 ? `Selection: ${idsSelected} (maximum quantity reached)` :
    idsArr.length >  0 ? `Selection: ${idsSelected}` :
    'Please make a selection.' ;

  const filterMessage = props.isFiltering ? 
    ` (${props.countPassing} passing filter)` :
    null ;

  return <div className='search-form-submit-container'>
    <div className='search-form-submit-trio'>
      <button
        type='submit'
        // last 4 classes are used for Google Tag Manager!!! Do not delete. Do not use for any other purposes
        className={`search-form-submit tooltip tooltip-top-left monitoring-search ${idsArr.length} ${idsSelectedClass} true`}>
        <div className='popover'>
          <p>{submitButtonLabel}</p>
        </div>
        <SearchIcon style={bigIconStyle}/>
      </button> 
    </div>
    <div className='search-form-submit-trio'>
      <p className='search-form-selected-msg'>{eventsSelectedMessage}{filterMessage}</p>      
    </div>
    <div className='search-form-submit-trio'>
      <div className='search-form-submit tooltip tooltip-top-right'
        onClick={()=>props.toggleResetForm('formType', 'hard')}>
        <div className='popover'>
          <p>reset entire form</p>
        </div>
        <RefreshIcon style={bigIconStyle}/>
      </div> 
      <div className='search-form-submit tooltip tooltip-top-right'
        onClick={()=>props.toggleFilterMode()}>
        <div className='popover'>
          <p>filter</p>
        </div>
        <FilterIcon style={bigIconStyle}/>
      </div>
    </div>
    <style>{`
      .search-form-submit-container {
        width: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
        justify-content: space-around;
      }
      .search-form-submit-trio {
        height: 100%;
        justify-content: space-around;
        align-items: center;
        width: 33.33%;
      }
      .search-form-submit {
        display: flex;
        background-color: transparent;
        font-size: 16px;
        border-color: transparent;
        color: ${props.darkBackground ? 'white' : '#333'};
      }
      .search-form-submit:hover {
        color: ${props.accentFontColor};
      }
      .search-form-selected-msg {
        text-align: center;
      }
      .monitoring-search:hover, 
      .monitoring-search {
        ${Array.isArray(props.idsSelected) && props.idsSelected.length <= 0 ? 'color: #ccc;' : ''}
      }
    `}</style>
  </div>
}