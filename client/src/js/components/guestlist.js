import React from 'react';
import PropTypes from 'prop-types';
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

Guestlist.propTypes = {
  attendees: PropTypes.array,
  searchString: PropTypes.string,
  toggleAttendeeArrival: PropTypes.func,
};

Guestlist.defaultProps = {
  attendees: [],
  searchString: '',
  toggleAttendeeArrival: () => {},
}

export default Guestlist;
