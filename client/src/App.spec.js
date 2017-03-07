import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    const props = {
      dispatch: jest.fn(),
      timeslots: [],
    };

    shallow(<App {...props} />);
  });
});
