import { 
  isObjectLiteral,
  isPrimitiveNumber,
  immutableArrayInsert,
  numberToLetter, } from 'conjunction-junction';
  
export const updateSearchConditions = (condition, conditions) => {
  const { group, groupPosition, index, table, field, value, rel, next, nextGroup } = condition;
  const parsedCondition = { table, field, value, rel, next, nextGroup };
  const oldCondition = conditions[index];
  const newCondition = group ?
    immutableArrayInsert(groupPosition, oldCondition, parsedCondition) :
    parsedCondition;
  const newConditions = immutableArrayInsert(index, conditions, newCondition)
  return newConditions;
};
  
export const splitSearchCondition = (index, conditions, defaultCondition) => {
  const condition = conditions[index];
  const newCondition = isObjectLiteral(condition) ?
    [condition, defaultCondition] :
    Array.isArray(condition) ?
    [...condition, defaultCondition] :
    defaultCondition;
  const newConditions = immutableArrayInsert(index, conditions, newCondition);
  return newConditions;
}

const _formatGraphTitle = input => {
  const _input = !isObjectLiteral(input) ? {} : input ;
  const titleTextObject = {};
  const eo = !isObjectLiteral(_input.eventsObject) ? {} : _input.eventsObject ;
  const to = !isObjectLiteral(_input.testsObject) ? {} : _input.testsObject ;
  const arr = Array.isArray(input.array) ? input.array : [] ;

  if(input.formType === 'platforms'){
    arr.forEach(id=>{
      const event = eo[`${id}`] ?
        eo[`${id}`] : {} ;
      const tMajor = `#${event.event_num}`;
      const tMinor = `(${event.rain_volume_in_sf}" / ${event.rain_rate_peak_in_sf_hr}in/hr)` ;
      titleTextObject[id] = {tMajor, tMinor};
    });
  } else {
    arr.forEach(c=>{
      const test = to[c.value] ?
        to[c.value].abbrevTest : '' ;
      const tSplit = test.split('(');
      const tMajor = tSplit[0];
      const tMinor = tSplit[1] ? `(#${c.value}: ${tSplit[1]}` : `(#${c.value})` ;
      titleTextObject[c.value] = {tMajor, tMinor};
    });
  }
  
  const graphTitleText = 
    input.formType === 'weather' ? 
      'platforms and weather' :
    input.formType === 'test_measurements' ?
      titleTextObject :
    input.formType === 'platforms' ?
      titleTextObject :
      'search results' ;
  
  return graphTitleText;
};

export const _formatPlatformSearchInner = (state, nextIdsToSelect) => {
  const _state = isObjectLiteral(state) ? state : {} ;
  const platformsLoFreqEventsIds = [];
  const platformsLoFreqDates     = [];
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
      !isObjectLiteral(_state.eventsObject) ? {} :
      !isObjectLiteral(_state.eventsObject[e]) ? {} :
      _state.eventsObject[e];
    const idList = thisEvent.platformslofreqevents_ids;
    const type = 
      typeof e === 'string' ? 'recents' :
      !Array.isArray(idList) ? 'dates' :
      idList[0] === null || idList[0] === undefined || idList.length <= 0 ? 'dates' :
      'ids';

    if(type === 'ids'){
      idList.forEach((_id, i)=>{
        const letter = numberToLetter(i+1)
        if(platformsSelected[letter]){
          const id = thisEvent.platformslofreqevents_ids[i];
          platformsLoFreqEventsIds.push(id);
        }
      });
    } else if(type === 'dates'){
      platformsLoFreqDates.push({
        start: thisEvent.timestamp_start, 
        end:   thisEvent.timestamp_end
      });
    } else if(type === 'recents'){
      platformsLoFreqRecents.push(e);
    }
  });
  const eventCount = 
    platformsLoFreqEventsIds.length +
    platformsLoFreqDates.length + 
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
    platformsLoFreqDates, 
    platformsLoFreqRecents, 
    rainOnly: state.rainOnly,
  }
  return platformSearch;
};

export const formatPlatformSearch = state => {
  const eventsIdsPriorSelected = 
    !Array.isArray(state.eventsIdsSelected) ?
    [] :
    state.eventsIdsSelected;
  const eventsIdsThatAreNumbers = eventsIdsPriorSelected.filter(id=>isPrimitiveNumber(id));
  const maxEventsIdsPriorSelected = Math.max.apply(null, eventsIdsThatAreNumbers);
  const minEventsIdsPriorSelected = Math.min.apply(null, eventsIdsThatAreNumbers);
  const nextIdsToSelect = 
    !isPrimitiveNumber(state.advanceBy) ? 
      state.eventsIdsSelected :
    state.advanceBy > 0 ?
      [maxEventsIdsPriorSelected - state.advanceBy] :
      [minEventsIdsPriorSelected + state.advanceBy] ;

  const platformSearch = _formatPlatformSearchInner(state, nextIdsToSelect);

  const graphTitleInput = {
    ...state,
    array: 
      state.formType === 'platforms' ? 
      nextIdsToSelect :
      state.conditions,
  };

  const graphTitleText = _formatGraphTitle(graphTitleInput);
  
  return {
    graphTitleText,
    platformSearch
  };
};

