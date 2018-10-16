import * as React from 'react';
import { Flex, Heading, Text } from 'rebass';

import Sentences from './Sentences';
import Resources from './Resources';

class LessonTemplate extends React.PureComponent<PropTypes.ILessonTemplateProps, {}> {
  public render() {
    return (
      <Flex flexDirection='column'>

        <Flex flexDirection='column' mt={2}>
          <Heading>Exercise Explanation</Heading>
          <Text>{this.props.explanation}</Text>
        </Flex>

        <Flex flexDirection='column' mt={2}>
          <Heading>Exercise resources</Heading>
          <Resources
            resources={this.props.resources}
          />
        </Flex>

        <Flex flexDirection='column' mt={2}>
          <Heading>Lesson Exercises</Heading>
          {this.props.exercises.map((exercise, index) => (
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
