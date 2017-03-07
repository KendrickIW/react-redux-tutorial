import store from './store';

describe('Store', () => {
  let subject;
  beforeEach(() => { subject = store; });

  it('will respond to dispatch', () => {
    expect(subject.dispatch).toBeDefined();
  });
});
