import store from './store'

describe('Store', () => {
  var subject;
  beforeEach(() => subject = store)

  it('will respond to dispatch', () => {
    expect(subject.dispatch).toBeDefined();
  })
})
