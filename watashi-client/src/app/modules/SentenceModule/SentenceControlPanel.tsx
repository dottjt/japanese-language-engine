import * as React from 'react';

import { Flex, FlexColumn } from '../../atoms/LayoutStyles';
import { Button } from '../../atoms/ClickableStyles';
import { Heading } from '../../atoms/TextStyles';

import {
  capitalise,
  // getExercisesApollo,
} from '../../../util/functions';

import {
  POLARITY_NEGATIVE,
  POLARITY_POSITIVE,
  
  POLITENESS_CASUAL,
  POLITENESS_FORMAL,
} from '../../../util/constants/optionsConstants';

import {
  __TYPENAME_SENTENCE_STATS,
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
} from '../../../util/constants/typeNameConstants';

class Buttons extends React.Component<PropTypes.IButtonsProps, {}> {

  public render() {
    return (
      <FlexColumn>
        <Heading is='h3'>{this.props.title}</Heading>
        {this.props.values.map(value => (
          <Button key={value.value} /* onClick={this.props.onClickCallback} */ >
            {capitalise(value.value)}
          </Button>
        ))}
      </FlexColumn>
    );
  };
};

// Control panel types. 

// // const VARIATION_CONTROL_PANEL_TYPE = 'VARIATION_CONTROL_PANEL_TYPE';
const POLARITY_CONTROL_PANEL_TYPE = 'POLARITY_CONTROL_PANEL_TYPE';
const POLITENESS_CONTROL_PANEL_TYPE = 'POLITENESS_CONTROL_PANEL_TYPE';
const TENSE_CONTROL_PANEL_TYPE = 'TENSE_CONTROL_PANEL_TYPE';
const GENDER_CONTROL_PANEL_TYPE = 'GENDER_CONTROL_PANEL_TYPE';
const QUESTION_CONTROL_PANEL_TYPE = 'QUESTION_CONTROL_PANEL_TYPE';

class SentenceControlPanel extends React.Component<PropTypes.IControlPanelProps, {}> {
  public render() {
    
    // NOTE: I think this needs to take the options array in order to determine what is actually selected. 

    const { options } = this.props;
    return (
      <Flex>
        <Buttons
          title='Sentence Politeness'
          values={this.convertValues([POLITENESS_CASUAL, POLITENESS_FORMAL], POLARITY_CONTROL_PANEL_TYPE)}
          onClickCallback={this.politenessCallback}
        />
        <Buttons
          title='Sentence Politeness'
          values={this.convertValues([POLITENESS_CASUAL, POLITENESS_FORMAL], POLITENESS_CONTROL_PANEL_TYPE)}
          onClickCallback={this.politenessCallback}
        />
        <Buttons
          title='Question Variation'
          values={this.convertValues([POLARITY_POSITIVE, POLARITY_NEGATIVE], QUESTION_CONTROL_PANEL_TYPE)}
          onClickCallback={this.variationCallback}
        />
        <Buttons
          title='Sentence Tense'
          values={this.convertValues([POLARITY_POSITIVE, POLARITY_NEGATIVE], TENSE_CONTROL_PANEL_TYPE)}
          onClickCallback={this.variationCallback}
        />
        <Buttons
          title='Sentence Gender'
          values={this.convertValues([POLARITY_POSITIVE, POLARITY_NEGATIVE], GENDER_CONTROL_PANEL_TYPE)}
          onClickCallback={this.variationCallback}
        />
      </Flex>
    );
  }

private convertValues = (values: string[], controlPanelType: string, options: Util.Options): Util.IValues[] =>
  values.map((value: string, index) => {
    switch(controlPanelType) {
      case POLARITY_CONTROL_PANEL_TYPE: 
        return { value, selected: options() }
      case POLITENESS_CONTROL_PANEL_TYPE:

      case TENSE_CONTROL_PANEL_TYPE:

      case GENDER_CONTROL_PANEL_TYPE:

      case QUESTION_CONTROL_PANEL_TYPE:

    }
    // if (index === 0) {
    //   return { value, selected: true }
    // }
    return { value, selected: false }
  });

  private politenessCallback = (value: string): void =>
    this.props.client.writeData({
      data: {
        exercises: { politeness: value, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }
      }
    });

  private variationCallback = (value: string): void => {
    this.props.client.writeData({
      data: {
        exercises: { variation: value, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }
      }
    });
  };

}

export default SentenceControlPanel;
