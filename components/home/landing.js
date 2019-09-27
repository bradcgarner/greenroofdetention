import { precisionRound }  from 'conjunction-junction';
import { 
  calcMinimumWindowDimensions } from 'browser-helpers';
import Building        from './building-multiple-types';
import BuildingPopover from './building-popover';

export default class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: null,
      buildingContainerCss: '',
    };
    this.handleBuildingClick=this.handleBuildingClick.bind(this);
  }

  componentDidMount(){
    this.updateProportions();
  }

  updateProportions(){
    const {
      cssWidthOuter,
      cssHeightOuter
    } = calcMinimumWindowDimensions(typeof window !== 'undefined' ? window : {});

    const hWRatio = cssHeightOuter/cssWidthOuter;
    // const levelLookup = [ // h / w
    //   // 0,
    //   // 0.56, // 5
    //   0.68, // 6
    //   0.77, // 7
    //   0.86, // 8
    //   0.95, // 9
    //   1.04, // 10
    //   1.14, // 11
    //   1.23, // 12
    //   1.31, // 13
    //   1.4,  // 14
    //   1.49  // 15
    // ];

    const hWRatioCorrected = 
      hWRatio <= 0.6 ?
      0.6 :
      hWRatio >= 1.6 ?
      1.6 :
      precisionRound(hWRatio, 1);

    const extraTallBy = 
      hWRatio >= 1.6 ?
      precisionRound(hWRatio - hWRatioCorrected,1) : 0;

    const vh = 
      extraTallBy ?
      70 :
      hWRatio > 1.6 ? 
      70 :
      hWRatio > 1.5 ?
      95 :
      100 ;

    // const levels = (hWRatioCorrected * 10) - 1;

    // console.log('hWRatio',hWRatio, 'hWRatioCorrected', hWRatioCorrected
    // // ,'levels', levels
    // )

    const buildingContainerCss = 
    hWRatio <= 0.6 ?
      `height: 100%;
      width: 166vh;` : 
    hWRatio >= 1.6 ?
      `height: 62vh;
      width: 100%;` :
      `height: 100%;
      width: 100%;`;
    
    // console.log('cssWidthOuter',cssWidthOuter,'cssHeightOuter',cssHeightOuter,'buildingContainerCss', buildingContainerCss)

    this.setState({
      cssWidthOuter,
      cssHeightOuter,
      hWRatio,
      hWRatioCorrected,
      buildingContainerCss,
      extraTallBy,
      vh,
    })
  }


  handleBuildingClick(location){
    this.setState({
      location
    });
  }

  render(){
    

    const building = typeof window !== 'undefined' ?
      <Building 
      handleClick={this.handleBuildingClick}
      /> : null ;

    return <header className='landing'>
      <div className='building-container'>
        {building}
        <BuildingPopover 
          handleClick={this.handleBuildingClick}
          location={this.state.location}
        />
      </div>
      <style jsx>{`
        .landing {
          height: ${this.state.vh || 100}vh;
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
          position: relative;
          ${this.state.buildingContainerCss}
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
};