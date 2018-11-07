import { Text as BaseText } from 'rebass';
import system from '@rebass/components';

export const Text = system({
  extend: BaseText,
  is: 'p',
  fontSize: 2,
  color: 'text',
  fontFamily: 'sansSerif',
  lineHeight: 'copy',
  m: 0,
  mb: 4,
  props: (props) => ({
    background: props.hovercolour,
  }),
});
Text.displayName = 'Text';

export const Heading = system({
  extend: BaseText,
  color: 'heading',
  fontFamily: 'sansSerif',
});
Heading.displayName = 'Heading';

// ---------------------------------------- // 

export const PageHeading = system({
  extend: Heading,
  is: 'h1',
  fontSize: 5, 
  m: 0,
  mb: 4,
});
PageHeading.displayName = 'PageHeading';

export const SecondaryPageHeading = system({
  extend: Heading,
  is: 'h2',
  fontSize: 4, 
  m: 0,
  mt: 4,
  mb: 4,
});
SecondaryPageHeading.displayName = 'SecondaryPageHeading';
