import * as React from 'react';
import { Flex, Heading } from 'rebass';

import Sentences from './Sentences';
import Resources from './Resources';

class LessonTemplate extends React.PureComponent<PropTypes.ILessonTemplateProps, {}> {
  public render() {
    const { exercises } = this.props;
    return (
      <Flex
        flexDirection='column'
      >
        <Flex
          flexDirection='column'
        >
          <Heading>Exercise resources</Heading>
          <Resources
            resources={this.props.resources}
          />
        </Flex>
        <Flex 
          flexDirection='column'        
        >
          <Heading>Lesson Exercises</Heading>
          {exercises.map((exercise, index) => (
            <Sentences
              key={index}
              englishSentence={exercise.englishSentence}
              japaneseSentence={exercise.japaneseSentence}
            />
          ))}
        </Flex>
      </Flex>
    );
  };
};

export default LessonTemplate;
