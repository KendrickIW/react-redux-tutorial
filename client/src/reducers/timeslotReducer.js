const timeslot = (state, action) => {
  switch (action.type) {
    case 'EDIT_TIMESLOT': {
      if (state.id !== action.payload.id) {
        return state;
      }

      return {
        ...state,
        name: action.payload.name,
        phone: action.payload.phone,
        reserved: true,
      };
    }
    default: {
      return state;
    }
  }
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TIMESLOTS_FULFILLED':
      return action.payload.timeslots;
    case 'EDIT_TIMESLOT':
      return state.map(t => timeslot(t, action));
    default:
      return state;
  }
};
