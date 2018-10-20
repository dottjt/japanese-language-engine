import * as React from 'react'
import { Card, Flex, Text } from 'rebass';

import { Query } from 'react-apollo';
import { GET_ALL_SENTENCE_DISPLAY_OPTIONS_QUERY } from '../../graphql/queries';

import {
  convertPolitenessIntoValue,
  convertPolarityIntoValue,
} from '../../util/functions';

class SentenceHints extends React.Component<PropTypes.ISentenceHintsProps, {}> {
  public render() {
    const { politeness, polarity, /* primaryType, variation */ } = this.props.options;
    return (
      <Query query={GET_ALL_SENTENCE_DISPLAY_OPTIONS_QUERY}>
        {({ data }) => (
          <Card>
            {data.sentenceDisplayOptions.showSentenceHints &&
              <Flex>
                <Text mr={2}>
                  {convertPolitenessIntoValue(politeness)}
                </Text>
                <Text>
                  {convertPolarityIntoValue(polarity)}
                </Text>
              </Flex>
            }
          </Card>    
        )}
      </Query>
    );

  }
};

export default SentenceHints;