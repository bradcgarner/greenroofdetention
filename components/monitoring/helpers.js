import fetch              from 'isomorphic-unfetch';

const REACT_APP_BASE_URL = process.env.REACT_APP_SEARCH_URL;

// @@@@@@@@@@@@@@@ ACTUAL FETCHES @@@@@@@@@@@@@@@

export const getSomething = url => {
  const init = {
    method: 'GET',
    // headers: {
    //   'Authorization': 'Bearer ' + authToken,
    // }
  };
  return fetch(url, init)
    .then(dataReturned=>{
      console.log('dataReturned from getSomething url', url,dataReturned)
      if(!dataReturned.ok){
        return Promise.reject(dataReturned.statusText);
      }
      if(dataReturned.status === 204){
        return {status: 204}
      }
      return dataReturned.json();
    })
    .then(data=>{
      return data;
    })
    .catch(error=>{
      console.error(error);
      return {error};
    });
}

export const putSomething = (url, body) => {
  const init = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  return fetch(url, init)
    .then(dataReturned=>{
      if(!dataReturned.ok){
        return Promise.reject(dataReturned.statusText);
      }
      if(dataReturned.status === 204){
        return {status: 204}
      }
      return dataReturned.json();
    })
    .then(data=>{
      return data;
    })
    .catch(error=>{
      console.error(error);
      return {error};
    });
}

export const fetchKeys = () => {
  const url =`${REACT_APP_BASE_URL}/api/grd/keys`
  return getSomething(url);
};

export const listEvents = options => {
  const url=`${REACT_APP_BASE_URL}/api/events/weatherEvents`
  return getSomething(url);
};

export const getPlatformData = options => {
  const url=`${REACT_APP_BASE_URL}/api/events/dataPoints/platformsLoFreq`;
  return putSomething(url, options);
}