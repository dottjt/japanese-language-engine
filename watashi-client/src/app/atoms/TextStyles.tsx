import * as React from 'react';
// import { Text as RebassText } from 'rebass';
import system from 'system-components';

export const Text = system(
  {
    is: 'p',
    fontSize: 2,
    color: 'dark-gray',
    fontFamily: 'sansSerif',
    lineHeight: 2,
    mb: 2,
  },
  'space',
  'width',
  'color',
  'textAlign',
  'lineHeight',
  'fontWeight',
  'letterSpacing',
);
Text.displayName = 'Text';

export const Heading = system(
  {
    is: 'h1',
    fontSize: 6,
    color: 'dark-gray',
    fontFamily: 'sansSerif',
    m: 0,
  },
  'space',
  'width',
  'color',
  'textAlign',
  'lineHeight',
  'fontWeight',
  'letterSpacing',
);
Heading.displayName = 'Heading';

export const PageHeading = (props) => (
  <Heading fontSize={5} mb={3}>
    {props.children}
  </Heading>
);
