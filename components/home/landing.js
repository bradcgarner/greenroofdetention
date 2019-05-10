import GRDLogo      from '../graphics/logo-grd-color';
import content      from '../../helpers/content';
import { accentFontColor, 
  headerFontColor } from '../../helpers/common-styles';

export default function Landing(props) {

  const landing = content.landing || {} ;

  const equations = Array.isArray(landing.equations) ? landing.equations : [] ;


  return <header className='landing'>
    <div className='background'>
      {equations.map((eq,i)=>{
      return <div key={i}
        className={`equation${i}`}
        dangerouslySetInnerHTML={{__html: eq}}/>
    }) }
    </div>
    <div className='cover'>
      <div className='logo'>
        <GRDLogo />
      </div>
      <h1 className='tagline'>{landing.tagline}</h1>
      <h2 className='sub-tagline'>{landing.subTag}</h2>
    </div>
    <style jsx>{`
      .landing,
      .background,
      .cover {
        height: 100vh;
        width: 100vw;
        min-height: 440px;
      }
      .landing {
        position: relative;
        background-size: cover;
        overflow: hidden;
      }
      .background {
        position: absolute;
        width: 220%;
        margin-left: -20%;
        top: 0;
        left: 0;
        opacity: 0.3;
      }
      .cover {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;
      }
      .logo {
        display: block;
        width: 80vw;
        background-color: rgba(255,255,255,0.3);
        border-radius: 30px;
      }
      @media(min-width: 500px){
        .logo{
          width: 70vw;
        }
      }
      @media(max-height: 800px){
        .logo {
          width: 60vw;
        }
      }
      .tagline {
        font-size: 22px;
        color: ${accentFontColor};
        margin-top: 15px;
        text-align: center;
        max-width: 900px;
        line-height: 1.5em;
        background-color: rgba(255,255,255,0.3);
        border-radius: 30px;
      }
      @media (min-width: 500px) and (min-height: 400px){
        .tagline {
          font-size: 30px;
        }
      }
      .sub-tagline {
        font-size: 15px;
        color: ${headerFontColor};
        margin-top: 15px;
        text-align: center;
        max-width: 800px;
        line-height: 1.5em;
        background-color: rgba(255,255,255,0.3);
        border-radius: 30px;
      }
      @media (min-width: 500px) and (min-height: 400px){
        .sub-tagline {
          font-size: 18px;
        }
      }

      @keyframes equation0 {
        0% { left: 0%; top: 40%; opacity: 0.60; } 5% { left: 5%; top: 30%; opacity: 0.65; } 10% { left: 10%; top: 20%; opacity: 0.70; } 15% { left: 15%; top: 10%; opacity: 0.75; } 20% { left: 20%; top: 0%; opacity: 0.80; } 25% { left: 30%; top: 5%; opacity: 0.65; } 30% { left: 40%; top: 10%; opacity: 0.50; } 35% { left: 50%; top: 5%; opacity: 0.45; } 40% { left: 60%; top: 0%; opacity: 0.60; } 45% { left: 70%; top: 10%; opacity: 0.60; } 50% { left: 80%; top: 20%; opacity: 0.60; } 55% { left: 75%; top: 30%; opacity: 0.45; } 60% { left: 80%; top: 40%; opacity: 0.40; } 65% { left: 75%; top: 50%; opacity: 0.25; } 70% { left: 70%; top: 60%; opacity: 0.30; } 75% { left: 65%; top: 70%; opacity: 0.35; } 80% { left: 55%; top: 80%; opacity: 0.35; } 85% { left: 40%; top: 75%; opacity: 0.35; } 90% { left: 25%; top: 80%; opacity: 0.55; } 95% { left: 15%; top: 70%; opacity: 0.55; } 100% { left: 5%; top: 55%; opacity: 0.50; } 100% { left: 0%; top: 40%; opacity: 0.60; },5% { left: 5%; top: 30%; opacity: 0.65; },10% { left: 10%; top: 20%; opacity: 0.70; },15% { left: 15%; top: 10%; opacity: 0.75; },20% { left: 20%; top: 0%; opacity: 0.80; },25% { left: 30%; top: 5%; opacity: 0.65; },30% { left: 40%; top: 10%; opacity: 0.50; },35% { left: 50%; top: 5%; opacity: 0.45; },40% { left: 60%; top: 0%; opacity: 0.60; },45% { left: 70%; top: 10%; opacity: 0.60; },50% { left: 80%; top: 20%; opacity: 0.60; },55% { left: 75%; top: 30%; opacity: 0.45; },60% { left: 80%; top: 40%; opacity: 0.40; },65% { left: 75%; top: 50%; opacity: 0.25; },70% { left: 70%; top: 60%; opacity: 0.30; },75% { left: 65%; top: 70%; opacity: 0.35; },80% { left: 55%; top: 80%; opacity: 0.35; },85% { left: 40%; top: 75%; opacity: 0.35; },90% { left: 25%; top: 80%; opacity: 0.55; },95% { left: 15%; top: 70%; opacity: 0.55; },100% { left: 5%; top: 55%; opacity: 0.50; }
      }
      @keyframes equation1 {
        0% { left: 52%; top: 4%; opacity: 0.48; } 4% { left: 68%; top: 8%; opacity: 0.60; } 8% { left: 76%; top: 24%; opacity: 0.52; } 12% { left: 80%; top: 44%; opacity: 0.36; } 16% { left: 76%; top: 64%; opacity: 0.40; } 20% { left: 64%; top: 72%; opacity: 0.36; } 24% { left: 48%; top: 76%; opacity: 0.28; } 28% { left: 32%; top: 72%; opacity: 0.40; } 32% { left: 12%; top: 64%; opacity: 0.52; } 36% { left: 4%; top: 48%; opacity: 0.48; } 40% { left: 8%; top: 32%; opacity: 0.60; } 44% { left: 16%; top: 16%; opacity: 0.68; } 48% { left: 32%; top: 4%; opacity: 0.64; }   60% { left: 40%; top: 0%; opacity: 0.60; } 100% { left: 0%; top: 40%; opacity: 0.60; },5% { left: 5%; top: 30%; opacity: 0.65; },10% { left: 10%; top: 20%; opacity: 0.70; },15% { left: 15%; top: 10%; opacity: 0.75; },20% { left: 20%; top: 0%; opacity: 0.80; },25% { left: 30%; top: 5%; opacity: 0.65; },30% { left: 40%; top: 10%; opacity: 0.50; },35% { left: 50%; top: 5%; opacity: 0.45; },40% { left: 60%; top: 0%; opacity: 0.60; },45% { left: 70%; top: 10%; opacity: 0.60; },50% { left: 80%; top: 20%; opacity: 0.60; },55% { left: 75%; top: 30%; opacity: 0.45; },60% { left: 80%; top: 40%; opacity: 0.40; },65% { left: 75%; top: 50%; opacity: 0.25; },70% { left: 70%; top: 60%; opacity: 0.30; },75% { left: 65%; top: 70%; opacity: 0.35; },80% { left: 55%; top: 80%; opacity: 0.35; },85% { left: 40%; top: 75%; opacity: 0.35; },90% { left: 25%; top: 80%; opacity: 0.55; },95% { left: 15%; top: 70%; opacity: 0.55; },100% { left: 5%; top: 55%; opacity: 0.50; },100% { left: 0%; top: 40%; opacity: 0.60; },5% { left: 5%; top: 30%; opacity: 0.65; },10% { left: 10%; top: 20%; opacity: 0.70; },15% { left: 15%; top: 10%; opacity: 0.75; },20% { left: 20%; top: 0%; opacity: 0.80; },25% { left: 30%; top: 5%; opacity: 0.65; },30% { left: 40%; top: 10%; opacity: 0.50; },35% { left: 50%; top: 5%; opacity: 0.45; },40% { left: 60%; top: 0%; opacity: 0.60; },45% { left: 70%; top: 10%; opacity: 0.60; },50% { left: 80%; top: 20%; opacity: 0.60; },55% { left: 75%; top: 30%; opacity: 0.45; },60% { left: 80%; top: 40%; opacity: 0.40; },65% { left: 75%; top: 50%; opacity: 0.25; },70% { left: 70%; top: 60%; opacity: 0.30; },75% { left: 65%; top: 70%; opacity: 0.35; },80% { left: 55%; top: 80%; opacity: 0.35; },85% { left: 40%; top: 75%; opacity: 0.35; },90% { left: 25%; top: 80%; opacity: 0.55; },95% { left: 15%; top: 70%; opacity: 0.55; },100% { left: 5%; top: 55%; opacity: 0.50; }
      }
      @keyframes equation2 {
        0% { left: 60%; top: 15%; opacity: 0.45; } 4% { left: 52%; top: 5%; opacity: 0.47; } 8% { left: 36%; top: 0%; opacity: 0.64; } 12% { left: 20%; top: 5%; opacity: 0.75; } 16% { left: 8%; top: 15%; opacity: 0.77; } 20% { left: 0%; top: 35%; opacity: 0.65; } 24% { left: 4%; top: 55%; opacity: 0.51; } 28% { left: 16%; top: 75%; opacity: 0.59; } 32% { left: 36%; top: 85%; opacity: 0.49; } 36% { left: 56%; top: 75%; opacity: 0.31; } 40% { left: 68%; top: 65%; opacity: 0.33; } 44% { left: 60%; top: 45%; opacity: 0.15; } 48% { left: 64%; top: 30%; opacity: 0.34; } 100% { left: 0%; top: 40%; opacity: 0.60; },5% { left: 5%; top: 30%; opacity: 0.65; },10% { left: 10%; top: 20%; opacity: 0.70; },15% { left: 15%; top: 10%; opacity: 0.75; },20% { left: 20%; top: 0%; opacity: 0.80; },25% { left: 30%; top: 5%; opacity: 0.65; },30% { left: 40%; top: 10%; opacity: 0.50; },35% { left: 50%; top: 5%; opacity: 0.45; },40% { left: 60%; top: 0%; opacity: 0.60; },45% { left: 70%; top: 10%; opacity: 0.60; },50% { left: 80%; top: 20%; opacity: 0.60; },55% { left: 75%; top: 30%; opacity: 0.45; },60% { left: 80%; top: 40%; opacity: 0.40; },65% { left: 75%; top: 50%; opacity: 0.25; },70% { left: 70%; top: 60%; opacity: 0.30; },75% { left: 65%; top: 70%; opacity: 0.35; },80% { left: 55%; top: 80%; opacity: 0.35; },85% { left: 40%; top: 75%; opacity: 0.35; },90% { left: 25%; top: 80%; opacity: 0.55; },95% { left: 15%; top: 70%; opacity: 0.55; },100% { left: 5%; top: 55%; opacity: 0.50; },100% { left: 0%; top: 40%; opacity: 0.60; },5% { left: 5%; top: 30%; opacity: 0.65; },10% { left: 10%; top: 20%; opacity: 0.70; },15% { left: 15%; top: 10%; opacity: 0.75; },20% { left: 20%; top: 0%; opacity: 0.80; },25% { left: 30%; top: 5%; opacity: 0.65; },30% { left: 40%; top: 10%; opacity: 0.50; },35% { left: 50%; top: 5%; opacity: 0.45; },40% { left: 60%; top: 0%; opacity: 0.60; },45% { left: 70%; top: 10%; opacity: 0.60; },50% { left: 80%; top: 20%; opacity: 0.60; },55% { left: 75%; top: 30%; opacity: 0.45; },60% { left: 80%; top: 40%; opacity: 0.40; },65% { left: 75%; top: 50%; opacity: 0.25; },70% { left: 70%; top: 60%; opacity: 0.30; },75% { left: 65%; top: 70%; opacity: 0.35; },80% { left: 55%; top: 80%; opacity: 0.35; },85% { left: 40%; top: 75%; opacity: 0.35; },90% { left: 25%; top: 80%; opacity: 0.55; },95% { left: 15%; top: 70%; opacity: 0.55; },100% { left: 5%; top: 55%; opacity: 0.50; }
      }
      @keyframes equation3 {
        0% { left: 60%; top: 15%; opacity: 0.45; } 4% { left: 52%; top: 5%; opacity: 0.47; } 8% { left: 36%; top: 0%; opacity: 0.64; } 12% { left: 20%; top: 5%; opacity: 0.75; } 16% { left: 8%; top: 15%; opacity: 0.77; } 20% { left: 0%; top: 30%; opacity: 0.70; } 24% { left: 4%; top: 50%; opacity: 0.46; } 28% { left: 16%; top: 65%; opacity: 0.49; } 32% { left: 36%; top: 75%; opacity: 0.39; } 36% { left: 56%; top: 65%; opacity: 0.21; } 40% { left: 68%; top: 55%; opacity: 0.23; } 44% { left: 60%; top: 40%; opacity: 0.20; } 48% { left: 64%; top: 25%; opacity: 0.39; } 100% { left: 0%; top: 40%; opacity: 0.60; },5% { left: 5%; top: 30%; opacity: 0.65; },10% { left: 10%; top: 20%; opacity: 0.70; },15% { left: 15%; top: 10%; opacity: 0.75; },20% { left: 20%; top: 0%; opacity: 0.80; },25% { left: 30%; top: 5%; opacity: 0.65; },30% { left: 40%; top: 10%; opacity: 0.50; },35% { left: 50%; top: 5%; opacity: 0.45; },40% { left: 60%; top: 0%; opacity: 0.60; },45% { left: 70%; top: 10%; opacity: 0.60; },50% { left: 80%; top: 20%; opacity: 0.60; },55% { left: 75%; top: 30%; opacity: 0.45; },60% { left: 80%; top: 40%; opacity: 0.40; },65% { left: 75%; top: 50%; opacity: 0.25; },70% { left: 70%; top: 60%; opacity: 0.30; },75% { left: 65%; top: 70%; opacity: 0.35; },80% { left: 55%; top: 80%; opacity: 0.35; },85% { left: 40%; top: 75%; opacity: 0.35; },90% { left: 25%; top: 80%; opacity: 0.55; },95% { left: 15%; top: 70%; opacity: 0.55; },100% { left: 5%; top: 55%; opacity: 0.50; },100% { left: 0%; top: 40%; opacity: 0.60; },5% { left: 5%; top: 30%; opacity: 0.65; },10% { left: 10%; top: 20%; opacity: 0.70; },15% { left: 15%; top: 10%; opacity: 0.75; },20% { left: 20%; top: 0%; opacity: 0.80; },25% { left: 30%; top: 5%; opacity: 0.65; },30% { left: 40%; top: 10%; opacity: 0.50; },35% { left: 50%; top: 5%; opacity: 0.45; },40% { left: 60%; top: 0%; opacity: 0.60; },45% { left: 70%; top: 10%; opacity: 0.60; },50% { left: 80%; top: 20%; opacity: 0.60; },55% { left: 75%; top: 30%; opacity: 0.45; },60% { left: 80%; top: 40%; opacity: 0.40; },65% { left: 75%; top: 50%; opacity: 0.25; },70% { left: 70%; top: 60%; opacity: 0.30; },75% { left: 65%; top: 70%; opacity: 0.35; },80% { left: 55%; top: 80%; opacity: 0.35; },85% { left: 40%; top: 75%; opacity: 0.35; },90% { left: 25%; top: 80%; opacity: 0.55; },95% { left: 15%; top: 70%; opacity: 0.55; },100% { left: 5%; top: 55%; opacity: 0.50; }
      }
      .equation0,
      .equation1, 
      .equation2,
      .equation3 {
        position: absolute;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
      }
      .equation0 {
        animation-name: equation0;
        animation-duration: 87s;
      }
      .equation1 {
        animation-name: equation1;
        animation-duration: 203s;
      }
      .equation2 {
        animation-name: equation2;
        animation-duration: 123s;
      }
      .equation3 {
        animation-name: equation3;
        animation-duration: 259s;
      }
    `}</style>
  </header>
  }
