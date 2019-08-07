import content             from '../../helpers/content';
import { accentFontColor } from '../../helpers/common-styles';
import Building from './building-multiple-types';
import GRDetLogo from '../graphics/greenroofdetention';
import Link from 'next/link';
import { Leaf } from '../graphics/icons';

export default class Landing extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       popUp: false
    }
    this.handlePopUp = this.handlePopUp.bind(this)
  }
  
handlePopUp(){
  this.setState(prevState => {
    return {
      popUp: !prevState.popUp
    }
  })
}



  render(){
    const links = [
      'polderdak',
      'purple-roof',
      'hydrotech',
      'hydroventive',
      'haybase',
      'custom'
    ].map((l,i)=>{
      return <Link key={i} href={`/${l}`}>{l}</Link>
    });
  
    return <header className='landing'>
    <div className='cover'>
      <div className='building-container' >
        <GRDetLogo />
        <div className="fa-leaf" style={{color:'mediumseagreen'}}>
          <Leaf  style={{height: 80, width: 80}}/>
        </div>
      </div>
      <div className='building-container'>
        <Building />
        
      
        <p className="popOverOne" onClick={this.handlePopUp}>{this.state.popUp &&   <div className='building-popover building-popover-lev4'>
          <p className='building-popover-text'>I am popover # 1</p>
          <p className='building-popover-text'>I am popover # 1 line #1</p>
        </div>}X</p>
        

        

      </div>
    </div>
    <div className='products'>
      <p>These products will be shown</p>
      {links}
    </div>
    <style jsx>{`
      .landing,
      .cover {
        height: 100vh;
        width: 100vw;
        min-height: 440px;
      }
      .landing {
        flex-direction: column;
      }
      .building-container {
        display: block;
        width: 90%;
        position: relative;
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
      .landing {
        position: relative;
        background-size: cover;
        overflow: hidden;
      }
      .cover {
        margin-top: 170px;
        height: 100vh;
        width: 94vw;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;
      }
      .products {
        flex-direction: column;
      }
      /* Icon From Font Awesome */
      .fa-leaf {
        position: absolute;
        right:-90px;
        top: 0px;
        font-size:60px;
      }
      @media (max-width: 1123px) { 
        .fa-leaf {
          position: absolute;
          top: -5px;
          right:-90px;
          font-size:35px;
        } 
       }
       @media (min-width: 850px) { 
        .fa-leaf {
          position: absolute;
          top: -15px;
          right:-90px;
          font-size:35px;
        } 
       }
    
    @media (max-width: 599px) { 
        .fa-leaf {
          position: absolute;
          top: -20px;
          right:-90px;
          font-size:35px;
        } 
       }
    
       @media (max-width: 500px) { 
        .fa-leaf {
          position: absolute;
          top: -100px;
          right:160px;
          font-size:35px;
        } 
       }
       }

       .popOverOne{
         position: absolute;
         top: 50px;
         left:200px;
         color:blue;
         padding:20px;
       }
    `}</style>
  </header>
    }
  }