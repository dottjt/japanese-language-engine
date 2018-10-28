import * as React from 'react'
import { Query } from 'react-apollo';

import { 
  GET_ALL_WORDS_AND_OPTIONS
} from '../../graphql/queries'

import { 
  ROUTE_TITLE,
} from '../../util/constants/generalConstants';

import {
  LESSON_TITLE,
  
  L001,
  L002,
  L003,
  L004,
  L005,
  L006,
  L007,
  L008,
  L009,
  // L010,
  // L011,
  // L012,
  // L013,
} from '../../util/constants/lessonConstants';

import LessonTemplate from '../lessons/LessonTemplate';

import Prerequisites from '../lessons/Prerequisites';
import Contents from '../lessons/Contents';
import Welcome from '../lessons/Welcome';


class Main extends React.Component<PropTypes.IMainProps, {}> {

  public render() {
    return (
      <Query query={GET_ALL_WORDS_AND_OPTIONS}>
        {({ data, client }) => {
          switch (this.props.route.name) { /* this.props.previousRoute */
            case ROUTE_TITLE.APP:
              return (
                <Welcome/>
              );
            case LESSON_TITLE.WELCOME:
              return (
                <Welcome/>
              );
            case LESSON_TITLE.CONTENTS:
              return (
                <Contents/>
              );
            case LESSON_TITLE.PREREQ:
              return (
                <Prerequisites/>
              );
            case L001.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L001.LESSON_TITLE}
                  explanation={L001.LESSON_EXPLANATION}
                  variation={L001.LESSON_VARIATION}
                  options={L001.LESSON_OPTIONS}
                  resources={L001.LESSON_RESOURCES}
                  // exercises={L001.LESSON_EXERCISES(data.nouns)}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                />
              );
            case L002.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L002.LESSON_TITLE}
                  explanation={L002.LESSON_EXPLANATION}
                  variation={L002.LESSON_VARIATION}
                  options={L002.LESSON_OPTIONS}
                  resources={L002.LESSON_RESOURCES}
                  // exercises={L002.LESSON_EXERCISES(data.nouns)}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                />
              );
            case L003.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L003.LESSON_TITLE}
                  explanation={L003.LESSON_EXPLANATION}
                  variation={L003.LESSON_VARIATION}
                  options={L003.LESSON_OPTIONS}
                  resources={L003.LESSON_RESOURCES}
                  // exercises={L003.LESSON_EXERCISES(data.nouns)}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                />
              );
            case L004.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L004.LESSON_TITLE}
                  explanation={L004.LESSON_EXPLANATION}
                  variation={L004.LESSON_VARIATION}
                  options={L004.LESSON_OPTIONS}
                  resources={L004.LESSON_RESOURCES}
                  // exercises={L004.LESSON_EXERCISES(data.nouns)}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                />
              );
            case L005.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L005.LESSON_TITLE}
                  explanation={L005.LESSON_EXPLANATION}
                  variation={L005.LESSON_VARIATION}
                  options={L005.LESSON_OPTIONS}
                  resources={L005.LESSON_RESOURCES}
                  // exercises={L005.LESSON_EXERCISES(data.nouns)}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                />
              );
            case L006.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L006.LESSON_TITLE}
                  explanation={L006.LESSON_EXPLANATION}
                  variation={L006.LESSON_VARIATION}
                  options={L006.LESSON_OPTIONS}
                  resources={L006.LESSON_RESOURCES}
                  // exercises={L006.LESSON_EXERCISES(data.nouns)}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                />
              ); 
            case L007.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L007.LESSON_TITLE}
                  explanation={L007.LESSON_EXPLANATION}
                  variation={L007.LESSON_VARIATION}
                  options={L007.LESSON_OPTIONS}
                  resources={L007.LESSON_RESOURCES}
                  // exercises={L007.LESSON_EXERCISES(data.nouns)}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                />
              );
            case L008.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L008.LESSON_TITLE}
                  explanation={L008.LESSON_EXPLANATION}
                  variation={L008.LESSON_VARIATION}
                  options={L008.LESSON_OPTIONS}
                  resources={L008.LESSON_RESOURCES}
                  // exercises={L008.LESSON_EXERCISES(data.nouns)}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                />
              );
            case L009.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L009.LESSON_TITLE}
                  explanation={L009.LESSON_EXPLANATION}
                  variation={L009.LESSON_VARIATION}
                  options={L009.LESSON_OPTIONS}
                  resources={L009.LESSON_RESOURCES}
                  // exercises={L009.LESSON_EXERCISES(data.nouns)}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}                  
                />
              );
            // case L010.LESSON_TITLE:
            //   return (
            //     <LessonTemplate
            //       title={L010.LESSON_TITLE}
            //       explanation={L010.LESSON_EXPLANATION}
            //       variation={L010.LESSON_VARIATION}
            //       options={L010.LESSON_OPTIONS}
            //       resources={L010.LESSON_RESOURCES}
            //       exercises={L010.LESSON_EXERCISES(data.nouns)}
            //     />
            //   );
            // case L011.LESSON_TITLE:
            //   return (
            //     <LessonTemplate
            //       title={L011.LESSON_TITLE}
            //       explanation={L011.LESSON_EXPLANATION}
            //       variation={L011.LESSON_VARIATION}
            //       options={L011.LESSON_OPTIONS}
            //       resources={L011.LESSON_RESOURCES}
            //       exercises={L011.LESSON_EXERCISES(data.nouns)}
            //     />
            //   );
            // case L012.LESSON_TITLE:
            //   return (
            //     <LessonTemplate
            //       title={L012.LESSON_TITLE}
            //       explanation={L012.LESSON_EXPLANATION}
            //       variation={L012.LESSON_VARIATION}
            //       options={L012.LESSON_OPTIONS}
            //       resources={L012.LESSON_RESOURCES}
            //       exercises={L012.LESSON_EXERCISES(data.nouns)}
            //     />
            //   ); 
            // case L013.LESSON_TITLE:
            //   return (
            //     <LessonTemplate
            //       title={L013.LESSON_TITLE}
            //       explanation={L013.LESSON_EXPLANATION}
            //       variation={L013.LESSON_VARIATION}
            //       options={L013.LESSON_OPTIONS}
            //       resources={L013.LESSON_RESOURCES}
            //       exercises={L013.LESSON_EXERCISES(data.nouns)}
            //     />
            //   ); 

            default:
              throw new Error('le application is not working, sorry buddy.');
          }
        }}
      </Query>
    );
  };
}

export default Main;
