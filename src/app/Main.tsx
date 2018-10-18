import * as React from 'react'
import { Query } from 'react-apollo';

import { 
  GET_ALL_WORDS_AND_OPTIONS
} from '../graphql/queries'

import { 
  L000_HOME,
  L000_CONTENTS,
  L000_PREREQUISITES,
  
  L001,
  L002,
  L003,
  L004,
  L005,
  L006,
  L007,
  L008,
  L009,
  L010,
  L011,
  L012,
  L013,
} from '../util/constants/lessonConstants';

import {
  WA_NS,
  WA_NS_QUESTION,
  MO_NS,
  MO_NS_QUESTION,
  GA_NS,
  GA_NS_QUESTION,

  WO_VS,
  WO_VS_QUESTION,
  NI_VS,
  NI_VS_QUESTION,
  DE_VS,
  DE_VS_QUESTION,
} from '../util/constants/optionsConstants';


import LessonTemplate from './components/LessonTemplate';

import Prerequisites from './pages/Prerequisites';
import Contents from './pages/Contents';
import Home from './pages/Home';
import Page404 from './pages/Page404';

class Main extends React.Component<PropTypes.IMainProps, {}> {
  public render() {
    if (!this.props.route) {
      return <Page404/>
    };
    return (
      <Query query={GET_ALL_WORDS_AND_OPTIONS}>
        {({ data }) => {
          switch (this.props.route.name) { /* this.props.previousRoute */
            

            case L000_HOME:
              return <Home/>
            case L000_CONTENTS:
              return <Contents/>
            case L000_PREREQUISITES:
              return <Prerequisites/>
            case L000_CONTENTS:
              return <Contents/>


            case L001.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L001.LESSON_TITLE}
                  explanation={L001.LESSON_EXPLANATION}
                  resources={L001.LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, WA_NS)}
                />
              );
            case L002.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L002.LESSON_TITLE}
                  explanation={L002.LESSON_EXPLANATION}
                  resources={L002.LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, WA_NS_QUESTION)}
                />
              );
            case L003.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L003.LESSON_TITLE}
                  explanation={L003.LESSON_EXPLANATION}
                  resources={L003.LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, MO_NS)}
                />
              );
            case L004.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L004.LESSON_TITLE}
                  explanation={L004.LESSON_EXPLANATION}
                  resources={L004.LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, MO_NS_QUESTION)}
                />
              );
            case L005.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L005.LESSON_TITLE}
                  explanation={L005.LESSON_EXPLANATION}
                  resources={L005.LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, GA_NS)}
                />
              );
            case L006.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L006.LESSON_TITLE}
                  explanation={L006.LESSON_EXPLANATION}
                  resources={L006.LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, GA_NS_QUESTION)}
                />
              ); 


            case L007.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L007.LESSON_TITLE}
                  explanation={L007.LESSON_EXPLANATION}
                  resources={L007.LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, WO_VS)}
                />
              );
            case L008.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L008.LESSON_TITLE}
                  explanation={L008.LESSON_EXPLANATION}
                  resources={L008.LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, WO_VS_QUESTION)}
                />
              );
            case L009.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L009.LESSON_TITLE}
                  explanation={L009.LESSON_EXPLANATION}
                  resources={L009.LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, NI_VS)}
                />
              );
            case L010.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L010.LESSON_TITLE}
                  explanation={L010.LESSON_EXPLANATION}
                  resources={L010.LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, NI_VS_QUESTION)}
                />
              );
            case L011.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L011.LESSON_TITLE}
                  explanation={L011.LESSON_EXPLANATION}
                  resources={L011.LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, DE_VS)}
                />
              );
            case L012.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L012.LESSON_TITLE}
                  explanation={L012.LESSON_EXPLANATION}
                  resources={L012.LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, DE_VS_QUESTION)}
                />
              ); 
            case L013.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L013.LESSON_TITLE}
                  explanation={L013.LESSON_EXPLANATION}
                  resources={L013.LESSON_RESOURCES}
                  exercises={generateTopicPredicateExercises(data.nouns, DE_VS_QUESTION)}
                />
              ); 

            default:
              return <Page404/>;
          }
        }}
      </Query>
    );
  };
}

export default Main;
