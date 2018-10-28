import * as React from 'react'
// import { Link } from 'react-router5';

import { FlexColumn } from '../atoms/LayoutStyles';
import { Heading } from '../atoms/TextStyles';
import { Link } from '../atoms/ClickableStyles';

import {
  LESSON_TITLE,
} from '../../util/constants/lessonConstants';

class Sidebar extends React.Component<{}, {}> {
  public render() {
    return (
      <FlexColumn ml={1} minWidths={5} borderRight={2} fontSize={5}>
        <Heading>Watashi Engine</Heading>
        <Heading is='h2' fontSize={3}>Lesson navigation</Heading>

        <FlexColumn mt={3}>
          <Heading is='h3' fontSize={2}>Contents</Heading>
          <Link routeName={LESSON_TITLE.WELCOME} routeOptions={{reload: true}}>{LESSON_TITLE.WELCOME}</Link>
          <Link routeName={LESSON_TITLE.CONTENTS} routeOptions={{reload: true}}>{LESSON_TITLE.CONTENTS}</Link>
          <Link routeName={LESSON_TITLE.PREREQ} routeOptions={{reload: true}}>{LESSON_TITLE.PREREQ}</Link>
        </FlexColumn>
        
        <FlexColumn mt={3}>
          <Heading is='h3' fontSize={2}>Nouns - Basic</Heading>
          <Link routeName={LESSON_TITLE.L001} routeOptions={{reload: true}}>{LESSON_TITLE.L001}</Link>
          <Link routeName={LESSON_TITLE.L002} routeOptions={{reload: true}}>{LESSON_TITLE.L002}</Link>
          <Link routeName={LESSON_TITLE.L003} routeOptions={{reload: true}}>{LESSON_TITLE.L003}</Link>
          <Link routeName={LESSON_TITLE.L004} routeOptions={{reload: true}}>{LESSON_TITLE.L004}</Link>
        </FlexColumn>

        <FlexColumn mt={3}>
          <Heading is='h3' fontSize={2}>Verbs - Basic</Heading>
          <Link routeName={LESSON_TITLE.L005} routeOptions={{reload: true}}>{LESSON_TITLE.L005}</Link>
          <Link routeName={LESSON_TITLE.L006} routeOptions={{reload: true}}>{LESSON_TITLE.L006}</Link>
          <Link routeName={LESSON_TITLE.L007} routeOptions={{reload: true}}>{LESSON_TITLE.L007}</Link>
          <Link routeName={LESSON_TITLE.L008} routeOptions={{reload: true}}>{LESSON_TITLE.L008}</Link>
          <Link routeName={LESSON_TITLE.L009} routeOptions={{reload: true}}>{LESSON_TITLE.L009}</Link>
        </FlexColumn>
      </FlexColumn>
    );
  };
};

export default Sidebar;
