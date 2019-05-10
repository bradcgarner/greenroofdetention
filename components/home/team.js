import LazyLoad            from 'react-lazyload';
import { isObjectLiteral } from 'conjunction-junction';
import { card, 
  globalHeaderColor }      from '../../helpers/common-styles';

export default props => {

  const onClick = typeof props.handleClick === 'function' ? props.handleClick : ()=>{} ;
  const param   = props.clickParam !== undefined ? props.clickParam : 0 ;
  
  const c = isObjectLiteral(props.content) ? props.content : {} ;

  return <div className='card'
    onClick={()=>{onClick(param)}}
    onMouseEnter={()=>{onClick(param)}}
    onMouseLeave={()=>{onClick(param)}}>
    <div className='image-container'>
      <LazyLoad height='100%'>
        <img className='image' 
          src={`${c.headshot}`} 
          alt={`${c.firstName} ${c.lastName} headshot`}/>
      </LazyLoad>
    </div>
    <h2 className='name'>{c.firstName}</h2>
    <style jsx>{`
      .card {
        ${card}
        align-items: center;
        margin: 0;
        min-width: 150px;
        height: 165px;
        flex-grow: 2;
        flex-shrink: 0;
        box-shadow: none;
      }
      .card:hover {
        background-color: #eee;
      }
      .image-container {
        display: flex;
        width: 130px;
        height: 130px;
        overflow: hidden;
        border-radius: 50%;
      }
      .image {
        width: 100%;
        height: 100%;
      }
      .name {
        font-size: 14px;
        text-align: center;
        color: ${globalHeaderColor};
        margin: 0;
        margin-bottom: 5px;
      }
  
      @media only screen and (max-width: 1160px) {
        .name {
          font-size: 13px;
        }
      }
    `}</style>
  </div>
}  