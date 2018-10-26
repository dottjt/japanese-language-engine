
import * as React from 'react';

import { PageWrapper, ModuleWrapper } from '../atoms/LayoutStyles';
import { H2 } from '../atoms/TextStyles';

import ExerciseOptionsModule from '../modules/ControlPanelModule';
import SentenceModule from '../modules/SentenceModule/SentenceModule';
// import ResourcesModule from '../modules/ResourcesModule';
// import ExplanationModule from '../modules/ExplanationModule';

class LessonTemplate extends React.Component<PropTypes.ILessonTemplateProps, {}> {
  public render() {
    return (
      <PageWrapper>
        <H2>{this.props.title}</H2>
        
        {/* <ModuleWrapper>
          <Heading>Grammatical Resources</Heading>
          <Text>Please have a read of these resources in order to understand the grammar.</Text>
          <ResourcesModule
            resources={this.props.resources}
          />
        </ModuleWrapper>

        <ModuleWrapper>
          <Heading>Additional Notes</Heading>
          <ExplanationModule
            explanation={this.props.explanation}
          />
        </ModuleWrapper> */}

        <ModuleWrapper>
          <H2>Lesson Exercises</H2>
          <ExerciseOptionsModule
            sentenceDisplayOptions={this.props.sentenceDisplayOptions}
            client={this.props.client}
          />
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
        </ModuleWrapper>
      </PageWrapper>
    );
  };
};

export default LessonTemplate;
