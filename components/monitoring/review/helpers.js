import { createTimeframes,
  isObjectLiteral,
  numberToLetter,
  immutableArraySplice,
  precisionRound,
  isPrimitiveNumber,
  convertTimestampToString } from 'conjunction-junction';
import { 
    calcMinimumWindowDimensions,
    calcProportionalDimensions }  from 'graphing-helpers';
const { 
 daysAgo1, 
 daysAgo2, 
 daysAgo7, 
 daysAgo14,
 daysAgo21,
 daysAgo28 } = createTimeframes();

 const now = new Date();

 export const dateRangesRecent = [
  {
    event_num: '1d',
    id: '1d',
    timestamp_end: now,
    timestamp_start: daysAgo1,
    rain_rate_peak_in_sf_hr: '?',
    rain_volume_in_sf: '?',
  },
  {
    event_num: '2d',
    id: '2d',
    timestamp_end: now,
    timestamp_start: daysAgo2,
    rain_rate_peak_in_sf_hr: '?',
    rain_volume_in_sf: '?',
  },
  {
    event_num: '7d',
    id: '7d',
    timestamp_end: now,
    timestamp_start: daysAgo7,
    rain_rate_peak_in_sf_hr: '?',
    rain_volume_in_sf: '?',
  },
  {
    event_num: '14d',
    id: '14d',
    timestamp_end: now,
    timestamp_start: daysAgo14,
    rain_rate_peak_in_sf_hr: '?',
    rain_volume_in_sf: '?',
  },
  {
    event_num: '21d',
    id: '21d',
    timestamp_end: now,
    timestamp_start: daysAgo21,
    rain_rate_peak_in_sf_hr: '?',
    rain_volume_in_sf: '?',
  },
  {
    event_num: '28d',
    id: '28d',
    timestamp_end: now,
    timestamp_start: daysAgo28,
    rain_rate_peak_in_sf_hr: '?',
    rain_volume_in_sf: '?',
  },
  {
    event_num: 'r',
    id: 'r',
    timestamp_end: now,
    timestamp_start: null,
    rain_rate_peak_in_sf_hr: '?',
    rain_volume_in_sf: '?',
  }
];

export const dateRanges = [
  {
    days: 1,
    label: 'past 24 hours',
    date: daysAgo1,
    value: convertTimestampToString(daysAgo1, 'd t z'),
  },
  {
    days: 2,
    label: 'past 48 hours',
    date: daysAgo2,
    value: convertTimestampToString(daysAgo2, 'd t z'),
  },
  {
    days: 7,
    label: 'past week',
    date: daysAgo7,
    value: convertTimestampToString(daysAgo7, 'd t z'),
  },
  {
    days: 14,
    label: 'past 2 weeks',
    date: daysAgo14,
    value: convertTimestampToString(daysAgo14, 'd t z'),
  },
  {
    label: 'past 3 weeks',
    date: daysAgo21,
    value: convertTimestampToString(daysAgo21, 'd t z'),
  },
  {
    days: 28,
    label: 'past 4 weeks',
    date: daysAgo28,
    value: convertTimestampToString(daysAgo28, 'd t z'),
  },
];

export const preprocessEvents = (events, realEvents) => {
  const lastRealEvent = Array.isArray(realEvents) && isObjectLiteral(realEvents[0]) ? realEvents[0] : {} ;
  return events.map(e=>{

    const platforms = 
      Array.isArray(e.platformslofreqevents_analysis_ids) ?
        e.platformslofreqevents_analysis_ids :
        [] ;

    const analyzedPct = 
      platforms.length === 1 && !platforms[0] ? 
      0 :
      precisionRound(platforms.length/4, 2);

    const readyPct = analyzedPct ? 
      `${analyzedPct*100}%` :
      '?' ;

    const durationHrs = 
      e.id_off && e.id_start ? 
      precisionRound(e.id_off - e.id_start,0) + 1 :
      '?' ;

    const event_num = e.event_num === 'r' && lastRealEvent.event_num ?
      `${lastRealEvent.event_num}+` :
      e.event_num ;

    return {
      ...e,
      event_num,
      readyPct,
      durationHrs,
    }
  }); 
};

