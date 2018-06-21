import React from 'react';
import Guest from './guest';

const Guestlist = (props) => (
  <ul className="attendance-guestlist">
    {props.attendees
      .filter(attendee => attendee.name.toLowerCase().indexOf(props.searchString) > -1)
      .map((attendee, key) => (
        <Guest key={key} {...attendee} toggleAttendeeArrival={props.toggleAttendeeArrival} />
      ))
    }
  </ul>
);

export default Guestlist;
