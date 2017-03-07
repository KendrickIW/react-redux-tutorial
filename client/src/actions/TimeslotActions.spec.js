import moxios from 'moxios';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import configureMockStore from 'redux-mock-store';

import * as actions from './TimeslotActions';

const middlewares = [promise(), thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ timeslots: [] });

describe('timeslot actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    store.clearActions();
    moxios.uninstall();
  });

  it('should create an action to fetch timeslots when response is success', () => {
    moxios.stubRequest('/api/timeslots', {
      status: 200,
      responseText: { timeslots: ['do something'] },
    });

    const expectedActions = [
      { type: 'FETCH_TIMESLOTS_PENDING' },
      { type: 'FETCH_TIMESLOTS_FULFILLED', payload: { timeslots: ['do something'] } },
    ];

    return store.dispatch(actions.fetchTimeslots())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should create FETCH_TIMESLOTS_REJECTED when response is error', () => {
    moxios.stubRequest('/api/timeslots', {
      status: 400,
      response: { message: 'Failed to get timeslots' },
    });

    return store.dispatch(actions.fetchTimeslots())
      .then(() => {
        const expectedAction = { type: 'FETCH_TIMESLOTS_REJECTED', payload: 'Request failed with status code 400' };
        expect(store.getActions()).toContainEqual(expectedAction);
      });
  });
});
