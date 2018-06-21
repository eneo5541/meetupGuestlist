import React, { Component } from 'react';
import Menu from './menu';

class Header extends Component {
  getAttendance = (asPercentage) => {
    const totalAttendees = this.props.attendees.length;
    const arrivedAttendees = this.props.attendees.filter(attendee => attendee.arrived).length;
    return asPercentage ? `${(arrivedAttendees / totalAttendees) * 100}%` : `${arrivedAttendees} / ${totalAttendees}`;
  }

  render() {
    return (
      <div className="attendance-header">
        <h1>{this.props.currentEventName}</h1>
        <input type="text" onChange={this.props.onSearch} placeholder="Search for an attendee" />
        <button onClick={this.props.addNewAttendee}>Add new attendee</button>
        <Menu>
          <button onClick={this.props.updateAttendeesList}>Refresh attendees</button>
          <button onClick={this.props.downloadAttendeesList}>Download attendees</button>
          <button onClick={this.props.emailAttendeesList}>Email attendees</button>
        </Menu>
        <div className="attendance-capacity">
          {this.getAttendance()}
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: this.getAttendance(true) }} />
        </div>
      </div>
    );
  }
}

export default Header;
