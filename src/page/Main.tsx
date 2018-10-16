import * as React from 'react'

import { 
  L01_LESSON_TITLE,
  L02_LESSON_TITLE,
} from '../util/constants';

import L01BasicStatement from './lessons/L01BasicStatement';
import L02BasicQuestion from './lessons/L02BasicQuestion';

class Main extends React.Component<PropTypes.IMainProps, {}> {
  public render() {
    switch (this.props.route.name) { /* this.props.previousRoute */
      case 'home':
        return (
          <div className="Main">
            <h1>{L01_LESSON_TITLE}</h1>
            <L01BasicStatement/>
          </div>
        );
      case L01_LESSON_TITLE:
        return (
          <div className="Main">
            <h1>{L01_LESSON_TITLE}</h1>
            <L02BasicQuestion/>
          </div>
        );
      case L02_LESSON_TITLE:
        return (
          <div className="Main">
            <h1>{L02_LESSON_TITLE}</h1>
            <L01BasicStatement/>
          </div>
        );
      default:
        return <div>hello (not found)</div>;
    };
  };
}

export default Main;
