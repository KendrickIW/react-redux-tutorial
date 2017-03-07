import axios from 'axios';

const fetchTimeslotsRequest = () => ({
  type: 'FETCH_TIMESLOTS_PENDING',
});

const fetchTimeslotsSuccess = data => ({
  type: 'FETCH_TIMESLOTS_FULFILLED',
  payload: data,
});

const fetchTimeslotsError = message => ({
  type: 'FETCH_TIMESLOTS_REJECTED',
  payload: message,
});

const fetchTimeslots = () => ((dispatch) => {
  dispatch(fetchTimeslotsRequest());
  return axios.get('/api/timeslots')
    .then((response) => {
      dispatch(fetchTimeslotsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchTimeslotsError(error.message));
    });
});

export { fetchTimeslots };
