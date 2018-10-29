// import { Text as RebassText } from 'rebass';
import system from 'system-components';

export const Text = system(
  {
    is: 'p',
    fontSize: 2,
    color: 'dark-gray',
    fontFamily: 'sansSerif',
  },
  'space',
  'width',
  'textAlign',
  'lineHeight',
  'fontWeight',
  'letterSpacing',
);
Text.displayName = 'Text';

export const Heading = system(
  {
    is: 'h1',
    m: 0,
    fontSize: 6,
    color: 'dark-gray',
    fontFamily: 'sansSerif',
  },
  'space',
  'width',
  'textAlign',
  'lineHeight',
  'fontWeight',
  'letterSpacing',
);
Heading.displayName = 'Heading';
