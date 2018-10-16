
import * as React from 'react';
import { Query } from 'react-apollo';

import { GET_ALL_WORDS_AND_OPTIONS } from '../../graphql/queries/combined';

import {
  generateBasicQuestionExercises,
} from '../../util/sentenceTypes/basicQuestions';

import LessonTemplate from './LessonTemplate';

class L02BasicQuestion extends React.Component<{}, {}> {
  public render() {
    return (
      <Query query={GET_ALL_WORDS_AND_OPTIONS}>
        {({ data }) => (
          <LessonTemplate 
            // this needs to be changed. 
            exercises={generateBasicQuestionExercises(data.nouns)}
          />
        )}
      </Query>
    );
  }
}

export default L02BasicQuestion;
