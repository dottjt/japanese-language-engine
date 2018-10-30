import * as React from "react";

import { FlexColumn } from '../atoms/LayoutStyles';
import { Button } from '../atoms/ClickableStyles';
// import { Heading } from '../atoms/TextStyles';

import {
  // capitalise,
  // convertValuesIntoButtonArray,
  getExercisesApollo,
} from '../../util/functions';

// import {
//   // capitalise,
//   // convertValuesIntoButtonArray,
// } from '../../util/constants/lessonConstants';

// import {
//   POLARITY_NEGATIVE,
//   POLARITY_POSITIVE,
  
//   POLITENESS_CASUAL,
//   POLITENESS_FORMAL,
// } from "../../util/constants/optionsConstants";

import {
  __TYPENAME_SENTENCE_STATS,
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
} from "../../util/constants/typeNameConstants";

// class Buttons extends React.Component<PropTypes.IButtonsProps, {}> {

//   public render() {
//     return (
//       <FlexColumn>
//         <Heading is='h3'>{this.props.title}</Heading>
//         {convertValuesIntoButtonArray(this.props.values).map(value => (
//           <Button key={value.value} /* onClick={this.props.onClickCallback} */ >
//             {capitalise(value.value)}
//           </Button>
//         ))}
//       </FlexColumn>
//     );
//   };
// };

class SentenceToggle extends React.Component<PropTypes.IControlPanelProps, {}> {
  public render() {
    const { client, route, sentenceDisplayOptions } = this.props;
    return (
      <FlexColumn>
        <Button onClick={() => this.toggleSentenceStats(client, sentenceDisplayOptions.toggleSentenceStats)}>
          Toggle sentence stats
        </Button>
        <Button onClick={() => this.randomiseExerices(client, route.path)}>
          Randomise exercises
        </Button>
        <Button onClick={() => this.toggleSentenceOrder(client, sentenceDisplayOptions.toggleSentenceOrder)}>
          Toggle Language Order
        </Button>
        <Button onClick={() => this.toggleSentenceHide(client, sentenceDisplayOptions.toggleSentenceHide)}>
          Toggle Sentence Hide
        </Button>

        {/* <Buttons
          title={"Sentence Politeness"}
          values={[convertPolitenessIntoValue(POLITENESS_CASUAL), convertPolitenessIntoValue(POLITENESS_FORMAL)]}
          onClickCallback={this.politenessCallback}
        />
        <Buttons
          title={"Question Variation"}
          values={[convertPolarityIntoValue(POLARITY_POSITIVE), convertPolarityIntoValue(POLARITY_NEGATIVE)]}
          onClickCallback={this.variationCallback}
        /> */}
      </FlexColumn>
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

  // private politenessCallback = (value: string): void =>
  //   this.props.client.writeData({
  //     data: {
  //       sentenceDisplayOptions: { politeness: value, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }
  //     }
  //   });

  // private variationCallback = (value: string): void => {
  //   this.props.client.writeData({
  //     data: {
  //       sentenceDisplayOptions: { variation: value, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }
  //     }
  //   });
  // };

}

export default SentenceToggle;
