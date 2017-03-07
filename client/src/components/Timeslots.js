import React, { Component, PropTypes } from 'react';
import Timeslot from './Timeslot';

export default class Timeslots extends Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    timeslots: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  renderTimeslot(timeslot, index) {
    return <Timeslot value={timeslot} onClick={() => this.props.onClick(index)} />;
  }

  render() {
    const mappedTimeslots = this.props.timeslots.map((timeslot, index) =>
      <li key={timeslot.id}>{this.renderTimeslot(timeslot, index)}</li>,
    );

    return (
      <ul>{mappedTimeslots}</ul>
    );
  }
}
