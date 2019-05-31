import React from 'react';
import PropTypes from 'prop-types';
import Guest from './guest';
import * as style from '../styles/guestlist';

const Guestlist = (props) => (
  <ul className={style.guestlist}>
    {props.attendees
      .filter(attendee => attendee.name.toLowerCase().indexOf(props.searchString) > -1)
      .sort((attendee1, attendee2) => {
        var name1 = attendee1.name.toUpperCase();
        var name2 = attendee2.name.toUpperCase();
        if (name1 < name2) {
          return -1;
        }
        if (name1 > name2) {
          return 1;
        }
        return 0;
      })
      .map((attendee, key) => (
        <Guest
          key={key}
          toggleAttendeeArrival={props.toggleAttendeeArrival}
          addContactGuest={props.addContactGuest}
          {...attendee}
        />
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
