import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
import { Heading } from '../atoms/TextStyles';
import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/generalConstants';

import Helmet from '../components/Helmet';
import CourseList from '../components/CourseList';

class ContentsPage extends React.Component<{}, {}> {
  public render() {
    return (
      <FlexColumn ml={4} mt={4}>
        <Helmet
          title={ROUTE_TITLE.CONTENTS}
          description={ROUTE_DESCRIPTION.CONTENTS}
        />
        <Heading is='h2' fontSize={3}>Contents</Heading>
        <CourseList/>
      </FlexColumn> 
    );
  };
};

export default ContentsPage;
