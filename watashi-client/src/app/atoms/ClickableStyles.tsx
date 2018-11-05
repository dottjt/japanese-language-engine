import { Button as BaseButton, Link as BaseLink } from 'rebass';
import system from '@rebass/components';

import { Link as ReactRouterLink } from 'react-router5';

export const Button = system({
  extend: BaseButton,
  borderRadius: 1,
  border: 2,
  color: 'purple',
  fontSize: 2,
  m: 0,
});

export const Link = system({
  extend: BaseLink,
  color: 'red',
  fontSize: 2,
  m: 0,
});

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
  extend: BaseLink,
  fontSize: 2,
});


