import * as React from 'react';

import { Flex, FlexColumn } from '../../atoms/LayoutStyles';
import { Button } from '../../atoms/ClickableStyles';
import { Heading } from '../../atoms/TextStyles';

import {
  capitalise,
  createError,
  getExercisesApollo,
} from '../../../util/functions';

import {
  GENDER_MASCULINE,
  GENDER_FEMININE,
  GENDER_RANDOM,

  POLITENESS_CASUAL,
  POLITENESS_FORMAL,
  POLITENESS_HUMBLE,
  POLITENESS_HONORIFIC,
  POLITENESS_RANDOM,

  TENSE_PRESENT,
  TENSE_PAST,
  TENSE_RANDOM,

  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,
  POLARITY_RANDOM,

  SENTENCE_ENDING_NE,
  SENTENCE_ENDING_YO,
  SENTENCE_ENDING_YO_NE,
  SENTENCE_ENDING_RANDOM,

  HAS_QUESTION,
  NOT_QUESTION,
  RANDOM_QUESTION,
} from '../../../util/constants/optionsConstants';

import {
  __TYPENAME_SENTENCE_STATS,
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
} from '../../../util/constants/typeNameConstants';

class Buttons extends React.Component<PropTypes.IButtonsProps, {}> {
  public render() {
    const {values } = this.props;

    return (
      <FlexColumn>
        <Heading is='h3'>{this.props.title}</Heading>
        {values.map((value: Util.IButtonValues) => (
          <Button key={value.value} onClick={this.props.onClickCallback} >
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
const OFF = 'OFF';

class SentenceControlPanel extends React.Component<PropTypes.ISentenceControlPanelProps, {}> {
  public render() {
    const { preOptions } = this.props;
    return (
      <Flex>
        <Buttons
          title='Polarity'
          values={this.convertValues([OFF, POLARITY_POSITIVE, POLARITY_NEGATIVE, POLARITY_RANDOM], POLARITY_CONTROL_PANEL_TYPE, preOptions)}
          onClickCallback={this.polarityCallback}
        />
        <Buttons
          title='Politeness'
          values={this.convertValues([OFF, POLITENESS_CASUAL, POLITENESS_FORMAL, POLITENESS_HUMBLE, POLITENESS_HONORIFIC, POLITENESS_RANDOM], POLITENESS_CONTROL_PANEL_TYPE, preOptions)}
          onClickCallback={this.politenessCallback}
        />
        <Buttons
          title='Question'
          values={this.convertValues([OFF, HAS_QUESTION, NOT_QUESTION, RANDOM_QUESTION], QUESTION_CONTROL_PANEL_TYPE, preOptions)}
          onClickCallback={this.questionCallback}
        />
        <Buttons
          title='Tense'
          values={this.convertValues([OFF, TENSE_PRESENT, TENSE_PAST, TENSE_RANDOM], TENSE_CONTROL_PANEL_TYPE, preOptions)}
          onClickCallback={this.tenseCallback}
        />
        <Buttons
          title='Gender'
          values={this.convertValues([OFF, GENDER_MASCULINE, GENDER_FEMININE, GENDER_RANDOM], GENDER_CONTROL_PANEL_TYPE, preOptions)}
          onClickCallback={this.genderCallback}
        />
        <Buttons
          title='Gender'
          values={this.convertValues([OFF, SENTENCE_ENDING_NE, SENTENCE_ENDING_YO, SENTENCE_ENDING_YO_NE, SENTENCE_ENDING_RANDOM], GENDER_CONTROL_PANEL_TYPE, preOptions)}
          onClickCallback={this.genderCallback}
        />
      </Flex>
    );
  }

  private convertValues = (values: string[], controlPanelType: string, preOptions: Util.PreOptions): Util.IButtonValues[] =>
    values.map((value: string, index: number) => {
      const { politeness, polarity, tense, gender, question } = preOptions;
      switch(controlPanelType) {
        case POLITENESS_CONTROL_PANEL_TYPE: 
          return value === politeness || value === OFF ? { value, selected: true } : { value, selected: false };
        case POLARITY_CONTROL_PANEL_TYPE:   
          return value === polarity || value === OFF ? { value, selected: true } : { value, selected: false };
        case TENSE_CONTROL_PANEL_TYPE:      
          return value === tense || value === OFF ? { value, selected: true } : { value, selected: false };
        case GENDER_CONTROL_PANEL_TYPE:     
          return value === gender || value === OFF ? { value, selected: true } : { value, selected: false };
        case QUESTION_CONTROL_PANEL_TYPE:   
          return value === question || value === OFF ? { value, selected: true } : { value, selected: false };
      }
      throw new Error(createError('SentenceControlPanel.tsx', 'convertValues', `${controlPanelType} does not exist.`));    
    });
  
  private politenessCallback = (value: string): void => {
    this.updateControlPanelOptions({ controlPanelPoliteness: value }); 
  };

  private polarityCallback = (value: string): void => {
    this.updateControlPanelOptions({ controlPanelPolarity: value });
  };

  private questionCallback = (value: string): void => {
    this.updateControlPanelOptions({ controlPanelQuestion: value });
  };

  private tenseCallback = (value: string): void => {
    this.updateControlPanelOptions({ controlPanelTense: value });
  };

  private genderCallback = (value: string): void => {
    this.updateControlPanelOptions({ controlPanelGender: value });
  };

  private updateControlPanelOptions = (controlPanelObject: Util.ControlPanelOptions): void => {
    this.props.client.writeData({
      data: { controlPanelOptions: { ...controlPanelObject, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS } },
    });
    getExercisesApollo(this.props.client, this.props.path, 10);
  };
};

export default SentenceControlPanel;
