import React from 'react';
import { hydrate } from 'react-dom';
import Attendance from './attendance';

hydrate(
  <Attendance />,
  document.querySelector('#app')
);
