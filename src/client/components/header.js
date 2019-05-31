import React from 'react';
import PropTypes from 'prop-types';
import Menu from './menu';
import ProgressBar from './progress-bar';
import * as style from '../styles/header';

const Header = (props) => {
  const getAttendance = (asPercentage) => {
    const totalAttendees = props.attendees.length;
    const arrivedAttendees = props.attendees.filter(attendee => attendee.arrived).length;
    return asPercentage ? ((arrivedAttendees / totalAttendees) * 100) : `${arrivedAttendees} / ${totalAttendees}`;
  }

  return (
    <div className={style.header}>
      <h1 className={style.title}>{props.currentEventName}</h1>
      <div className={style.searchBar}>
        <div className={style.capacity}>
          {`Guests: ${getAttendance()}`}
        </div>
        <input
          className={style.search}
          type="text"
          onChange={props.onSearch}
          value={props.searchString}
          placeholder="Search for a guest"
        />
        <button
          className={style.guestButton}
          onClick={props.addNewAttendee}
        >
          <span className={style.buttonLabel}>Click here if you're not on the guestlist!</span>
          <span className={style.mobileButtonLabel}>&#43;</span>
        </button>
      </div>
      <ProgressBar percentage={getAttendance(true)} />
      <Menu>
        <button className={style.menuButton} onClick={props.updateAttendeesList}>Refresh guest list</button>
        <button className={style.menuButton} onClick={props.downloadAttendeesList}>Download attendees</button>
        <button className={style.menuButton} onClick={props.emailAttendeesList}>Email attendees</button>
      </Menu>
    </div>
  );
}

Header.propTypes = {
  attendees: PropTypes.array,
  currentEventName: PropTypes.string,
  updateAttendeesList: PropTypes.func,
  downloadAttendeesList: PropTypes.func,
  emailAttendeesList: PropTypes.func,
  onSearch: PropTypes.func,
  addNewAttendee: PropTypes.func,
  searchString: PropTypes.string,
};

Header.defaultProps = {
  attendees: [],
  currentEventName: '',
  updateAttendeesList: () => {},
  downloadAttendeesList: () => {},
  emailAttendeesList: () => {},
  onSearch: () => {},
  addNewAttendee: () => {},
  searchString: '',
}

export default Header;
