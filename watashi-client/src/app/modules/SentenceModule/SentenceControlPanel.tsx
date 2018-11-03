import * as React from 'react';
import styled from 'styled-components';

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


const ControlPanelButton = styled(Button)<any>`
  background: ${props => props.selected ? 'red' : 'white'};
`;

class Buttons extends React.Component<PropTypes.IButtonsProps, {}> {
  public render() {
    const { values, onClickCallback, title, client } = this.props;

    return (
      <Flex width={600}>
        <Heading 
          is='h3' 
          fontSize={3}
          width={200}
        >{title}</Heading>
        <Flex width={600} flexWrap='wrap'>
          {values.map((value: Util.IButtonValues) => (
            <ControlPanelButton key={value.value} selected={value.selected} onClick={() => onClickCallback(client, value.value)} >
              {capitalise(value.value)}
            </ControlPanelButton>
          ))}
        </Flex>
      </Flex>
    );
  };
};

// const VARIATION_CONTROL_PANEL_TYPE = 'VARIATION_CONTROL_PANEL_TYPE';
const POLARITY_CONTROL_PANEL_TYPE = 'POLARITY_CONTROL_PANEL_TYPE';
const POLITENESS_CONTROL_PANEL_TYPE = 'POLITENESS_CONTROL_PANEL_TYPE';
const TENSE_CONTROL_PANEL_TYPE = 'TENSE_CONTROL_PANEL_TYPE';
const GENDER_CONTROL_PANEL_TYPE = 'GENDER_CONTROL_PANEL_TYPE';
const QUESTION_CONTROL_PANEL_TYPE = 'QUESTION_CONTROL_PANEL_TYPE';

class SentenceControlPanel extends React.Component<PropTypes.ISentenceControlPanelProps, {}> {
  public render() {
    const { preOptions, client } = this.props;
    return (
      <FlexColumn>
        <Buttons
          title='Polarity'
          values={this.convertValues([POLARITY_POSITIVE, POLARITY_NEGATIVE, POLARITY_RANDOM], POLARITY_CONTROL_PANEL_TYPE, preOptions)}
          onClickCallback={this.polarityCallback}
          client={client}
        />
        <Buttons
          title='Politeness'
          values={this.convertValues([POLITENESS_CASUAL, POLITENESS_FORMAL, POLITENESS_HUMBLE, POLITENESS_HONORIFIC, POLITENESS_RANDOM], POLITENESS_CONTROL_PANEL_TYPE, preOptions)}
          onClickCallback={this.politenessCallback}
          client={client}
        />
        <Buttons
          title='Question'
          values={this.convertValues([HAS_QUESTION, NOT_QUESTION, RANDOM_QUESTION], QUESTION_CONTROL_PANEL_TYPE, preOptions)}
          onClickCallback={this.questionCallback}
          client={client}
        />
        <Buttons
          title='Tense'
          values={this.convertValues([TENSE_PRESENT, TENSE_PAST, TENSE_RANDOM], TENSE_CONTROL_PANEL_TYPE, preOptions)}
          onClickCallback={this.tenseCallback}
          client={client}
        />
        <Buttons
          title='Gender'
          values={this.convertValues([GENDER_MASCULINE, GENDER_FEMININE, GENDER_RANDOM], GENDER_CONTROL_PANEL_TYPE, preOptions)}
          onClickCallback={this.genderCallback}
          client={client}
        />
        <Buttons
          title='Gender'
          values={this.convertValues([SENTENCE_ENDING_NE, SENTENCE_ENDING_YO, SENTENCE_ENDING_YO_NE, SENTENCE_ENDING_RANDOM], GENDER_CONTROL_PANEL_TYPE, preOptions)}
          onClickCallback={this.genderCallback}
          client={client}
        />
      </FlexColumn>
    );
  }