export const updateFilter = (priorFilter, value, key, type) => {
  const filter = {...priorFilter};
  const thisFilter = filter[key] ? filter[key] : {} ;
  // type = min, max, string
  if(type === 'min' || type === 'max'){
    thisFilter[type] = parseFloat(value);
  } else if(type === 'list'){
    thisFilter.type = 'list';
    if(!Array.isArray(thisFilter.list)) {
      thisFilter.list = [];
    } 
    const index = thisFilter.list.findIndex(v=>v===value);
    if(index > -1){
      thisFilter.list = immutableArraySplice(index, thisFilter.list);
    } else {
      thisFilter.list.push(value);
    }
  }
  filter[key] = thisFilter;
  return filter;
}

export const returnPassingFilter = (test, filter={}) => {
  let passing = true;
  for(let key in filter){
    const thisFilter = filter[key];
    for(let type in thisFilter){
      if(type === 'min' && test[key] < thisFilter.min){
        passing = false;
      } else if(type === 'max' && test[key] > thisFilter.max){
        passing = false;
      } else if(type === 'list'){
        thisFilter.list = Array.isArray(thisFilter.list) ? thisFilter.list : [] ;
        if(thisFilter.list.length > 0 && !thisFilter.list.includes(test[key])){
          passing = false;
        }
      }
    }
  }
  return passing;
}

export const filterItems = (items, filter, idsSelected) => {
  const ids = Array.isArray(idsSelected) ? idsSelected : [] ;

  const _items = Array.isArray(items) ?
    items.filter(e=>{
      const checked = ids.includes(e.id) ? true : false ;
      const passesFilter = checked ? true :
        returnPassingFilter(e, filter);

    return passesFilter ;
  }) : [] ;

  return _items;
}

export const calcDescription = (eventsObject, eventsIdsSelected) => {
  if(!Array.isArray(eventsIdsSelected) || 
  !isObjectLiteral(eventsObject)){
    return '';
  }
  const arr = eventsIdsSelected.map(id=>{
    const e = isObjectLiteral(eventsObject[id]) ? eventsObject[id] : {} ;
    const desc = e.notes_public || 'no description';
    const full = `Event #${id}: ${desc}`;
    return full;
  });
  const legendDescription = arr.join(' | ');
  return `${legendDescription}`;
};

export const _getNextIdsToSelect = state => {
  if(isPrimitiveNumber(state.advanceBy)){
    const eventsIdsPriorSelected = 
      Array.isArray(state.eventsIdsSelected) ?
      state.eventsIdsSelected : [] ;
    const eventsIdsThatAreNumbers = eventsIdsPriorSelected.filter(id=>isPrimitiveNumber(id));
    const maxEventsIdsPriorSelected = Math.max.apply(null, eventsIdsThatAreNumbers);
    const minEventsIdsPriorSelected = Math.min.apply(null, eventsIdsThatAreNumbers);
    const nextIdsToSelect = 
      state.advanceBy > 0 ?
        [maxEventsIdsPriorSelected + state.advanceBy] :
        [minEventsIdsPriorSelected + state.advanceBy] ;
    return nextIdsToSelect;
  }
  return state.eventsIdsSelected;
}

