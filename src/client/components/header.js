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
    <div css={style.header}>
      <h1 css={style.title}>{props.currentEventName}</h1>
      <div css={style.searchBar}>
        <div css={style.capacity}>
          {`Guests: ${getAttendance()}`}
        </div>
        <input
          css={style.search}
          type="text"
          onChange={props.onSearch}
          value={props.searchString}
          placeholder="Search for a guest"
        />
        <button
          css={style.guestButton}
          onClick={props.addNewAttendee}
        >
          <span css={style.buttonLabel}>Click here if you're not on the guestlist!</span>
          <span css={style.mobileButtonLabel}>&#43;</span>
        </button>
      </div>
      <ProgressBar percentage={getAttendance(true)} />
      <Menu>
        <button css={style.menuButton} onClick={props.updateAttendeesList}>Refresh guest list</button>
        <button css={style.menuButton} onClick={props.downloadAttendeesList}>Download attendees</button>
        <button css={style.menuButton} onClick={props.emailAttendeesList}>Email attendees</button>
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
