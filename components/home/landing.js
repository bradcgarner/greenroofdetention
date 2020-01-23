

export default function Landing(props) {

  const col1 = 30;
  const col2 = 30;
  const col3 = 100 - col1 - col2;
  const row1 = 33;
  const row2 = 33;
  const row3 = 100 - row1 - row2;

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
        background-color: red;
      }
      .block {
        width: 100%;
        height: 30vh;
        align-items: center;
        justify-content: center;
      }
      .block-1 {
        flex-direction: column;
        justify-content: flex-start;
        background-color: green;
        background-image: url(https://cdn.buttercms.com/yANuXPsMTRmRD6aThx3W);
        background-size: 800px 800px;
      }
      .block-1a {
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
      .block-2 {
        background-color: gray;
        background-image: url(https://cdn.buttercms.com/lfiu1H7R5WYyuTI05U9s);
        background-size: 500px 300px;
      }
      .block-3 {
        background-color: blue;
        background-image: url(https://cdn.buttercms.com/naLRnlqxSLG75PgqA69E);
        background-size: 700px 400px;
      }
      .block-4 {
        background-color: purple;
        background-image: url(https://cdn.buttercms.com/97F8GFzJQvOlPEuFrUiN);
        background-size: 500px 300px;
      }
      .block-5 {
        display: none;
        background-image: url(https://cdn.buttercms.com/pnRe5HwrRwaOskKRcnlg);
        background-size: 800px 800px;
      }
      .block-6 {
        background-color: pink;
        background-image: url(https://cdn.buttercms.com/GKkkCiccTaCOFMdQCJnz);
        background-size: 500px 500px;
      }
      .block-7 {
        display: none;
        background-image: url(https://cdn.buttercms.com/WvleetdvTwWZLpJNRHdZ);
        background-size: 500px 500px;
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
        }
        .block-1 {
          top: 0;
          left: 0;
          width: ${col1}%;
          height: ${row1+row2}%;
          background-color: green;
        }
        .block-1a {
          height: 50%;
        }
        .block-2 {
          top: 0;
          left: ${col1}%;
          width: ${col2}%;
          height: ${row1}%;
          background-color: gray;
        }
        .block-3 {
          top: 0;
          right: 0;
          width: ${col3}%;
          height: ${row1}%;
          background-color: blue;
        }
        .block-4 {
          top: ${row1}%;
          left: ${col1}%;
          width: ${col2}%;
          height: ${row2}%;
          background-color: purple;
        }
        .block-5 {
          display: flex;
          top: ${row1}%;
          right: 0;
          width: ${col3}%;
          height: ${row2+row3}%;
          background-color: orange;
        }
        .block-6 {
          top: ${row1+row2}%;
          left: 0;
          width: ${col1}%;
          height: ${row3}%;
          background-color: pink;
        }
        .block-7 {
          display: flex;
          top: ${row1+row2}%;
          left: ${col1}%;
          width: ${col2}%;
          height: ${row3}%;
          background-color: cyan;
        }
      }
    `}</style>
  </header>
};