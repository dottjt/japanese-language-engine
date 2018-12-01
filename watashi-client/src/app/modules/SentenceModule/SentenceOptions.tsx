import * as React from "react";

import { Button } from '../../atoms/ClickableStyles';

// import { getExercisesApollo } from '../../../util/conjugations/generateExercises';

import {
  __TYPENAME_SENTENCE_STATS,
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
} from "../../../util/constants/typeNameConstants";

class SentenceOptions extends React.Component<PropTypes.ISentenceOptionsProps, {}> {
  public render() {
    const { client, path, sentenceDisplayOptions } = this.props;
    return (
      <React.Fragment>
        <Button p={1} onClick={() => this.toggleSentenceStats(client, sentenceDisplayOptions.toggleSentenceStats)}>
          Toggle Sentence Analysis
        </Button>
        <Button p={1} onClick={() => this.randomiseExerices(client, path)}>
          Regenerate Exercises
        </Button>
        <Button p={1} onClick={() => this.toggleSentenceOrder(client, sentenceDisplayOptions.toggleSentenceOrder)}>
          English/Japanese Order
        </Button>
        <Button p={1} onClick={() => this.toggleSentenceHide(client, sentenceDisplayOptions.toggleSentenceHide)}>
          Hide/Reveal Sentence
        </Button>
      </React.Fragment>
    );
  }
  
  private toggleSentenceHide = (client: any, toggleSentenceHide: boolean): void => {
    client.writeData({ data: { sentenceDisplayOptions: { __typename: __TYPENAME_SENTENCE_STATS, toggleSentenceHide: !toggleSentenceHide }, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }})
  };

  private toggleSentenceStats = (client: any, toggleSentenceStats: boolean): void => {
    client.writeData({ data: { sentenceDisplayOptions: { __typename: __TYPENAME_SENTENCE_STATS, toggleSentenceStats: !toggleSentenceStats }, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }})
  };

  private randomiseExerices = (client: any, path: string): void => {
    // getExercisesApollo(client, path, 10);
  };

  private toggleSentenceOrder = (client: any, toggleSentenceOrder: boolean): void => {
    client.writeData({ data: { sentenceDisplayOptions: { __typename: __TYPENAME_SENTENCE_STATS, toggleSentenceOrder: !toggleSentenceOrder }, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }})
  };
}

export default SentenceOptions;
