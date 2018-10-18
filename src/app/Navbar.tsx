import * as React from 'react'
import { Flex, Heading } from 'rebass';
import { Link } from 'react-router5';

import {
  L000_HOME,
  L000_CONTENTS,
  L000_PREREQUISITES,

  L001_LESSON_TITLE,
  L002_LESSON_TITLE,
  L003_LESSON_TITLE,
  L004_LESSON_TITLE,
  L005_LESSON_TITLE,
  L006_LESSON_TITLE,

  L007_LESSON_TITLE,
  L008_LESSON_TITLE,
  L009_LESSON_TITLE,
  L010_LESSON_TITLE,
  L011_LESSON_TITLE,
  L012_LESSON_TITLE,
  
} from '../util/constants/lessonConstants';

class Navbar extends React.Component<{}, {}> {
  public render() {
    return (
      <Flex flexDirection='column'>
      
        <Heading>Grammar Boss</Heading>
        <Heading>Lesson navigation</Heading>

        <Flex flexDirection='column'>
          <Link routeName={L000_HOME} routeOptions={{reload: true}}>{L000_HOME}</Link>
          <Link routeName={L000_CONTENTS} routeOptions={{reload: true}}>{L000_CONTENTS}</Link>
          <Link routeName={L000_PREREQUISITES} routeOptions={{reload: true}}>{L000_PREREQUISITES}</Link>
        </Flex>
        
        <Flex flexDirection='column'>
          <Link routeName={L001_LESSON_TITLE} routeOptions={{reload: true}}>{L001_LESSON_TITLE}</Link>
          <Link routeName={L002_LESSON_TITLE} routeOptions={{reload: true}}>{L002_LESSON_TITLE}</Link>
          <Link routeName={L003_LESSON_TITLE} routeOptions={{reload: true}}>{L003_LESSON_TITLE}</Link>
          <Link routeName={L004_LESSON_TITLE} routeOptions={{reload: true}}>{L004_LESSON_TITLE}</Link>
          <Link routeName={L005_LESSON_TITLE} routeOptions={{reload: true}}>{L005_LESSON_TITLE}</Link>
          <Link routeName={L006_LESSON_TITLE} routeOptions={{reload: true}}>{L006_LESSON_TITLE}</Link>
        </Flex>

        <Flex flexDirection='column'>
          <Link routeName={L007_LESSON_TITLE} routeOptions={{reload: true}}>{L007_LESSON_TITLE}</Link>
          <Link routeName={L008_LESSON_TITLE} routeOptions={{reload: true}}>{L008_LESSON_TITLE}</Link>
          <Link routeName={L009_LESSON_TITLE} routeOptions={{reload: true}}>{L009_LESSON_TITLE}</Link>
          <Link routeName={L010_LESSON_TITLE} routeOptions={{reload: true}}>{L010_LESSON_TITLE}</Link>
          <Link routeName={L011_LESSON_TITLE} routeOptions={{reload: true}}>{L011_LESSON_TITLE}</Link>
          <Link routeName={L012_LESSON_TITLE} routeOptions={{reload: true}}>{L012_LESSON_TITLE}</Link>
        </Flex>

      </Flex>
    );
  };
};

export default Navbar;
