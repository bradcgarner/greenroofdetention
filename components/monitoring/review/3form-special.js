import React              from 'react';


export default function FormSpecialActions(props) {

  if(typeof props.toggleOverlay !== 'function' &&
  typeof props.toggleRainOnly !== 'function') {
    return null;
  }

  const overlay = props.groupAllow ?
    <div className='search-special-input-container'>
      <label className='search-special-input-label'>
        <input
          type='checkbox'
          className='search-special-input'
          checked={props.groupOnMount}
          onChange={e=>props.toggleOverlay(e)}
        />
        overlay
      </label>
    </div> : null ;

  const rainOnly = typeof props.toggleRainOnly === 'function' ?
  <div className='search-special-input-container'>
    <label className='search-special-input-label'>
      <input
        type='checkbox'
        className='search-special-input'
        checked={props.rainOnly}
        onChange={e=>props.toggleRainOnly(e)}
      />
      show only rain events
    </label>
  </div> : null ;

  const favorites = props.favoriteAllow ?
  <div className='search-special-input-container'>
    <label className='search-special-input-label'>
      <select
        className='search-special-input'
        onChange={e=>props.favoriteSelect(e)}
        value={props.favorite || ''}>
        {props.favoriteOptions || null}
      </select>
      select a favorite
    </label>
  </div> : null ;

  return <div className='search-form-special-actions'>
    {overlay}
    {rainOnly}
    {favorites}
    <style>{`
      .search-form-special-actions {
        width: 100%;
        padding: 10px;
        justify-content: space-around;
        border-top: 1px solid #ccc;
      }
      .search-special-input {
        margin-right: 3px;
      }
    `}</style>
  </div>
}