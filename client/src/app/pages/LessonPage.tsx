
import * as React from 'react';

import { PageWrapper, ModuleWrapper } from '../atoms/Layout';
import { H2 } from '../atoms/Text';

import SentenceOptions from '../atoms/SentenceOptions';
// import Sentences from './Sentences';
// import Resources from './Resources';
// import Explanation from './Explanation';

class LessonTemplate extends React.Component<PropTypes.ILessonTemplateProps, {}> {
  public render() {
    return (
      <PageWrapper>
        <H2>{this.props.title}</H2>
        
        {/* <ModuleWrapper>
          <Heading>Grammatical Resources</Heading>
          <Text>Please have a read of these resources in order to understand the grammar.</Text>
          <Resources
            resources={this.props.resources}
          />
        </ModuleWrapper>

        <ModuleWrapper>
          <Heading>Additional Notes</Heading>
          <Explanation
            explanation={this.props.explanation}
          />
        </ModuleWrapper> */}

        <ModuleWrapper>
          <H2>Lesson Exercises</H2>
          <SentenceOptions/>
          {/* {this.props.exercises.map((exercise, index) => (
            <Sentences
              key={index}
              options={exercise.options}
              englishSentence={exercise.englishSentence}
              japaneseSentence={exercise.japaneseSentence}
            />
          ))} */}
        </ModuleWrapper>
      </PageWrapper>
    );
  };
};

export default LessonTemplate;
