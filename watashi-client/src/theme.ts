const theme = {
  // space
  breakpoints: [32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  minWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],

  // fonts
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  fonts: {
    serif: 'athelas, georgia, times, serif',
    sansSerif: '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
    Vidaloka: 'Vidaloka, serif',
  },


  // colors
  colors: {
    link: 'red',
    sentenceStat: 'lightgreen',
    button: 'purple',

    background: '#fefefe',
    heading: '#000',
    text: '#454545',

    black: '#000',
    white: '#FFF',
    grey: 'grey',

    transparentGrey: 'rgba(26,26,26, 0.8)',
  },

  // buttons: {
  //   primary: {
  //     color: 'white',

  //   }
  // }

  // borders
  borders: [
    0,
    '1px solid #ececec',
    '2px solid #ececec',
    '4px solid #ececec',
    '8px solid #ececec',
    '16px solid #ececec',
    '32px solid #ececec',
  ],
  radii: [0, 2, 4, 16, 9999, '100%'],
};

export default theme;