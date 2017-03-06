export default (state = {
  timeslots: []
}, action) => {
  switch (action.type) {
    case 'FETCHED_TIMESLOTS': {
      state = {...state, timeslots: action.payload}
    }
  }
  return state;
}
