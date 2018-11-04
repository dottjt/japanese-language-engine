import * as React from 'react';
import styled from 'styled-components';

import { Flex } from '../../atoms/LayoutStyles';
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

  // SENTENCE_ENDING_NE,
  // SENTENCE_ENDING_YO,
  // SENTENCE_ENDING_YO_NE,
  // SENTENCE_ENDING_RANDOM,

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
  width: 80px;
`;

class Buttons extends React.Component<PropTypes.IButtonsProps, {}> {
  public render() {
    const { values, onClickRedirect, title, type, client } = this.props;

    return (
      <Flex>
        <Heading 
          is='h3' 
          p={1}
          fontSize={3}
          css={{ minWidth: '120px' }}
        >{title}</Heading>
        <Flex flexWrap='wrap'>
          {values.map((value: Util.IButtonValues) => (
            <ControlPanelButton key={value.value} p={1} mr={2} selected={value.selected} onClick={() => onClickRedirect(client, value.value)} >
              {capitalise(this.convertToReadableString(value.value, type))}
            </ControlPanelButton>
          ))}
        </Flex>
      </Flex>
    );
  };

  private convertToReadableString = (value: string, controlPanelType: string): string => {
    switch(controlPanelType) {
      case POLITENESS_CONTROL_PANEL_TYPE: 
        return this.politenessReadable(value);
      case POLARITY_CONTROL_PANEL_TYPE:  
        return this.polarityReadable(value);
      case TENSE_CONTROL_PANEL_TYPE:    
        return this.tenseReadable(value);
      case GENDER_CONTROL_PANEL_TYPE:     
        return this.genderReadable(value);
      case QUESTION_CONTROL_PANEL_TYPE:   
        return this.questionReadable(value);
    }
    throw new Error(createError('SentenceControlPanel.tsx', 'convertValues', `${controlPanelType} does not exist.`));    
  };

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
  
  private tenseReadable = (value: string): string => {
    switch(value) {
      case TENSE_PRESENT: return 'Present';
      case TENSE_PAST: return 'Past';
      case TENSE_RANDOM: return 'Random';
    };
    throw new Error(createError('SentenceControlPanel.tsx', 'tenseReadable', `${value} not recognised.`));
  }

  private polarityReadable = (value: string): string => {
    switch(value) {
      case POLARITY_POSITIVE: return 'Positive';
      case POLARITY_NEGATIVE: return 'Negative';
      case POLARITY_RANDOM: return 'Random';
    };
    throw new Error(createError('SentenceControlPanel.tsx', 'polarityReadable', `${value} not recognised.`));
  }
  
  private genderReadable = (value: string): string => {
    switch(value) {
      case GENDER_MASCULINE: return 'Masculine';
      case GENDER_FEMININE: return 'Feminine';
      case GENDER_RANDOM: return 'Random';
    };
    throw new Error(createError('SentenceControlPanel.tsx', 'genderReadable', `${value} not recognised.`));
  }
  
  private questionReadable = (value: string): string => {
    switch(value) {
      case HAS_QUESTION: return 'Yes';
      case NOT_QUESTION: return 'No';
      case RANDOM_QUESTION: return 'Random';
    };
    throw new Error(createError('SentenceControlPanel.tsx', 'questionReadable', `${value} not recognised.`));
  }

  // private sentenceEndingReadable = (value: string) => {
  //   switch(value) {
  //     case SENTENCE_ENDING_NE: return 'ね';
  //     case SENTENCE_ENDING_YO: return 'よ';
  //     case SENTENCE_ENDING_YO_NE: return 'よね';
  //     case SENTENCE_ENDING_RANDOM: return 'Random';
  //   };
  // throw new Error(createError('SentenceControlPanel.tsx', 'sentenceEndingReadable', `${value} not recognised.`));
  // }
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
      <React.Fragment>
        <Buttons
          title='Polarity'
          values={this.convertValues([POLARITY_POSITIVE, POLARITY_NEGATIVE, POLARITY_RANDOM], POLARITY_CONTROL_PANEL_TYPE, preOptions)}
          type={POLARITY_CONTROL_PANEL_TYPE}
          onClickRedirect={this.polarityRedirect}
          client={client}
        />
        <Buttons
          title='Politeness'
          values={this.convertValues([POLITENESS_CASUAL, POLITENESS_FORMAL, /* POLITENESS_HUMBLE, POLITENESS_HONORIFIC, */ POLITENESS_RANDOM], POLITENESS_CONTROL_PANEL_TYPE, preOptions)}
          type={POLITENESS_CONTROL_PANEL_TYPE}
          onClickRedirect={this.politenessRedirect}
          client={client}
        />
        <Buttons
          title='Question'
          values={this.convertValues([HAS_QUESTION, NOT_QUESTION, RANDOM_QUESTION], QUESTION_CONTROL_PANEL_TYPE, preOptions)}
          type={QUESTION_CONTROL_PANEL_TYPE}
          onClickRedirect={this.questionRedirect}
          client={client}
        />
        <Buttons
          title='Tense'
          values={this.convertValues([TENSE_PRESENT, TENSE_PAST, TENSE_RANDOM], TENSE_CONTROL_PANEL_TYPE, preOptions)}
          type={TENSE_CONTROL_PANEL_TYPE}
          onClickRedirect={this.tenseRedirect}
          client={client}
        />
        <Buttons
          title='Gender'
          values={this.convertValues([GENDER_MASCULINE, GENDER_FEMININE, GENDER_RANDOM], GENDER_CONTROL_PANEL_TYPE, preOptions)}
          type={GENDER_CONTROL_PANEL_TYPE}
          onClickRedirect={this.genderRedirect}
          client={client}
        />
        {/* <Buttons
          title='Sentence Ending'
          values={this.convertValues([SENTENCE_ENDING_NE, SENTENCE_ENDING_YO, SENTENCE_ENDING_YO_NE, SENTENCE_ENDING_RANDOM], GENDER_CONTROL_PANEL_TYPE, preOptions)}
          type={GENDER_CONTROL_PANEL_TYPE}
          onClickRedirect={this.genderRedirect}
          client={client}
        /> */}
      </React.Fragment>
    );
  }

  private convertValues = (values: string[], controlPanelType: string, preOptions: Util.Options): Util.IButtonValues[] =>
    values.map((value: string): Util.IButtonValues => {
      const { politeness, polarity, tense, gender, question } = preOptions;
      switch(controlPanelType) {
        case POLITENESS_CONTROL_PANEL_TYPE: 
          return value === politeness ? { value, selected: true } : { value, selected: false };
        case POLARITY_CONTROL_PANEL_TYPE:  
          return value === polarity ? { value, selected: true } : { value, selected: false };
        case TENSE_CONTROL_PANEL_TYPE:    
          return value === tense ? { value, selected: true } : { value, selected: false };
        case GENDER_CONTROL_PANEL_TYPE:     
          return value === gender ? { value, selected: true } : { value, selected: false };
        case QUESTION_CONTROL_PANEL_TYPE:   
          return value === question ? { value, selected: true } : { value, selected: false };
      }
      throw new Error(createError('SentenceControlPanel.tsx', 'convertValues', `${controlPanelType} does not exist.`));    
    });

  private politenessRedirect = (client: any, value: string): void => this.updateControlPanelOptions(client, { politeness: value }); 
  private polarityRedirect = (client: any, value: string): void => this.updateControlPanelOptions(client, { polarity: value });
  private questionRedirect = (client: any, value: string): void => this.updateControlPanelOptions(client, { question: value });
  private tenseRedirect = (client: any, value: string): void => this.updateControlPanelOptions(client, { tense: value });
  private genderRedirect = (client: any, value: string): void => this.updateControlPanelOptions(client, { gender: value });

  private updateControlPanelOptions = (client: any, options: { politeness?: string, polarity?: string, question?: string, tense?: string, gender?: string }): void => {
    client.writeData({
      data: { preOptions: { ...options, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS } },
    });

    getExercisesApollo(client, this.props.path, 10);
  };
};

export default SentenceControlPanel;
