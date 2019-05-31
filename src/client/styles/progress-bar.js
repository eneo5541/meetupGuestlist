import { css } from '@emotion/core';
import vars from './variables';

export const pink = css`
  background-color: hotpink;
`;

export const progressBar = css`
  text-align: left;
`;

export const progressBarContainer = css`
  width: 100%;
  height: 6px;
  background-color: ${vars.buttonFocusColor};
`;

export const progressBarWidth = (percentage) => css`
  width: ${percentage}%;
  background-color: ${vars.progressBarGreen};
  height: 100%;
  transition: width 0.5s;
  will-change: transform;
`;
