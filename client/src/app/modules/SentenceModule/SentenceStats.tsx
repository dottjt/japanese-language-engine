import * as React from 'react'

import { Text } from '../../atoms/TextStyles';
import { ToggleSentenceStats } from '../../atoms/CustomStyles';

import {
  determineStatTypes,
  changeSentenceStats,
} from './sentenceUtil';

const toggleSentenceStats = (value: boolean): string => value ? 'visible' : 'hidden';

class SentenceStats extends React.Component<PropTypes.ISentenceStatsProps, {}> {
  public render() {
    const { exerciseIndex, sentenceDisplayOptions } = this.props;
    const statTypes = determineStatTypes(this.props.options);

    return (
        <ToggleSentenceStats togglevisibility={toggleSentenceStats(sentenceDisplayOptions.toggleSentenceStats)} justifyContent='flex-end'>
          {statTypes.questionValue &&
            <Text mr={4} p={2} color='lightgreen'
              onMouseEnter={() => this.onQuestionEnter(exerciseIndex)}
              onMouseLeave={this.onQuestionExit}
            >
              {statTypes.questionValue}
            </Text>
          }
          {statTypes.politenessValue &&
            <Text mr={4} p={2} color='lightgreen'
              onMouseEnter={() => this.onPolitenessEnter(exerciseIndex)}
              onMouseLeave={this.onPolitenessExit}
            >
              {statTypes.politenessValue}
            </Text>
          }
          {statTypes.polarityTenseValue &&
            <Text mr={4} p={2} color='lightgreen'
              onMouseEnter={() => this.onPolarityTenseEnter(exerciseIndex)}
              onMouseLeave={this.onPolarityTenseExit}
            >
              {statTypes.polarityTenseValue}
            </Text>
          }
        </ToggleSentenceStats>
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
