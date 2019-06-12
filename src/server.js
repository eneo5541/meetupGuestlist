import React from 'react';
import { renderToString } from 'react-dom/server';
import Attendance from './client/attendance';

const render = () => (
  renderToString(<Attendance />)
);

export default render;
