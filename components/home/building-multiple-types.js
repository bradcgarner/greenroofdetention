export default function Building(props) {

  // const levels = props.levels || 5;

  const window0 = '#7c8fd3';
  const window1 = '#5c74c9';
  const windowMid = '#adb9e4';
  const window2 = '#5c74c9';
  const window3 = '#495ca0';
  const darkGray = '#aaa';
  const midGray = '#ddd';

  const vBoxMaxHt = 2760;
  // const vBoxMinHt = 1070;
  // const vBoxMaxDelta = vBoxMaxHt - vBoxMinHt; // 1690
  // const minLevels = 5;
  // const maxLevels = 15;
  // const levelsDelta = maxLevels - minLevels; // 10
  // const vBoxPerLevel = vBoxMaxDelta / levelsDelta; // 169
  // const extraLevels = levels - minLevels;
  // const extraHeight = extraLevels * vBoxPerLevel
  // const vBoxHt = vBoxMinHt + extraHeight;

  return <svg xmlns='http://www.w3.org/2000/svg' 
    className='svg'
    viewBox={`0 -100 1861 ${vBoxMaxHt}`}>
    <defs>
      <linearGradient id='window-gradient' x1='0' y1='100' x2='1500' y2='2700' gradientUnits='userSpaceOnUse'>
        <stop offset='0%' stopColor={window0}/>
        <stop offset='48%' stopColor={window1}/>
        <stop offset='52%' stopColor={windowMid}/>
        <stop offset='58%' stopColor={window2}/>
        <stop offset='80%' stopColor={window3}/>
      </linearGradient>
      <linearGradient id='building' x1='600' y1='200' x2='1000' y2='600' gradientUnits='userSpaceOnUse'>
        <stop offset='0' stopColor={darkGray}/>
        <stop offset='1' stopColor={midGray}/>
      </linearGradient>
      <linearGradient id='water' x1='1500' y1='0' x2='1500' y2='0' gradientUnits='userSpaceOnUse'>
        <stop offset='0'  stopColor='white'/>
        <stop offset='1'  stopColor='white'/>
        <stop offset='2'  stopColor='white'/>
        <stop offset='3'  stopColor='white'/>
        <stop offset='4'  stopColor='white'/>
        <stop offset='5'  stopColor='#4c4cff'/>
        <stop offset='6'  stopColor='#4c4cff'/>
        <stop offset='7'  stopColor='#4c4cff'/>
        <stop offset='8'  stopColor='#4c4cff'/>
        <stop offset='9'  stopColor='#4c4cff'/>
        <stop offset='10' stopColor='#4c4cff'/>
        <animate id='y2-start' attributeName='y2' begin='0s; y2-end.end' dur='7000ms' from='0' to='200' fill='freeze' repeatCount='indefinite' />
        <animate id='y2-end'   attributeName='y2' begin='y2-start.end'   dur='7000ms' from='200' to='0' fill='freeze' repeatCount='indefinite' />
      </linearGradient>
    </defs>
  <title>green roof detention for every building type</title>
    
  <g className='building-container'>
    <path className='building building-15' d='M1380,895.5V726H943V586h28V557H718V196H699v80H487V196H468V726H361V895.5H230V925h22v140H230v29h22v140H230v29h22v140H230v29h22v140H230v29h22v140H230v29h22v140H230v29h22v140H230v29h22v140H230v29h22v140H230v29h22v140H230v29h22v140h27V2615h80v140h29V2615h80v140h27V2615h80v140h32V2615h80v140h31V2615h80v140h33V2615h80v140h32V2615h80v140h28V2615h80v140h32V2615h80v140h31V2615h80v140h26V2615h80v140h34V2615h47v-29h-47V2446h47v-29h-47V2277h47v-29h-47V2108h47v-29h-47V1939h47v-29h-47V1770h47v-29h-47V1601h47v-29h-47V1432h47v-29h-47V1263h47v-29h-47V1094h47v-29h-47V925h47V895.5ZM359,2586H279V2446h80Zm0-169H279V2277h80Zm0-169H279V2108h80Zm0-169H279V1939h80Zm0-169H279V1770h80Zm0-169H279V1601h80Zm0-169H279V1432h80Zm0-169H279V1263h80Zm0-169H279V1094h80Zm0-169H279V925h80ZM468,2586H388V2446h80Zm0-169H388V2277h80Zm0-169H388V2108h80Zm0-169H388V1939h80Zm0-169H388V1770h80Zm0-169H388V1601h80Zm0-169H388V1432h80Zm0-169H388V1263h80Zm0-169H388V1094h80Zm0-169H388V925h80Zm0-169H388V756h80ZM575,2586H495V2446h80Zm0-169H495V2277h80Zm0-169H495V2108h80Zm0-169H495V1939h80Zm0-169H495V1770h80Zm0-169H495V1601h80Zm0-169H495V1432h80Zm0-169H495V1263h80Zm0-169H495V1094h80Zm0-169H495V925h80Zm0-169H495V756h80Zm0-170H495V586h80Zm0-169H495V417h80Zm0-163H495V294h80ZM687,2586H607V2446h80Zm0-169H607V2277h80Zm0-169H607V2108h80Zm0-169H607V1939h80Zm0-169H607V1770h80Zm0-169H607V1601h80Zm0-169H607V1432h80Zm0-169H607V1263h80Zm0-169H607V1094h80Zm0-169H607V925h80Zm0-169H607V756h80Zm0-170H607V586h80Zm0-169H607V417h80Zm0-163H607V294h80ZM798,2586H718V2446h80Zm0-169H718V2277h80Zm0-169H718V2108h80Zm0-169H718V1939h80Zm0-169H718V1770h80Zm0-169H718V1601h80Zm0-169H718V1432h80Zm0-169H718V1263h80Zm0-169H718V1094h80Zm0-169H718V925h80Zm0-169H718V756h80Zm0-170H718V586h80ZM911,2586H831V2446h80Zm0-169H831V2277h80Zm0-169H831V2108h80Zm0-169H831V1939h80Zm0-169H831V1770h80Zm0-169H831V1601h80Zm0-169H831V1432h80Zm0-169H831V1263h80Zm0-169H831V1094h80Zm0-169H831V925h80Zm0-169H831V756h80Zm0-170H831V586h80Zm112,1860H943V2446h80Zm0-169H943V2277h80Zm0-169H943V2108h80Zm0-169H943V1939h80Zm0-169H943V1770h80Zm0-169H943V1601h80Zm0-169H943V1432h80Zm0-169H943V1263h80Zm0-169H943V1094h80Zm0-169H943V925h80Zm0-169H943V756h80Zm108,1690h-80V2446h80Zm0-169h-80V2277h80Zm0-169h-80V2108h80Zm0-169h-80V1939h80Zm0-169h-80V1770h80Zm0-169h-80V1601h80Zm0-169h-80V1432h80Zm0-169h-80V1263h80Zm0-169h-80V1094h80Zm0-169h-80V925h80Zm0-169h-80V756h80Zm112,1690h-80V2446h80Zm0-169h-80V2277h80Zm0-169h-80V2108h80Zm0-169h-80V1939h80Zm0-169h-80V1770h80Zm0-169h-80V1601h80Zm0-169h-80V1432h80Zm0-169h-80V1263h80Zm0-169h-80V1094h80Zm0-169h-80V925h80Zm0-169h-80V756h80Zm111,1690h-80V2446h80Zm0-169h-80V2277h80Zm0-169h-80V2108h80Zm0-169h-80V1939h80Zm0-169h-80V1770h80Zm0-169h-80V1601h80Zm0-169h-80V1432h80Zm0-169h-80V1263h80Zm0-169h-80V1094h80Zm0-169h-80V925h80Zm0-169h-80V756h80Zm106,1690h-80V2446h80Zm0-169h-80V2277h80Zm0-169h-80V2108h80Zm0-169h-80V1939h80Zm0-169h-80V1770h80Zm0-169h-80V1601h80Zm0-169h-80V1432h80Zm0-169h-80V1263h80Zm0-169h-80V1094h80Zm0-169h-80V925h80Z'/>
  </g>
  
  <g className='windows windows-15'>
      <rect className='window' x='1494' y='2615' width='47' height='140'/>
      <rect className='window' x='1380' y='2615' width='80' height='140'/>
      <rect className='window' x='1274' y='2615' width='80' height='140'/>
      <rect className='window' x='1163' y='2615' width='80' height='140'/>
      <rect className='window' x='1051' y='2615' width='80' height='140'/>
      <rect className='window' x='943' y='2615' width='80' height='140'/>
      <rect className='window' x='831' y='2615' width='80' height='140'/>
      <rect className='window' x='718' y='2615' width='80' height='140'/>
      <rect className='window' x='607' y='2615' width='80' height='140'/>
      <rect className='window' x='495' y='2615' width='80' height='140'/>
      <rect className='window' x='388' y='2615' width='80' height='140'/>
      <rect className='window' x='279' y='2615' width='80' height='140'/>
      <rect className='window' x='230' y='2615' width='22' height='140'/>
    </g>
    <g className='windows windows-14'>
      <rect className='window' x='1494' y='2446' width='47' height='140'/>
      <rect className='window' x='1380' y='2446' width='80' height='140'/>
      <rect className='window' x='1274' y='2446' width='80' height='140'/>
      <rect className='window' x='1163' y='2446' width='80' height='140'/>
      <rect className='window' x='1051' y='2446' width='80' height='140'/>
      <rect className='window' x='943' y='2446' width='80' height='140'/>
      <rect className='window' x='831' y='2446' width='80' height='140'/>
      <rect className='window' x='718' y='2446' width='80' height='140'/>
      <rect className='window' x='607' y='2446' width='80' height='140'/>
      <rect className='window' x='495' y='2446' width='80' height='140'/>
      <rect className='window' x='388' y='2446' width='80' height='140'/>
      <rect className='window' x='279' y='2446' width='80' height='140'/>
      <rect className='window' x='230' y='2446' width='22' height='140'/>
    </g>
    <g className='windows windows-13'>
      <rect className='window' x='1494' y='2277' width='47' height='140'/>
      <rect className='window' x='1380' y='2277' width='80' height='140'/>
      <rect className='window' x='1274' y='2277' width='80' height='140'/>
      <rect className='window' x='1163' y='2277' width='80' height='140'/>
      <rect className='window' x='1051' y='2277' width='80' height='140'/>
      <rect className='window' x='943' y='2277' width='80' height='140'/>
      <rect className='window' x='831' y='2277' width='80' height='140'/>
      <rect className='window' x='718' y='2277' width='80' height='140'/>
      <rect className='window' x='607' y='2277' width='80' height='140'/>
      <rect className='window' x='495' y='2277' width='80' height='140'/>
      <rect className='window' x='388' y='2277' width='80' height='140'/>
      <rect className='window' x='279' y='2277' width='80' height='140'/>
      <rect className='window' x='230' y='2277' width='22' height='140'/>
    </g>
    <g className='windows windows-12'>
      <rect className='window' x='1494' y='2108' width='47' height='140'/>
      <rect className='window' x='1380' y='2108' width='80' height='140'/>
      <rect className='window' x='1274' y='2108' width='80' height='140'/>
      <rect className='window' x='1163' y='2108' width='80' height='140'/>
      <rect className='window' x='1051' y='2108' width='80' height='140'/>
      <rect className='window' x='943' y='2108' width='80' height='140'/>
      <rect className='window' x='831' y='2108' width='80' height='140'/>
      <rect className='window' x='718' y='2108' width='80' height='140'/>
      <rect className='window' x='607' y='2108' width='80' height='140'/>
      <rect className='window' x='495' y='2108' width='80' height='140'/>
      <rect className='window' x='388' y='2108' width='80' height='140'/>
      <rect className='window' x='279' y='2108' width='80' height='140'/>
      <rect className='window' x='230' y='2108' width='22' height='140'/>
    </g>
    <g className='windows windows-11'>
      <rect className='window' x='1494' y='1939' width='47' height='140'/>
      <rect className='window' x='1380' y='1939' width='80' height='140'/>
      <rect className='window' x='1274' y='1939' width='80' height='140'/>
      <rect className='window' x='1163' y='1939' width='80' height='140'/>
      <rect className='window' x='1051' y='1939' width='80' height='140'/>
      <rect className='window' x='943' y='1939' width='80' height='140'/>
      <rect className='window' x='831' y='1939' width='80' height='140'/>
      <rect className='window' x='718' y='1939' width='80' height='140'/>
      <rect className='window' x='607' y='1939' width='80' height='140'/>
      <rect className='window' x='495' y='1939' width='80' height='140'/>
      <rect className='window' x='388' y='1939' width='80' height='140'/>
      <rect className='window' x='279' y='1939' width='80' height='140'/>
      <rect className='window' x='230' y='1939' width='22' height='140'/>
    </g>
    <g className='windows windows-10'>
      <rect className='window' x='1494' y='1770' width='47' height='140'/>
      <rect className='window' x='1380' y='1770' width='80' height='140'/>
      <rect className='window' x='1274' y='1770' width='80' height='140'/>
      <rect className='window' x='1163' y='1770' width='80' height='140'/>
      <rect className='window' x='1051' y='1770' width='80' height='140'/>
      <rect className='window' x='943' y='1770' width='80' height='140'/>
      <rect className='window' x='831' y='1770' width='80' height='140'/>
      <rect className='window' x='718' y='1770' width='80' height='140'/>
      <rect className='window' x='607' y='1770' width='80' height='140'/>
      <rect className='window' x='495' y='1770' width='80' height='140'/>
      <rect className='window' x='388' y='1770' width='80' height='140'/>
      <rect className='window' x='279' y='1770' width='80' height='140'/>
      <rect className='window' x='230' y='1770' width='22' height='140'/>
    </g>
    <g className='windows windows-9'>
      <rect className='window' x='1494' y='1601' width='47' height='140'/>
      <rect className='window' x='1380' y='1601' width='80' height='140'/>
      <rect className='window' x='1274' y='1601' width='80' height='140'/>
      <rect className='window' x='1163' y='1601' width='80' height='140'/>
      <rect className='window' x='1051' y='1601' width='80' height='140'/>
      <rect className='window' x='943' y='1601' width='80' height='140'/>
      <rect className='window' x='831' y='1601' width='80' height='140'/>
      <rect className='window' x='718' y='1601' width='80' height='140'/>
      <rect className='window' x='607' y='1601' width='80' height='140'/>
      <rect className='window' x='495' y='1601' width='80' height='140'/>
      <rect className='window' x='388' y='1601' width='80' height='140'/>
      <rect className='window' x='279' y='1601' width='80' height='140'/>
      <rect className='window' x='230' y='1601' width='22' height='140'/>
    </g>
    <g className='windows windows-8'>
      <rect className='window' x='1494' y='1432' width='47' height='140'/>
      <rect className='window' x='1380' y='1432' width='80' height='140'/>
      <rect className='window' x='1274' y='1432' width='80' height='140'/>
      <rect className='window' x='1163' y='1432' width='80' height='140'/>
      <rect className='window' x='1051' y='1432' width='80' height='140'/>
      <rect className='window' x='943' y='1432' width='80' height='140'/>
      <rect className='window' x='831' y='1432' width='80' height='140'/>
      <rect className='window' x='718' y='1432' width='80' height='140'/>
      <rect className='window' x='607' y='1432' width='80' height='140'/>
      <rect className='window' x='495' y='1432' width='80' height='140'/>
      <rect className='window' x='388' y='1432' width='80' height='140'/>
      <rect className='window' x='279' y='1432' width='80' height='140'/>
      <rect className='window' x='230' y='1432' width='22' height='140'/>
    </g>
    <g className='windows windows-7'>
      <rect className='window' x='1494' y='1263' width='47' height='140'/>
      <rect className='window' x='1380' y='1263' width='80' height='140'/>
      <rect className='window' x='1274' y='1263' width='80' height='140'/>
      <rect className='window' x='1163' y='1263' width='80' height='140'/>
      <rect className='window' x='1051' y='1263' width='80' height='140'/>
      <rect className='window' x='943' y='1263' width='80' height='140'/>
      <rect className='window' x='831' y='1263' width='80' height='140'/>
      <rect className='window' x='718' y='1263' width='80' height='140'/>
      <rect className='window' x='607' y='1263' width='80' height='140'/>
      <rect className='window' x='495' y='1263' width='80' height='140'/>
      <rect className='window' x='388' y='1263' width='80' height='140'/>
      <rect className='window' x='279' y='1263' width='80' height='140'/>
      <rect className='window' x='230' y='1263' width='22' height='140'/>
    </g>
    <g className='windows windows-6'>
      <rect className='window' x='1494' y='1094' width='47' height='140'/>
      <rect className='window' x='1380' y='1094' width='80' height='140'/>
      <rect className='window' x='1274' y='1094' width='80' height='140'/>
      <rect className='window' x='1163' y='1094' width='80' height='140'/>
      <rect className='window' x='1051' y='1094' width='80' height='140'/>
      <rect className='window' x='943' y='1094' width='80' height='140'/>
      <rect className='window' x='831' y='1094' width='80' height='140'/>
      <rect className='window' x='718' y='1094' width='80' height='140'/>
      <rect className='window' x='607' y='1094' width='80' height='140'/>
      <rect className='window' x='495' y='1094' width='80' height='140'/>
      <rect className='window' x='388' y='1094' width='80' height='140'/>
      <rect className='window' x='279' y='1094' width='80' height='140'/>
      <rect className='window' x='230' y='1094' width='22' height='140'/>
    </g>
    <g className='windows windows-5'>
      <rect className='window' x='1494' y='925' width='47' height='140'/>
      <rect className='window' x='1380' y='925' width='80' height='140'/>
      <rect className='window' x='1274' y='925' width='80' height='140'/>
      <rect className='window' x='1163' y='925' width='80' height='140'/>
      <rect className='window' x='1051' y='925' width='80' height='140'/>
      <rect className='window' x='943' y='925' width='80' height='140'/>
      <rect className='window' x='831' y='925' width='80' height='140'/>
      <rect className='window' x='718' y='925' width='80' height='140'/>
      <rect className='window' x='607' y='925' width='80' height='140'/>
      <rect className='window' x='495' y='925' width='80' height='140'/>
      <rect className='window' x='388' y='925' width='80' height='140'/>
      <rect className='window' x='279' y='925' width='80' height='140'/>
      <rect className='window' x='230' y='925' width='22' height='140'/>
    </g>
    <g className='windows windows-4'>
      <rect className='window' x='1274' y='756' width='80' height='140'/>
      <rect className='window' x='1163' y='756' width='80' height='140'/>
      <rect className='window' x='1051' y='756' width='80' height='140'/>
      <rect className='window' x='943' y='756' width='80' height='140'/>
      <rect className='window' x='831' y='756' width='80' height='140'/>
      <rect className='window' x='718' y='756' width='80' height='140'/>
      <rect className='window' x='607' y='756' width='80' height='140'/>
      <rect className='window' x='495' y='756' width='80' height='140'/>
      <rect className='window' x='388' y='756' width='80' height='140'/>
      <rect className='window' x='943' y='586' width='28' height='140'/>
      <rect className='window' x='831' y='586' width='80' height='140'/>
      <rect className='window' x='718' y='586' width='80' height='140'/>
      <rect className='window' x='607' y='586' width='80' height='140'/>
      <rect className='window' x='495' y='586' width='80' height='140'/>
    </g>
    <g className='windows windows-2'>
      <rect className='window' x='607' y='417' width='80' height='140'/>
      <rect className='window' x='495' y='417' width='80' height='140'/>
    </g>
    <g className='windows windows-1'>
      <rect className='window' x='607' y='294' width='80' height='100'/>
      <rect className='window' x='495' y='294' width='80' height='100'/>
    </g>

    <g className='level1-l' 
      onMouseOver={()=>props.handleClick('purple','1l')}
      onClick={()=>props.handleClick('purple','1l')}>
    <g className='label'>
      <path className='purple' d='M64.14,811.89H86q7.45,0,11.85,4.32a13.86,13.86,0,0,1,4.39,10.23,14.34,14.34,0,0,1-4.34,10.48q-4.35,4.35-11.83,4.36H76.37V861H64.14Zm12.23,9v11.39h5.7q7.62,0,7.63-5.7,0-3.2-2-4.45t-7-1.24Z'/>
      <path className='purple' d='M147.28,811.89h12.24v27.88q0,10.76-6.37,16.31T135,861.63q-11.68,0-18.13-5.62t-6.45-16.17v-28h12.27v28.23a10.63,10.63,0,0,0,3.36,8.22,12.45,12.45,0,0,0,8.81,3.1,12.74,12.74,0,0,0,9-3.17q3.39-3.16,3.39-9Z'/>
      <path className='purple' d='M170.13,811.89h21.94q7.14,0,11.6,4.12a13.13,13.13,0,0,1,4.47,10q0,8.12-8.44,12,3.69,1.68,7,9.06T213.16,861H199.74q-1.2-2.43-4.19-9.25T190.44,843a6.68,6.68,0,0,0-4.56-1.93h-3.51V861H170.13Zm12.24,9v11.18h6.47a7.61,7.61,0,0,0,4.9-1.46,5,5,0,0,0,1.81-4.17q0-5.55-7-5.55Z'/>
      <path className='purple' d='M219.35,811.89h21.9q7.45,0,11.85,4.32a13.87,13.87,0,0,1,4.4,10.23,14.31,14.31,0,0,1-4.35,10.48q-4.34,4.35-11.83,4.36h-9.73V861H219.35Zm12.24,9v11.39h5.69q7.64,0,7.63-5.7,0-3.2-2-4.45t-7-1.24Z'/>
      <path className='purple' d='M303.52,852v9H266.07V811.89h12.24V852Z'/>
      <path className='purple' d='M346.72,852v9H310.51V811.89h35.72v9H322.75v10.3h22.39v9H322.75V852Z'/>
    </g>
    <g className='covering'>
      <rect className='purple' x='230' y='874' width='130' height='20'/>
    </g>
  </g>

  <g className='level1-r' 
    onMouseOver={()=>props.handleClick('blue-gray','1r')}
    onClick={()=>props.handleClick('blue-gray','1r')}>
    <g className='label'>
      <path className='blue' d='M1394.64,792.89h21.24q7.59,0,11.93,3.65a11,11,0,0,1,4.35,8.64q0,6.39-6.72,9.8a14.14,14.14,0,0,1,7.75,4.72,12.24,12.24,0,0,1,2.69,7.88,13.44,13.44,0,0,1-4.39,10.41q-4.4,4-12.94,4h-23.91Zm12.24,9V812.4h6.4a6.59,6.59,0,0,0,4.6-1.51,5,5,0,0,0,1.66-3.8,4.81,4.81,0,0,0-1.66-3.73,6.67,6.67,0,0,0-4.6-1.47Zm0,19.51V833h6.89q4.89,0,7-1.35c1.43-.91,2.15-2.47,2.15-4.7a4.77,4.77,0,0,0-2-4.06,9.07,9.07,0,0,0-5.45-1.49Z'/>
      <path className='blue' d='M1482.36,833v9h-37.44V792.89h12.23V833Z'/>
      <path className='blue' d='M1525.64,792.89h12.23v27.88q0,10.76-6.36,16.31t-18.18,5.55q-11.67,0-18.12-5.62t-6.45-16.17v-28H1501v28.23a10.66,10.66,0,0,0,3.35,8.22,12.47,12.47,0,0,0,8.81,3.1,12.74,12.74,0,0,0,9-3.17q3.4-3.16,3.4-9Z'/>
      <path className='blue' d='M1584.84,833v9h-36.21V792.89h35.72v9h-23.49v10.3h22.4v9h-22.4V833Z'/>
      <path d='M1603.11,842.63l12.16-50.38h7.41l-12.3,50.38Z'/>
      <path className='gray' d='M1690.07,796.3V807a42.09,42.09,0,0,0-18.35-4.54q-8.65,0-13.33,4.36a14.55,14.55,0,0,0-4.67,11.11,13.15,13.15,0,0,0,4.67,10.48q4.68,4,12.31,4a20.44,20.44,0,0,0,8.12-1.76V825h-7.1v-9h19.37V836q-2.92,2.93-8.88,4.77a39.67,39.67,0,0,1-11.79,1.84q-12.84,0-21.08-7.08a24.05,24.05,0,0,1,0-36.25q8.25-7,21.36-7A44.69,44.69,0,0,1,1690.07,796.3Z'/>
      <path className='gray' d='M1701.74,792.89h21.94q7.14,0,11.6,4.12a13.13,13.13,0,0,1,4.47,10q0,8.12-8.44,12,3.69,1.68,7,9.06t6.43,13.91h-13.42q-1.2-2.43-4.19-9.25T1722,824a6.66,6.66,0,0,0-4.55-1.93H1714V842h-12.24Zm12.24,9v11.18h6.46a7.62,7.62,0,0,0,4.91-1.46,5,5,0,0,0,1.81-4.17q0-5.55-7-5.55Z'/>
      <path className='gray' d='M1779.21,792.89,1801,842h-13.15l-4-9.7h-22l-3.67,9.7h-13L1765,792.89Zm1,30.83-8-19.09-7.21,19.09Z'/>
      <path className='gray' d='M1812.66,842V819.08l-19.37-26.19h14.83l10.66,15.43,10.7-15.43h14.78l-19.37,26.21V842Z'/>
    </g>
    <g className='covering'>
      <rect className='gray' x='1382' y='854' width='159' height='18'/>
      <rect className='blue' x='1382' y='874' width='159' height='20'/>
    </g>
  </g>

  <g className='level2-l'  
    onMouseOver={()=>props.handleClick('purple','2l')}
    onClick={()=>props.handleClick('purple','2l')}>
    <g className='label'>
      <path className='purple' d='M171.14,645.89H193q7.46,0,11.85,4.32a13.86,13.86,0,0,1,4.39,10.23,14.34,14.34,0,0,1-4.34,10.48q-4.35,4.35-11.83,4.36h-9.74V695H171.14Zm12.23,9v11.39h5.7q7.62,0,7.63-5.7,0-3.2-2-4.45t-7-1.24Z'/>
      <path className='purple' d='M254.28,645.89h12.24v27.88q0,10.76-6.37,16.31T242,695.63q-11.68,0-18.13-5.62t-6.45-16.17v-28h12.27v28.23a10.63,10.63,0,0,0,3.36,8.22,12.45,12.45,0,0,0,8.81,3.1,12.74,12.74,0,0,0,9-3.17q3.39-3.16,3.39-9Z'/>
      <path className='purple' d='M277.13,645.89h21.94q7.14,0,11.6,4.12a13.13,13.13,0,0,1,4.47,10q0,8.12-8.44,12,3.69,1.68,7,9.06T320.16,695H306.74q-1.2-2.43-4.19-9.25T297.44,677a6.68,6.68,0,0,0-4.56-1.93h-3.51V695H277.13Zm12.24,9v11.18h6.47a7.61,7.61,0,0,0,4.9-1.46,5,5,0,0,0,1.81-4.17q0-5.55-7-5.55Z'/>
      <path className='purple' d='M326.35,645.89h21.9q7.46,0,11.85,4.32a13.87,13.87,0,0,1,4.4,10.23,14.31,14.31,0,0,1-4.35,10.48q-4.33,4.35-11.83,4.36h-9.73V695H326.35Zm12.24,9v11.39h5.69q7.64,0,7.63-5.7,0-3.2-2-4.45t-7-1.24Z'/>
      <path className='purple' d='M410.52,686v9H373.07V645.89h12.24V686Z'/>
      <path className='purple' d='M453.72,686v9H417.51V645.89h35.72v9H429.75v10.3h22.39v9H429.75V686Z'/>
    </g>
    <g className='covering'>
      <rect className='purple' x='361' y='704' width='105' height='20'/>
    </g>
  </g>


  <g className='level2-r' 
    onMouseOver={()=>props.handleClick('blue-green','2r')}
    onClick={()=>props.handleClick('blue-green','2r')}>
    <g className='label'>
      <path className='blue' d='M993.64,617.89h21.24q7.59,0,11.93,3.65a11,11,0,0,1,4.35,8.64q0,6.39-6.72,9.8a14.14,14.14,0,0,1,7.75,4.72,12.24,12.24,0,0,1,2.69,7.88,13.44,13.44,0,0,1-4.39,10.41q-4.4,4-12.94,4H993.64Zm12.24,9V637.4h6.4a6.59,6.59,0,0,0,4.6-1.51,5,5,0,0,0,1.66-3.8,4.81,4.81,0,0,0-1.66-3.73,6.67,6.67,0,0,0-4.6-1.47Zm0,19.51V658h6.89q4.89,0,7-1.35c1.43-.91,2.15-2.47,2.15-4.7a4.77,4.77,0,0,0-2-4.06,9.07,9.07,0,0,0-5.45-1.49Z'/>
      <path className='blue' d='M1081.36,658v9h-37.44V617.89h12.23V658Z'/>
      <path className='blue' d='M1124.64,617.89h12.23v27.88q0,10.76-6.36,16.31t-18.18,5.55q-11.67,0-18.12-5.62t-6.45-16.17v-28H1100v28.23a10.66,10.66,0,0,0,3.35,8.22,12.47,12.47,0,0,0,8.81,3.1,12.74,12.74,0,0,0,9-3.17q3.4-3.16,3.4-9Z'/>
      <path className='blue' d='M1183.84,658v9h-36.21V617.89h35.72v9h-23.49v10.3h22.4v9h-22.4V658Z'/>
      <path d='M1202.11,667.63l12.16-50.38h7.41l-12.3,50.38Z'/>
      <path className='green' d='M1289.07,621.3V632a42.09,42.09,0,0,0-18.35-4.54q-8.65,0-13.33,4.36a14.55,14.55,0,0,0-4.67,11.11,13.15,13.15,0,0,0,4.67,10.48q4.68,4,12.31,4a20.44,20.44,0,0,0,8.12-1.76V650h-7.1v-9h19.37V661q-2.92,2.93-8.88,4.77a39.67,39.67,0,0,1-11.79,1.84q-12.84,0-21.08-7.08a24.05,24.05,0,0,1,0-36.25q8.25-7,21.36-7A44.69,44.69,0,0,1,1289.07,621.3Z'/>
      <path className='green' d='M1300.74,617.89h21.94q7.14,0,11.6,4.12a13.13,13.13,0,0,1,4.47,10q0,8.12-8.44,12,3.69,1.68,7,9.06t6.43,13.91h-13.42q-1.2-2.43-4.19-9.25T1321,649a6.66,6.66,0,0,0-4.55-1.93H1313V667h-12.24Zm12.24,9v11.18h6.46a7.62,7.62,0,0,0,4.91-1.46,5,5,0,0,0,1.81-4.17q0-5.55-7-5.55Z'/>
      <path className='green' d='M1385.82,658v9h-36.21V617.89h35.72v9h-23.49v10.3h22.4v9h-22.4V658Z'/>
      <path className='green' d='M1431.52,658v9h-36.21V617.89H1431v9h-23.48v10.3h22.39v9h-22.39V658Z'/>
      <path className='green' d='M1490.62,617.89V667h-10.33l-27.11-31.46V667h-12.24V617.89h11.22l26.23,30v-30Z'/>
    </g>
    <g className='covering'>
      <rect className='gray' x='1340' y='684' width='40' height='18'/>
      <rect className='green' x='973' y='684' width='364.21' height='18'/>
      <rect className='blue' x='973' y='704' width='407' height='20'/>
    </g>
  </g>


  <g className='level3' 
    onMouseOver={()=>props.handleClick('purple','3')}
    onClick={()=>props.handleClick('purple','3')}>
    <g className='label'>
      <path className='purple' d='M742.14,469.89H764q7.46,0,11.85,4.32a13.86,13.86,0,0,1,4.39,10.23,14.34,14.34,0,0,1-4.34,10.48q-4.35,4.35-11.83,4.36h-9.74V519H742.14Zm12.23,9v11.39h5.7q7.62,0,7.63-5.7,0-3.19-2-4.45t-7-1.24Z'/>
      <path className='purple' d='M825.28,469.89h12.24v27.88q0,10.75-6.37,16.31T813,519.63q-11.68,0-18.13-5.62t-6.45-16.17V469.89h12.27v28.23a10.63,10.63,0,0,0,3.36,8.22,12.45,12.45,0,0,0,8.81,3.1,12.74,12.74,0,0,0,9-3.17q3.39-3.16,3.39-9Z'/>
      <path className='purple' d='M848.13,469.89h21.94q7.14,0,11.6,4.12a13.13,13.13,0,0,1,4.47,10q0,8.12-8.44,12,3.69,1.68,7,9.06T891.16,519H877.74q-1.2-2.43-4.19-9.25T868.44,501a6.68,6.68,0,0,0-4.56-1.93h-3.51V519H848.13Zm12.24,9v11.18h6.47a7.61,7.61,0,0,0,4.9-1.46,5,5,0,0,0,1.81-4.17q0-5.55-7-5.55Z'/>
      <path className='purple' d='M897.35,469.89h21.9q7.46,0,11.85,4.32a13.87,13.87,0,0,1,4.4,10.23,14.31,14.31,0,0,1-4.35,10.48q-4.33,4.35-11.83,4.36h-9.73V519H897.35Zm12.24,9v11.39h5.69q7.63,0,7.63-5.7,0-3.19-2-4.45t-7-1.24Z'/>
      <path className='purple' d='M981.52,510v9H944.07V469.89h12.24V510Z'/>
      <path className='purple' d='M1024.72,510v9H988.51V469.89h35.72v9h-23.48v10.3h22.39v9h-22.39V510Z'/>
    </g>
    <g className='covering'>
      <rect className='gray' x='931' y='535' width='40' height='20'/>
      <rect className='purple' x='720' y='535' width='209' height='20'/>
    </g>
  </g>


  <g className='level4' 
    onMouseOver={()=>props.handleClick('blue-gray','4')}
    onClick={()=>props.handleClick('blue-gray','4')}>
    <g className='label'>
      <path className='blue' d='M741.65,238.21h21.23q7.59,0,11.93,3.66a11,11,0,0,1,4.35,8.64q0,6.39-6.72,9.8a14.13,14.13,0,0,1,7.75,4.71,12.26,12.26,0,0,1,2.69,7.88,13.46,13.46,0,0,1-4.39,10.42q-4.4,4-12.94,4h-23.9Zm12.23,9v10.52h6.4a6.54,6.54,0,0,0,4.6-1.52,4.92,4.92,0,0,0,1.66-3.79,4.8,4.8,0,0,0-1.66-3.73,6.67,6.67,0,0,0-4.6-1.48Zm0,19.52v11.6h6.89q4.89,0,7-1.36t2.15-4.69a4.77,4.77,0,0,0-2-4.06,9,9,0,0,0-5.45-1.49Z'/>
      <path className='blue' d='M829.36,278.33v9H791.92V238.21h12.23v40.12Z'/>
      <path className='blue' d='M872.64,238.21h12.23v27.88q0,10.76-6.36,16.32T860.33,288q-11.67,0-18.12-5.63t-6.45-16.17v-28H848v28.23a10.64,10.64,0,0,0,3.36,8.23,12.47,12.47,0,0,0,8.8,3.09,12.71,12.71,0,0,0,9-3.16q3.4-3.17,3.4-9Z'/>
      <path className='blue' d='M931.84,278.33v9H895.63V238.21h35.72v9H907.86v10.3h22.4v9h-22.4v11.82Z'/>
      <path d='M950.11,288l12.16-50.38h7.42L957.38,288Z'/>
      <path className='gray' d='M1037.07,241.62v10.73a41.92,41.92,0,0,0-18.35-4.54q-8.65,0-13.33,4.36a14.55,14.55,0,0,0-4.67,11.11,13.18,13.18,0,0,0,4.67,10.48q4.68,4,12.31,4a20.42,20.42,0,0,0,8.12-1.75v-5.73h-7.1v-9h19.37v20.07c-1.95,1.95-4.9,3.53-8.88,4.76a39.69,39.69,0,0,1-11.79,1.85q-12.84,0-21.08-7.08a24.05,24.05,0,0,1,0-36.25q8.25-7,21.36-7A44.83,44.83,0,0,1,1037.07,241.62Z'/>
      <path className='gray' d='M1048.74,238.21h21.94q7.14,0,11.6,4.13a13.12,13.12,0,0,1,4.47,10q0,8.11-8.44,12c2.46,1.12,4.81,4.15,7,9.06s4.37,9.56,6.43,13.92h-13.42q-1.2-2.43-4.19-9.25t-5.12-8.75a6.65,6.65,0,0,0-4.55-1.94H1061v19.94h-12.24Zm12.24,9v11.18h6.47a7.55,7.55,0,0,0,4.9-1.46,5,5,0,0,0,1.81-4.16q0-5.55-7-5.56Z'/>
      <path className='gray' d='M1126.21,238.21,1148,287.33h-13.15l-4-9.71h-22l-3.67,9.71h-13L1112,238.21Zm1,30.84-8-19.09-7.21,19.09Z'/>
      <path className='gray' d='M1159.66,287.33V264.41l-19.37-26.2h14.83l10.66,15.44,10.7-15.44h14.79l-19.38,26.21v22.91Z'/>
    </g>
    <g className='covering'>
      <rect className='blue' x='488' y='254' width='209' height='20'/>
      <rect className='gray' x='488' y='234' width='209' height='18'/>
    </g>
    <g className='mech-r'>
      <rect className='mech' x='605.5' y='168.5' width='69' height='60'/>
      <path d='M674,169v59H606V169h68m1-1H605v61h70V168Z'/>
    </g>
    <g className='mech-l'>
      <rect className='mech' x='509.5' y='183.5' width='69' height='45'/>
      <path d='M578,184v44H510V184h68m1-1H509v46h70V183Z'/>
    </g>
  </g>

  <g className='logo' transform='translate(0,-100)'>
    <polygon className='logo-detention' points='1769 150.01 1743.54 150.01 1704.66 90.3 1704.66 150.01 1677.83 150.01 1677.83 37.94 1703.15 37.94 1742.04 97.56 1742.04 37.94 1769 37.94 1769 150.01'/>
    <path className='logo-detention' d='M1618.16,151.32c-16.47,0-29.51-5.28-38.76-15.69-9-10.12-13.56-24.22-13.56-41.92s4.58-31.6,13.61-41.68c9.27-10.35,22.34-15.6,38.84-15.6,16.13,0,29,5.34,38.34,15.86,9.06,10.23,13.65,24.21,13.65,41.55s-4.6,31.27-13.67,41.55C1647.27,146,1634.33,151.32,1618.16,151.32Zm.13-88.38c-8,0-13.85,2.29-17.74,7-4.23,5.13-6.37,13.17-6.37,23.89,0,10.9,2.14,19,6.37,24.16,3.89,4.71,9.65,7,17.61,7s13.75-2.27,17.53-6.93c4.15-5.12,6.25-13.27,6.25-24.24s-2.09-18.91-6.22-24C1632,65.19,1626.26,62.94,1618.29,62.94Z'/>
    <rect className='logo-detention' x='1528.92' y='37.94' width='27.68' height='112.07'/>
    <polygon className='logo-detention' points='1490.73 150.01 1463.05 150.01 1463.05 64.38 1432.8 64.38 1432.8 37.94 1520.97 37.94 1520.97 64.38 1490.73 64.38 1490.73 150.01'/>
    <polygon className='logo-detention' points='1424.98 150.01 1399.53 150.01 1360.64 90.3 1360.64 150.01 1333.81 150.01 1333.81 37.94 1359.13 37.94 1398.02 97.56 1398.02 37.94 1424.98 37.94 1424.98 150.01'/>
    <polygon className='logo-detention' points='1319.46 150.01 1249.64 150.01 1249.64 37.94 1319.46 37.94 1319.46 64.38 1277.33 64.38 1277.33 78.56 1316.91 78.56 1316.91 104.94 1277.33 104.94 1277.33 123.5 1319.46 123.5 1319.46 150.01'/>
    <polygon className='logo-detention' points='1211.45 150.01 1183.76 150.01 1183.76 64.38 1153.52 64.38 1153.52 37.94 1241.69 37.94 1241.69 64.38 1211.45 64.38 1211.45 150.01'/>
    <polygon className='logo-detention' points='1145.66 150.01 1075.85 150.01 1075.85 37.94 1145.66 37.94 1145.66 64.38 1103.53 64.38 1103.53 78.56 1143.11 78.56 1143.11 104.94 1103.53 104.94 1103.53 123.5 1145.66 123.5 1145.66 150.01'/>
    <path className='logo-detention' d='M1007.58,150H972.84V37.94h37.55c17.06,0,30.68,5,40.49,14.77s14.77,23.38,14.77,40.35c0,18-5.16,32.17-15.34,42.09S1025.82,150,1007.58,150Zm-7.06-26.18h5.24c10.93,0,19-2.49,24-7.4s7.5-12.59,7.5-23c0-10.13-2.35-17.64-7-22.32s-12-7-22-7h-7.85Z'/>
    <polygon className='logo-roof' points='918.92 150.01 891.24 150.01 891.24 37.94 961.05 37.94 961.05 64.38 918.92 64.38 918.92 82.75 958.51 82.75 958.51 109.19 918.92 109.19 918.92 150.01'/>
    <path className='logo-roof' d='M828.9,151.32c-16.47,0-29.51-5.28-38.76-15.69-9-10.12-13.56-24.22-13.56-41.92s4.58-31.6,13.61-41.68c9.27-10.35,22.33-15.6,38.84-15.6,16.13,0,29,5.34,38.34,15.86C876.42,62.52,881,76.5,881,93.84s-4.6,31.27-13.67,41.55C858,146,845.07,151.32,828.9,151.32ZM829,62.94c-8,0-13.86,2.29-17.74,7-4.23,5.13-6.37,13.17-6.37,23.89,0,10.9,2.14,19,6.37,24.16,3.88,4.71,9.64,7,17.61,7s13.75-2.27,17.53-6.93c4.15-5.12,6.25-13.27,6.25-24.24s-2.09-18.91-6.22-24C842.7,65.19,837,62.94,829,62.94Z'/>
    <path className='logo-roof' d='M715.4,151.32c-16.47,0-29.51-5.28-38.76-15.69-9-10.12-13.56-24.22-13.56-41.92S667.66,62.11,676.7,52C686,41.68,699,36.43,715.53,36.43c16.13,0,29,5.34,38.34,15.86,9.06,10.23,13.65,24.21,13.65,41.55s-4.6,31.27-13.67,41.55C744.51,146,731.57,151.32,715.4,151.32Zm.13-88.38c-8,0-13.85,2.29-17.74,7-4.23,5.13-6.37,13.17-6.37,23.89,0,10.9,2.14,19,6.37,24.16,3.89,4.71,9.65,7,17.61,7s13.75-2.27,17.53-6.93c4.15-5.12,6.25-13.27,6.25-24.24s-2.09-18.91-6.22-24C729.21,65.19,723.5,62.94,715.53,62.94Z'/>
    <path className='logo-roof' d='M665.8,150H633.21L610.09,110.3h-6.87V150H575.54V37.94H610c13.78,0,24,2.79,31.15,8.54,7.63,6.12,11.49,15.11,11.49,26.72,0,12.87-5.37,22.8-15.65,29.17ZM603.22,84.18h6.93c7.57,0,10.69-1.69,11.87-2.69.64-.54,2.57-2.19,2.57-7.7,0-3.53-.76-5.89-2.26-7-1.26-.94-4.62-2.52-13-2.52h-6.14Z'/>
    <polygon className='logo-green' points='557.69 150.01 532.23 150.01 493.35 90.3 493.35 150.01 466.51 150.01 466.51 37.94 491.83 37.94 530.72 97.56 530.72 37.94 557.69 37.94 557.69 150.01'/>
    <polygon className='logo-green' points='367.99 150.01 298.18 150.01 298.18 37.94 367.99 37.94 367.99 64.38 325.86 64.38 325.86 78.56 365.45 78.56 365.45 104.94 325.86 104.94 325.86 123.5 367.99 123.5 367.99 150.01'/>
    <polygon className='logo-green' points='452.16 150.01 382.35 150.01 382.35 37.94 452.16 37.94 452.16 64.38 410.03 64.38 410.03 78.56 449.61 78.56 449.61 104.94 410.03 104.94 410.03 123.5 452.16 123.5 452.16 150.01'/>
    <path className='logo-green' d='M295.35,150H262.76L239.64,110.3h-6.87V150H205.09V37.94h34.48c13.78,0,24,2.79,31.15,8.54,7.63,6.12,11.5,15.11,11.5,26.72,0,12.87-5.38,22.8-15.66,29.17ZM232.77,84.18h6.93c7.58,0,10.69-1.69,11.87-2.69.64-.54,2.57-2.19,2.57-7.7,0-3.53-.76-5.89-2.26-7-1.26-.94-4.62-2.52-13-2.52h-6.15Z'/>
    <path className='logo-green' d='M147.14,151.32c-16.77,0-30.17-5.23-39.82-15.53C97.82,125.65,93,111.58,93,94c0-11.25,2.34-21.35,7-30a48.73,48.73,0,0,1,20.67-20.55c8.66-4.56,18.81-6.86,30.18-6.86a80.63,80.63,0,0,1,31.73,6.27l7.72,3.29-11,25-7.53-3.2a55.76,55.76,0,0,0-21.65-4.83c-9.33,0-16.26,2.55-21.21,7.79S121.34,83.79,121.34,94c0,10.65,2.41,18.6,7.17,23.64s11.8,7.4,21.7,7.4a75.88,75.88,0,0,0,11.11-.82V109.91H140V83.4h49v60.79L183.24,146A113,113,0,0,1,166.6,150,125.15,125.15,0,0,1,147.14,151.32Z'/>
  </g>

  <style jsx>{`
    .svg {
    }
    .building {
      fill: url(#building);
    }
    .window {
      fill: url(#window-gradient);
      opacity: 0.8;
    }
    .purple {
      fill: #73308a;
    }
    .blue {
      fill: #4c4cff;
    }
    .logo-detention {
      fill: url(#water);
      stroke: #4c4cff;
      stroke-weight: 80px;
    }
    .logo-roof,
    .gray {
      fill: #4c414c;
    }
    .logo-green,
    .green {
      fill: #74bf08;
    }
    .mech {
      fill: #3c2727;
    }
    .covering:hover .gray {
      fill: #6f666f;
      stroke: white;
      stroke-weight: 50px;
    }
    .covering:hover .green {
      fill: #8fcb39;
      stroke: white;
      stroke-weight: 50px;
    }
    .covering:hover .blue {
      fill: #6f6fff;
      stroke: white;
      stroke-weight: 50px;
    }
    .covering:hover .purple {
      fill: #8f59a1;
      stroke: white;
      stroke-weight: 50px;
    }
  `}</style>
</svg>

}
