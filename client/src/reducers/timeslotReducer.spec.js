import reducer from './TimeslotReducer';

describe('Timeslot Reducer', () => {
  let subject;
  let action;
  let beforeState;
  let afterState;

  beforeEach(() => {
    subject = reducer;
  });

  describe('when beforeState is undefined', () => {
    beforeEach(() => {
      beforeState = undefined;
    });

    describe('when action is unknown type', () => {
      beforeEach(() => {
        action = { type: 'UNKWNON_ACTION_TYPE' };
      });

      it('returns a default state for timeslots', () => {
        afterState = [];

        expect(subject(beforeState, action)).toEqual(afterState);
      });
    });

    describe('when action type is FETCH_TIMESLOTS_FULFILLED', () => {
      beforeEach(() => {
        action = { type: 'FETCH_TIMESLOTS_FULFILLED' };
      });

      it('returns state with list of timeslots when payload is valid', () => {
        action = { ...action, payload: { timeslots: [{ id: 1, begin: '9:00am', end: '10:00am' }] } };
        afterState = [{ id: 1, begin: '9:00am', end: '10:00am' }];

        expect(subject(beforeState, action)).toEqual(afterState);
      });
    });
  });
});
