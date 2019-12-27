export default function BuildingPopover(props){

  const css = 
    props.location === 'blue-green' ?
    `
      top: 20%;
      width: 36vw;
      height: 70vh;
      left: 10%;    
    `:
    props.location === 'purple' ?`
      top: 15%;
      width: 38vw;
      height: 70vh;
      left: 57%;
    ` :
      props.location === 'blue-gray' ?
    `
      top: 38%;
      width: 51vw;
      height: 55vh;
      left: 14%;
    ` :
    null;

    return !css ? null :
    <div className={`detail-content ${props.location} ${props.locationSpecific}`}>
      <div className='close'
        onClick={()=>props.handleClick(null, null)}>
        X
      </div>
      <style jsx>{`
        .detail-content {
          position: absolute;
          background-color: white;
          border: 5px solid black;
          border-radius: 15px;
          opacity:0.9;
          ${css}
        }
        .close {
          position: absolute;
          top: 0;
          right: 0;
          width: 30px;
          height: 30px;
        }
      `}</style>
    </div>
}