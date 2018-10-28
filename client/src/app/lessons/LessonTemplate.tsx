
import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
import { Heading } from '../atoms/TextStyles';

// import ControlPanelModule from '../modules/ControlPanelModule';
import SentenceModule from '../modules/SentenceModule/SentenceModule';
// import ResourcesModule from '../modules/ResourcesModule';
// import ExplanationModule from '../modules/ExplanationModule';

class LessonTemplate extends React.Component<PropTypes.ILessonTemplateProps, {}> {
  public render() {
    return (
      <FlexColumn width={[1]} ml={4}>
        <Heading is='h2'>{this.props.title}</Heading>
        
        {/* <FlexColumn mt={4}>
          <Heading is='h2'>Grammatical Resources</Heading>
          <Text>Please have a read of these resources in order to understand the grammar.</Text>
          <ResourcesModule
            resources={this.props.resources}
          />
        </FlexColumn>

        <FlexColumn mt={4}>
          <Heading is='h2'>Additional Notes</Heading>
          <ExplanationModule
            explanation={this.props.explanation}
          />
        </FlexColumn> */}

        <FlexColumn mt={4}>
          <Heading is='h2'>Lesson Exercises</Heading>
          {/* <ControlPanelModule
            sentenceDisplayOptions={this.props.sentenceDisplayOptions}
            client={this.props.client}
          /> */}
          {this.props.exercises.map((exercise, exerciseIndex) => (
            <SentenceModule
              key={exerciseIndex}
              client={this.props.client}
              exerciseIndex={exerciseIndex}
              options={exercise.options}
              sentenceDisplayOptions={this.props.sentenceDisplayOptions}
              sentenceStats={this.props.sentenceStats}
              englishSentence={exercise.englishSentence}
              japaneseSentence={exercise.japaneseSentence}
            />
          ))}
        </FlexColumn>
      </FlexColumn>
    );
  };
};

export default LessonTemplate;
