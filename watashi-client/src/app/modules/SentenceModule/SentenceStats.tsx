import * as React from 'react'

import { Flex } from '../../atoms/LayoutStyles';
import { Text } from '../../atoms/TextStyles';
import { ToggleVisibility } from '../../atoms/CustomStyles';

import {
  determineStatTypes,
  changeSentenceStats,
} from './utilSentence';

const toggleSentenceStats = (value: boolean): string => value ? 'visible' : 'hidden';

class SentenceStats extends React.Component<PropTypes.ISentenceStatsProps, {}> {
  public render() {
    const { exerciseIndex, sentenceDisplayOptions } = this.props;
    const statTypes = determineStatTypes(this.props.options);

    return (
        <ToggleVisibility 
          togglevisibility={toggleSentenceStats(sentenceDisplayOptions.toggleSentenceStats)} 
          >
          <Flex justifyContent='flex-end'>
            {statTypes.topic &&
              <Text mr={4} p={2} color='sentenceStat'
                onMouseEnter={() => this.onTopicEnter(exerciseIndex)}
                onMouseLeave={this.onTopicExit}
              >
                Topic
              </Text>
            }
            {statTypes.subject &&
              <Text mr={4} p={2} color='sentenceStat'
                onMouseEnter={() => this.onSubjectEnter(exerciseIndex)}
                onMouseLeave={this.onSubjectExit}
              >
                Subject
              </Text>
            }
            {statTypes.verb &&
              <Text mr={4} p={2} color='sentenceStat'
                onMouseEnter={() => this.onVerbEnter(exerciseIndex)}
                onMouseLeave={this.onVerbExit}
              >
                Verb
              </Text>
            }
            {statTypes.questionValue &&
              <Text mr={4} p={2} color='sentenceStat'
                onMouseEnter={() => this.onQuestionEnter(exerciseIndex)}
                onMouseLeave={this.onQuestionExit}
              >
                {statTypes.questionValue}
              </Text>
            }
            {statTypes.politenessValue &&
              <Text mr={4} p={2} color='sentenceStat'
                onMouseEnter={() => this.onPolitenessEnter(exerciseIndex)}
                onMouseLeave={this.onPolitenessExit}
              >
                {statTypes.politenessValue}
              </Text>
            }
            {statTypes.polarityTenseValue &&
              <Text mr={4} p={2} color='sentenceStat'
                onMouseEnter={() => this.onPolarityTenseEnter(exerciseIndex)}
                onMouseLeave={this.onPolarityTenseExit}
              >
                {statTypes.polarityTenseValue}
              </Text>
            }
          </Flex>
        </ToggleVisibility>
    );
  }

  private onTopicEnter = (exerciseIndex: number): void => {
    changeSentenceStats(this.props.client, { topicHover: true, selectedExerciseNumber: exerciseIndex });
  }
  private onTopicExit = (): void => {
    changeSentenceStats(this.props.client, { topicHover: false });
  }

  private onSubjectEnter = (exerciseIndex: number): void => {
    changeSentenceStats(this.props.client, { subjectHover: true, selectedExerciseNumber: exerciseIndex });
  }
  private onSubjectExit = (): void => {
    changeSentenceStats(this.props.client, { subjectHover: false });
  }

  private onVerbEnter = (exerciseIndex: number): void => {
    changeSentenceStats(this.props.client, { verbHover: true, selectedExerciseNumber: exerciseIndex });
  }
  private onVerbExit = (): void => {
    changeSentenceStats(this.props.client, { verbHover: false });
  }

  private onQuestionEnter = (exerciseIndex: number): void => {
    changeSentenceStats(this.props.client, { questionHover: true, selectedExerciseNumber: exerciseIndex });
  }
  private onQuestionExit = (): void => {
    changeSentenceStats(this.props.client, { questionHover: false });
  }

  private onPolarityTenseEnter = (exerciseIndex: number): void => {
    changeSentenceStats(this.props.client, { polarityHover: true, tenseHover: true, selectedExerciseNumber: exerciseIndex });
  }
  private onPolarityTenseExit = (): void => {
    changeSentenceStats(this.props.client, { polarityHover: false, tenseHover: false });
  }

  private onPolitenessEnter = (exerciseIndex: number): void => {
    changeSentenceStats(this.props.client, { politenessHover: true, selectedExerciseNumber: exerciseIndex });
  }
  private onPolitenessExit = (): void => {
    changeSentenceStats(this.props.client, { politenessHover: false });
  }
};

export default SentenceStats;
