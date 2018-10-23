import * as React from "react";

import { FlexColumn } from '../atoms/Layout';
import { Button } from '../atoms/Clickables';
import { H3 } from '../atoms/Text';
import { ControlPanel } from '../atoms/ControlPanel';

import {
  capitalise,
  convertValuesIntoButtonArray,
  convertPolitenessIntoValue,
  convertPolarityIntoValue,
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
      <FlexColumn>
        <H3>{this.props.title}</H3>
        {convertValuesIntoButtonArray(this.props.values).map(value => (
          <Button key={value.value} /* onClick={this.props.onClickCallback} */ >
            {capitalise(value.value)}
          </Button>
        ))}
      </FlexColumn>
    );
  };
};

class ControlPanelModule extends React.Component<PropTypes.IOptionsProps, {}> {
  public render() {
    return (
      <ControlPanel>
        <Buttons
          title={"Sentence Politeness"}
          values={[convertPolitenessIntoValue(POLITENESS_CASUAL), convertPolitenessIntoValue(POLITENESS_FORMAL)]}
          onClickCallback={this.politenessCallback}
        />
        <Buttons
          title={"Question Variation"}
          values={[convertPolarityIntoValue(POLARITY_POSITIVE), convertPolarityIntoValue(POLARITY_NEGATIVE)]}
          onClickCallback={this.variationCallback}
        />
      </ControlPanel>
    );
  }

  private politenessCallback = (value: string): void =>
    this.props.client.writeData({
      data: {
        SentenceDisplayOptions: { politeness: value, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }
      }
    });

  private variationCallback = (value: string): void => {
    this.props.client.writeData({
      data: {
        SentenceDisplayOptions: { variation: value, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }
      }
    });
  };
}

export default ControlPanelModule;
