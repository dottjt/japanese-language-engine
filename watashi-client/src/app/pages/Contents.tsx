import * as React from 'react';

import { PageWrapper, FlexColumn } from '../atoms/LayoutStyles';
import { PageHeading } from '../atoms/TextStyles';
import { SidebarItem, HeadingItem } from '../atoms/ComponentStyles';

import {
  LESSON_TITLE,
  LESSON_SECTIONS,
  LESSON_SECTIONS_PREMIUM,
} from '../../util/constants/lessonConstants';

import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

import Helmet from '../components/Helmet';

class ContentsPage extends React.Component<{}, {}> {
  public render() {
    return (
      <PageWrapper>
        <Helmet title={ROUTE_TITLE.CONTENTS} description={ROUTE_DESCRIPTION.CONTENTS}/>

        <PageHeading>{ROUTE_TITLE.CONTENTS}</PageHeading>

        <FlexColumn>
          <FlexColumn>
            <HeadingItem>{LESSON_SECTIONS.S00}</HeadingItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S00} routeName={ROUTE_TITLE.WELCOME} routeOptions={{reload: true}}>{ROUTE_TITLE.WELCOME}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S00} routeName={ROUTE_TITLE.CONTENTS} routeOptions={{reload: true}}>{ROUTE_TITLE.CONTENTS}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S00} routeName={ROUTE_TITLE.PREREQ} routeOptions={{reload: true}}>{ROUTE_TITLE.PREREQ}</SidebarItem>
          </FlexColumn>

          <FlexColumn>
            <HeadingItem>{LESSON_SECTIONS.S01}</HeadingItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S01} routeName={LESSON_TITLE.L001} routeOptions={{reload: true}}>{LESSON_TITLE.L001}</SidebarItem>
          </FlexColumn>

          <FlexColumn>
            <HeadingItem>{LESSON_SECTIONS.S02}</HeadingItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S02} routeName={LESSON_TITLE.L002} routeOptions={{reload: true}}>{LESSON_TITLE.L002}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S02} routeName={LESSON_TITLE.L003} routeOptions={{reload: true}}>{LESSON_TITLE.L003}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S02} routeName={LESSON_TITLE.L004} routeOptions={{reload: true}}>{LESSON_TITLE.L004}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S02} routeName={LESSON_TITLE.L005} routeOptions={{reload: true}}>{LESSON_TITLE.L005}</SidebarItem>
          </FlexColumn>

          <FlexColumn>
            <HeadingItem>{LESSON_SECTIONS.S03}</HeadingItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S03} routeName={LESSON_TITLE.L006} routeOptions={{reload: true}}>{LESSON_TITLE.L006}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S03} routeName={LESSON_TITLE.L007} routeOptions={{reload: true}}>{LESSON_TITLE.L007}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S03} routeName={LESSON_TITLE.L008} routeOptions={{reload: true}}>{LESSON_TITLE.L008}</SidebarItem>
          </FlexColumn>

          <FlexColumn>
            <HeadingItem>{LESSON_SECTIONS.S04}</HeadingItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S04} routeName={LESSON_TITLE.L009} routeOptions={{reload: true}}>{LESSON_TITLE.L009}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S04} routeName={LESSON_TITLE.L010} routeOptions={{reload: true}}>{LESSON_TITLE.L010}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S04} routeName={LESSON_TITLE.L011} routeOptions={{reload: true}}>{LESSON_TITLE.L011}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S04} routeName={LESSON_TITLE.L012} routeOptions={{reload: true}}>{LESSON_TITLE.L012}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S04} routeName={LESSON_TITLE.L013} routeOptions={{reload: true}}>{LESSON_TITLE.L013}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S04} routeName={LESSON_TITLE.L014} routeOptions={{reload: true}}>{LESSON_TITLE.L014}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S04} routeName={LESSON_TITLE.L015} routeOptions={{reload: true}}>{LESSON_TITLE.L015}</SidebarItem>
          </FlexColumn>

          {/* <FlexColumn>
            <HeadingItem>{LESSON_SECTIONS.S05}</HeadingItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S05} routeName={LESSON_TITLE.L016} routeOptions={{reload: true}}>{LESSON_TITLE.L016}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S05} routeName={LESSON_TITLE.L017} routeOptions={{reload: true}}>{LESSON_TITLE.L017}</SidebarItem>
          </FlexColumn>

          <FlexColumn>
            <HeadingItem>{LESSON_SECTIONS.S06}</HeadingItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S06} routeName={LESSON_TITLE.L018} routeOptions={{reload: true}}>{LESSON_TITLE.L018}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S06} routeName={LESSON_TITLE.L019} routeOptions={{reload: true}}>{LESSON_TITLE.L019}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S06} routeName={LESSON_TITLE.L020} routeOptions={{reload: true}}>{LESSON_TITLE.L020}</SidebarItem>
          </FlexColumn> */}
        </FlexColumn>

      </PageWrapper> 
    );
  };
};

export default ContentsPage;
