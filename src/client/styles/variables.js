import { css } from '@emotion/core';

const variables = {
  buttonBackgroundColor: '#fff',
  buttonHoverColor: '#f2f2f2',
  buttonFocusColor: '#e2e2e2',
  buttonOutlineColor: '#cccccc',
  progressBarGreen: '#85D262',
  guestArrivedBlue: '#d6e6ff',
  guestHoverBlue: '#e5efff',
  guestGrey: '#686868',
  buttonFontColor: '#000',
  highlightColorGreen: '#0ea800',
  colorLightGrey: '#f7f7f7',
  colorMidGrey: '#f2edee',
  colorWhite: '#fff',
  singleSpacing: '12px',
  doubleSpacing: '24px',
  smallFontSize: '16px',
  mediumFontSize: '18px',
  largeFontSize: '22px',
  headerHeight: '186px',
  widthList: '600px',
};

export default {
  ...variables,
  tabletOrLarger: '@media only screen and (min-width: 640px)',
  meetupButton: css`
    cursor: pointer;
    border: 0;
    align-items: center;
    background-color: ${variables.highlightColorGreen};
    height: 100%;
    color: ${variables.buttonOutlineColor};
  
    &:hover{
      filter: brightness(85%);
      color: ${variables.colorWhite};
    }
  
    &:focus{
      background-color: ${variables.buttonFocusColor};
    }
  `,
};
