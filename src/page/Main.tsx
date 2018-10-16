import * as React from 'react'
import { Query } from 'react-apollo';

import { 
  GET_ALL_WORDS_AND_OPTIONS
} from '../graphql/queries/combined'

import Contents from './components/Contents';
import LessonTemplate from './components/LessonTemplate';

import { 
  L01_LESSON_TITLE,
  L02_LESSON_TITLE,
} from '../util/constants';

import { 
  L01_LESSON_RESOURCES,
  L02_LESSON_RESOURCES,
} from '../util/resources';

import { generateBasicStatementExercises } from '../util/sentenceTypes/basicStatement';
import { generateBasicQuestionExercises } from '../util/sentenceTypes/basicQuestion';

class Main extends React.Component<PropTypes.IMainProps, {}> {
  public render() {
    return (
      <Query query={GET_ALL_WORDS_AND_OPTIONS}>
        {({ data }) => {
          switch (this.props.route.name) { /* this.props.previousRoute */
            case 'home':
              return (
                <div className="Main">
                  <Contents/>
                </div>
              );
            case L01_LESSON_TITLE:
              return (
                <div className="Main">
                  <h1>{L01_LESSON_TITLE}</h1>
                  <LessonTemplate
                    resources={L01_LESSON_RESOURCES}
                    exercises={generateBasicStatementExercises(data.nouns)}
                  />
                </div>
              );
            case L02_LESSON_TITLE:
              return (
                <div className="Main">
                  <h1>{L02_LESSON_TITLE}</h1>
                  <LessonTemplate
                    resources={L02_LESSON_RESOURCES}
                    exercises={generateBasicQuestionExercises(data.nouns)}
                  />
                </div>
              );
            default:
              return <div>hello (not found)</div>;
          }
        }}
      </Query>
    );
  };
}

export default Main;
