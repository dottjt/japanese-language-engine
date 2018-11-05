const theme = {
  breakpoints: [32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
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
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
  },
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
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  minWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    purple: 'purple',
    lightgreen: 'lightgreen',
    black: '#000',
    grey: 'grey',
    text: '#676767',
    transparentLightGrey: 'rgb(211,211,211, 0.5)'
  },
};

export default theme;