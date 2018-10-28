import * as React from 'react'

import { SentenceStat, Stat } from '../../atoms/SentenceStyles';

import {
  determineStatTypes,
  changeSentenceStats,
} from './sentenceUtil';

// import {
//   createError,
// } from '../../../util/functions';

// import {
// //   // VERB_ENGLISH,
// //   // VERB_ENGLISH_CONJUGATION,
// //   // VERB_JAPANESE,
// //   // VERB_JAPANESE_CONJUGATION,
// //   // NOUN_ENGLISH,
// //   // NOUN_ENGLISH_CONJUGATION,
// //   // NOUN_ENGLISH_POLARITY,
// //   // NOUN_ENGLISH_INDEFINITE_ARTICLE,
// //   // NOUN_JAPANESE,
// //   // NOUN_JAPANESE_CONJUGATION,
// //   // NOUN_JAPANESE_TOPIC_PARTICLE,
// //   // NOUN_JAPANESE_CATEGORY_ENDING,
// } from '../../../util/constants/optionsConstants';


class SentenceStats extends React.Component<PropTypes.ISentenceStatsProps, {}> {
  public render() {
    const { exerciseIndex } = this.props;
    const statTypes = determineStatTypes(this.props.options);

    return (
      this.props.sentenceDisplayOptions.showSentenceStats &&
        <SentenceStat>
          {statTypes.questionValue &&
            <Stat
              onMouseEnter={() => this.onQuestionEnter(exerciseIndex)}
              onMouseLeave={this.onQuestionExit}
            >
              {statTypes.questionValue}
            </Stat>
          }
          {statTypes.politenessValue &&
            <Stat 
              onMouseEnter={() => this.onPolitenessEnter(exerciseIndex)}
              onMouseLeave={this.onPolitenessExit}
            >
              {statTypes.politenessValue}
            </Stat>
          }
          {statTypes.polarityTenseValue &&
            <Stat
              onMouseEnter={() => this.onPolarityTenseEnter(exerciseIndex)}
              onMouseLeave={this.onPolarityTenseExit}
            >
              {statTypes.polarityTenseValue}
            </Stat>
          }
        </SentenceStat>
    );
  }

  private onQuestionEnter = (exerciseIndex: number): void => {
    changeSentenceStats(this.props.client, { questionHover: true, selectedExerciseNumber: exerciseIndex });
  }
  private onQuestionExit = (): void => {
    changeSentenceStats(this.props.client, { questionHover: true });
  }

  private onPolarityTenseEnter = (exerciseIndex: number): void => {
    changeSentenceStats(this.props.client, { polarityTenseHover: true, selectedExerciseNumber: exerciseIndex });
  }
  private onPolarityTenseExit = (): void => {
    changeSentenceStats(this.props.client, { polarityTenseHover: true });
  }

  private onPolitenessEnter = (exerciseIndex: number): void => {
    changeSentenceStats(this.props.client, { nounPolitenessHover: true, selectedExerciseNumber: exerciseIndex });
  }
  private onPolitenessExit = (): void => {
    changeSentenceStats(this.props.client, { nounPolitenessHover: true });
  }
};


export default SentenceStats;
