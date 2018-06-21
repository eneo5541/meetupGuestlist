import React from 'react';

const ProgressBar = (props) => {
  const getAttendance = (asPercentage) => {
    const totalAttendees = props.attendees.length;
    const arrivedAttendees = props.attendees.filter(attendee => attendee.arrived).length;
    return asPercentage ? `${(arrivedAttendees / totalAttendees) * 100}%` : `${arrivedAttendees} / ${totalAttendees}`;
  }

  return (
    <div className="attendance-progress-bar">
      <div className="attendance-capacity">{getAttendance()}</div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: getAttendance(true) }} />
      </div>
    </div>
  );
}

export default ProgressBar;
