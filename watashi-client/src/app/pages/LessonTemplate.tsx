
import * as React from 'react';

import { FlexColumn, PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading, Heading } from '../atoms/TextStyles';

import Helmet from '../components/Helmet';

import SentenceControlPanel from '../modules/SentenceModule/SentenceControlPanel';
import SentenceOptions from '../modules/SentenceModule/SentenceOptions';
import SentenceModule from '../modules/SentenceModule/SentenceModule';
import ResourceModule from '../modules/ResourceModule';
import ExplanationModule from '../modules/ExplanationModule';

class LessonTemplate extends React.Component<PropTypes.ILessonTemplateProps, {}> {
  public render() {
    const { title, description, client, path, sentenceDisplayOptions, preOptions, sentenceStats, exercises, explanation, resources } = this.props; 

    return (
      <PageWrapper>
        <Helmet
          title={title}
          description={description}
        />

        <PageHeading>{title}</PageHeading>
        
        <FlexColumn>
          <Heading is='h2' fontSize={4} mt={4} mb={4}>Grammatical Resources</Heading>
          <FlexColumn mb={2}><ResourceModule resources={resources}/></FlexColumn>

          <Heading is='h2' fontSize={4} mt={4} mb={4}>Grammatical Notes</Heading>
          <FlexColumn mb={2}><ExplanationModule explanation={explanation}/></FlexColumn>

          <Heading is='h2' fontSize={4} mt={4} mb={4}>Refined Sentence Options</Heading>
          <FlexColumn mb={2}><SentenceControlPanel
            sentenceDisplayOptions={this.props.sentenceDisplayOptions}
            preOptions={preOptions}
            client={client}
            path={path}
          /></FlexColumn>

          <Heading is='h2' fontSize={4} mt={4} mb={4}>Sentence Analysis Options</Heading>
          <FlexColumn mb={2}><SentenceOptions
            sentenceDisplayOptions={this.props.sentenceDisplayOptions}
            client={client}
            path={path}
          /></FlexColumn>

          <Heading is='h2' fontSize={4} mt={4} mb={4}>Lesson Exercises</Heading>
          <FlexColumn mb={2}>{exercises.map((exercise: Util.EnglishJapaneseOptionsSentence, exerciseIndex: number) => (
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
          ))}</FlexColumn>
        </FlexColumn>
      </PageWrapper>
    );
  };
};

export default LessonTemplate;
