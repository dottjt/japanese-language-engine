import { Text as BaseText } from 'rebass';
import system from '@rebass/components';

export const Text = system({
  extend: BaseText,
  is: 'p',
  fontSize: 2,
  color: 'dark-gray',
  fontFamily: 'sansSerif',
  lineHeight: 'copy',
  m: 0,
  mb: 4,
});


export const Heading = system({
  extend: BaseText,
  color: 'dark-gray',
  fontFamily: 'sansSerif',
});

export const PageHeading = system({
  extend: Heading,
  is: 'h1',
  fontSize: 5, 
  m: 0,
  mb: 4,
});

export const PageHeadingSecondary = system({
  extend: Heading,
  is: 'h2',
  fontSize: 4, 
  m: 0,
  mt: 4,
  mb: 4,
});
