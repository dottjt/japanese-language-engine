import * as React from 'react'

import { FlexColumn } from '../atoms/LayoutStyles';
import { Heading } from '../atoms/TextStyles';
import { Link } from '../atoms/ClickableStyles';

import {
  LESSON_TITLE,
} from '../../util/constants/lessonConstants';

class CourseList extends React.Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
        <FlexColumn mt={4}>
          <Heading is='h3' mb={2} fontSize={2}>Introduction</Heading>
          <Link routeName={LESSON_TITLE.WELCOME} routeOptions={{reload: true}}>{LESSON_TITLE.WELCOME}</Link>
          <Link routeName={LESSON_TITLE.CONTENTS} routeOptions={{reload: true}}>{LESSON_TITLE.CONTENTS}</Link>
          <Link routeName={LESSON_TITLE.PREREQ} routeOptions={{reload: true}}>{LESSON_TITLE.PREREQ}</Link>
        </FlexColumn>
        
        <FlexColumn mt={4}>
          <Heading is='h3' mb={2} fontSize={2}>Noun Conjugations - Basic</Heading>
          <Link routeName={LESSON_TITLE.L001} routeOptions={{reload: true}}>{LESSON_TITLE.L001}</Link>
        </FlexColumn>

        <FlexColumn mt={4}>
          <Heading is='h3' mb={2} fontSize={2}>Nouns - Basic</Heading>
          <Link routeName={LESSON_TITLE.L002} routeOptions={{reload: true}}>{LESSON_TITLE.L002}</Link>
          <Link routeName={LESSON_TITLE.L003} routeOptions={{reload: true}}>{LESSON_TITLE.L003}</Link>
          <Link routeName={LESSON_TITLE.L004} routeOptions={{reload: true}}>{LESSON_TITLE.L004}</Link>
          <Link routeName={LESSON_TITLE.L005} routeOptions={{reload: true}}>{LESSON_TITLE.L005}</Link>
        </FlexColumn>

        <FlexColumn mt={4}>
          <Heading is='h3' mb={2} fontSize={2}>Verb Conjugations - Basic</Heading>
          <Link routeName={LESSON_TITLE.L006} routeOptions={{reload: true}}>{LESSON_TITLE.L006}</Link>
          <Link routeName={LESSON_TITLE.L007} routeOptions={{reload: true}}>{LESSON_TITLE.L007}</Link>
          <Link routeName={LESSON_TITLE.L008} routeOptions={{reload: true}}>{LESSON_TITLE.L008}</Link>
        </FlexColumn>

        <FlexColumn mt={4}>
          <Heading is='h3' mb={2} fontSize={2}>Verbs - Basic</Heading>
          <Link routeName={LESSON_TITLE.L009} routeOptions={{reload: true}}>{LESSON_TITLE.L009}</Link>
          <Link routeName={LESSON_TITLE.L010} routeOptions={{reload: true}}>{LESSON_TITLE.L010}</Link>
          <Link routeName={LESSON_TITLE.L011} routeOptions={{reload: true}}>{LESSON_TITLE.L011}</Link>
          <Link routeName={LESSON_TITLE.L012} routeOptions={{reload: true}}>{LESSON_TITLE.L012}</Link>
          <Link routeName={LESSON_TITLE.L013} routeOptions={{reload: true}}>{LESSON_TITLE.L013}</Link>
          <Link routeName={LESSON_TITLE.L014} routeOptions={{reload: true}}>{LESSON_TITLE.L014}</Link>
          <Link routeName={LESSON_TITLE.L015} routeOptions={{reload: true}}>{LESSON_TITLE.L015}</Link>
        </FlexColumn>

        <FlexColumn mt={4}>
          <Heading is='h3' mb={2} fontSize={2}>From / Until statements</Heading>
          <Link routeName={LESSON_TITLE.L016} routeOptions={{reload: true}}>{LESSON_TITLE.L016}</Link>
          <Link routeName={LESSON_TITLE.L017} routeOptions={{reload: true}}>{LESSON_TITLE.L017}</Link>
        </FlexColumn>

        <FlexColumn mt={4}>
          <Heading is='h3' mb={2} fontSize={2}>Modifiers</Heading>
          <Link routeName={LESSON_TITLE.L018} routeOptions={{reload: true}}>{LESSON_TITLE.L018}</Link>
          <Link routeName={LESSON_TITLE.L019} routeOptions={{reload: true}}>{LESSON_TITLE.L019}</Link>
          <Link routeName={LESSON_TITLE.L020} routeOptions={{reload: true}}>{LESSON_TITLE.L020}</Link>
        </FlexColumn>

      </React.Fragment>
    );
  };
};

export default CourseList;
