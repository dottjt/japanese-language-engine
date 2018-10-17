import * as React from 'react'
import { Query } from 'react-apollo';
import { Flex } from 'rebass';

import { 
  GET_ALL_WORDS_AND_OPTIONS
} from '../graphql/queries'

import { 
  L00_HOME,
  L00_CONTENTS,
  L00_PREREQUISITES,
  L01_LESSON_TITLE,
  L02_LESSON_TITLE,
  L03_LESSON_TITLE,
  L04_LESSON_TITLE,
  L05_LESSON_TITLE,
  L06_LESSON_TITLE,

  L01_LESSON_RESOURCES,
  L02_LESSON_RESOURCES,
  L03_LESSON_RESOURCES,
  L04_LESSON_RESOURCES,
  L05_LESSON_RESOURCES,
  L06_LESSON_RESOURCES,

  L01_LESSON_EXPLANATION,
  L02_LESSON_EXPLANATION,
  L03_LESSON_EXPLANATION,
  L04_LESSON_EXPLANATION,
  L05_LESSON_EXPLANATION,
  L06_LESSON_EXPLANATION,
} from '../util/constants/lessonConstants';

import {
  WA_SOB,
  WA_SOB_QUESTION,
  MO_SOB,
  MO_SOB_QUESTION,
  GA_SOB,
  GA_SOB_QUESTION,
} from '../util/constants/optionsConstants';

import { generateTopicPredicateExercises } from '../util/sentences/topicPredicate';

import LessonTemplate from './components/LessonTemplate';

import Prerequisites from './pages/Prerequisites';
import Contents from './pages/Contents';
import Home from './pages/Home';

class Main extends React.Component<PropTypes.IMainProps, {}> {
  public render() {
    return (
      <Query query={GET_ALL_WORDS_AND_OPTIONS}>
        {({ data }) => {
          switch (this.props.route.name) { /* this.props.previousRoute */
            case L00_HOME:
              return <Home/>
            case L00_CONTENTS:
              return <Contents/>
            case L00_PREREQUISITES:
              return <Prerequisites/>
            case L00_CONTENTS:
              return <Contents/>
            case L01_LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L01_LESSON_TITLE}
                  explanation={L01_LESSON_EXPLANATION}
                  resources={L01_LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, WA_SOB)}
                />
              );
            case L02_LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L02_LESSON_TITLE}
                  explanation={L02_LESSON_EXPLANATION}
                  resources={L02_LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, WA_SOB_QUESTION)}
                />
              );
            case L03_LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L03_LESSON_TITLE}
                  explanation={L03_LESSON_EXPLANATION}
                  resources={L03_LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, MO_SOB)}
                />
              );
              case L04_LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L04_LESSON_TITLE}
                  explanation={L04_LESSON_EXPLANATION}
                  resources={L04_LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, MO_SOB_QUESTION)}
                />
              );
              case L05_LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L05_LESSON_TITLE}
                  explanation={L05_LESSON_EXPLANATION}
                  resources={L05_LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, GA_SOB)}
                />
              );
              case L06_LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L06_LESSON_TITLE}
                  explanation={L06_LESSON_EXPLANATION}
                  resources={L06_LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, GA_SOB_QUESTION)}
                />
              ); 
            default:
              return <Flex>hello (not found)</Flex>;
          }
        }}
      </Query>
    );
  };
}

export default Main;
