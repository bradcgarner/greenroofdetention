export const searchEvents = input => dispatch => {
  const {
    rainOnly,
    eventsIdsSelected,
    platformsSelected,
    platformsLoFreqEventsIds, 
    platformsLoFreqDates, 
    platformsLoFreqRecents, 
    hideSpinner} = input;

  if(!hideSpinner){
    console.log('trigger loading')
    // dispatch(actionsDisplay.toggleLoading(true));
  }
  const url=`${REACT_APP_SEARCH_URL}/api/events/dataPoints/platformsLoFreq`
  const headers = {
    'Content-Type': 'application/json',
  }
  // refactor this so we don't spread everything out and then recompact
  const conditions = {
    platformsLoFreqEventsIds,
    platformsLoFreqDates,
    platformsLoFreqRecents,
    grouped : false,
    groupBy : null,
    asObject: false,
    asArray : true,
    rainOnly,
  }
  const init = {
    method: 'PUT',
    headers,
    body: JSON.stringify(conditions),
  }
  return fetch(url, init)
  .then(result=>{
    if(!result.ok){
      dispatch(actionsDisplay.toggleLoading(false));
      return Promise.reject(result.statusText);
    }
    return result.json();
  })
  .then(results=>{
    const load = {
      rainOnly,
      eventsIdsSelected,
      platformsSelected,
      dataType:     1,
      results:      results.array,
    };
    console.log('load this', load);
    console.log('remove loading modal')
  })
  .catch(error=>{
    console.error(`Opps! Something went wrong. The server says: ${error}`);
  });
}