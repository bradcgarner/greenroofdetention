import { ChevronDoubleDown } from "../graphics/icons";
import { smoothScroll } from 'browser-helpers';
import { accentFontColorHover } from "../../helpers/common-styles";

export default function Landing(props) {

  const windowScroll = () => {
    if(typeof window === 'undefined') {
      return;
    }
    smoothScroll.scrollTo('intro-div');
  }

  const col1 = 30;
  const col2 = 30;
  const col3 = 100 - col1 - col2;
  const row1 = 33;
  const row2 = 33;
  const row3 = 100 - row1 - row2;

  const block1WideUrl = 'https://cdn.buttercms.com/1NrMphJTsaLGKDZjnCqQ';
  const block1NarrUrl = 'https://cdn.buttercms.com/5ZycVJuTqiWy1Hb8BHB8';

  const block2WideUrl = 'https://cdn.buttercms.com/Dct0o0etSWy5yRKMOlFa';
  const block2NarrUrl = 'https://cdn.buttercms.com/jN4sfA8PRTimqY5HNEEr';

  const block3WideUrl = 'https://cdn.buttercms.com/KjjyItcQ3CuyxJGDJ2TZ';
  const block3NarrUrl = 'https://cdn.buttercms.com/aY0Zvwb2SLWggmOBhc1S';

  const block4WideUrl = 'https://cdn.buttercms.com/bcbQqRRhm4NdJz0bfxwD';
  const block4NarrUrl = 'https://cdn.buttercms.com/VsIHxuTGQOWPqckDYeoI';

  const block5WideUrl = 'https://cdn.buttercms.com/KRlKyS7XRpGN5o7w0P8f';
  const block5NarrUrl = 'https://cdn.buttercms.com/C3HlX9DySwaDuZOZPGDp';

  const block6WideUrl = 'https://cdn.buttercms.com/xUL9BI5Qg1ntxPelmw2g';
  const block6NarrUrl = 'https://cdn.buttercms.com/fANOhN24TPxUyHxAihBt';

  const block7WideUrl = 'https://cdn.buttercms.com/BfSUywOQQ1GWCnLNmsXB';
  const block7NarrUrl = 'https://cdn.buttercms.com/tTfOWMCUQCWZROeOKc35';
  
  return <header className='landing'
    onClick={()=>windowScroll()}>
    <div className='block block-1'>
      <div className='block-1a'>
        <h2 className='title'>Green</h2>
      </div>
    </div>
    <div className='block block-2'>
      <h2 className='title'>Roof</h2>
    </div>
    <div className='block block-3'>
      <h2 className='title'>Detention</h2>
    </div>
    <div className='block block-4'>
      <h2 className='subtitle subtitle-black'>Sustainable Stormwater Management</h2>
    </div>
    <div className='block block-5'>
    </div>
    <div className='block block-6'>
      <h2 className='subtitle '>Detention = Delay</h2>
    </div>
    <div className='block block-7'>
    </div>
    <div className='arrow-container'>
      <div className='arrow-down'
        onClick={()=>windowScroll()}>
        <ChevronDoubleDown style={{height:50, width:50}}/>
      </div>
    </div>
    
    <style jsx>{`
      .landing {
        width: 100vw;
        position: relative;
        flex-direction: column;
        background-size: cover;
      }
      .block {
        width: 100%;
        height: 30vh;
        align-items: center;
        justify-content: center;
        background-color: #ccc;
        background-size: cover;
        background-position: center;
      }
      .block-1 {
        flex-direction: column;
        justify-content: flex-start;
        background-image: url(${block1NarrUrl});
      }
      .block-1a {
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
      .block-2 {
        background-image: url(${block2NarrUrl});
      }
      .block-3 {
        background-image: url(${block3NarrUrl});
      }
      .block-4 {
        background-image: url(${block4NarrUrl});
      }
      .block-5 {
        display: none;
        background-image: url(${block5NarrUrl});
      }
      .block-6 {
        background-color: pink;
        background-image: url(${block6NarrUrl});
      }
      .block-7 {
        display: none;
        background-image: url(${block7NarrUrl});
      }
      .title,
      .subtitle {
        color: white;
        font-weight: bold;
        width: 100%;
        text-align: center;
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: rgba(0,0,0,0.2);
      }
      .title {
        font-size: 90px;
      }
      .block-3 .title {
        font-size: 80px;
      }
      .subtitle {
        font-size: 50px;
      }
      .subtitle-black {
        color: #474643;
      }
      @media(min-width: 500px){
        .landing {
          height: 100vh;
        }
        .block {
          position: absolute;
          background-size: 150%;
        }
        .block-1 {
          top: 0;
          left: 0;
          width: ${col1}%;
          height: ${row1+row2}%;
          background-image: url(${block1WideUrl});
        }
        .block-1a {
          height: 50%;
        }
        .block-2 {
          top: 0;
          left: ${col1}%;
          width: ${col2}%;
          height: ${row1}%;
          background-image: url(${block2WideUrl});
        }
        .block-3 {
          top: 0;
          right: 0;
          width: ${col3}%;
          height: ${row1}%;
          background-image: url(${block3WideUrl});
        }
        .block-3 .title {
          font-size: 90px;
        }
        .block-4 {
          top: ${row1}%;
          left: ${col1}%;
          width: ${col2}%;
          height: ${row2}%;
          background-image: url(${block4WideUrl});
        }
        .block-5 {
          display: flex;
          top: ${row1}%;
          right: 0;
          width: ${col3}%;
          height: ${row2+row3}%;
          background-image: url(${block5WideUrl});
        }
        .block-6 {
          top: ${row1+row2}%;
          left: 0;
          width: ${col1}%;
          height: ${row3}%;
          background-image: url(${block6WideUrl});
        }
        .block-7 {
          display: flex;
          top: ${row1+row2}%;
          left: ${col1}%;
          width: ${col2}%;
          height: ${row3}%;
          background-image: url(${block7WideUrl});
        }
      }
      .arrow-container {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        justify-content: center;
        align-items: center;
      }
      .arrow-down {
        color: white;
      }
      .arrow-down:hover {
        color: ${accentFontColorHover};
      }
    `}</style>
  </header>
};