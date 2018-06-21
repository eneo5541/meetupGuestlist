import React from 'react';

const Guest = (props) => (
  <li>
    <button onClick={() => { props.toggleAttendeeArrival(props.id, !props.arrived); }}>
      <div className="avatar-container">
        {props.avatar &&
          <img className="avatar" alt={`Avatar of ${props.name}`} src={props.avatar} />
        }
      </div>
      <div className="name">{props.name}</div>
      <span className="confirmation" role="img" aria-label={`${props.arrived ? 'Decline' : 'Confirm'} arrival of ${props.name}`}>
        {props.arrived && '✅'}
      </span>
    </button>
  </li>
);

export default Guest;
