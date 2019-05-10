import LazyLoad            from 'react-lazyload';
import { precisionRound }  from 'conjunction-junction';
import { 
  calcMinimumWindowDimensions
  }                        from 'graphing-helpers';
import Arrow               from './graphics/arr';
import { 
  isPrimitiveNumber }      from 'conjunction-junction';
import ModalCarousel       from './home/modal-carousel';
import { carouselDotColor, 
  carouselDotColorActive, 
  accentFontColor }        from '../helpers/common-styles';
import { carouselNav, 
  carouselEnlarge }        from '../helpers/tag-manager';
import { ExpandAlt }       from './graphics/icons';

export default class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      teamMember: this.props.member || {} ,
      member: this.props.member && Array.isArray(this.props.member.story) ? this.props.member.story : [] ,
      activeIndex: 0,
      hRatioOfW: 0.75,
      auto: true,
      int: null,
      intFrequency: 5000,
      columnBreakPoint: 1160,
      ready: false,
      cssWidthOuter: 300,
      hAsVw: 0.75,
      wAsVw: 1,
    };
    this.handleIndexChange = this.handleIndexChange.bind(this);
    this.resize            = this.resize.bind(this);
  }

  componentDidMount(){
    const int = setInterval(()=>{
      this.handleIndexChange(this.state.activeIndex + 1)
    }, this.state.intFrequency )
    this.setState({
      int,
    });
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount(){
    clearInterval(this.state.int);
    window.removeEventListener('resize', this.resize);
  }

  resize(){
    if(typeof window === 'undefined') return;
    const win = typeof window !== 'undefined' ? window : {} ;
    const { cssWidthOuter } = calcMinimumWindowDimensions(win);
    if(cssWidthOuter !== this.state.cssWidthOuter){
      const wMin  = 500 ;
      const wAdd  = 0.1 * (cssWidthOuter - 500);
      const wRaw  = wMin + wAdd ;
      const ratio = precisionRound(wRaw / cssWidthOuter, 2);
      const wAsVw = 
        cssWidthOuter <= this.state.columnBreakPoint ? 
          1 :
            ratio >= 1 ?
              1 :
                ratio ;
      const w = wAsVw * cssWidthOuter;
      const hAsVw = wAsVw * this.state.hRatioOfW ;  
      const h = this.state.hRatioOfW * w;
      // console.log('cssWidthOuter', cssWidthOuter, 'wMin', wMin, 'wAdd', wAdd, 'wRaw', wRaw, 'ratio', ratio, 'wAsVw', wAsVw, 'hAsVw', hAsVw)
      this.setState({
        cssWidthOuter,
        h,
        w,
        hAsVw,
        wAsVw,
      });
    }
  }

  handleIndexChange(index, manual){
    if(!isPrimitiveNumber(index)) return;
    const auto = !manual ;
    const i = 
      index <= 0 ? this.state.member.length-1 :
      index >= this.state.member.length ? 0 :
      index ;
    this.setState({
      activeIndex: i,
      auto,
    });
    if(!auto){
      clearInterval(this.state.int);
    }
  }

  render() {

    const c =  this.state.member[this.state.activeIndex] || {};

    const carouselModal = <ModalCarousel 
      id={this.state.teamMember.firstNameKey}
      content={c} />

    const imageContainer = <div className='image-container'>
      <LazyLoad height='100%'>
        <img className='image' src={c.img} alt={c.alt}/>
      </LazyLoad>
      <style jsx>{`
        .image {
          display: block;
          height: ${this.state.h}px;
          width: ${this.state.w}px;
          position: absolute;
        }
        .image-container {
          animation: fade 5s;
          height: ${this.state.h}px;
          width: ${this.state.w}px;
        } 
      `}</style>
    </div>

    const dots = this.state.member.map((c,i)=>{
      const activeClass = i === this.state.activeIndex ? 'active' : '' ;
      return <div 
        key={i}
        id={`${this.state.teamMember.firstNameKey}-${i}`} 
        role='button'
        className={`${carouselNav} ${activeClass} ${c.img}`}
        onClick={()=>this.handleIndexChange(i)} >
        <style jsx>{`
          .carousel-nav {
            cursor: pointer;
            height: 15px;
            width: 15px;
            margin: 0 2px;
            background-color: ${carouselDotColor};
            border-radius: 50%;
            transition: background-color 100ms ease;
            flex-shrink: 0;
          }
          .active,
          .carousel-nav:hover {
            background-color: ${carouselDotColorActive};
          }
        `}</style>
      </div> 
    })
  
    return <div className='outer-container'>
      <div className='inner-container'>
        {imageContainer}
        <Arrow
          dir        ='left'
          style      ='fill: white;'
          hoverStyle ='fill: #c12b5b;'
          className  ={`${carouselNav} ${this.state.teamMember.firstName} left ${c.img}`}
          handleClick={this.handleIndexChange} 
          clickParam ={this.state.activeIndex-1}/>
        <Arrow
          dir         ='right'
          style       ='fill: white;'
          hoverStyle  ='fill: #c12b5b;'
          className   ={`${carouselNav} ${this.state.teamMember.firstName} right ${c.img}`}
          handleClick ={this.handleIndexChange} 
          clickParam  ={this.state.activeIndex+1}/>
        <div className={`${carouselEnlarge} ${this.state.teamMember.firstName} ${this.state.activeIndex} ${c.img}`}
          onClick={()=>this.props.toggleModal(carouselModal)}>
          <ExpandAlt style={{height: 40, width: 40}}/>
        </div>
      </div>
      <p className='caption'>{c.caption}</p>
      <div className='dots'>
        {dots}
      </div>
      <style jsx>{`
        .outer-container {
          margin-top: 15px;
          flex-direction: column;
          height: ${this.state.h + 100}px;
          width: ${this.state.w}px;
        }
        @media (max-width: 1160px) {
          .outer-container {
            margin-bottom: 50px;
            margin-top: 50px;
          }
        }
        .inner-container {
          align-self: center;
          position: relative;
          height: ${this.state.h}px;
          width: ${this.state.w}px;
          border-radius: 2px;
          box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.3);
          z-index: 1;
        }
        .caption {
          width: 100%;
          margin-top: 10px;
          font-weight: normal;
          font-style: italic;
          font-size: 14px;
          line-height: 17px;
          height: 40px;
          overflow: hidden;
        }
        .dots {
          height: 15px;
          align-self: center;
          margin-top: 25px;
          flex-shrink: 0;
        }
        .carousel-enlarge {
          position: absolute;
          top: 0;
          right: 0;
          width: 40px;
          height: 40px;
          justify-content: center;
          align-items: center;
          color: white;
        }
        .carousel-enlarge:hover {
          color: ${accentFontColor};
        }
        @media (max-width: 1160px) {
          .carousel-enlarge {
            display: none;
          }
        }
      `}</style>
    </div>
  }
  
}