import * as React from "react";
import { Flex } from "rebass";

import { FlexColumn } from '../atoms/Layout';
import { Button } from '../atoms/Button';
import { H3 } from '../atoms/Text';

import {
  capitalise,
  convertValuesIntoButtonArray,
} from '../../util/functions';

import {
  POLARITY_NEGATIVE,
  POLARITY_POSITIVE,
  
  POLITENESS_CASUAL,
  POLITENESS_FORMAL,

  __TYPENAME_SENTENCE_DISPLAY_OPTIONS
} from "../../util/constants/optionsConstants";


class Buttons extends React.Component<PropTypes.IButtonsProps, {}> {

  public render() {
    return (
      <Flex>
        <H3>{this.props.title}</H3>
        {convertValuesIntoButtonArray(this.props.values).map(value => (
          <Button
            key={value.value}
            // onClick={this.props.onClickCallback}
          >
            {capitalise(value.value)}
          </Button>
        ))}
      </Flex>
    );
  };
};


class SentenceOptionsModule extends React.Component<PropTypes.IOptionsProps, {}> {
  public render() {
    return (
      <FlexColumn>
        <Buttons
          title={"Sentence Politeness"}
          values={[POLITENESS_CASUAL, POLITENESS_FORMAL]}
          onClickCallback={this.politenessCallback}
        />
        <Buttons
          title={"Question Variation"}
          values={[POLARITY_POSITIVE, POLARITY_NEGATIVE]}
          onClickCallback={this.variationCallback}
        />
      </FlexColumn>
    );
  }

  private politenessCallback = (value: string): void =>
    this.props.client.writeData({
      data: {
        options: { politeness: value, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }
      }
    });

  private variationCallback = (value: string): void => {
    this.props.client.writeData({
      data: {
        options: { variation: value, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }
      }
    });
  };
}

export default SentenceOptionsModule;
