import ReactDOM from 'react-dom';

jest.mock('react-dom', () => ({ render: jest.fn(() => {}) }));

describe('Importing index.js', () => {
  it('calls render on ReactDom with App component', () => {
    require('./index'); // eslint-disable-line global-require

    expect(ReactDOM.render).toHaveBeenCalled();
  });
});
