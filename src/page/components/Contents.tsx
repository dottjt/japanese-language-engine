
import * as React from 'react';
import { Link } from 'react-router5';

import {
  L00_CONTENTS,
  L01_LESSON_TITLE,
  L02_LESSON_TITLE,
} from '../../util/constants';

class Contents extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div>
        <h1>Grammar Boss</h1>
        <h2>Lesson navigation</h2>
        <Link routeName={L00_CONTENTS} routeOptions={{reload: true}}>Home</Link>
        <Link routeName={L01_LESSON_TITLE} routeOptions={{reload: true}}>{L01_LESSON_TITLE}</Link>
        <Link routeName={L02_LESSON_TITLE} routeOptions={{reload: true}}>{L02_LESSON_TITLE}</Link>
      </div>
    )
  };
};

export default Contents;
