import * as React from 'react'
import { Query } from 'react-apollo';

import { 
  GET_ALL_WORDS_AND_OPTIONS,
} from '../../graphql/queries'

import {
  ROUTE_TITLE,
} from '../../util/constants/generalConstants';

import {
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

import LessonTemplate from '../pages/LessonTemplate';
import Home from '../pages/Home';
import Callback from '../pages/Callback';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Prerequisites from '../pages/Prerequisites';
import Contents from '../pages/Contents';
import Welcome from '../pages/Welcome';
import Blog from '../pages/Blog';
import Tools from '../pages/About';


class Main extends React.Component<PropTypes.IMainProps, {}> {
  public render() {
    const { route, auth } = this.props; 

    return (
      <Query query={GET_ALL_WORDS_AND_OPTIONS}>
        {({ data, client }) => {

          switch (route.name) {
            case ROUTE_TITLE.HOME: 
              return <Home client={client} route={route}/>
            
            case ROUTE_TITLE.BLOG:
              return <Blog/>

            case ROUTE_TITLE.PROFILE:
              return <Profile/>

            case ROUTE_TITLE.LOGIN:
              return <Login auth={auth}/>
            
            case ROUTE_TITLE.SIGN_UP:
              return <SignUp auth={auth}/>

            case ROUTE_TITLE.CALLBACK:
              return <Callback/>
              
            case ROUTE_TITLE.ABOUT:
              return <Tools/>


            case ROUTE_TITLE.APP:
              return (
                <Contents/>
              );
            case ROUTE_TITLE.WELCOME:
              return (
                <Welcome/>
              );
            case ROUTE_TITLE.CONTENTS:
              return (
                <Contents/>
              );
            case ROUTE_TITLE.PREREQ:
              return (
                <Prerequisites/>
              );
            case L001.LESSON_TITLE:
              return (
                <LessonTemplate
                  title={L001.LESSON_TITLE}
                  description={L001.LESSON_DESCRIPTION}                  
                  explanation={L001.LESSON_EXPLANATION}
                  resources={L001.LESSON_RESOURCES}
                  options={L001.LESSON_OPTIONS}
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
                  description={L002.LESSON_DESCRIPTION}                  
                  explanation={L002.LESSON_EXPLANATION}
                  resources={L002.LESSON_RESOURCES}
                  options={L002.LESSON_OPTIONS}
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
                  description={L003.LESSON_DESCRIPTION}                  
                  explanation={L003.LESSON_EXPLANATION}
                  resources={L003.LESSON_RESOURCES}
                  options={L003.LESSON_OPTIONS}
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
                  description={L004.LESSON_DESCRIPTION}                  
                  explanation={L004.LESSON_EXPLANATION}
                  resources={L004.LESSON_RESOURCES}
                  options={L004.LESSON_OPTIONS}
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
                  description={L005.LESSON_DESCRIPTION}                  
                  explanation={L005.LESSON_EXPLANATION}
                  resources={L005.LESSON_RESOURCES}
                  options={L005.LESSON_OPTIONS}
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
                  description={L006.LESSON_DESCRIPTION}                  
                  explanation={L006.LESSON_EXPLANATION}
                  resources={L006.LESSON_RESOURCES}
                  options={L006.LESSON_OPTIONS}
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
                  description={L007.LESSON_DESCRIPTION}                  
                  explanation={L007.LESSON_EXPLANATION}
                  resources={L007.LESSON_RESOURCES}
                  options={L007.LESSON_OPTIONS}
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
                  description={L008.LESSON_DESCRIPTION}                  
                  explanation={L008.LESSON_EXPLANATION}
                  resources={L008.LESSON_RESOURCES}
                  options={L008.LESSON_OPTIONS}
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
                  description={L009.LESSON_DESCRIPTION}                  
                  explanation={L009.LESSON_EXPLANATION}
                  resources={L009.LESSON_RESOURCES}
                  options={L009.LESSON_OPTIONS}
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
                  description={L010.LESSON_DESCRIPTION}                  
                  explanation={L010.LESSON_EXPLANATION}
                  resources={L010.LESSON_RESOURCES}
                  options={L010.LESSON_OPTIONS}
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
                  description={L011.LESSON_DESCRIPTION}                  
                  explanation={L011.LESSON_EXPLANATION}
                  resources={L011.LESSON_RESOURCES}
                  options={L011.LESSON_OPTIONS}
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
                  description={L012.LESSON_DESCRIPTION}                  
                  explanation={L012.LESSON_EXPLANATION}
                  resources={L012.LESSON_RESOURCES}
                  options={L012.LESSON_OPTIONS}
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
                  description={L013.LESSON_DESCRIPTION}                  
                  explanation={L013.LESSON_EXPLANATION}
                  resources={L013.LESSON_RESOURCES}
                  options={L013.LESSON_OPTIONS}
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
                  description={L014.LESSON_DESCRIPTION}                  
                  explanation={L014.LESSON_EXPLANATION}
                  resources={L014.LESSON_RESOURCES}
                  options={L014.LESSON_OPTIONS}
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
                  description={L015.LESSON_DESCRIPTION}                  
                  explanation={L015.LESSON_EXPLANATION}
                  resources={L015.LESSON_RESOURCES}
                  options={L015.LESSON_OPTIONS}
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
                  description={L016.LESSON_DESCRIPTION}                  
                  explanation={L016.LESSON_EXPLANATION}
                  resources={L016.LESSON_RESOURCES}
                  options={L016.LESSON_OPTIONS}
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
                  description={L017.LESSON_DESCRIPTION}                  
                  explanation={L017.LESSON_EXPLANATION}
                  resources={L017.LESSON_RESOURCES}
                  options={L017.LESSON_OPTIONS}
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
                  description={L018.LESSON_DESCRIPTION}                  
                  explanation={L018.LESSON_EXPLANATION}
                  resources={L018.LESSON_RESOURCES}
                  options={L018.LESSON_OPTIONS}
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
                  description={L019.LESSON_DESCRIPTION}                  
                  explanation={L019.LESSON_EXPLANATION}
                  resources={L019.LESSON_RESOURCES}
                  options={L019.LESSON_OPTIONS}
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
                  description={L020.LESSON_DESCRIPTION}                  
                  explanation={L020.LESSON_EXPLANATION}
                  resources={L020.LESSON_RESOURCES}
                  options={L020.LESSON_OPTIONS}
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
