import * as React from 'react'
import { Link } from 'react-router5';

import { SidebarWrapper, FlexColumn } from '../atoms/LayoutStyles';
import { H1, H2, H3 } from '../atoms/TextStyles';

import {
  LESSON_TITLE,
} from '../../util/constants/lessonConstants';

class Sidebar extends React.Component<{}, {}> {
  public render() {
    return (
      <SidebarWrapper>
      
        <H1>Watashi Engine</H1>
        <H2>Lesson navigation</H2>

        <FlexColumn>
          <H3>Contents</H3>
          <Link routeName={LESSON_TITLE.WELCOME} routeOptions={{reload: true}}>{LESSON_TITLE.WELCOME}</Link>
          <Link routeName={LESSON_TITLE.CONTENTS} routeOptions={{reload: true}}>{LESSON_TITLE.CONTENTS}</Link>
          <Link routeName={LESSON_TITLE.PREREQ} routeOptions={{reload: true}}>{LESSON_TITLE.PREREQ}</Link>
        </FlexColumn>
        
        <FlexColumn>
          <H3>Nouns - Basic</H3>
          <Link routeName={LESSON_TITLE.L001} routeOptions={{reload: true}}>{LESSON_TITLE.L001}</Link>
          <Link routeName={LESSON_TITLE.L002} routeOptions={{reload: true}}>{LESSON_TITLE.L002}</Link>
          <Link routeName={LESSON_TITLE.L003} routeOptions={{reload: true}}>{LESSON_TITLE.L003}</Link>
          <Link routeName={LESSON_TITLE.L004} routeOptions={{reload: true}}>{LESSON_TITLE.L004}</Link>
        </FlexColumn>

        <FlexColumn>
          <H3>Verbs - Basic</H3>
          <Link routeName={LESSON_TITLE.L005} routeOptions={{reload: true}}>{LESSON_TITLE.L005}</Link>
          <Link routeName={LESSON_TITLE.L006} routeOptions={{reload: true}}>{LESSON_TITLE.L006}</Link>
          <Link routeName={LESSON_TITLE.L007} routeOptions={{reload: true}}>{LESSON_TITLE.L007}</Link>
          <Link routeName={LESSON_TITLE.L008} routeOptions={{reload: true}}>{LESSON_TITLE.L008}</Link>
          <Link routeName={LESSON_TITLE.L009} routeOptions={{reload: true}}>{LESSON_TITLE.L009}</Link>
        </FlexColumn>
      </SidebarWrapper>
    );
  };
};

export default Sidebar;