export const futureFunction = (search) => {
    // WE ARE NOT USING THIS PART NOW!!!!!
    // you can see the most recent fetch  
    // THE "SUBMISSION" PART IS FOR LATER, FOR NON-EVENT SUBMISSIONS
    const submission = {
      table:      search.table,      // keep
      conditions: search.conditions, // CHANGE!!!
      select:     search.select,     // keep
      groupJoins: search.groupJoins, // keep
      limit:      search.limit,      // keep???
      order:      search.order,      // keep
    };
  console.log('this is future', submission, 'keep this to prevent console warnings')
};

export const loadVariables = state => {
  const _yAxisUnitOptions = !isObjectLiteral(state.yAxisUnitOptions) ? {} : state.yAxisUnitOptions ;
  const to = !isObjectLiteral(state.testsObject) ? {} : state.testsObject ;
  const groupByOnMount =
    !state.groupOnMount ?
      null :
    state.formType === 'test_measurements' ?
      'id_test' : 
    state.formType === 'platforms' ?
      'event_num' :
    null ;

  const preSetGroupEditMode = 
    state.formType === 'test_measurements' &&
    state.conditions.length === 1 ?
    true : 
    false ;

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

  const xLabelKey = 
    state.formType === 'weather' ? 'xLabel' :
    // edit graphWrapper to choose the most appropriate match to the label (e.g. first in series)
    state.formType === 'platforms' ? 'xLabel' :
    null;

  const xLabel = 
    state.formType === 'weather'   ? 'hourly measurements' :
    state.formType === 'platforms' ? 'hourly measurements' :
    'minutes';

  const advanceAllow = 
    xLabel === 'hourly measurements' ? true : false ;

  const groupAllow = 
    state.formType === 'weather' ? false :
    state.formType === 'platforms' ? false :
    true;

  // IMPROVE THIS!!!! DON'T HARD-CODE IN THE 'A', etc. !!!!
  const groupsSub = 
    state.formType === 'platforms' ?
      ['A', 'B', 'C', 'D'] :
      null ;

  const useOnlyExplicitStylesWhenUngrouped = 
    state.formType === 'test_measurements' ?
    true : 
    false ;

  const preSetSaveSettings = 
    state.groupOnMount ? 
    // if you are overlaying, save prefixes as a single
    {
      prefixGroups:     true,     
      prefixGroupsSub:  true,     
      preSetSaveAsType: 'single',
      useOnlyExplicitStylesWhenUngrouped,
      readMe: 'When saving, save group prefixes AND subGroup prefixes. Because heavily prefixed, this is intended to be read as a single.  Applicable to all types of graphs, but for a narrow use of each.'
    } :
    // if you are not overlaying:
    // but pulling up platforms
    groupsSub ? // defined a few lines up ^^^
    {
      prefixGroups:     false,  
      prefixGroupsSub:  true,   
      preSetSaveAsType: 'group',
      useOnlyExplicitStylesWhenUngrouped,
      readMe: 'When saving, save subGroup prefixes (such as platform A, B, C, etc.), but NOT group prefixes (such as event 10, 11, 12, etc). This is intended to be read as a group (but singles can read groups).  Most common for platforms.'
    } :
    {
      prefixGroups:     false,  
      prefixGroupsSub:  false,
      preSetSaveAsType: 'group',
      useOnlyExplicitStylesWhenUngrouped,
      readMe: 'When saving, do not prefix any layers. Most common for lab tests. Intended to be read as a group (but singles can read groups).'
    } ;

  const layersRawPrefixCount = 
    state.formType === 'platforms' ? 1 :
    0 ;

  const graphTitleInput = {
    ...state,
    array: 
      state.formType === 'platforms' ? 
      state.eventsIdsSelected :
      state.conditions,
  }
  const graphTitleText = _formatGraphTitle(graphTitleInput);

  const yao = 
    state.formType === 'test_measurements' ?
    {
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
    } :
    _yAxisUnitOptions ;

  return {
    graphTitleText,
    preSetGroupEditMode,
    preSetSaveSettings,
    groupByOnMount,
    groupColors,
    yAxisUnitOptions: yao,
    xLabelKey,
    xLabel,
    advanceAllow,
    groupAllow,
    groupsSub,
    ready: true,
    layersRawPrefixCount,
  };
};