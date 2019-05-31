import { css } from '@emotion/core';
import vars from './variables';

export const menu = css`
  position: absolute;
  top: 20px;
  right: ${vars.doubleSpacing};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const menuButton = css`
  ${vars.meetupButton}
  background: 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
`;

export const menuIcon = css`
  width: 100%;
`;

const displayContents = css`
  display: flex;
  flex-direction: column;
  margin-top: ${vars.singleSpacing};
  background-color: ${vars.buttonBackgroundColor};
`;

export const menuContents = (showMenu) => css`
  display: none;
  width: 200px;
  height: 120px;
  border-width: 1px;
  border-style: solid;
  border-color: ${vars.buttonOutlineColor};
  border-radius: 5px;
  ${showMenu && displayContents}
`;
