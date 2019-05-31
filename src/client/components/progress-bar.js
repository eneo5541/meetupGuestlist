import React from 'react';
import PropTypes from 'prop-types';
import * as style from '../styles/progress-bar';

const ProgressBar = ({ percentage }) => (
  <div className={style.progressBar}>
    <div className={style.progressBarContainer}>
      <div className={style.progressBarWidth(percentage)} />
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
