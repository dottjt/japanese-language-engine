import * as React from 'react';
// import { Text as RebassText } from 'rebass';
import system from 'system-components';

export const Text = system(
  {
    is: 'p',
    fontSize: 2,
    color: 'dark-gray',
    fontFamily: 'sansSerif',
    lineHeight: 'copy',
    m: 0,
    mb: 4,
  },
  'space',
  'width',
  'color',
  'textAlign',
  'lineHeight',
  'fontWeight',
  'fontSize',
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
  'fontSize',
  'fontWeight',
  'letterSpacing',
);
Heading.displayName = 'Heading';

export const PageHeading = (props) => (
  <Heading fontSize={5} mb={5}>
    {props.children}
  </Heading>
);

export const PageHeadingSecondary = (props) => (
  <PageHeadingSecondary mt={4} mb={4}>
    {props.children}
  </PageHeadingSecondary>
);