import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as timeslotActions from './actions/TimeslotActions';


export class App extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    timeslots: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  componentWillMount() {
    this.props.dispatch(timeslotActions.fetchTimeslots());
  }

  render() {
    const timeslots = this.props.timeslots;
    const mappedTimeslots = timeslots.map(timeslot =>
      <li key={timeslot.start}>{timeslot.start} - {timeslot.end}</li>);
    return (
      <div>
        <ul>{mappedTimeslots}</ul>
      </div>
    );
  }
}

export default connect(store => ({
  timeslots: store.timeslots.timeslots,
}))(App);
