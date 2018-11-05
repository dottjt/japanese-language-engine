import { Text as RebassText } from 'rebass';
import system from '@rebass/components';

export const Text = system({
  extend: RebassText,
  is: 'p',
  fontSize: 2,
  color: 'dark-gray',
  fontFamily: 'sansSerif',
  lineHeight: 'copy',
  m: 0,
  mb: 4,
});

export const Heading = system({
  is: 'h1',
  fontSize: 6,
  color: 'dark-gray',
  fontFamily: 'sansSerif',
  m: 0,
});

export const PageHeading = system({
  extend: Heading,
  fontSize: 5, 
  mb: 4,
});

export const PageHeadingSecondary = system({
  extend: Heading,
  fontSize: 4, 
  mt: 4,
  mb: 4,
});
