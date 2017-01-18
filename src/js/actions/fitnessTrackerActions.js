import axios from 'axios';

const apiUrl = "http://localhost:8009/";

export function fetchLocation(ip) {
  return function(dispatch) {
    axios.get('https://freegeoip.net/json/'+ip)
    .then((response) => {
      let location = response.data;
      dispatch({type: "FETCH_LOCATION_FULFILLED", payload: location });
    });
  }
}
