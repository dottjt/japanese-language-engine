import * as React from 'react'

import { SentenceStat, Stat } from '../../atoms/SentenceStyles';

import {
  createError,
  convertPolitenessIntoValue,
  convertPolarityIntoValue,
} from '../../../util/functions';

import {
//   // VERB_ENGLISH,
//   // VERB_ENGLISH_CONJUGATION,
//   // VERB_JAPANESE,
//   // VERB_JAPANESE_CONJUGATION,
//   // NOUN_ENGLISH,
//   // NOUN_ENGLISH_CONJUGATION,
//   // NOUN_ENGLISH_POLARITY,
//   // NOUN_ENGLISH_INDEFINITE_ARTICLE,
//   // NOUN_JAPANESE,
//   // NOUN_JAPANESE_CONJUGATION,
//   // NOUN_JAPANESE_TOPIC_PARTICLE,
//   // NOUN_JAPANESE_CATEGORY_ENDING,

  HAS_QUESTION,

  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  TENSE_PRESENT,
  TENSE_PAST,
} from '../../../util/constants/optionsConstants';

import {
  __TYPENAME_SENTENCE_STATS,
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
} from "../../../util/constants/typeNameConstants";

const changeSentenceStats = (client: any, sentenceStatsFields: any): void => {
  try {
    client.writeData({
      data: { sentenceStats: { __typename: __TYPENAME_SENTENCE_STATS, ...sentenceStatsFields }, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }
    });
  } catch(error) {
    throw new Error(createError('SentenceModule/SentenceStats', 'changeSentenceStats', `Error: ${error}. Unable to update local graphql cache.`));    
  }
};

const determinePolarityTense = (polarity: string, tense: string) => {
  switch(`${polarity}${tense}`) {
    case `${POLARITY_POSITIVE}${TENSE_PRESENT}`: return 'Negative' 
    case `${POLARITY_POSITIVE}${TENSE_PAST}`: return 'Negative'
    case `${POLARITY_NEGATIVE}${TENSE_PRESENT}`: return 'Negative'
    case `${POLARITY_NEGATIVE}${TENSE_PAST}`: return 'Negative'
  }
  
};

const determineStatTypes = (options: Util.Options) => {
  const { politeness, variation, polarity, tense, gender, question } = options;
    
  const polarityTenseValue = determinePolarityTense(polarity, tense);
  const politenessValue = options.politeness === HAS_QUESTION ? 'question' : false;

  return {
    politenessValue,
    question
  }
};

class SentenceStats extends React.Component<PropTypes.ISentenceStatsProps, {}> {
  public render() {
    const { exerciseIndex } = this.props;
    const { politeness, polarity, /* primaryType, variation */ } = this.props.options;

    return (
      this.props.sentenceDisplayOptions.showSentenceStats &&
        <SentenceStat>
          <Stat 
            onMouseEnter={() => this.onPolitenessEnter(exerciseIndex)}
            onMouseLeave={this.onPolitenessExit}
          >
            {convertPolitenessIntoValue(politeness)}
          </Stat>
          <Stat
            onMouseEnter={() => this.onPolarityEnter(exerciseIndex)}
            onMouseLeave={this.onPolarityExit}
          >
            {convertPolarityIntoValue(polarity)}
          </Stat>
        </SentenceStat>
    );
  }

  private onPolarityEnter = (exerciseIndex: number) => {
    changeSentenceStats(this.props.client, { polarityHover: true, selectedExerciseNumber: exerciseIndex });
  }
  private onPolarityExit = () => {
    changeSentenceStats(this.props.client, { polarityHover: true });
  }
  private onPolitenessEnter = (exerciseIndex: number) => {
    changeSentenceStats(this.props.client, { nounPolitenessHover: true, selectedExerciseNumber: exerciseIndex });
  }
  private onPolitenessExit = () => {
    changeSentenceStats(this.props.client, { nounPolitenessHover: true });
  }
};


export default SentenceStats;
