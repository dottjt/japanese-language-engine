import * as React from 'react';

import { PageWrapper, FlexColumn } from '../atoms/LayoutStyles';
import { PageHeading } from '../atoms/TextStyles';

import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

import Helmet from '../components/Helmet';
import LessonList from '../components/LessonList';

class ContentsPage extends React.Component<{}, {}> {
  public render() {
    return (
      <PageWrapper>
        <Helmet title={ROUTE_TITLE.CONTENTS} description={ROUTE_DESCRIPTION.CONTENTS}/>

        <PageHeading>{ROUTE_TITLE.CONTENTS}</PageHeading>

        <FlexColumn>
          <LessonList/>
        </FlexColumn>

      </PageWrapper> 
    );
  };
};

export default ContentsPage;