  private convertValues = (values: string[], controlPanelType: string, preOptions: Util.PreOptions): Util.IButtonValues[] =>
    values.map((value: string): Util.IButtonValues => {
      const { politeness, polarity, tense, gender, question } = preOptions;
      switch(controlPanelType) {
        case POLITENESS_CONTROL_PANEL_TYPE: 
          const politenessValue = this.politenessReadable(value);
          return value === politeness ? { value: politenessValue, selected: true } : { value: politenessValue, selected: false };
        case POLARITY_CONTROL_PANEL_TYPE:  
          const polarityReadable = this.polarityReadable(value);
          return value === polarity ? { value: polarityReadable, selected: true } : { value: polarityReadable, selected: false };
        case TENSE_CONTROL_PANEL_TYPE:    
          const tenseReadable = this.polarityReadable(value);
          return value === tense ? { value: tenseReadable, selected: true } : { value: tenseReadable, selected: false };
        case GENDER_CONTROL_PANEL_TYPE:     
          const genderReadable = this.polarityReadable(value);
          return value === gender ? { value: genderReadable, selected: true } : { value: genderReadable, selected: false };
        case QUESTION_CONTROL_PANEL_TYPE:   
          const questionReadable = this.polarityReadable(value);
          return value === question ? { value: questionReadable, selected: true } : { value: questionReadable, selected: false };
      }
      throw new Error(createError('SentenceControlPanel.tsx', 'convertValues', `${controlPanelType} does not exist.`));    
    });
  
  private politenessReadable = (value: string) => {
    switch(value) {
      case POLITENESS_CASUAL: return 'Casual';
      case POLITENESS_FORMAL: return 'Formal';
      case POLITENESS_HUMBLE: return 'Humble';
      case POLITENESS_HONORIFIC: return 'Honorific';
      case POLITENESS_RANDOM: return 'Random';
    };
    throw new Error();
  }
  
  private tenseReadable = (value: string) => {
    switch(value) {
      case TENSE_PRESENT: return 'Present';
      case TENSE_PAST: return 'Past';
      case TENSE_RANDOM: return 'Random';
    };
    throw new Error();
  }

  private polarityReadable = (value: string) => {
    switch(value) {
      case POLARITY_POSITIVE: return 'Positive';
      case POLARITY_NEGATIVE: return 'Negative';
      case POLARITY_RANDOM: return 'Random';
    };
  }
  
  private genderReadable = (value: string) => {
    switch(value) {
      case GENDER_MASCULINE: return 'Masculine';
      case GENDER_FEMININE: return 'Feminine';
      case GENDER_RANDOM: return 'Random';
    };
  }
  
  private questionReadable = (value: string) => {
    switch(value) {
      case HAS_QUESTION: return 'Is question';
      case NOT_QUESTION: return 'Is not question';
      case RANDOM_QUESTION: return 'Random';
    };
  }

  // private sentenceEndingReadable = (value: string) => {
  //   switch(value) {
  //     case SENTENCE_ENDING_NE: return 'ね';
  //     case SENTENCE_ENDING_YO: return 'よ';
  //     case SENTENCE_ENDING_YO_NE: return 'よね';
  //     case SENTENCE_ENDING_RANDOM: return 'Random';
  //   };
  // }

  private politenessCallback = (client: any, value: string): void => this.updateControlPanelOptions(client, { controlPanelPoliteness: value }); 
  private polarityCallback = (client: any, value: string): void => this.updateControlPanelOptions(client, { controlPanelPolarity: value });
  private questionCallback = (client: any, value: string): void => this.updateControlPanelOptions(client, { controlPanelQuestion: value });
  private tenseCallback = (client: any, value: string): void => this.updateControlPanelOptions(client, { controlPanelTense: value });
  private genderCallback = (client: any, value: string): void => this.updateControlPanelOptions(client, { controlPanelGender: value });

  private updateControlPanelOptions = (client: any, controlPanelObject: Util.ControlPanelOptions): void => {
    this.props.client.writeData({
      data: { controlPanelOptions: { ...controlPanelObject, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS } },
    });
    getExercisesApollo(this.props.client, this.props.path, 10);
  };
};

export default SentenceControlPanel;
