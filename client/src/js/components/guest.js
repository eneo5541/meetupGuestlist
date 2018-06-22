import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import tick from '../../assets/tick.png';

const Guest = (props) => (
  <li>
    <button
      className={classnames('attendance-guest', {[`has-arrived`]: props.arrived })}
      onClick={() => { props.toggleAttendeeArrival(props.id, !props.arrived); }}
    >
      <div className="attendance-guest__avatar-container">
        {props.avatar &&
          <img className="attendance-guest__avatar" alt={`Avatar of ${props.name}`} src={props.avatar} />
        }
      </div>
      <div className="attendance-guest__name">{props.name}</div>
      <div className="attendance-guest__confirmation-container">
        <img
          src={tick}
          className="attendance-guest__confirmation"
          alt={`${props.arrived ? 'Decline' : 'Confirm'} arrival of ${props.name}`}
        />
      </div>
    </button>
  </li>
);

Guest.propTypes = {
  arrived: PropTypes.boolean,
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Guest.defaultProps = {
  arrived: false,
  avatar: null,
}

export default Guest;
