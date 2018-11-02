
import * as React from 'react';

import { FlexColumn, PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading, Heading, /*Text*/ } from '../atoms/TextStyles';

import Helmet from '../components/Helmet';

import SentenceOptions from '../modules/SentenceOptions';
import SentenceModule from '../modules/SentenceModule/SentenceModule';
// import ResourceModule from '../modules/ResourceModule';
// import ExplanationModule from '../modules/ExplanationModule';

class LessonTemplate extends React.Component<PropTypes.ILessonTemplateProps, {}> {
  public render() {
    const { title, description, client, route, sentenceDisplayOptions, sentenceStats, exercises, /*explanation, resources*/ } = this.props; 

    return (
      <PageWrapper>
        <Helmet
          title={title}
          description={description}
        />

        <PageHeading>{title}</PageHeading>
        
        {/* <FlexColumn mt={5}>
          <Heading is='h2' fontSize={3}>Grammatical Resources</Heading>
          <Text>Please have a read of these resources in order to understand the grammar.</Text>
          <ResourceModule resources={resources}/>
        </FlexColumn>

        <FlexColumn mt={5}>
          <Heading is='h2' fontSize={3}>Additional Notes</Heading>
          <ExplanationModule explanation={explanation}/>
        </FlexColumn> */}

        <FlexColumn mt={5}>
          <Heading is='h2' fontSize={3}>Lesson Exercises</Heading>
          <SentenceOptions
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
      </PageWrapper>
    );
  };
};

export default LessonTemplate;
