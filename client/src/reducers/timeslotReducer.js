const initialState = { timeslots: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TIMESLOTS_FULFILLED': {
      return { ...state, timeslots: action.payload.timeslots };
    }
    default: {
      return state;
    }
  }
};
