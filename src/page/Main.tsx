import * as React from 'react'

import L01BasicQuestion from './lessons/L01BasicQuestion';

import { IMainProps } from 'propTypes';

class Main extends React.Component<IMainProps, {}> {
  public render() {
    switch (this.props.route.name) { /* this.props.previousRoute */
      case 'home':
        return (
          <div className="Main">
            <h1>Basic Questions</h1>
            <L01BasicQuestion/>
          </div>
        );
      case 'lesson-01':
        return (
          <div className="Main">
            <L01BasicQuestion/>
          </div>
        );
      case 'lesson-02':
        return (
          <div className="Main">
            <L01BasicQuestion/>
          </div>
        );
      default:
        return <div>hello (not found)</div>;
    };
  };
}

export default Main;
