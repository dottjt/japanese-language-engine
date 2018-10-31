import * as React from 'react'
import { Query } from 'react-apollo';

import { 
  GET_ALL_WORDS_AND_OPTIONS,
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
  L010,
  L011,
  L012,
  L013,
  L014,
  L015,
  L016,
  L017,
  L018,
  L019,
  L020,
} from '../../util/constants/lessonConstants';

import LessonTemplate from '../lessons/LessonTemplate';

import Prerequisites from '../lessons/Prerequisites';
import Contents from '../lessons/Contents';
import Welcome from '../lessons/Welcome';

class Main extends React.Component<PropTypes.IMainProps, {}> {
  public render() {
    const { route } = this.props; 
    
    return (
      <Query query={GET_ALL_WORDS_AND_OPTIONS}>
        {({ data, client }) => {
          console.log(data);

          switch (route.name) {
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
                  resources={L001.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}
                />
              );
            case L002.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L002.LESSON_TITLE}
                  explanation={L002.LESSON_EXPLANATION}
                  resources={L002.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}
                />
              );
            case L003.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L003.LESSON_TITLE}
                  explanation={L003.LESSON_EXPLANATION}
                  resources={L003.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}
                />
              );
            case L004.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L004.LESSON_TITLE}
                  explanation={L004.LESSON_EXPLANATION}
                  resources={L004.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}
                />
              );
            case L005.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L005.LESSON_TITLE}
                  explanation={L005.LESSON_EXPLANATION}
                  resources={L005.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}
                />
              );
            case L006.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L006.LESSON_TITLE}
                  explanation={L006.LESSON_EXPLANATION}
                  resources={L006.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}
                />
              ); 
            case L007.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L007.LESSON_TITLE}
                  explanation={L007.LESSON_EXPLANATION}
                  resources={L007.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}
                />
              );
            case L008.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L008.LESSON_TITLE}
                  explanation={L008.LESSON_EXPLANATION}
                  resources={L008.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}
                />
              );
            case L009.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L009.LESSON_TITLE}
                  explanation={L009.LESSON_EXPLANATION}
                  resources={L009.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}                  
                />
              );
            case L010.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L010.LESSON_TITLE}
                  explanation={L010.LESSON_EXPLANATION}
                  resources={L010.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}                  
                />
              );
            case L011.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L011.LESSON_TITLE}
                  explanation={L011.LESSON_EXPLANATION}
                  resources={L011.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}                  
                />
              );
            case L012.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L012.LESSON_TITLE}
                  explanation={L012.LESSON_EXPLANATION}
                  resources={L012.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}                  
                />
              );
            case L013.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L013.LESSON_TITLE}
                  explanation={L013.LESSON_EXPLANATION}
                  resources={L013.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}                  
                />
              );
            case L014.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L014.LESSON_TITLE}
                  explanation={L014.LESSON_EXPLANATION}
                  resources={L014.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}                  
                />
              );
            case L015.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L015.LESSON_TITLE}
                  explanation={L015.LESSON_EXPLANATION}
                  resources={L015.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}                  
                />
              );
            case L016.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L016.LESSON_TITLE}
                  explanation={L016.LESSON_EXPLANATION}
                  resources={L016.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}                  
                />
              );
            case L017.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L017.LESSON_TITLE}
                  explanation={L017.LESSON_EXPLANATION}
                  resources={L017.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}                  
                />
              );
            case L018.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L018.LESSON_TITLE}
                  explanation={L018.LESSON_EXPLANATION}
                  resources={L018.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}                  
                />
              );
            case L019.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L019.LESSON_TITLE}
                  explanation={L019.LESSON_EXPLANATION}
                  resources={L019.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}                  
                />
              );
            case L020.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L020.LESSON_TITLE}
                  explanation={L020.LESSON_EXPLANATION}
                  resources={L020.LESSON_RESOURCES}
                  exercises={data.exercises}
                  sentenceDisplayOptions={data.sentenceDisplayOptions}
                  sentenceStats={data.sentenceStats}
                  client={client}
                  route={route}                  
                />
              );
            default:
              throw new Error('le application is not working, sorry buddy.');
          }
        }}
      </Query>
    );
  };
}

export default Main;
