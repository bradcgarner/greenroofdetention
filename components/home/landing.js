import { 
  calcScreenType,
  calcMinimumWindowDimensions } from 'browser-helpers';
import content             from '../../helpers/content';
import { accentFontColor } from '../../helpers/common-styles';
import Building from './building-multiple-types';

export default function Landing(props) {


  const {
    cssWidthOuter,
    cssHeightOuter
  } = calcMinimumWindowDimensions(typeof window !== 'undefined' ? window : {});
  console.log('cssWidthOuter',cssWidthOuter,
    'cssHeightOuter',cssHeightOuter)

  const screenInfo = calcScreenType(cssWidthOuter,
    cssHeightOuter);
  const screenType = screenInfo.type
  console.log('screenInfo',screenInfo,'screenType',screenType)

  const levelKey = {
    desktop: 6,
    phoneP : 15,
    phoneL : 5,
    tabletL: 7,
    tabletP: 9,
  }
  const levels = levelKey[screenType] || 6;
  console.log('levels', levels, levelKey[screenType])

  const building = typeof window !== 'undefined' ?
    <Building levels={levels}/> : null ;

  const maxWidth = 1.5 * cssHeightOuter;

  return <header className='landing'>
    <div className='building-container'>
      {building}
    </div>
        {/* <div className='building-popover building-popover-lev4'>
          <p className='building-popover-text'>I am popover # 1</p>
          <p className='building-popover-text'>I am popover # 1 line #1</p>
        </div>

        <div className='building-popover building-popover-lev3-r'>
          <p className='building-popover-text'>I am popover #2</p>
          <p className='building-popover-text'>I am popover #2 line #2</p>
        </div> */}
    <style jsx>{`
      .landing {
        height: 100vh;
        width: 100vw;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        border-bottom: 5px solid black;
        background: linear-gradient(to top, #f8f2ce, #fff);
        background-size: cover;
        overflow: hidden;
      }
      .building-container {
        display: block;
        width: 100%;
        height: auto;
        max-height: 100%;
        position: relative;
        max-width: ${maxWidth}px;
      }
      .building-popover {
        position: absolute;
        flex-direction: column;
        padding: 20px;
        border-radius: 10px;
        background-color: #ccc;
        border: 1px solid black;
      }
      .building-popover-lev4 {
        top: 6%;
        left: 39%;
      }
      .building-popover-lev3-r {
        top: 25%;
        left: 70%;
      }
      .products {
        flex-direction: column;
      }
    `}</style>
  </header>
  }