export const _formatPlatformSearchInner = (eventsObject, state, nextIdsToSelect) => {
  const _state = isObjectLiteral(state) ? state : {} ;
  const platformsLoFreqEventsIds = [];
  let   platformsLoFreqRecents   = [];
  const _nextIdsToSelect = 
    Array.isArray(nextIdsToSelect) ? 
    nextIdsToSelect :
    [] ;
  const platformsSelected = 
    isObjectLiteral(_state.platformsSelected) ? 
    _state.platformsSelected : 
    {} ;
  
  _nextIdsToSelect.forEach(e=>{
    const thisEvent = 
      isObjectLiteral(eventsObject) && 
      isObjectLiteral(eventsObject[e]) ? eventsObject[e]:
      {};
    const idList = Array.isArray(thisEvent.platformslofreqevents_ids) ? 
      thisEvent.platformslofreqevents_ids : 
      [] ;
    const type = 
      typeof e === 'string' ? 
      'recents' :
      idList[0] !== null && idList[0] !== undefined && idList.length > 0 ? 
      'ids' :
      null;

    if(type === 'recents'){
      platformsLoFreqRecents.push(e);
    } else if(type === 'ids') {
      idList.forEach((_letter, i)=>{
        const letter = numberToLetter(i+1)
        if(platformsSelected[letter]){
          const id = thisEvent.platformslofreqevents_ids[i];
          platformsLoFreqEventsIds.push(id);
        }
      });
    } 
  });
  const eventCount = 
    platformsLoFreqEventsIds.length +
    (platformsLoFreqRecents ? 1 : 0) ;
  const groupOnMount =
    eventCount > 1 && state.groupOnMount ?
    true :
    false ;

  const platformSearch = {
    platformsSelected,
    eventsIdsSelected: nextIdsToSelect,
    groupOnMount,
    platformsLoFreqEventsIds, 
    platformsLoFreqRecents, 
    rainOnly: typeof state.rainOnly === 'boolean' ? state.rainOnly : false,
    // fields used for stats only
    advanceBy: state.advanceBy,
  }
  return platformSearch;
};

export const formatPlatformSearch = (eventsObject, state) => {
  const nextIdsToSelect = _getNextIdsToSelect(state);
  const platformSearch = _formatPlatformSearchInner(eventsObject, state, nextIdsToSelect);
  return  platformSearch;
};

export const formatPlatformGraphTitle = (eventsObject, submission) => {
  const _obj = isObjectLiteral(eventsObject) ? eventsObject : {} ;
  const _ids = submission && Array.isArray(submission.eventsIdsSelected) ? 
    submission.eventsIdsSelected : [] ;

  const titleTextObject = {};
  _ids.forEach(id=>{
    const event = _obj[`${id}`] ? _obj[`${id}`] : {} ;
    const tMajor = event.name ? event.name : `#${event.event_num}`;
    const tMinor = event.name ? null       : `(${event.rain_volume_in_sf}" / ${event.rain_rate_peak_in_sf_hr}in/hr)` ;
    titleTextObject[id] = {tMajor, tMinor};
  });

  return titleTextObject;
};

export const formatTestGraphTitle = (testsObject, submission) => {
  const _obj = isObjectLiteral(testsObject) ? testsObject : {} ;
  const _ids = submission && Array.isArray(submission.testsIdsSelected) ? 
    submission.testsIdsSelected : [] ;
  
  const titleTextObject = {};
  _ids.forEach(id=>{
    const name = 
      !_obj[id] ? 'unknown' :
      _obj[id].abbrevTest ? _obj[id].abbrevTest :
      `#${_obj[id].id}` ;
    const tSplit = typeof name === 'string' ? name.split('(') : [] ;
    const tMajor = tSplit[0];
    const tMinor = 
      tSplit[1] && _obj[id].abbrevTest ?
      `(#${id}: ${tSplit[1]}` :
      tSplit[1] ?
      `${tSplit[1]}` :
      `(#${id})` ;
    titleTextObject[id] = {tMajor, tMinor};
  });
  
  return titleTextObject;
};

export const calcGraphDims = () => {

  const _w = typeof window !== 'undefined' ? window : {} ;
  const {
    cssWidthOuter,
    cssHeightOuter } = calcMinimumWindowDimensions(_w);

  const dimInput = {
    cssWidthOuter,
    cssHeightOuter,
    width: {
      bigEnoughScreen: 800,
      percentOfScreen: 1,
      maxPctOfBigEnough: 1.2,
    },
    height: {
      bigEnoughScreen: 700,
      percentOfScreen: 1,
      maxPctOfBigEnough: 1,
    }
  };

  const { w, h } = calcProportionalDimensions(dimInput);

  return {
    cssWidthOuter: w,
    cssHeightOuter: h,
  };
}

