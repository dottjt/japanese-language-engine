// import { Button as RebassButton, /* Link as RebassLink */ } from 'rebass';
import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router5';
import system from 'system-components';

export const Button = system(
  {
    is: 'p',
    borderRadius: 1,
    border: 2,
    color: 'purple',
    fontSize: 3,
  },
  'space',
  'width',
  'fontWeight',
);

Button.displayName = 'Button';

const RouterLink = styled(ReactRouterLink)<any>`
  routeName: ${props => props.routeName};
  routeOptions: ${props => props.routeOptions};
`;

export const Link = system(
  {
    is: RouterLink,
    color: 'red',
    fontSize: 2,
  },
  'space',
  'width',
  'fontWeight',
);

Link.displayName = 'Link';


export const ExternalLink = system(
  {
    is: 'a',
    fontSize: 2,
  },
  'space',
  'width',
  'fontWeight',
);

ExternalLink.displayName = 'ExternalLink';

