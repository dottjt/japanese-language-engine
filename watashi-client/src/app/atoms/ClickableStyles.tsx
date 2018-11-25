import { Button as BaseButton, Link as BaseLink } from 'rebass';
import system from '@rebass/components';

import { Link as ReactRouterLink } from 'react-router5';

export const Button = system({
    extend: BaseButton,
    border: 2,
    color: 'button',
    bg: 'white',
    borderRadius: 2,
    fontSize: 2,
    m: 0,
    // '&:hover': {
    //   bg: 'grey',
    // }
  },
  'fontSize',
);
Button.displayName = 'Button';

const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'textDecoration'
});

export const Link = system({
    extend: BaseLink,
    is: 'a',
    color: 'link',
    fontSize: 2,
    m: 0,
  },
  'fontSize',
  textDecoration,
);
Link.displayName = 'Link';

// ---------------------------------------- // 
import { style } from 'styled-system'

export const InternalLink = system({
  extend: Link,
  is: ReactRouterLink,
  props: (props) => ({
    routeName: props.routeName,
    routeOptions: props.routeOptions,
  }),
  textDecoration: 'none',
});
InternalLink.displayName = 'InternalLink';

export const ExternalLink = system({
  extend: Link,
  textDecoration: 'none',
});
ExternalLink.displayName = 'ExternalLink';


