import * as React from 'react'
import { Flex, Heading } from 'rebass';
import { Link } from 'react-router5';

import {
  L00_HOME,
  L00_CONTENTS,
  L00_PREREQUISITES,
  L01_LESSON_TITLE,
  L02_LESSON_TITLE,
  L03_LESSON_TITLE,
  L04_LESSON_TITLE,
  L05_LESSON_TITLE,
  L06_LESSON_TITLE,
} from '../util/constants/lessonConstants';

class Navbar extends React.Component<{}, {}> {
  public render() {
    return (
      <Flex flexDirection='column'>
        <Heading>Grammar Boss</Heading>
        <Heading>Lesson navigation</Heading>
        <Link routeName={L00_HOME} routeOptions={{reload: true}}>{L00_HOME}</Link>
        <Link routeName={L00_CONTENTS} routeOptions={{reload: true}}>{L00_CONTENTS}</Link>
        <Link routeName={L00_PREREQUISITES} routeOptions={{reload: true}}>{L00_PREREQUISITES}</Link>
        <Link routeName={L01_LESSON_TITLE} routeOptions={{reload: true}}>{L01_LESSON_TITLE}</Link>
        <Link routeName={L02_LESSON_TITLE} routeOptions={{reload: true}}>{L02_LESSON_TITLE}</Link>
        <Link routeName={L03_LESSON_TITLE} routeOptions={{reload: true}}>{L03_LESSON_TITLE}</Link>
        <Link routeName={L04_LESSON_TITLE} routeOptions={{reload: true}}>{L04_LESSON_TITLE}</Link>
        <Link routeName={L05_LESSON_TITLE} routeOptions={{reload: true}}>{L05_LESSON_TITLE}</Link>
        <Link routeName={L06_LESSON_TITLE} routeOptions={{reload: true}}>{L06_LESSON_TITLE}</Link>
      </Flex>
    );
  };
};

export default Navbar;
