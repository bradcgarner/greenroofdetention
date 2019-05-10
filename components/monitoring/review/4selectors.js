import React                  from 'react';
import {print}                from 'conjunction-junction';

export default function Selectors(props) {

  const columns = Array.isArray(props.columns) ? props.columns : [] ;

  const headerCols = props.isFiltering ? columns.map((col,j)=>{
    const thisFilter = props.filter && props.filter[col.key] ? props.filter[col.key] : {} ;
    const min = typeof thisFilter.min === 'number' ? thisFilter.min : 0 ;
    const max = typeof thisFilter.max === 'number' ? thisFilter.max : 9999 ;

    const filter = 
      !col.filter ? null :
      col.filter === 'number' ?
        <div className={`search-sel-cell-filter-column ${col.className}`}>
          <input
            type='number'
            className='search-sel-filter-number'
            onChange={e=>props.listHandleFilter(true,e,col.key,'min')} 
            value={min || 0} />
          <input
            type='number'
            className='search-sel-filter-number'
            onChange={e=>props.listHandleFilter(true,e,col.key,'max')} 
            value={max || 999} />
        </div> :
      Array.isArray(col.filter) ?
        <div className={`search-sel-cell-filter-column ${col.className}`}>
          {col.filter.map((v,j)=>{
            return <label key={j} className='search-sel-filter-checkbox'>
              <input
                type='checkbox'
                className='search-sel-filter-checkbox'
                onChange={e=>props.listHandleFilter(true,e,col.key,'list')} 
                checked={Array.isArray(thisFilter.list) && thisFilter.list.includes(v)}
                value={v || ''} />
                {v}
            </label>
          })}
        </div> :
      null ;

    return <th key={j} className={`search-sel-cell ${col.className}`}>
      <div className='search-sel-header-filter'>
        <p className='search-sel-cell-p'>
          {col.label}
        </p>
        {filter}
      </div>
    </th>
  }) :
  columns.map((col,j)=>{
    return <th key={j} className={`search-sel-cell ${col.className}`}>
      {col.label}
    </th>
  });

  const selectors =
    Array.isArray(props.items) ?
    props.items.map((t,i)=>{

      const checked = Array.isArray(props.idsSelected) &&
        props.idsSelected.includes(t.id);

      const cols = columns.map((col,j)=>{

        const display = 
          col.key === 'notes' && typeof t[col.key] === 'string' && t[col.key].length > 30 ?
            t[col.key].substring(0, 27) + '...' : 
          col.key === 'timestamp_start' && !t[col.key] ?
            print(props.items[i+1] ? props.items[i+1].timestamp_end : '?'):
            print(t[col.key]);

        return <td key={j} className={`search-sel-cell ${col.className}`}>
          {display}
        </td>
      }) ;
      
      return <tr key={i} className={`search-sel-row ${checked ? 'checked' : ''}`}
        onClick={()=>props.handleSelection({target:{value: t.id}})} >
        <td className='search-sel-input-radio'>
          <input
            name={t.id}
            type='checkbox'
            className='search-sel-checkbox'
            onChange={e=>props.handleSelection(e)} 
            checked={checked}
            value={t.id} />
        </td>
        {cols}
      </tr>
    }) : [] ;

  return <div className='search-sel-form-container'>
    <div className='search-sel-inner-container'>
      <div className='search-sel-checkbox-container'>
        <div className='search-sel-checkbox-group'>
          <table className='search-sel-table search-sel-table-tests'>
            <thead>
              <tr key='a' className='search-sel-row' >
                <th className='search-sel-input-radio'></th>
                {headerCols}
              </tr>
            </thead>
            <tbody className='search-form-selectors-table-body'>
              {selectors}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <style>{`
      .search-form-selectors-table-body{
        /* <<< THIS IS CUSTOM */
      }
      .search-sel-form-container {
        flex-direction: column;
        background-color: white;
      }
      .search-sel-inner-container {
        flex-direction: column;
      }
      .search-sel-checkbox-container {
        flex-direction: column;
        flex-wrap: wrap;
        margin-top: 15px;
      }
      .search-sel-checkbox-group {
        flex-direction: column; 
        margin-bottom: 10px;
        overflow-y: scroll; /* <<< THIS IS CUSTOM */
        height: 325px; /* <<< THIS IS CUSTOM */
      }
      .search-sel-checkbox-group .search-sel-checkbox-header {
        margin-bottom: 5px;
      }
      .search-sel-spaced-vert {
        margin-bottom: 10px;
      }
      .search-sel-row:hover {
        background-color: rgba(125, 157, 165, 0.1);
      }
      .search-sel-row {
        cursor: pointer;
        min-height: 40px;
        padding-bottom: 2.5px;
        padding-top: 2.5px;
        border-bottom: 1px solid #ccc;
      }
      .search-sel-row.checked,
      .search-sel-row.checked:hover {
        background-color: rgba(125, 157, 165, 0.3);
      }
      .search-sel-cell {
        padding-top: 3px;
        padding-bottom: 3px;
        padding-left: 5px;
        border: 1px solid #ccc;
        max-height: 60px;
        overflow: hidden;
      }
      .search-sel-input-radio {
        border: 1px solid #ccc;
      }
      .search-sel-row th {
        text-align: left;
        vertical-align: top;
      }
      .search-sel-header-filter {
        flex-direction: column;
      }
      .search-sel-filter-number {
        width: 40px;
        font-size: 8px;
      }
      .search-sel-cell-filter-column {
        flex-direction: column;
      }
      .search-sel-filter-checkbox {
        display: flex;
        flex-direction: row;
      }

      @media (max-width: 1200px){
        .above-1200 {
          display: none;
        }
      }
      @media (max-width: 1100px){
        .above-1100 {
          display: none;
        }
      }
      @media (max-width: 1000px){
        .above-1000 {
          display: none;
        }
      }
      @media (max-width: 900px){
        .above-900 {
            display: none;
        }
      }
      @media (max-width: 800px){
        .above-800 {
          display: none;
        }
      }
      @media (max-width: 700px){
        .above-700 {
          display: none;
        }
      }
      @media (max-width: 600px){
        .above-600 {
          display: none;
        }
      }
      @media (max-width: 500px){
        .above-500 {
          display: none;
        }
      }
      @media (max-width: 400px){
        .above-400 {
          display: none;
        }
      }
    `}</style>
  </div>
}