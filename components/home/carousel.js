import LazyLoad            from 'react-lazyload';
import { 
  isPrimitiveNumber,
  precisionRound }  from 'conjunction-junction';
import { 
  calcMinimumWindowDimensions
  }                        from 'browser-helpers';
import { carouselDotColor, 
  carouselDotColorActive, 
  accentFontColor }        from '../../helpers/common-styles';
import { carouselNav, 
  carouselEnlarge }        from '../../helpers/tag-manager';
import { ExpandAlt }       from '../graphics/icons';
import Arrow               from '../graphics/arr';
import ModalCarousel       from './carousel-modal';

export default class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      solution: this.props.solution || {} ,
      frames: this.props.solution && Array.isArray(this.props.solution.frames) ? this.props.solution.frames : [] ,
      activeIndex: 0,
      hRatioOfW: 0.65,
      auto: true,
      int: null,
      intFrequency: 5000,
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
      const wAsVw = 
        cssWidthOuter < 500 ? 1 :
          cssWidthOuter < 1000 ? 0.8 :
            0.7;
      const w     = wAsVw * cssWidthOuter;
      const hAsVw = wAsVw * this.state.hRatioOfW ;  
      const h     = this.state.hRatioOfW * w;
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
      index <= 0 ? this.state.frames.length-1 :
      index >= this.state.frames.length ? 0 :
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

    const c =  this.state.frames[this.state.activeIndex] || {};

    const carouselModal = <ModalCarousel 
      id={this.state.solution.productHtmlId}
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

    const dots = this.state.frames.map((c,i)=>{
      const activeClass = i === this.state.activeIndex ? 'active' : '' ;
      return <div 
        key={i}
        id={`${this.state.solution.productHtmlId}-${i}`} 
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
          className  ={`${carouselNav} ${this.state.solution.productHtmlId} left ${c.img}`}
          handleClick={this.handleIndexChange} 
          clickParam ={this.state.activeIndex-1}/>
        <Arrow
          dir         ='right'
          style       ='fill: white;'
          hoverStyle  ='fill: #c12b5b;'
          className   ={`${carouselNav} ${this.state.solution.productHtmlId} right ${c.img}`}
          handleClick ={this.handleIndexChange} 
          clickParam  ={this.state.activeIndex+1}/>
        <div className={`${carouselEnlarge} ${this.state.solution.productHtmlId} ${this.state.activeIndex} ${c.img}`}
          onClick={()=>this.props.toggleModal(carouselModal)}>
          <ExpandAlt style={{height: 40, width: 40}}/>
        </div>
        <div className='logo-container'>
          <img className='logo'
            src={this.state.solution.logoUrl}
            alt={this.state.solution.logoAlt} />
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
        .logo-container {
          position: absolute;
          bottom: 0;
          right: 0;
          height: 50px;
          width: 50px;
        }
        .logo {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  }
  
}