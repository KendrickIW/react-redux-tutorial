import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Timeslots from './components/Timeslots';
import * as timeslotActions from './actions/TimeslotActions';
import * as modalActions from './actions/ModalActions';


export class App extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    timeslots: PropTypes.arrayOf(PropTypes.object).isRequired,
    modal: PropTypes.shape({
      open: PropTypes.bool,
    }).isRequired,
  }

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { activeTimeslot: {}, name: '', phone: '' };
  }

  componentWillMount() {
    this.props.dispatch(timeslotActions.fetchTimeslots());
  }

  editTimeslot(i) {
    this.setState({
      activeTimeslot: this.props.timeslots[i],
      name: this.props.timeslots[i].name || '',
      phone: this.props.timeslots[i].phone || '',
    });
    this.props.dispatch(modalActions.openModal());
  }


  handleChange(e) {
    e.preventDefault();

    this.setState({
      name: this.name ? this.name.value : '',
      phone: this.phone ? this.phone.value : '',
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(modalActions.closeModal());
    this.props.dispatch(
      timeslotActions.editTimeslot(
        this.state.activeTimeslot.id,
        this.state.name,
        this.state.phone,
      ));
  }

  render() {
    const formTitle = [
      this.state.activeTimeslot.start,
      this.state.activeTimeslot.end,
    ].join('-');

    return (
      <div className="app">
        <Timeslots timeslots={this.props.timeslots} onClick={i => this.editTimeslot(i)} />
        <form className={this.props.modal.open ? '' : 'hide'} onSubmit={this.handleSubmit}>
          <h3>{formTitle}</h3>
          <label htmlFor="form-name" >Name: </label>
          <input
            id="form-name"
            onChange={this.handleChange}
            ref={(c) => { this.name = c; }}
            value={this.state.name}
            required
          />
          <br /><br />
          <label htmlFor="form-phone">Phone: </label>
          <input
            id="form-phone"
            onChange={this.handleChange}
            ref={(c) => { this.phone = c; }}
            value={this.state.phone}
            pattern="[\d]{10,11}"
            title="Telephone number"
            required
          />
          <br /><br />
          <button>Make Reservations</button>
        </form>
      </div>
    );
  }
}

export default connect(store => ({
  timeslots: store.timeslots,
  modal: store.modal,
}))(App);
