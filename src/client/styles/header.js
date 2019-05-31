import { css } from 'emotion';
import vars from './variables';

export const header = css`
  width: 100%;
  height: ${vars.headerHeight};
  background-color: ${vars.buttonBackgroundColor};
  position: fixed;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const menuButton = css`
  ${vars.meetupButton}
  background: 0;
  flex-grow: 1;
  font-size: ${vars.smallFontSize};
  border-radius: 0;
  border-width: 0 0 1px 0;
`;

export const guestButton = css`
  ${vars.meetupButton};
  color: ${vars.colorWhite};
  height: 50px;
  width: 50px;
  font-size: ${vars.largeFontSize};

  ${vars.tabletOrLarger} {
    width: 420px;
  }
`;

export const title = css`
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${vars.buttonOutlineColor};
  padding: 0 70px ${vars.doubleSpacing} ${vars.doubleSpacing};
  margin-bottom: ${vars.singleSpacing};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 60px;
`;

export const searchBar = css`
  display: flex;
  align-items: center;
  padding: 0 ${vars.doubleSpacing};
  margin-bottom: ${vars.singleSpacing};
`;

export const search = css`
  height: 46px;
  flex-grow: 1;
  line-height: 48px;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-color: ${vars.buttonOutlineColor};
  border-radius: 5px;
  font-size: ${vars.largeFontSize};
  margin-right: ${vars.doubleSpacing};

  ${vars.tabletOrLarger} {
    text-align: left;
    padding-left: $single-spacing;
  }
`;

export const capacity = css`
  padding: ${vars.singleSpacing} 0;
  font-size: ${vars.largeFontSize};
  display: none;
  margin-right: ${vars.doubleSpacing};

  ${vars.tabletOrLarger} {
    display: block;
  }
`;

export const buttonLabel = css`
  display: none;

  ${vars.tabletOrLarger} {
    display: inline;
  }
`;

export const mobileButtonLabel = css`
  display: inline;

  ${vars.tabletOrLarger} {
    display: none;
  }
`;