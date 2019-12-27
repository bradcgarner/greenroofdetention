

export default class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
  }



  render(){

    const col1 = 30;
    const col2 = 30;
    const col3 = 100 - col1 - col2;
    const row1 = 33;
    const row2 = 33;
    const row3 = 100 - row1 - row2;

    return <header className='landing'>
      <div className='block block-1'>
        <h2>Green</h2>
      </div>
      <div className='block block-2'>
        <h2>Roof</h2>
      </div>
      <div className='block block-3'>
        <h2>Detention</h2>
      </div>
      <div className='block block-4'>
        <h2>Sustainable Stormwater Management</h2>
      </div>
      <div className='block block-5'>
        <h2>x</h2>
      </div>
      <div className='block block-6'>
        <h2>Detention: Delay</h2>
      </div>
      <div className='block block-7'>
        <h2>y</h2>
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
        }
        .block-1 {
          background-color: green;
        }
        .block-2 {
          background-color: gray;
        }
        .block-3 {
          background-color: blue;
        }
        .block-4 {
          background-color: purple;
        }
        .block-5 {
          display: none;
        }
        .block-6 {
          background-color: pink;
        }
        .block-7 {
          display: none;
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
  }
};