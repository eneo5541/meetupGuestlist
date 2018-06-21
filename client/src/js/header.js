import React from 'react';
import Menu from './menu';
import ProgressBar from './progress-bar';

const Header = (props) => (
  <div className="attendance-header">
    <h1>{props.currentEventName}</h1>
    <input type="text" onChange={props.onSearch} placeholder="Search for an attendee" />
    <button onClick={props.addNewAttendee}>Add new attendee</button>
    <Menu>
      <button onClick={props.updateAttendeesList}>Refresh attendees</button>
      <button onClick={props.downloadAttendeesList}>Download attendees</button>
      <button onClick={props.emailAttendeesList}>Email attendees</button>
    </Menu>
    <ProgressBar attendees={props.attendees} />
  </div>
);

export default Header;
