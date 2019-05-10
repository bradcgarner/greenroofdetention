import { 
  scroll2040, 
  scroll4060, 
  scroll6080, 
  scroll8099, 
  scroll}            from '../helpers/tag-manager';
  
export default () => {
  return <div id='quad'>
    <div id='quad-0' className='quad' />
    <div id={scroll2040}  className={scroll} />
    <div id={scroll4060}  className={scroll} />
    <div id={scroll6080}  className={scroll} />
    <div id={scroll8099}  className={scroll} />
    <style jsx>{`
      #quad {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 10px;
        z-index: -99;
        flex-direction: column;
        justify-content: space-around;
      }
      .${scroll} {
        width: 10px;
        flex: 1;
      }
    `}</style>
  </div>
}