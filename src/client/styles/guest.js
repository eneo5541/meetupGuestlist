import { css } from 'emotion';
import vars from './variables';

const arrived = css`
  background-color: ${vars.colorLightGrey};
  &:hover {
    opacity: 0.7;
  }
`;

export const guest = (guestArrived) => css`
  background-color: ${vars.colorWhite};
  width: 100%;
  height: 70px;
  padding-left: ${vars.singleSpacing};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${vars.colorMidGrey};
  ${guestArrived && arrived}
`;

export const contact = css`
  padding: ${vars.doubleSpacing};
  background-color: #fafafa;
  width: 94%;
`;

export const avatarContainer = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

export const avatar = css`
  width: 100%;
  height: 100%;
`;

export const guestDetails = css`
  flex: 2 1 auto;
  padding-left: ${vars.singleSpacing};
`;

export const guestName = css`
  flex-grow: 1;
  font-size: ${vars.largeFontSize};
  text-transform: capitalize;
`;

export const nameStatus = css`
  color: ${vars.guestGrey};
  text-transform: uppercase;
  color: inherit;
`;

export const checkIn = css`
  height: 100%;
`;

const checkInButtonArrived = css`
  background-color: ${vars.colorLightGrey};
  color: ${vars.buttonFocusColor};
`;

export const checkInButton = (guestArrived) => css`
  ${vars.meetupButton};
  color: ${vars.colorWhite};
  height: 100%;
  font-size: 1.25em;
  padding: 0 ${vars.singleSpacing};
  ${guestArrived && checkInButtonArrived}
`;
