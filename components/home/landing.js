import content             from '../../helpers/content';
import { accentFontColor } from '../../helpers/common-styles';
import Building from './building-multiple-types';
import GRDetLogo from '../graphics/greenroofdetention';
import Link from 'next/link';

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
      <div className='building-container'>
        <GRDetLogo />
      </div>
      <div className='building-container'>
        <Building/>
        <p className='absolut'>X</p>
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
      .absolut {
        position: absolute;
        top: 15%;
        left: 50%;
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
