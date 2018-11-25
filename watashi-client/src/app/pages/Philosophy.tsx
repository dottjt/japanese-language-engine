import * as React from 'react';

import { FlexColumn, PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading, Text } from '../atoms/TextStyles';

import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

import Helmet from '../components/Helmet';

class Philosophy extends React.Component<{}, {}> {
  public render() {
    return (
      <PageWrapper>
        <Helmet
          title={ROUTE_TITLE.WELCOME}
          description={ROUTE_DESCRIPTION.WELCOME}
        />
        <PageHeading>Watashi Engine Philosophy</PageHeading>
        <FlexColumn width={600}>
          <Text>Watashi Engine is a bit different from other Japanese courses. It's intentions are different in that it aims to go well beyond the mere syntax and .</Text>
          <Text>Lanaguage is so much more than syntax, grammar and vocabulary. It is a complex</Text>
          <Text>I think the primary reason why people struggle with Japanese, isn't because they fail to undesrtand noun conjugations or even sentence structure. It's because they don't have a strong linguistic foundation of their own language to actually understand what something like 私 actually means.</Text>
          <Text>If you don't have at least a background understanding of things like prepositions or linking verbs in a language like English, then it can become even more difficult to truly understand why, for example, the Japanese language can be so concise.</Text>
          <Text>In essence, I believe a little bit of linguistic understanding can provide valuable insight that can only be gained through years of contextual practice. It will help you identify patterns more easily, as well as help you better understand what you're learning.</Text>
          <Text></Text>
        </FlexColumn>

        {/* <Heading fontSize={5} mb={4} mt={3}> Free vs Premium differences</Heading>
        <FlexColumn width={600} mb={4}>
          <Text>Essentially, paying for a Watashi Engine subscription allows you greater access to the engine and the grammar exercises available on this website.</Text>
        </FlexColumn> */}

      </PageWrapper> 
    );
  };
};

export default Philosophy;
