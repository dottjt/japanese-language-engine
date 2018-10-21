import * as React from 'react'
import { Card, Flex } from 'rebass';

import { Query } from 'react-apollo';
import { GET_ALL_SENTENCE_DISPLAY_OPTIONS_QUERY } from '../../graphql/queries';

import {
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS
} from '../../util/constants/optionsConstants';

import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin-right: 2rem;
  width: 11rem;
  background: blue;
  color: white;
  border: 2px solid white;
`;

class SentenceOptions extends React.Component<{}, {}> {
  public render() {
    return (
      <Query
        query={GET_ALL_SENTENCE_DISPLAY_OPTIONS_QUERY}
      >
        {({ data, client }) => {
          return (
            <Card>
              <Flex>
                <Button
                  onClick={() => this.toggleShowSentenceHints(client, data.sentenceDisplayOptions.showSentenceHints)}  
                >
                  toggle show sentence hints
                </Button>
                <Button>
                  reset sentence examples
                </Button>
              </Flex>
            </Card>
          )
        }}
      </Query>
    );
  }

  private toggleShowSentenceHints = (client: any, value: boolean): void =>
    client.writeData({
      data: {
        sentenceDisplayOptions: { showSentenceHints: value!, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }
      }
    });
};

export default SentenceOptions;