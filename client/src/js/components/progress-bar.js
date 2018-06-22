import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ percentage }) => (
  <div className="attendance-progress-bar">
    <div className="attendance-progress-bar__container">
      <div className="attendance-progress-bar__bar" style={{ width: `${percentage}%`}} />
    </div>
  </div>
);

ProgressBar.propTypes = {
  percentage: PropTypes.number,
};

ProgressBar.defaultProps = {
  percentage: 0,
}

export default ProgressBar;
