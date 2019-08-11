import { 
  calcMinimumWindowDimensions } from 'browser-helpers';
import content             from '../../helpers/content';
import { accentFontColor } from '../../helpers/common-styles';
import Building from './building-multiple-types';

export default function Landing(props) {


  const {
    cssWidthOuter,
    cssHeightOuter
  } = calcMinimumWindowDimensions(typeof window !== 'undefined' ? window : {});

  const wHRatio = cssHeightOuter/cssWidthOuter;
  const levelLookup = [ // h / w
    // 0,
    // 0.56, // 5
    0.68, // 6
    0.77, // 7
    0.86, // 8
    0.95, // 9
    1.04, // 10
    1.14, // 11
    1.23, // 12
    1.31, // 13
    1.4,  // 14
    1.49  // 15
  ];

  let levels = 5;
  levelLookup.forEach((l,i)=>{
    if(wHRatio >= l){
      levels ++;
    }
  });

  const building = typeof window !== 'undefined' ?
    <Building levels={levels}/> : null ;

  const maxWidth = 
    wHRatio >= 0.56 ?
    '100%' : 
    '0.53vh' ;
  console.log('levels', levels, 'cssWidthOuter',cssWidthOuter,'cssHeightOuter',cssHeightOuter,'maxWidth', maxWidth)

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
        width: 56%;
        height: auto;
        max-height: 100%;
        position: relative;
      }
      @media(min-height: 330px){
        .building-container {
          width: 65%;
        }
      }
      @media(min-height: 380px){
        .building-container {
          width: 78%;
        }
      }
      @media(min-height: 415px){
        .building-container {
          width: 84%;
        }
      }
      @media(min-height: 450px){
        .building-container {
          width: 90%;
        }
      }
      @media(min-height: 475px){
        .building-container {
          width: 95%;
        }
      }
      @media(min-height: 500px){
        .building-container {
          width: 100%;
        }
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
