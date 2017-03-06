import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
jest.mock('react-dom', () => ({render: jest.fn(() => {})}))

describe('Importing index.js', () => {
  it('calls render on ReactDom with App component', () => {
    var index = require('./index')

    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, null)
  })
})
