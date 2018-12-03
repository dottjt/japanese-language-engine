import * as React from 'react'

import {
  ROUTE_TITLE,
} from '../../util/constants/routeConstants';

import {
  BLOG_TITLE,
} from '../../util/constants/blogConstants';

import {
  PLAYGROUND_TITLE,
} from '../../util/constants/playgroundConstants';

import {
  uTopPlayground,
  topPlayground,
  adjTopPlayground,
  uTop_uSubPlayground,
  uTop_SubPlayground,
  uTop_adjSubPlayground,
  top_SubPlayground,
  top_adjSubPlayground,
  verbPlayground,
  verbAdvPlayground,
  verb_SubPlayground,
} from '../../util/config/playgroundConfig';

import {
  // L001,
  // L002,
  // L003,
  // L004,
  // L005,
  // L006,
  // L007,
  // L008,
  // L009,
  // L010,
  // L011,
  // L012,
  // L013,
  // L014,
  // L015,
  // L016,
  // L017,
  // L018,
  // L019,
  // L020,
  // L021,
  // L022,
  // L023,
  // L024,
  // L025,
  // L026,
  // L027,
  // L028,
  // L029,
  // L030,
} from '../../util/config/collectionConfig';

// import LessonTemplate from '../pages/LessonTemplate';
import Home from '../pages/Home';
import Redirect from '../pages/Redirect';
import Profile from '../pages/Profile';
// import Login from '../pages/Login';
// import SignUp from '../pages/SignUp';
// import Guides from '../pages/Guides';
// import Tools from '../pages/Tools';

import Contents from '../pages/Contents';
import Welcome from '../pages/Welcome';
import Philosophy from '../pages/Philosophy';
import Prerequisites from '../pages/Prerequisites';
import Playground from '../pages/Playground';
import PlaygroundSingle from '../pages/PlaygroundSingle';

import Blog from '../pages/Blog';
import Article from '../pages/Article';
import About from '../pages/About';


