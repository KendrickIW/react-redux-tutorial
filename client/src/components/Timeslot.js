import React, { PropTypes } from 'react';

function Timeslot(props) {
  const timeslot = props.value;
  const classes = [(timeslot.reserved ? 'red' : 'green'), 'timeslot'].join(' ');
  return (
    <button className={classes} onClick={() => props.onClick()}>
      {timeslot.start} - {timeslot.end}
    </button>
  );
}

Timeslot.propTypes = {
  value: PropTypes.shape({
    reserved: PropTypes.bool,
    start: PropTypes.string,
    end: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Timeslot;
