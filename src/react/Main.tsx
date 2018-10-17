import * as React from 'react'
import { Query } from 'react-apollo';
import { Flex, Box, Heading } from 'rebass';

import { 
  GET_ALL_WORDS_AND_OPTIONS
} from '../graphql/queries'

import Contents from './components/Contents';
import LessonTemplate from './components/LessonTemplate';

import { 
  L00_CONTENTS,
  L01_LESSON_TITLE,
  L02_LESSON_TITLE,

  // variation
  WA_SOB,
  WA_SOB_QUESTION,
} from '../util/constants/constants';

import { 
  L01_LESSON_RESOURCES,
  L02_LESSON_RESOURCES,
} from '../util/resources';

import { 
  L01_LESSON_EXPLANATION,
  L02_LESSON_EXPLANATION,
} from '../util/explanations';

import { generateTopicPredicateExercises } from '../util/sentences/topicPredicate';

class Main extends React.Component<PropTypes.IMainProps, {}> {
  public render() {
    return (
      <Query query={GET_ALL_WORDS_AND_OPTIONS}>
        {({ data }) => {
          switch (this.props.route.name) { /* this.props.previousRoute */
            case L00_CONTENTS:
              return (
                <Flex flexDirection='column'>
                  <Contents/>
                </Flex>
              );
            case L01_LESSON_TITLE:
              return (
                <Flex flexDirection='column'>
                  <Heading>{L01_LESSON_TITLE}</Heading>
                  <LessonTemplate
                    explanation={L01_LESSON_EXPLANATION}
                    resources={L01_LESSON_RESOURCES}
                    exercises={generateTopicPredicateExercises(data.nouns, WA_SOB)}
                  />
                </Flex>
              );
            case L02_LESSON_TITLE:
              return (
                <Flex flexDirection='column'>
                  <Heading>{L02_LESSON_TITLE}</Heading>
                  <LessonTemplate
                    explanation={L02_LESSON_EXPLANATION}
                    resources={L02_LESSON_RESOURCES}
                    exercises={generateTopicPredicateExercises(data.nouns, WA_SOB_QUESTION)}
                  />
                </Flex>
              );
            default:
              return <Box>hello (not found)</Box>;
          }
        }}
      </Query>
    );
  };
}

export default Main;
