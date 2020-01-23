import { calcMinimumWindowDimensions } from 'browser-helpers';

export default function Landing(props) {

  const win = typeof window !== 'undefined' ? window : undefined;
  const {
    cssWidthOuter,
    cssHeightOuter,
  } = calcMinimumWindowDimensions(win);

  const col1 = 30;
  const col2 = 30;
  const col3 = 100 - col1 - col2;
  const row1 = 33;
  const row2 = 33;
  const row3 = 100 - row1 - row2;

  const block1Url = cssWidthOuter > 500 ? 
  'https://cdn.buttercms.com/1NrMphJTsaLGKDZjnCqQ':
  'https://cdn.buttercms.com/5ZycVJuTqiWy1Hb8BHB8';

  const block2Url = cssWidthOuter > 500 ? 
  'https://cdn.buttercms.com/Dct0o0etSWy5yRKMOlFa':
  'https://cdn.buttercms.com/jN4sfA8PRTimqY5HNEEr';

  const block3Url = cssWidthOuter > 500 ? 
  'https://cdn.buttercms.com/KjjyItcQ3CuyxJGDJ2TZ':
  'https://cdn.buttercms.com/aY0Zvwb2SLWggmOBhc1S';

  const block4Url = cssWidthOuter > 500 ? 
  'https://cdn.buttercms.com/bcbQqRRhm4NdJz0bfxwD':
  'https://cdn.buttercms.com/VsIHxuTGQOWPqckDYeoI';

  const block5Url = cssWidthOuter > 500 ? 
  'https://cdn.buttercms.com/KRlKyS7XRpGN5o7w0P8f':
  'https://cdn.buttercms.com/C3HlX9DySwaDuZOZPGDp';

  const block6Url = cssWidthOuter > 500 ? 
  'https://cdn.buttercms.com/xUL9BI5Qg1ntxPelmw2g':
  'https://cdn.buttercms.com/fANOhN24TPxUyHxAihBt';

  const block7Url = cssWidthOuter > 500 ? 
  'https://cdn.buttercms.com/BfSUywOQQ1GWCnLNmsXB':
  'https://cdn.buttercms.com/tTfOWMCUQCWZROeOKc35';
  
  return <header className='landing'>
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
        background-image: url(${block1Url});
      }
      .block-1a {
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
      .block-2 {
        background-image: url(${block2Url});
      }
      .block-3 {
        background-image: url(${block3Url});
      }
      .block-4 {
        background-image: url(${block4Url});
      }
      .block-5 {
        display: none;
        background-image: url(${block5Url});
      }
      .block-6 {
        background-color: pink;
        background-image: url(${block6Url});
      }
      .block-7 {
        display: none;
        background-image: url(${block7Url});
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
        }
        .block-1a {
          height: 50%;
        }
        .block-2 {
          top: 0;
          left: ${col1}%;
          width: ${col2}%;
          height: ${row1}%;
        }
        .block-3 {
          top: 0;
          right: 0;
          width: ${col3}%;
          height: ${row1}%;
        }
        .block-4 {
          top: ${row1}%;
          left: ${col1}%;
          width: ${col2}%;
          height: ${row2}%;
        }
        .block-5 {
          display: flex;
          top: ${row1}%;
          right: 0;
          width: ${col3}%;
          height: ${row2+row3}%;
        }
        .block-6 {
          top: ${row1+row2}%;
          left: 0;
          width: ${col1}%;
          height: ${row3}%;
        }
        .block-7 {
          display: flex;
          top: ${row1+row2}%;
          left: ${col1}%;
          width: ${col2}%;
          height: ${row3}%;
        }
      }
    `}</style>
  </header>
};