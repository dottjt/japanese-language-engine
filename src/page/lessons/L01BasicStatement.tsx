
import * as React from 'react';
import { Query } from 'react-apollo';

import { GET_ALL_WORDS_AND_OPTIONS } from '../../graphql/queries/combined';

import {
  generateBasicQuestionExercises,
} from '../../util/sentenceTypes/basicQuestions';

import LessonTemplate from './LessonTemplate';

class L01BasicStatement extends React.Component<{}, {}> {
  public render() {
    return (
      <Query query={GET_ALL_WORDS_AND_OPTIONS}>
        {({ data }) => {
          const exercises = generateBasicQuestionExercises(data.nouns);
          return (
            <LessonTemplate 
              exercises={exercises}
            />
          );
        }}
      </Query>
    );
  }
}

export default L01BasicStatement;
