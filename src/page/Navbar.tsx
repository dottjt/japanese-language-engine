import * as React from 'react'
import { Link } from 'react-router5';

import {
  L01_LESSON_TITLE,
  L02_LESSON_TITLE,
} from '../util/constants';

class Navbar extends React.Component<{}, {}> {
  public render() {
    return (
      <nav className='Navbar'>
        <h1>Grammar Boss</h1>
        <h2>Lesson navigation</h2>
        <Link routeName='home' routeOptions={{reload: true}}>Home</Link>
        <Link routeName={L01_LESSON_TITLE} routeOptions={{reload: true}}>{L01_LESSON_TITLE}</Link>
        <Link routeName={L02_LESSON_TITLE} routeOptions={{reload: true}}>{L02_LESSON_TITLE}</Link>
      </nav>
    );
  };
};

export default Navbar;
