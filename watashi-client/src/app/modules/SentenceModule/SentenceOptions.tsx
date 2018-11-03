import * as React from "react";

import { Flex } from '../../atoms/LayoutStyles';
import { Button } from '../../atoms/ClickableStyles';

import {

  getExercisesApollo,
} from '../../../util/functions';

import {
  __TYPENAME_SENTENCE_STATS,
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
} from "../../../util/constants/typeNameConstants";

class SentenceOptions extends React.Component<PropTypes.ISentenceOptionsProps, {}> {
  public render() {
    const { client, path, sentenceDisplayOptions } = this.props;
    return (
      <Flex>
        <Button p={1} onClick={() => this.toggleSentenceStats(client, sentenceDisplayOptions.toggleSentenceStats)}>
          Toggle sentence stats
        </Button>
        <Button p={1} onClick={() => this.randomiseExerices(client, path)}>
          Randomise exercises
        </Button>
        <Button p={1} onClick={() => this.toggleSentenceOrder(client, sentenceDisplayOptions.toggleSentenceOrder)}>
          Toggle Language Order
        </Button>
        <Button p={1} onClick={() => this.toggleSentenceHide(client, sentenceDisplayOptions.toggleSentenceHide)}>
          Toggle Sentence Hide
        </Button>
      </Flex>
    );
  }
  private toggleSentenceHide = (client: any, toggleSentenceHide: boolean): void => {
    client.writeData({ data: { sentenceDisplayOptions: { __typename: __TYPENAME_SENTENCE_STATS, toggleSentenceHide: !toggleSentenceHide }, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }})
  };

  private toggleSentenceStats = (client: any, toggleSentenceStats: boolean): void => {
    client.writeData({ data: { sentenceDisplayOptions: { __typename: __TYPENAME_SENTENCE_STATS, toggleSentenceStats: !toggleSentenceStats }, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }})
  };

  private randomiseExerices = (client: any, path: string): void => {
    getExercisesApollo(client, path, 10);
  };

  private toggleSentenceOrder = (client: any, toggleSentenceOrder: boolean): void => {
    client.writeData({ data: { sentenceDisplayOptions: { __typename: __TYPENAME_SENTENCE_STATS, toggleSentenceOrder: !toggleSentenceOrder }, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }})
  };
}

export default SentenceOptions;
