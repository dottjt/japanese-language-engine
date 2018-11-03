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
    const { values, onClickCallback, title, client } = this.props;

    return (
      <FlexColumn>
        <Heading is='h3'>{title}</Heading>
        {values.map((value: Util.IButtonValues) => (
          <Button key={value.value} onClick={() => onClickCallback(client, value.value)} >
            {capitalise(value.value)}
          </Button>
        ))}
      </FlexColumn>
    );
  };
};

// const VARIATION_CONTROL_PANEL_TYPE = 'VARIATION_CONTROL_PANEL_TYPE';
const POLARITY_CONTROL_PANEL_TYPE = 'POLARITY_CONTROL_PANEL_TYPE';
const POLITENESS_CONTROL_PANEL_TYPE = 'POLITENESS_CONTROL_PANEL_TYPE';
const TENSE_CONTROL_PANEL_TYPE = 'TENSE_CONTROL_PANEL_TYPE';
const GENDER_CONTROL_PANEL_TYPE = 'GENDER_CONTROL_PANEL_TYPE';
const QUESTION_CONTROL_PANEL_TYPE = 'QUESTION_CONTROL_PANEL_TYPE';
const OFF = 'OFF';

class SentenceControlPanel extends React.Component<PropTypes.ISentenceControlPanelProps, {}> {
  public render() {
    const { preOptions, client } = this.props;
    return (
      <Flex>
        <Buttons
          title='Polarity'
          values={this.convertValues([OFF, POLARITY_POSITIVE, POLARITY_NEGATIVE, POLARITY_RANDOM], POLARITY_CONTROL_PANEL_TYPE, preOptions)}
          onClickCallback={this.polarityCallback}
          client={client}
        />
        <Buttons
          title='Politeness'
          values={this.convertValues([OFF, POLITENESS_CASUAL, POLITENESS_FORMAL, POLITENESS_HUMBLE, POLITENESS_HONORIFIC, POLITENESS_RANDOM], POLITENESS_CONTROL_PANEL_TYPE, preOptions)}
          onClickCallback={this.politenessCallback}
          client={client}
        />
        <Buttons
          title='Question'
          values={this.convertValues([OFF, HAS_QUESTION, NOT_QUESTION, RANDOM_QUESTION], QUESTION_CONTROL_PANEL_TYPE, preOptions)}
          onClickCallback={this.questionCallback}
          client={client}
        />
        <Buttons
          title='Tense'
          values={this.convertValues([OFF, TENSE_PRESENT, TENSE_PAST, TENSE_RANDOM], TENSE_CONTROL_PANEL_TYPE, preOptions)}
          onClickCallback={this.tenseCallback}
          client={client}
        />
        <Buttons
          title='Gender'
          values={this.convertValues([OFF, GENDER_MASCULINE, GENDER_FEMININE, GENDER_RANDOM], GENDER_CONTROL_PANEL_TYPE, preOptions)}
          onClickCallback={this.genderCallback}
          client={client}
        />
        <Buttons
          title='Gender'
          values={this.convertValues([OFF, SENTENCE_ENDING_NE, SENTENCE_ENDING_YO, SENTENCE_ENDING_YO_NE, SENTENCE_ENDING_RANDOM], GENDER_CONTROL_PANEL_TYPE, preOptions)}
          onClickCallback={this.genderCallback}
          client={client}
        />
      </Flex>
    );
  }

  private convertValues = (values: string[], controlPanelType: string, preOptions: Util.PreOptions): Util.IButtonValues[] =>
    values.map((value: string): Util.IButtonValues => {
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
  
  private politenessCallback = (client: any, value: string): void => {
    this.updateControlPanelOptions(client, { controlPanelPoliteness: value }); 
  };

  private polarityCallback = (client: any, value: string): void => {
    this.updateControlPanelOptions(client, { controlPanelPolarity: value });
  };

  private questionCallback = (client: any, value: string): void => {
    this.updateControlPanelOptions(client, { controlPanelQuestion: value });
  };

  private tenseCallback = (client: any, value: string): void => {
    this.updateControlPanelOptions(client, { controlPanelTense: value });
  };

  private genderCallback = (client: any, value: string): void => {
    this.updateControlPanelOptions(client, { controlPanelGender: value });
  };

  private updateControlPanelOptions = (client: any, controlPanelObject: Util.ControlPanelOptions): void => {
    this.props.client.writeData({
      data: { controlPanelOptions: { ...controlPanelObject, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS } },
    });
    getExercisesApollo(this.props.client, this.props.path, 10);
  };
};

export default SentenceControlPanel;
