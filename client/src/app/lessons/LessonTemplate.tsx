
import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
import { Heading, Text } from '../atoms/TextStyles';

import ControlPanelModule from '../modules/ControlPanelModule';
import SentenceModule from '../modules/SentenceModule/SentenceModule';
import ResourceModule from '../modules/ResourceModule';
import ExplanationModule from '../modules/ExplanationModule';

class LessonTemplate extends React.Component<PropTypes.ILessonTemplateProps, {}> {
  public render() {
    const { title, client, route, sentenceDisplayOptions, sentenceStats, exercises, explanation, resources } = this.props; 

    return (
      <FlexColumn width={[1]} ml={4}>
        <Heading is='h2' fontSize={3}>{title}</Heading>
        
        <FlexColumn mt={4}>
          <Heading is='h2' fontSize={3}>Grammatical Resources</Heading>
          <Text>Please have a read of these resources in order to understand the grammar.</Text>
          <ResourceModule
            resources={resources}
          />
        </FlexColumn>

        <FlexColumn mt={4}>
          <Heading is='h2' fontSize={3}>Additional Notes</Heading>
          <ExplanationModule
            explanation={explanation}
          />
        </FlexColumn>

        <FlexColumn mt={4}>
          <Heading is='h2' fontSize={3}>Lesson Exercises</Heading>
          <ControlPanelModule
            sentenceDisplayOptions={this.props.sentenceDisplayOptions}
            client={client}
            route={route}
          />
          {exercises.map((exercise: Util.EnglishJapaneseOptionsSentence, exerciseIndex: number) => (
            <SentenceModule
              key={exerciseIndex}
              exerciseIndex={exerciseIndex}

              options={exercise.options}
              englishSentence={exercise.englishSentence}
              japaneseSentence={exercise.japaneseSentence}

              client={client}
              sentenceDisplayOptions={sentenceDisplayOptions}
              sentenceStats={sentenceStats}
            />
          ))}
        </FlexColumn>
      </FlexColumn>
    );
  };
};

export default LessonTemplate;
