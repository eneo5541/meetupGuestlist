import React, { Component } from 'react';

class Guest extends Component {
  render() {
    return (
      <li>
        <button onClick={() => { this.props.toggleAttendeeArrival(this.props.id, !this.props.arrived); }}>
          <div className="avatar-container">
            {this.props.avatar &&
              <img className="avatar" alt={`Avatar of ${this.props.name}`} src={this.props.avatar} />
            }
          </div>
          <div className="name">{this.props.name}</div>
          <span className="confirmation" role="img" aria-label={`${this.props.arrived ? 'Decline' : 'Confirm'} arrival of ${this.props.name}`}>
            {this.props.arrived && '✅'}
          </span>
        </button>
      </li>
    );
  }
}

export default Guest;
