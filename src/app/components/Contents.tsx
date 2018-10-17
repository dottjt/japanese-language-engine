
import * as React from 'react';
import { Flex, Heading } from 'rebass';
import { Link } from 'react-router5';

import {
  L00_CONTENTS,
  L01_LESSON_TITLE,
  L02_LESSON_TITLE,
} from '../../util/constants/generalConstants';

class Contents extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Flex flexDirection='column'>
        <Heading>Grammar Boss</Heading>
        <Heading>Lesson navigation</Heading>
        <Link routeName={L00_CONTENTS} routeOptions={{reload: true}}>Home</Link>
        <Link routeName={L01_LESSON_TITLE} routeOptions={{reload: true}}>{L01_LESSON_TITLE}</Link>
        <Link routeName={L02_LESSON_TITLE} routeOptions={{reload: true}}>{L02_LESSON_TITLE}</Link>
      </Flex>
    )
  };
};

export default Contents;
