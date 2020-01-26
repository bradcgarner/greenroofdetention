import LazyLoad            from 'react-lazyload';
import { 
  isPrimitiveNumber,
  precisionRound }  from 'conjunction-junction';
import { 
  calcMinimumWindowDimensions
  }                        from 'browser-helpers';
import { carouselDotColor, 
  carouselDotColorActive, 
  accentFontColor, 
  black}        from '../../helpers/common-styles';
import { carouselNav, 
  carouselEnlarge }        from '../../helpers/tag-manager';
import { ExpandAlt }       from '../graphics/icons';
import Arrow               from '../graphics/arr';
import ModalCarousel       from './carousel-modal';

export default class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      partner: this.props.partner || {} ,
      frames: this.props.partner && Array.isArray(this.props.partner.frames) ? this.props.partner.frames : [] ,
      activeIndex: 0,
      auto: true,
      int: null,
      intFrequency: 5000,
      ready: false,
      cssWidthOuter: 300,
      hRatioOfW: 0.65,
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
      id={this.state.partner.code}
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
        id={`${this.state.partner.code}-${i}`} 
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
          className  ={`${carouselNav} ${this.state.partner.code} left ${c.img}`}
          handleClick={this.handleIndexChange} 
          clickParam ={this.state.activeIndex-1}/>
        <Arrow
          dir         ='right'
          style       ='fill: white;'
          hoverStyle  ='fill: #c12b5b;'
          className   ={`${carouselNav} ${this.state.partner.code} right ${c.img}`}
          handleClick ={this.handleIndexChange} 
          clickParam  ={this.state.activeIndex+1}/>
        <div className={`${carouselEnlarge} ${this.state.partner.code} ${this.state.activeIndex} ${c.img}`}
          onClick={()=>this.props.toggleModal(carouselModal)}>
          <ExpandAlt style={{height: 40, width: 40}}/>
        </div>
        <a href={this.state.partner.productUrl} target='_blank'>
          <div className='logo-container'>
            <img className='logo'
              src={this.state.partner.logo}
              alt={this.state.partner.name} />
          </div>
        </a>
      </div>
      <p className='caption'>{c.caption}</p>
      <div className='dots'>
        {dots}
      </div>
      <style jsx>{`
        .outer-container {
          margin-top: 15px;
          flex-direction: column;
          width: ${this.state.w}px;
        }
        .inner-container {
          align-self: center;
          position: relative;
          height: ${this.state.h}px;
          width: ${this.state.w}px;
          border-radius: 2px;
          box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
          align-items: flex-end;
          overflow: hidden;
        }
        .caption {
          width: 90%;
          margin-left: 5%;
          margin-top: 15px;
          font-weight: normal;
          font-style: italic;
          font-size: 14px;
          line-height: 17px;
          height: 120px;
          overflow: hidden;
        }
        @media (min-width: 500px){
          .caption {
            width: 100%;
            margin-left: 0;
            heiht: 100px;
          }
        }
        .dots {
          height: 15px;
          align-self: center;
          margin-top: 10px;
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
          height: 60px;
          width: 60px;
          align-items: center;
          justify-content: center;
          background-color: white;
          border-top: 1px solid ${black};
          border-left: 1px solid ${black};
          cursor: pointer;
        }
        @media (min-width: 500px){
          .logo-container {
            height: 100px;
            width: 100px;
          }
        }
        .logo-container:hover {
          opacity: 0.8;
        }
        .logo {
          object-fit: contain;
          width: 90%;
          height: 90%;
        }
      `}</style>
    </div>
  }
  
}