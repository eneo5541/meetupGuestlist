import { css } from '@emotion/core';
import vars from './variables';

export const contactDetails = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const contactOption = css`
  flex: 2 1 auto;
`;

export const contactDetailInput = css`
  margin: ${vars.singleSpacing} 0;
  padding: ${vars.singleSpacing};
  width: 80%;
`;

export const contactButton = css`
  ${vars.meetupButton};
  color: ${vars.colorWhite};
  margin-bottom: ${vars.singleSpacing};
  padding: ${vars.singleSpacing};
  align-self: flex-end;
`;
