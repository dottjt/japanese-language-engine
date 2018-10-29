import * as React from 'react'

import { Flex } from '../../atoms/LayoutStyles';
import { Text } from '../../atoms/TextStyles';
import { SentenceStatsWrapper } from '../../atoms/CustomStyles';

import {
  visibleOrHidden
} from '../../../util/functions';

import {
  determineStatTypes,
  changeSentenceStats,
} from './sentenceUtil';


class SentenceStats extends React.Component<PropTypes.ISentenceStatsProps, {}> {
  public render() {
    const { exerciseIndex, sentenceDisplayOptions } = this.props;
    const statTypes = determineStatTypes(this.props.options);

    return (
        <SentenceStatsWrapper togglevisibility={visibleOrHidden(sentenceDisplayOptions.showSentenceStats)} justifyContent='flex-end'>
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
        </SentenceStatsWrapper>
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
