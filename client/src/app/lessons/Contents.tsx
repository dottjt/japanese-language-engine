import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
import { Heading } from '../atoms/TextStyles';

import CourseList from '../components/CourseList';

class ContentsPage extends React.Component<{}, {}> {
  public render() {
    return (
      <FlexColumn ml={4} mt={4}>
        <Heading is='h2' fontSize={3}>Contents</Heading>
        <CourseList/>
      </FlexColumn> 
    );
  };
};

export default ContentsPage;
