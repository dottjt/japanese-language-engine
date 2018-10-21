import * as React from 'react'
import { Flex, Heading } from 'rebass';
import { Link } from 'react-router5';

import {
  LESSON_TITLE,
} from '../util/constants/lessonConstants';

class Navbar extends React.Component<{}, {}> {
  public render() {
    return (
      <Flex flexDirection='column'>
      
        <Heading>Grammar Boss</Heading>
        <Heading>Lesson navigation</Heading>

        <Flex flexDirection='column' mt={2}>
          <Heading>Contents</Heading>
          <Link routeName={LESSON_TITLE.HOME} routeOptions={{reload: true}}>{LESSON_TITLE.HOME}</Link>
          <Link routeName={LESSON_TITLE.CONTENTS} routeOptions={{reload: true}}>{LESSON_TITLE.CONTENTS}</Link>
          <Link routeName={LESSON_TITLE.PREREQ} routeOptions={{reload: true}}>{LESSON_TITLE.PREREQ}</Link>
        </Flex>
        
        <Flex flexDirection='column' mt={2}>
          <Heading>Nouns - Basic</Heading>
          <Link routeName={LESSON_TITLE.L001} routeOptions={{reload: true}}>{LESSON_TITLE.L001}</Link>
          <Link routeName={LESSON_TITLE.L002} routeOptions={{reload: true}}>{LESSON_TITLE.L002}</Link>
          <Link routeName={LESSON_TITLE.L003} routeOptions={{reload: true}}>{LESSON_TITLE.L003}</Link>
          <Link routeName={LESSON_TITLE.L004} routeOptions={{reload: true}}>{LESSON_TITLE.L004}</Link>
        </Flex>

        <Flex flexDirection='column' mt={2}>
          <Heading>Verbs - Basic</Heading>
          <Link routeName={LESSON_TITLE.L005} routeOptions={{reload: true}}>{LESSON_TITLE.L005}</Link>
          <Link routeName={LESSON_TITLE.L006} routeOptions={{reload: true}}>{LESSON_TITLE.L006}</Link>
          <Link routeName={LESSON_TITLE.L007} routeOptions={{reload: true}}>{LESSON_TITLE.L007}</Link>
          <Link routeName={LESSON_TITLE.L008} routeOptions={{reload: true}}>{LESSON_TITLE.L008}</Link>
          <Link routeName={LESSON_TITLE.L009} routeOptions={{reload: true}}>{LESSON_TITLE.L009}</Link>
          {/* <Link routeName={LESSON_TITLE.L010} routeOptions={{reload: true}}>{LESSON_TITLE.L010}</Link>
          <Link routeName={LESSON_TITLE.L011} routeOptions={{reload: true}}>{LESSON_TITLE.L011}</Link>
          <Link routeName={LESSON_TITLE.L012} routeOptions={{reload: true}}>{LESSON_TITLE.L012}</Link> */}
        </Flex>

      </Flex>
    );
  };
};

export default Navbar;
