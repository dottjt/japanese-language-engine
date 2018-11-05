import { Button as BaseButton, Link as BaseLink } from 'rebass';
import system from '@rebass/components';

import { Link as ReactRouterLink } from 'react-router5';

export const Button = system({
    extend: BaseButton,
    borderRadius: 1,
    border: 2,
    color: 'button',
    bg: 'black',
    fontSize: 2,
    m: 0,
  },
  'fontSize',
);

export const Link = system({
    extend: BaseLink,
    is: 'a',
    color: 'link',
    fontSize: 2,
    m: 0,
  },
  'fontSize',
);

// ---------------------------------------- // 

export const InternalLink = system({
  extend: Link,
  is: ReactRouterLink,
  props: (props) => ({
    routeName: props.routeName,
    routeOptions: props.routeOptions,
  }),
});

export const ExternalLink = system({
  extend: Link,
});


