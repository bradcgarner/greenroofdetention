export default function Building(props) {

  const stopColor1 = '#a28ba2';
  const stopColor2 = '#816f81';
  const stopColor3 = '#aaa';
  const stopColor4 = '#ddd';

  return <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1775 950'>
    <defs>
      <linearGradient id="linear-gradient" x1="600" y1="200" x2="1000" y2="600" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor={stopColor1}/>
        <stop offset="1" stopColor={stopColor2}/>
      </linearGradient>
      <linearGradient id="building" x1="600" y1="200" x2="1000" y2="600" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor={stopColor3}/>
        <stop offset="1" stopColor={stopColor4}/>
      </linearGradient>
    </defs>
  <title>green roof detention for every building type</title>
    
  <g className="building-container">
    <polygon className="building" points="1333.5 752.5 1333.5 583 924.5 583 924.5 414 671.5 414 671.5 133 671.5 53 652.5 53 652.5 133 440.5 133 440.5 53 421.5 53 421.5 133 421.5 414 421.5 583 330.5 583 319.5 583 314.5 583 314.5 752.5 183.5 752.5 183.5 922.5 1494.5 922.5 1494.5 752.5 1333.5 752.5"/>
  </g>
  <g className="windows">
    <rect className="window" x="560.5" y="151" width="80" height="100"/>
    <rect className="window" x="448.5" y="151" width="80" height="100"/>
    <rect className="window" x="560.5" y="274" width="80" height="140"/>
    <rect className="window" x="448.5" y="274" width="80" height="140"/>
    <rect className="window" x="784.5" y="443" width="80" height="140"/>
    <rect className="window" x="896.5" y="443" width="28" height="140"/>
    <rect className="window" x="671.5" y="443" width="80" height="140"/>
    <rect className="window" x="560.5" y="443" width="80" height="140"/>
    <rect className="window" x="448.5" y="443" width="80" height="140"/>
    <rect className="window" x="784.5" y="613" width="80" height="140"/>
    <rect className="window" x="671.5" y="613" width="80" height="140"/>
    <rect className="window" x="560.5" y="613" width="80" height="140"/>
    <rect className="window" x="448.5" y="613" width="80" height="140"/>
    <rect className="window" x="341.5" y="613" width="80" height="140"/>
    <rect className="window" x="1227.5" y="613" width="80" height="140"/>
    <rect className="window" x="1116.5" y="613" width="80" height="140"/>
    <rect className="window" x="1004.5" y="613" width="80" height="140"/>
    <rect className="window" x="896.5" y="613" width="80" height="140"/>
    <rect className="window" x="784.5" y="782" width="80" height="140"/>
    <rect className="window" x="671.5" y="782" width="80" height="140"/>
    <rect className="window" x="560.5" y="782" width="80" height="140"/>
    <rect className="window" x="448.5" y="782" width="80" height="140"/>
    <rect className="window" x="341.5" y="782" width="80" height="140"/>
    <rect className="window" x="232.5" y="782" width="80" height="140"/>
    <rect className="window" x="183.5" y="782" width="22" height="140"/>
    <rect className="window" x="1333.5" y="782" width="80" height="140"/>
    <rect className="window" x="1447.5" y="782" width="47" height="140"/>
    <rect className="window" x="1227.5" y="782" width="80" height="140"/>
    <rect className="window" x="1116.5" y="782" width="80" height="140"/>
    <rect className="window" x="1004.5" y="782" width="80" height="140"/>
    <rect className="window" x="896.5" y="782" width="80" height="140"/>
  </g>
  <g className="level1-l">
    <g className="label">
      <path className="purple" d="M21.73,712.76H33A8.32,8.32,0,0,1,39.08,715a7.15,7.15,0,0,1,2.25,5.26,7.36,7.36,0,0,1-2.23,5.39A8.21,8.21,0,0,1,33,727.87H28V738H21.73ZM28,717.39v5.85H31q3.92,0,3.92-2.93a2.46,2.46,0,0,0-1-2.28,7.24,7.24,0,0,0-3.58-.64Z"/>
      <path className="purple" d="M64.46,712.76h6.29v14.33c0,3.68-1.09,6.48-3.27,8.38s-5.3,2.86-9.34,2.86-7.11-1-9.32-2.9-3.31-4.69-3.31-8.31V712.76h6.3v14.51a5.48,5.48,0,0,0,1.73,4.23,6.41,6.41,0,0,0,4.52,1.59,6.6,6.6,0,0,0,4.66-1.63,6,6,0,0,0,1.74-4.63Z"/>
      <path className="purple" d="M76.2,712.76H87.48a8.46,8.46,0,0,1,6,2.12A6.75,6.75,0,0,1,95.73,720q0,4.17-4.33,6.17c1.26.58,2.47,2.13,3.61,4.66s2.24,4.91,3.3,7.15H91.42c-.42-.83-1.13-2.41-2.16-4.75a14.72,14.72,0,0,0-2.62-4.5,3.44,3.44,0,0,0-2.34-1H82.49V738H76.2Zm6.29,4.63v5.74h3.32a3.9,3.9,0,0,0,2.52-.75,2.59,2.59,0,0,0,.93-2.14q0-2.85-3.59-2.85Z"/>
      <path className="purple" d="M101.49,712.76h11.26a8.32,8.32,0,0,1,6.09,2.22,7.16,7.16,0,0,1,2.26,5.26,7.4,7.4,0,0,1-2.23,5.39,8.22,8.22,0,0,1-6.08,2.24h-5V738h-6.29Zm6.29,4.63v5.85h2.93q3.92,0,3.92-2.93a2.46,2.46,0,0,0-1-2.28,7.24,7.24,0,0,0-3.58-.64Z"/>
      <path className="purple" d="M144.75,733.38V738H125.5V712.76h6.29v20.62Z"/>
      <path className="purple" d="M167,733.38V738H148.34V712.76H166.7v4.63H154.63v5.29h11.51v4.62H154.63v6.08Z"/>
    </g>
    <g className="purple">
      <rect className="purple" x="183.5" y="731" width="130" height="20"/>
    </g>
  </g>
  <g className="level1-r">
    <g className="label">
      <path className="blue" d="M1514.48,712.76h10.91a9.22,9.22,0,0,1,6.13,1.88,5.64,5.64,0,0,1,2.24,4.44q0,3.28-3.46,5a7.21,7.21,0,0,1,4,2.42,6.31,6.31,0,0,1,1.38,4.05,6.91,6.91,0,0,1-2.26,5.35q-2.25,2.05-6.65,2.06h-12.28Zm6.29,4.63v5.4h3.28a3.37,3.37,0,0,0,2.37-.78,2.53,2.53,0,0,0,.85-2,2.46,2.46,0,0,0-.85-1.92,3.46,3.46,0,0,0-2.37-.75Zm0,10v6h3.54a7.07,7.07,0,0,0,3.61-.7,2.63,2.63,0,0,0,1.1-2.41,2.45,2.45,0,0,0-1-2.09,4.63,4.63,0,0,0-2.8-.77Z"/>
      <path className="blue" d="M1559.55,733.38V738h-19.24V712.76h6.29v20.62Z"/>
      <path className="blue" d="M1581.79,712.76h6.29v14.33c0,3.68-1.09,6.48-3.27,8.38s-5.29,2.86-9.34,2.86-7.1-1-9.31-2.9-3.32-4.69-3.32-8.31V712.76h6.31v14.51a5.47,5.47,0,0,0,1.72,4.23,6.42,6.42,0,0,0,4.53,1.59,6.56,6.56,0,0,0,4.65-1.63,6,6,0,0,0,1.74-4.63Z"/>
      <path className="blue" d="M1612.22,733.38V738h-18.61V712.76H1612v4.63H1599.9v5.29h11.5v4.62h-11.5v6.08Z"/>
      <path d="M1634.76,738.33l6.26-25.89h3.81l-6.33,25.89Z"/>
      <path className="gray" d="M1682.33,714.51V720a21.62,21.62,0,0,0-9.43-2.33q-4.44,0-6.84,2.24a7.46,7.46,0,0,0-2.41,5.71,6.75,6.75,0,0,0,2.41,5.39,9.39,9.39,0,0,0,6.32,2.06,10.37,10.37,0,0,0,4.17-.91v-2.94h-3.65v-4.63h10v10.32a11.06,11.06,0,0,1-4.56,2.45,20.58,20.58,0,0,1-6.07,1,16,16,0,0,1-10.83-3.65,12.36,12.36,0,0,1,0-18.62q4.24-3.63,11-3.62A23,23,0,0,1,1682.33,714.51Z"/>
      <path className="gray" d="M1688.33,712.76h11.28a8.46,8.46,0,0,1,6,2.12,6.75,6.75,0,0,1,2.29,5.14q0,4.17-4.33,6.17c1.26.58,2.47,2.13,3.61,4.66s2.24,4.91,3.31,7.15h-6.9c-.42-.83-1.13-2.41-2.16-4.75a14.72,14.72,0,0,0-2.62-4.5,3.44,3.44,0,0,0-2.34-1h-1.81V738h-6.29Zm6.29,4.63v5.74h3.32a3.9,3.9,0,0,0,2.52-.75,2.59,2.59,0,0,0,.93-2.14c0-1.9-1.19-2.85-3.59-2.85Z"/>
      <path className="gray" d="M1728.14,712.76,1739.35,738h-6.76l-2.08-5h-11.3l-1.89,5h-6.66l10.2-25.24Zm.53,15.85-4.09-9.82-3.7,9.82Z"/>
      <path className="gray" d="M1745.33,738V726.22l-9.95-13.46H1743l5.47,7.93,5.5-7.93h7.6l-10,13.47V738Z"/>
    </g>
    <g className="gray">
      <rect className="gray" x="1335.5" y="711" width="159" height="18"/>
    </g>
    <g className="blue">
      <rect className="blue" x="1335.5" y="731" width="159" height="20"/>
    </g>
  </g>
  <g className="level2-l">
    <g className="label">
      <path className="purple" d="M158.73,561.76H170a8.32,8.32,0,0,1,6.09,2.22,7.15,7.15,0,0,1,2.25,5.26,7.36,7.36,0,0,1-2.23,5.39,8.21,8.21,0,0,1-6.08,2.24h-5V587h-6.29Zm6.29,4.63v5.85H168q3.92,0,3.92-2.93a2.46,2.46,0,0,0-1.05-2.28,7.24,7.24,0,0,0-3.58-.64Z"/>
      <path className="purple" d="M201.46,561.76h6.29v14.33c0,3.68-1.09,6.48-3.27,8.38s-5.3,2.86-9.34,2.86-7.11-1-9.32-2.9-3.31-4.69-3.31-8.31V561.76h6.3v14.51a5.48,5.48,0,0,0,1.73,4.23,6.41,6.41,0,0,0,4.52,1.59,6.6,6.6,0,0,0,4.66-1.63,6,6,0,0,0,1.74-4.63Z"/>
      <path className="purple" d="M213.2,561.76h11.28a8.46,8.46,0,0,1,6,2.12,6.75,6.75,0,0,1,2.29,5.14q0,4.17-4.33,6.17c1.26.58,2.47,2.13,3.61,4.66s2.24,4.91,3.3,7.15h-6.89c-.42-.83-1.13-2.41-2.16-4.75a14.72,14.72,0,0,0-2.62-4.5,3.44,3.44,0,0,0-2.34-1h-1.81V587H213.2Zm6.29,4.63v5.74h3.32a3.9,3.9,0,0,0,2.52-.75,2.59,2.59,0,0,0,.93-2.14q0-2.85-3.59-2.85Z"/>
      <path className="purple" d="M238.49,561.76h11.26a8.32,8.32,0,0,1,6.09,2.22,7.16,7.16,0,0,1,2.26,5.26,7.4,7.4,0,0,1-2.23,5.39,8.22,8.22,0,0,1-6.08,2.24h-5V587h-6.29Zm6.29,4.63v5.85h2.93q3.91,0,3.92-2.93a2.46,2.46,0,0,0-1-2.28,7.24,7.24,0,0,0-3.58-.64Z"/>
      <path className="purple" d="M281.75,582.38V587H262.5V561.76h6.29v20.62Z"/>
      <path className="purple" d="M304,582.38V587H285.34V561.76H303.7v4.63H291.63v5.29h11.51v4.62H291.63v6.08Z"/>
    </g>
    <g className="purple">
      <rect className="purple" x="314.5" y="561" width="105" height="20"/>
    </g>
  </g>
  <g className="level2-r">
    <g className="label">
      <path className="blue" d="M1359.48,542.76h10.91a9.22,9.22,0,0,1,6.13,1.88,5.64,5.64,0,0,1,2.24,4.44q0,3.28-3.46,5a7.21,7.21,0,0,1,4,2.42,6.31,6.31,0,0,1,1.38,4.05,6.91,6.91,0,0,1-2.26,5.35q-2.25,2.05-6.65,2.06h-12.28Zm6.29,4.63v5.4h3.28a3.37,3.37,0,0,0,2.37-.78,2.53,2.53,0,0,0,.85-2,2.46,2.46,0,0,0-.85-1.92,3.46,3.46,0,0,0-2.37-.75Zm0,10v6h3.54a7.07,7.07,0,0,0,3.61-.7,2.63,2.63,0,0,0,1.1-2.41,2.45,2.45,0,0,0-1-2.09,4.63,4.63,0,0,0-2.8-.77Z"/>
      <path className="blue" d="M1404.55,563.38V568h-19.24V542.76h6.29v20.62Z"/>
      <path className="blue" d="M1426.79,542.76h6.29v14.33c0,3.68-1.09,6.48-3.27,8.38s-5.29,2.86-9.34,2.86-7.1-1-9.31-2.9-3.32-4.69-3.32-8.31V542.76h6.31v14.51a5.47,5.47,0,0,0,1.72,4.23,6.42,6.42,0,0,0,4.53,1.59,6.56,6.56,0,0,0,4.65-1.63,6,6,0,0,0,1.74-4.63Z"/>
      <path className="blue" d="M1457.22,563.38V568h-18.61V542.76H1457v4.63H1444.9v5.29h11.5v4.62h-11.5v6.08Z"/>
      <path d="M1479.76,568.33l6.26-25.89h3.81l-6.33,25.89Z"/>
      <path className="green" d="M1527.33,544.51V550a21.62,21.62,0,0,0-9.43-2.33q-4.44,0-6.84,2.24a7.46,7.46,0,0,0-2.41,5.71,6.75,6.75,0,0,0,2.41,5.39,9.39,9.39,0,0,0,6.32,2.06,10.37,10.37,0,0,0,4.17-.91v-2.94h-3.65v-4.63h10v10.32a11.06,11.06,0,0,1-4.56,2.45,20.58,20.58,0,0,1-6.07,1,16,16,0,0,1-10.83-3.65,12.36,12.36,0,0,1,0-18.62q4.24-3.63,11-3.62A23,23,0,0,1,1527.33,544.51Z"/>
      <path className="green" d="M1533.33,542.76h11.28a8.46,8.46,0,0,1,6,2.12,6.75,6.75,0,0,1,2.29,5.14q0,4.17-4.33,6.17c1.26.58,2.47,2.13,3.61,4.66s2.24,4.91,3.31,7.15h-6.9c-.42-.83-1.13-2.41-2.16-4.75a14.72,14.72,0,0,0-2.62-4.5,3.44,3.44,0,0,0-2.34-1h-1.81V568h-6.29Zm6.29,4.63v5.74h3.32a3.9,3.9,0,0,0,2.52-.75,2.59,2.59,0,0,0,.93-2.14c0-1.9-1.19-2.85-3.59-2.85Z"/>
      <path className="green" d="M1577.05,563.38V568h-18.61V542.76h18.36v4.63h-12.07v5.29h11.51v4.62h-11.51v6.08Z"/>
      <path className="green" d="M1600.54,563.38V568h-18.61V542.76h18.36v4.63h-12.07v5.29h11.51v4.62h-11.51v6.08Z"/>
      <path className="green" d="M1630.91,542.76V568h-5.31l-13.93-16.17V568h-6.29V542.76h5.77l13.47,15.43V542.76Z"/>
    </g>
    <g className="gray">
      <rect className="gray" x="1293.5" y="541" width="40" height="18"/>
    </g>
    <g className="green">
      <rect className="green" x="926.5" y="541" width="364.21" height="18"/>
    </g>
    <g className="blue">
      <rect className="blue" x="926.5" y="561" width="407" height="20"/>
    </g>
  </g>
  <g className="level3">
    <g className="label">
      <path className="purple" d="M953.73,390.76H965a8.32,8.32,0,0,1,6.09,2.22,7.15,7.15,0,0,1,2.25,5.26,7.32,7.32,0,0,1-2.23,5.38,8.15,8.15,0,0,1-6.08,2.24h-5V416h-6.29Zm6.29,4.63v5.85H963q3.91,0,3.92-2.93a2.46,2.46,0,0,0-1-2.28,7.24,7.24,0,0,0-3.58-.64Z"/>
      <path className="purple" d="M996.46,390.76h6.29v14.33c0,3.68-1.09,6.48-3.27,8.38s-5.3,2.86-9.35,2.86-7.1-1-9.31-2.9-3.31-4.69-3.31-8.31V390.76h6.3v14.51a5.48,5.48,0,0,0,1.73,4.23,6.41,6.41,0,0,0,4.52,1.59,6.56,6.56,0,0,0,4.65-1.63,6,6,0,0,0,1.75-4.63Z"/>
      <path className="purple" d="M1008.2,390.76h11.27a8.46,8.46,0,0,1,6,2.12,6.75,6.75,0,0,1,2.29,5.14q0,4.17-4.33,6.17c1.26.58,2.47,2.13,3.61,4.66s2.24,4.91,3.3,7.15h-6.89c-.42-.83-1.13-2.41-2.16-4.75a14.48,14.48,0,0,0-2.63-4.5,3.4,3.4,0,0,0-2.34-1h-1.8V416h-6.29Zm6.29,4.63v5.74h3.32a3.9,3.9,0,0,0,2.52-.75,2.59,2.59,0,0,0,.93-2.14q0-2.85-3.59-2.85Z"/>
      <path className="purple" d="M1033.49,390.76h11.26a8.32,8.32,0,0,1,6.09,2.22,7.16,7.16,0,0,1,2.26,5.26,7.36,7.36,0,0,1-2.23,5.38,8.18,8.18,0,0,1-6.08,2.24h-5V416h-6.29Zm6.29,4.63v5.85h2.93q3.91,0,3.92-2.93a2.46,2.46,0,0,0-1.05-2.28,7.24,7.24,0,0,0-3.58-.64Z"/>
      <path className="purple" d="M1076.75,411.38V416H1057.5V390.76h6.29v20.62Z"/>
      <path className="purple" d="M1099,411.38V416h-18.61V390.76h18.36v4.63h-12.07v5.29h11.51v4.62h-11.51v6.08Z"/>
    </g>
    <g className="gray">
      <rect className="gray" x="884.5" y="392" width="40" height="20"/>
    </g>
    <g className="purple">
      <rect className="purple" x="673.5" y="392" width="209" height="20"/>
    </g>
  </g>
  <g className="level4" onClick={()=>console.log('level 4 was clicked')}>
    <g className="label">
      <path className="blue" d="M692.48,95.76h10.91a9.22,9.22,0,0,1,6.13,1.88,5.64,5.64,0,0,1,2.24,4.44c0,2.19-1.16,3.87-3.46,5a7.21,7.21,0,0,1,4,2.42,6.33,6.33,0,0,1,1.38,4,6.91,6.91,0,0,1-2.26,5.35q-2.25,2.06-6.65,2.06H692.48Zm6.29,4.63v5.4h3.28a3.37,3.37,0,0,0,2.37-.78,2.53,2.53,0,0,0,.85-2,2.43,2.43,0,0,0-.85-1.91,3.41,3.41,0,0,0-2.37-.76Zm0,10v6h3.54a7.07,7.07,0,0,0,3.61-.7,2.63,2.63,0,0,0,1.1-2.41,2.45,2.45,0,0,0-1-2.09,4.63,4.63,0,0,0-2.8-.77Z"/>
      <path className="blue" d="M737.55,116.38V121H718.31V95.76h6.29v20.62Z"/>
      <path className="blue" d="M759.79,95.76h6.29v14.33c0,3.68-1.09,6.48-3.27,8.38s-5.29,2.86-9.34,2.86-7.1-1-9.31-2.9-3.32-4.69-3.32-8.31V95.76h6.31v14.51a5.47,5.47,0,0,0,1.72,4.23,6.42,6.42,0,0,0,4.53,1.59,6.56,6.56,0,0,0,4.65-1.63,6,6,0,0,0,1.74-4.63Z"/>
      <path className="blue" d="M790.22,116.38V121H771.61V95.76H790v4.63H777.9v5.29h11.5v4.62H777.9v6.08Z"/>
      <path d="M812.76,121.33,819,95.44h3.81l-6.33,25.89Z"/>
      <path className="gray" d="M860.33,97.51V103a21.62,21.62,0,0,0-9.43-2.33q-4.44,0-6.84,2.24a7.46,7.46,0,0,0-2.41,5.71,6.75,6.75,0,0,0,2.41,5.39,9.39,9.39,0,0,0,6.32,2.06,10.37,10.37,0,0,0,4.17-.91v-2.94H850.9v-4.63h10v10.32a11.06,11.06,0,0,1-4.56,2.45,20.58,20.58,0,0,1-6.07,1,16,16,0,0,1-10.83-3.65,12.36,12.36,0,0,1,0-18.62q4.25-3.63,11-3.62A23,23,0,0,1,860.33,97.51Z"/>
      <path className="gray" d="M866.33,95.76h11.28a8.46,8.46,0,0,1,6,2.12,6.75,6.75,0,0,1,2.29,5.14q0,4.17-4.33,6.17c1.26.58,2.47,2.13,3.61,4.66s2.24,4.91,3.31,7.15h-6.9c-.42-.83-1.13-2.41-2.16-4.75a14.72,14.72,0,0,0-2.62-4.5,3.44,3.44,0,0,0-2.34-1h-1.81V121h-6.29Zm6.29,4.63v5.74h3.32a3.9,3.9,0,0,0,2.52-.75,2.59,2.59,0,0,0,.93-2.14c0-1.9-1.19-2.85-3.59-2.85Z"/>
      <path className="gray" d="M906.14,95.76,917.35,121h-6.76l-2.08-5h-11.3l-1.89,5h-6.66l10.2-25.24Zm.53,15.85-4.09-9.81-3.7,9.81Z"/>
      <path className="gray" d="M923.33,121V109.22l-10-13.46H921l5.47,7.93,5.5-7.93h7.6l-10,13.47V121Z"/>
    </g>
    <g className="blue">
      <rect className="blue" x="441.5" y="111" width="209" height="20"/>
    </g>
    <g className="gra">
      <rect className="gray" x="441.5" y="91" width="209" height="18"/>
    </g>
    <g className="mech-r">
      <rect className="mech" x="559" y="25.5" width="69" height="60"/>
      <path d="M627.5,26V85h-68V26h68m1-1h-70V86h70V25Z"/>
    </g>
    <g className="mech-l">
      <rect className="mech" x="463" y="40.5" width="69" height="45"/>
      <path d="M531.5,41V85h-68V41h68m1-1h-70V86h70V40Z"/>
    </g>
  </g>
  <style jsx>{`
      .building {
        fill: url(#building);
      }
      .window {
        fill: url(#linear-gradient);
        // opacity: 0.2;
      }
      .purple {
        fill: #73308a;
      }
      .blue {
        fill: #4c4cff;
      }
      .blue2 {
        fill: #7806fc;
      }
      .gray {
        fill: #4c414c;
      }
      .green {
        fill: #74bf08;
      }
      .mech {
        fill: #3c2727;
      }
    `}</style>
</svg>

}
