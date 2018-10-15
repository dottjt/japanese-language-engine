import * as React from 'react'

import L01BasicQuestion from '../lessons/L01BasicQuestion';

import { IMainProps } from 'propTypes';

const Main = (props: IMainProps) => {
  /* props.previousRoute */
  switch (props.route.name) {
    case 'home':
      return <div className="Main"><L01BasicQuestion/></div>;
    case 'lesson-01':
      return <div className="Main"><L01BasicQuestion/></div>;
    case 'lesson-02':
      return <div className="Main"><L01BasicQuestion/></div>;
    default:
      return <div>hello (not found)</div>;
  };
}

// you might need to do some logic like below.
// export default routeNode('users')(Users);
export default Main;
