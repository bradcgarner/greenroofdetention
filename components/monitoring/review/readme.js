const optionOverlay = options.optionOverlay ? <label className='search-sel-label-radio tooltip'>
    <div className='popover'>
      <p>Check overlay to superimpose platform events.  If you do not check this, events will be displayed sequentially side-by-side, which may be preferable.</p>
    </div>
    <div>
      <input
        type='checkbox'
        className='search-sel-input-radio'
        onChange={()=>props.toggleOverlay()} 
        checked={props.groupOnMount}
        value={props.groupOnMount} />
      overlay
    </div>
  </label> : null ;

  const legendEvents = options.legendEvents ? <div className='search-sel-label-radio tooltip'>
    <div className='popover popover-wide-readme'>
      <p>Events include the "rain event" and the non-rain period following the rain event.  A rain event is a period of constant or intermittent rain, with no gap in rainfall exceeding 6 hours.  When 6 hours passes without rain, we consider the next raindrop to be the beginning of a subsequent event.</p>
      <p>Platform data is posted within approximately 2 hours of occurrence, including as many measurements as we can calculate as point-in-time, such as VWC and inches of runoff.</p>
      <p>Event analysis is not performed until the event is completely over, i.e. event analysis for a prior event begins just after the next event begins, cued by rainfall.  Event analysis includes the remaining measurements, including cumulative measurements, such as cumulative rainfall.</p>
    </div>
    Events?
  </div> : null ;

  const legendRecents = options.legendRecents ? <div className='search-sel-label-radio tooltip'>
    <div className='popover popover-wide-readme'>
      <p>+ Retrieve platform data since the most recent event.  This data has not been categorized into events yet, usually because this event is not over yet.</p>
      <p>1d Retrieve platform data from the past day (starting 28 hours ago to be exact).  Note that platform data may not be available for graphing for until about 2 hours after weather occurs.  This is because there is a 1-hour delay inherient to 1-hour intervals + the server might need to repair corruption if it occurs + the server needs to transcribe the data to a different table and format.</p>
      <p>2d Retrieve platform data from the past 2 days (starting 52 hours ago to be exact).  Note that platform data may not be available for graphing for until about 2 hours after weather occurs.  This is because there is a 1-hour delay inherient to 1-hour intervals + the server might need to repair corruption if it occurs + the server needs to transcribe the data to a different table and format.</p>
    </div>
    1d, 2d, + ?
  </div> : null 