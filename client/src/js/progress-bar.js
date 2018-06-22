import React from 'react';

const ProgressBar = (props) => (
  <div className="attendance-progress-bar">
    <div className="attendance-progress-bar__container">
      <div className="attendance-progress-bar__bar" style={{ width: `${props.percentage}%`}} />
    </div>
  </div>
);

export default ProgressBar;
