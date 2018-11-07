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

export const Link = system({
    extend: BaseLink,
    is: 'a',
    color: 'link',
    fontSize: 2,
    m: 0,
  },
  'fontSize',
);
Link.displayName = 'Link';

// ---------------------------------------- // 

export const InternalLink = system({
  extend: Link,
  is: ReactRouterLink,
  props: (props) => ({
    routeName: props.routeName,
    routeOptions: props.routeOptions,
  }),
});
InternalLink.displayName = 'InternalLink';

export const ExternalLink = system({
  extend: Link,
});
ExternalLink.displayName = 'ExternalLink';