export const loadVariablesPlatforms = state => {
  
  const {cssHeightOuter, cssWidthOuter} = calcGraphDims();

  return {
    cssHeightOuter,
    cssWidthOuter,
    preSetGroupEditMode: false,
    groupByOnMount: state.groupOnMount ? 'event_num' : null ,
    groupColors: {},
    yAxisUnitOptions: isObjectLiteral(state.yAxisUnitOptions) ? state.yAxisUnitOptions : {},
    xLabelKey: 'xLabel',
    xLabel: 'hourly measurements',
    groupAllow: false,
    advanceAllow: true,
    retreatAllow: true,
    groupsSub: ['A', 'B', 'C', 'D'], // IMPROVE THIS!!!! DON'T HARD-CODE IN THE 'A', etc. !!!!
    platformsSelected: {A:true,B:true,C:true,D:true},
    ready: true,
    preSetSaveSettings: state.groupOnMount ? 
      // if you are overlaying, save prefixes as a single
      {
        prefixGroups:     true,     
        prefixGroupsSub:  true,     
        preSetSaveAsType: 'single',
        useOnlyExplicitStylesWhenUngrouped: false,
        readMe: 'When saving, save group prefixes AND subGroup prefixes. Because heavily prefixed, this is intended to be read as a single.  Applicable to all types of graphs, but for a narrow use of each.'
      } :
      // if you are not overlaying, but pulling up platforms
      {
        prefixGroups:     false,  
        prefixGroupsSub:  true,   
        preSetSaveAsType: 'group',
        useOnlyExplicitStylesWhenUngrouped: false,
        readMe: 'When saving, save subGroup prefixes (such as platform A, B, C, etc.), but NOT group prefixes (such as event 10, 11, 12, etc). This is intended to be read as a group (but singles can read groups).  Most common for platforms.'
      },
  };
};

export const loadVariablesTests = state => {
  
  const {cssHeightOuter, cssWidthOuter} = calcGraphDims();

  const _yAxisUnitOptions = !isObjectLiteral(state.yAxisUnitOptions) ? {} : state.yAxisUnitOptions ;
  
  const to = !isObjectLiteral(state.testsObject) ? {} : state.testsObject ;
  const groupByOnMount = Array.isArray(state.testsIdsSelected) && state.testsIdsSelected.length > 0 ?
      'id_test' :
      null ;

  const groupColors = {};
  if(groupByOnMount && Array.isArray(state.conditions)){
    state.conditions.forEach(condition=>{
      if(condition.field === 'id_test'){
        if(condition.value !== undefined){
          groupColors[condition.value] = 
            !to[condition.value] ? null :
            to[condition.value].colorTest;
        }
      }
    });
  }

  return {
    cssHeightOuter,
    cssWidthOuter,
    preSetGroupEditMode: Array.isArray(state.conditions) &&
      state.conditions.length === 1 ?
      true : 
      false,
    groupByOnMount,
    groupColors,
    xLabelKey: null,
    xLabel: 'minutes',
    groupAllow: true,
    groupsSub: null,
    ready: true,
    preSetSaveSettings: state.groupOnMount ? 
    // if you are overlaying, save prefixes as a single
    {
      prefixGroups:     true,     
      prefixGroupsSub:  true,     
      preSetSaveAsType: 'single',
      useOnlyExplicitStylesWhenUngrouped: true,
      readMe: 'When saving, save group prefixes AND subGroup prefixes. Because heavily prefixed, this is intended to be read as a single.  Applicable to all types of graphs, but for a narrow use of each.'
    } :
    {
      prefixGroups:     false,  
      prefixGroupsSub:  false,
      preSetSaveAsType: 'group',
      useOnlyExplicitStylesWhenUngrouped: true,
      readMe: 'When saving, do not prefix any layers. Most common for lab tests. Intended to be read as a group (but singles can read groups).'
    },
    yAxisUnitOptions: {
      ..._yAxisUnitOptions,
      gals_total: {
        min: 0,
        max: 250,
      },
      gals_per_increment: {
        min: 0,
        max: undefined, //4,
      },
      inches_per_increment: {
        min: 0,
        max: undefined, //0.1,
      },
      lbs_per_increment: {
        min: 0,
        max: undefined, //40,
      },
    }
  };
};