import * as React from 'react'
import { Link } from 'react-router5';

class Navbar extends React.Component<{}, {}> {
  public render() {
    return (
      <nav className='Navbar'>
        <h1>Grammar Boss</h1>
        <h2>Lesson navigation</h2>
        <Link routeName='home' routeOptions={{reload: true}}>Home</Link>
        <Link routeName='lesson-01' routeOptions={{reload: true}}>Lesson 01</Link>
        <Link routeName='lesson-02' routeOptions={{reload: true}}>Lesson 02</Link>
      </nav>
    );
  };
};

export default Navbar;
