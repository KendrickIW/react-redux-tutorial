import reducer from './timeslotReducer'

describe('Timeslot Reducer', () => {
  var subject, action, beforeState, afterState;
  beforeEach(() => subject = reducer)

  describe('when beforeState is undefined', () =>{
    beforeEach(() => beforeState = undefined)

    describe('when action is unknown type', () => {
      beforeEach(() => action = { type: 'UNKWNON_ACTION_TYPE' })

      it('returns a default state for timeslots', () => {
        afterState = { timeslots: [] }

        expect(reducer(beforeState, action)).toEqual(afterState)
      })
    })

    describe('when action type is FETCHED_TIMESLOTS', () => {
      beforeEach(() => action = { type: 'FETCHED_TIMESLOTS'})

      it('returns state with list of timeslots when payload is valid', () => {
        action = {...action, payload: [{ id: 1, begin: '9:00am', end: '10:00am' }] }
        afterState = { timeslots: [{ id: 1, begin: '9:00am', end: '10:00am' }] }

        expect(reducer(beforeState, action)).toEqual(afterState)
      })
    })
  })
})
