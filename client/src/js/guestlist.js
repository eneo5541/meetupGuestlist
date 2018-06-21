import React, { Component } from 'react';
import Guest from './guest';

class Guestlist extends Component {
  render() {
    return (
      <ul className="attendance-guestlist">
        {this.props.attendees
          .filter(attendee => attendee.name.toLowerCase().indexOf(this.props.searchString) > -1)
          .map((attendee, key) => (
            <Guest key={key} {...attendee} toggleAttendeeArrival={this.props.toggleAttendeeArrival} />
          ))
        }
      </ul>
    );
  }
}

export default Guestlist;
