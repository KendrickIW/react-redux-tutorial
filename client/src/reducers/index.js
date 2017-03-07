import { combineReducers } from 'redux';

import timeslots from './TimeslotReducer';
import modal from './ModalReducer';

export default combineReducers({
  timeslots,
  modal,
});
