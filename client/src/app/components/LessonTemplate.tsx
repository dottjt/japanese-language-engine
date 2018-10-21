import * as React from 'react';
import { Flex, Heading, /* Text */ } from 'rebass';

import SentenceOptions from '../atoms/SentenceOptions';
import Sentences from './Sentences';
// import Resources from './Resources';
// import Explanation from './Explanation';

class LessonTemplate extends React.Component<PropTypes.ILessonTemplateProps, {}> {
  public render() {
    return (
      <Flex flexDirection='column' ml={24}>
        <Heading>{this.props.title}</Heading>
        
        {/* <Flex flexDirection='column' mt={12}>
          <Heading>Grammatical Resources</Heading>
          <Text>Please have a read of these resources in order to understand the grammar.</Text>
          <Resources
            resources={this.props.resources}
          />
        </Flex>

        <Flex flexDirection='column' mt={12}>
          <Heading>Additional Notes</Heading>
          <Explanation
            explanation={this.props.explanation}
          />
        </Flex> */}

        <Flex flexDirection='column' mt={12}>
          <Heading>Lesson Exercises</Heading>
          <SentenceOptions/>
          {this.props.exercises.map((exercise, index) => (
            <Sentences
              key={index}
              options={exercise.options}
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