class Main extends React.Component<PropTypes.IMainProps, {}> {
  public render() {
    const { 
      route, 
      auth,
      client, 
      user,
      // exercises,
      // sentenceDisplayOptions,
      // sentenceStats,
      preOptions,
      preModifiers,
      preSentenceContext,
     } = this.props; 

    // const isAuthenticated = auth.isAuthenticated();

    console.log('preOptions', preOptions);

    switch (route.name) {
      case ROUTE_TITLE.HOME: 
        return <Home client={client} route={route}/>
      
      case ROUTE_TITLE.BLOG:
        return <Blog/>

      case BLOG_TITLE.B01:
      case BLOG_TITLE.B02:
      case BLOG_TITLE.B03:
        return <Article path={route.path} />
      
      case ROUTE_TITLE.PROFILE:
        return <Profile user={user} client={client} auth={auth}/>

      case ROUTE_TITLE.REDIRECT:
        return <Redirect client={client} auth={auth}/>
      
      case ROUTE_TITLE.ABOUT:
        return <About/>

      case ROUTE_TITLE.WELCOME:
        return <Welcome/>

      case ROUTE_TITLE.EXERCISES:
      case ROUTE_TITLE.CONTENTS:
        return <Contents/>

      case ROUTE_TITLE.PREREQ:
        return <Prerequisites/>

      case ROUTE_TITLE.PHILOSOPHY:
        return <Philosophy/>

      case ROUTE_TITLE.PLAYGROUND:
        return <Playground
                  client={client}
                  preOptions={preOptions}
                  preModifiers={preModifiers}
                  preSentenceContext={preSentenceContext}
                />
      
      case PLAYGROUND_TITLE.uTop:
        return <PlaygroundSingle
                  preSentenceContext={uTopPlayground.preSentenceContext}
                  preOptions={uTopPlayground.preOptions}
                  preModifiers={uTopPlayground.preModifiers}
                  title={uTopPlayground.title}
                />

      case PLAYGROUND_TITLE.top:
        return <PlaygroundSingle
                  preSentenceContext={topPlayground.preSentenceContext}
                  preOptions={topPlayground.preOptions}
                  preModifiers={topPlayground.preModifiers}
                  title={topPlayground.title}
                />    

      case PLAYGROUND_TITLE.adjTop:
        return <PlaygroundSingle
                  preSentenceContext={adjTopPlayground.preSentenceContext}
                  preOptions={adjTopPlayground.preOptions}
                  preModifiers={adjTopPlayground.preModifiers}
                  title={adjTopPlayground.title}
                />

      // Topic Subject

      case PLAYGROUND_TITLE.uTop_uSub:
        return <PlaygroundSingle
                  preSentenceContext={uTop_uSubPlayground.preSentenceContext}
                  preOptions={uTop_uSubPlayground.preOptions}
                  preModifiers={uTop_uSubPlayground.preModifiers}
                  title={uTop_uSubPlayground.title}
                />                          
                
      case PLAYGROUND_TITLE.uTop_Sub:
        return <PlaygroundSingle
                  preSentenceContext={uTop_SubPlayground.preSentenceContext}
                  preOptions={uTop_SubPlayground.preOptions}
                  preModifiers={uTop_SubPlayground.preModifiers}
                  title={uTop_SubPlayground.title}
                />
              
      case PLAYGROUND_TITLE.top_Sub:
        return <PlaygroundSingle
                  preSentenceContext={top_SubPlayground.preSentenceContext}
                  preOptions={top_SubPlayground.preOptions}
                  preModifiers={top_SubPlayground.preModifiers}
                  title={top_SubPlayground.title}
                />
                
      case PLAYGROUND_TITLE.uTop_adjSub:
        return <PlaygroundSingle
                  preSentenceContext={uTop_adjSubPlayground.preSentenceContext}
                  preOptions={uTop_adjSubPlayground.preOptions}
                  preModifiers={uTop_adjSubPlayground.preModifiers}
                  title={uTop_adjSubPlayground.title}
                />    
                
      case PLAYGROUND_TITLE.top_adjSub:
        return <PlaygroundSingle
                  preSentenceContext={top_adjSubPlayground.preSentenceContext}
                  preOptions={top_adjSubPlayground.preOptions}
                  preModifiers={top_adjSubPlayground.preModifiers}
                  title={top_adjSubPlayground.title}
                />

      case PLAYGROUND_TITLE.verb:
        return <PlaygroundSingle
                  preSentenceContext={verbPlayground.preSentenceContext}
                  preOptions={verbPlayground.preOptions}
                  preModifiers={verbPlayground.preModifiers}
                  title={verbPlayground.title}
                />                        

      case PLAYGROUND_TITLE.verbAdv:
        return <PlaygroundSingle
                  preSentenceContext={verbAdvPlayground.preSentenceContext}
                  preOptions={verbAdvPlayground.preOptions}
                  preModifiers={verbAdvPlayground.preModifiers}
                  title={verbAdvPlayground.title}
                />                        
        
      case PLAYGROUND_TITLE.verb_Sub:
        return <PlaygroundSingle
                  preSentenceContext={verb_SubPlayground.preSentenceContext}
                  preOptions={verb_SubPlayground.preOptions}
                  preModifiers={verb_SubPlayground.preModifiers}
                  title={verb_SubPlayground.title}
                />               

      // case ROUTE_TITLE.LOGIN:
      //   return <Login auth={auth}/>
      
      // case ROUTE_TITLE.SIGN_UP:
      //   return <SignUp auth={auth}/>

      // case ROUTE_TITLE.GUIDES:
      //   return <Guides/>

      // case L001.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L001.LESSON_TITLE}
      //       description={L001.LESSON_DESCRIPTION}
      //       explanation={L001.LESSON_EXPLANATION}
      //       resources={L001.LESSON_RESOURCES}
      //       preOptions={L001.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={false}
      //     />
      //   );
      // case L002.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L002.LESSON_TITLE}
      //       description={L002.LESSON_DESCRIPTION}
      //       explanation={L002.LESSON_EXPLANATION}
      //       resources={L002.LESSON_RESOURCES}
      //       preOptions={L002.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={false}
      //     />
      //   );
      // case L003.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L003.LESSON_TITLE}
      //       description={L003.LESSON_DESCRIPTION}
      //       explanation={L003.LESSON_EXPLANATION}
      //       resources={L003.LESSON_RESOURCES}
      //       preOptions={L003.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={false}
      //     />
      //   );
      // case L004.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L004.LESSON_TITLE}
      //       description={L004.LESSON_DESCRIPTION}
      //       explanation={L004.LESSON_EXPLANATION}
      //       resources={L004.LESSON_RESOURCES}
      //       preOptions={L004.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={false}
      //     />
      //   );
      // case L005.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L005.LESSON_TITLE}
      //       description={L005.LESSON_DESCRIPTION}
      //       explanation={L005.LESSON_EXPLANATION}
      //       resources={L005.LESSON_RESOURCES}
      //       preOptions={L005.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={false}
      //     />
      //   );
      // case L006.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L006.LESSON_TITLE}
      //       description={L006.LESSON_DESCRIPTION}
      //       explanation={L006.LESSON_EXPLANATION}
      //       resources={L006.LESSON_RESOURCES}
      //       preOptions={L006.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={false}
      //     />
      //   ); 
      // case L007.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L007.LESSON_TITLE}
      //       description={L007.LESSON_DESCRIPTION}
      //       explanation={L007.LESSON_EXPLANATION}
      //       resources={L007.LESSON_RESOURCES}
      //       preOptions={L007.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={false}
      //     />
      //   );
      // case L008.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L008.LESSON_TITLE}
      //       description={L008.LESSON_DESCRIPTION}
      //       explanation={L008.LESSON_EXPLANATION}
      //       resources={L008.LESSON_RESOURCES}
      //       preOptions={L008.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={false}
      //     />
      //   );
      // case L009.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L009.LESSON_TITLE}
      //       description={L009.LESSON_DESCRIPTION}
      //       explanation={L009.LESSON_EXPLANATION}
      //       resources={L009.LESSON_RESOURCES}
      //       preOptions={L009.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}                  
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={false}
      //     />
      //   );
      // case L010.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L010.LESSON_TITLE}
      //       description={L010.LESSON_DESCRIPTION}
      //       explanation={L010.LESSON_EXPLANATION}
      //       resources={L010.LESSON_RESOURCES}
      //       preOptions={L010.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}                  
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={false}
      //     />
      //   );
      // case L011.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L011.LESSON_TITLE}
      //       description={L011.LESSON_DESCRIPTION}
      //       explanation={L011.LESSON_EXPLANATION}
      //       resources={L011.LESSON_RESOURCES}
      //       preOptions={L011.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}                  
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={false}
      //     />
      //   );
      // case L012.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L012.LESSON_TITLE}
      //       description={L012.LESSON_DESCRIPTION}
      //       explanation={L012.LESSON_EXPLANATION}
      //       resources={L012.LESSON_RESOURCES}
      //       preOptions={L012.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}                  
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={false}
      //     />
      //   );
      // case L013.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L013.LESSON_TITLE}
      //       description={L013.LESSON_DESCRIPTION}
      //       explanation={L013.LESSON_EXPLANATION}
      //       resources={L013.LESSON_RESOURCES}
      //       preOptions={L013.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}                  
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={false}
      //     />
      //   );
      // case L014.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L014.LESSON_TITLE}
      //       description={L014.LESSON_DESCRIPTION}
      //       explanation={L014.LESSON_EXPLANATION}
      //       resources={L014.LESSON_RESOURCES}
      //       preOptions={L014.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}                  
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={false}
      //     />
      //   );
      // case L015.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L015.LESSON_TITLE}
      //       description={L015.LESSON_DESCRIPTION}
      //       explanation={L015.LESSON_EXPLANATION}
      //       resources={L015.LESSON_RESOURCES}
      //       preOptions={L015.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}                  
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={false}
      //     />
      //   );

      // case L016.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L016.LESSON_TITLE}
      //       description={L016.LESSON_DESCRIPTION}
      //       explanation={L016.LESSON_EXPLANATION}
      //       resources={L016.LESSON_RESOURCES}
      //       preOptions={L016.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}                  
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={true}
      //       />
      //   );
      // case L017.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L017.LESSON_TITLE}
      //       description={L017.LESSON_DESCRIPTION}
      //       explanation={L017.LESSON_EXPLANATION}
      //       resources={L017.LESSON_RESOURCES}
      //       preOptions={L017.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}                  
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={true}
      //     />
      //   );
      // case L018.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L018.LESSON_TITLE}
      //       description={L018.LESSON_DESCRIPTION}
      //       explanation={L018.LESSON_EXPLANATION}
      //       resources={L018.LESSON_RESOURCES}
      //       preOptions={L018.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}                  
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={true}
      //     />
      //   );
      // case L019.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L019.LESSON_TITLE}
      //       description={L019.LESSON_DESCRIPTION}
      //       explanation={L019.LESSON_EXPLANATION}
      //       resources={L019.LESSON_RESOURCES}
      //       preOptions={L019.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}                  
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={true}
      //     />
      //   );
      // case L020.LESSON_TITLE:
      //   return (
      //     <LessonTemplate
      //       title={L020.LESSON_TITLE}
      //       description={L020.LESSON_DESCRIPTION}
      //       explanation={L020.LESSON_EXPLANATION}
      //       resources={L020.LESSON_RESOURCES}
      //       preOptions={L020.LESSON_PRE_OPTIONS}
      //       exercises={exercises}
      //       sentenceDisplayOptions={sentenceDisplayOptions}
      //       sentenceStats={sentenceStats}
      //       client={client}
      //       path={route.path}                  
      //       auth={auth}
      //       isAuthenticated={isAuthenticated}
      //       premiumLesson={true}
      //     />
      //   );
      default:
        throw new Error('le application is not working, sorry buddy.');
    }
  };
}

export default Main;
