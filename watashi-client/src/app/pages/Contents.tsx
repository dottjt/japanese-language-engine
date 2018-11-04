import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading, Text } from '../atoms/TextStyles';

import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/generalConstants';
import { LESSON_SECTIONS } from '../../util/constants/lessonConstants';

import Helmet from '../components/Helmet';

class ContentsPage extends React.Component<{}, {}> {
  public render() {
    return (
      <PageWrapper>
        <Helmet title={ROUTE_TITLE.CONTENTS} description={ROUTE_DESCRIPTION.CONTENTS}/>

        <PageHeading>{ROUTE_TITLE.CONTENTS}</PageHeading>

        <Text>{LESSON_SECTIONS.S00}</Text>
        <Text>{LESSON_SECTIONS.S01}</Text>
        <Text>{LESSON_SECTIONS.S02}</Text>
        <Text>{LESSON_SECTIONS.S03}</Text>
        <Text>{LESSON_SECTIONS.S04}</Text>
        <Text>{LESSON_SECTIONS.S05}</Text>
        <Text>{LESSON_SECTIONS.S06}</Text>
      </PageWrapper> 
    );
  };
};

export default ContentsPage;
