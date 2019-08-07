import content             from '../../helpers/content';
import { accentFontColor } from '../../helpers/common-styles';
import Building from './building-multiple-types';
import GRDetLogo from '../graphics/greenroofdetention';
import Link from 'next/link';
import { Leaf } from '../graphics/icons';

export default function Landing(props) {

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
      </div>
      <div className='building-container' onClick={()=>console.log('click anywhere else on the svg to close')}>
        <Building/>
        
        <div style={{color:'red'}}>
          <Leaf style={{height: 30, width: 30}}/>
        </div>

        <div className='building-popover building-popover-lev4'>
          <p className='building-popover-text'>I am popover # 1</p>
          <p className='building-popover-text'>I am popover # 1 line #1</p>
        </div>

        <div className='building-popover building-popover-lev3-r'>
          <p className='building-popover-text'>I am popover #2</p>
          <p className='building-popover-text'>I am popover #2 line #2</p>
        </div>

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
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;
      }
      .products {
        flex-direction: column;
      }
    `}</style>
  </header>
  }
