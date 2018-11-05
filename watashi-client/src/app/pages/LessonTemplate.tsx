
import * as React from 'react';

import { PageWrapper, FlexColumn, Flex } from '../atoms/LayoutStyles';
import { PageHeading, PageHeadingSecondary, Text } from '../atoms/TextStyles';

import Helmet from '../components/Helmet';

import SentenceControlPanel from '../modules/SentenceModule/SentenceControlPanel';
import SentenceOptions from '../modules/SentenceModule/SentenceOptions';
import SentenceModule from '../modules/SentenceModule/SentenceModule';
import ResourceModule from '../modules/ResourceModule';
import ExplanationModule from '../modules/ExplanationModule';

class LessonTemplate extends React.Component<PropTypes.ILessonTemplateProps, {}> {
  public render() {
    const { title, description, client, path, sentenceDisplayOptions, preOptions, sentenceStats, exercises, explanation, resources, isAuthenticated, premiumLesson, } = this.props;

    return (
      <PageWrapper>
        
        <Helmet title={title} description={description}/>

        <Flex>
          <PageHeading>{title}</PageHeading>
          <Text ml={3}>{premiumLesson ? 'Premium lesson' : 'Free lesson'}</Text>
        </Flex>
        
        <FlexColumn>
          <PageHeadingSecondary>Grammar Resources</PageHeadingSecondary>
          <FlexColumn mb={2}>
            <ResourceModule resources={resources}/>
          </FlexColumn>

          <PageHeadingSecondary>Grammar Notes</PageHeadingSecondary>
          <FlexColumn mb={2}>
            <ExplanationModule explanation={explanation}/>
          </FlexColumn>

          <PageHeadingSecondary>Refined Sentence Options</PageHeadingSecondary>
          <FlexColumn
            mb={2}
            css={{
              position: 'relative',
            }}
            >
            {!isAuthenticated && 
              <FlexColumn
                p={3}
                css={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  zIndex: 9,
                  background: 'rgba(26,26,26, 0.8)',
                }}
                >
                <Flex
                  bg='grey'
                  css={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  >
                  <Text 
                    fontSize={5} 
                    mb={0} 
                    color='white'
                    >This is a premium feature. Sorry!</Text>
                </Flex>
              </FlexColumn>
            }
            <SentenceControlPanel
              sentenceDisplayOptions={this.props.sentenceDisplayOptions}
              preOptions={preOptions}
              client={client}
              path={path}
            />
          </FlexColumn>

          <PageHeadingSecondary>Sentence Analysis Options</PageHeadingSecondary>
          <FlexColumn mb={2}><SentenceOptions
            sentenceDisplayOptions={this.props.sentenceDisplayOptions}
            client={client}
            path={path}
          /></FlexColumn>

          <PageHeadingSecondary>Lesson Exercises</PageHeadingSecondary>

          <FlexColumn 
            mb={2}
            css={{
              position: 'relative',
            }}
            >
            {exercises.map((exercise: Util.EnglishJapaneseOptionsSentence, exerciseIndex: number) => {
            return (
              <React.Fragment>

                {!isAuthenticated && premiumLesson && (
                  <FlexColumn
                    p={3}
                    css={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      zIndex: 9,
                      background: 'rgba(26,26,26, 0.8)',
                    }}
                    >
                    <Flex bg='grey'>
                      <Text fontSize={5} color='white'>You must create an account in order to access these exercises.</Text>
                      <Text fontSize={5} color='white'>The first 6 modules do not require an account.</Text>
                      <Text fontSize={5} color='white'>Please click on this link to create an account. It will take you to our secure login platform.</Text>
                    </Flex>
                  </FlexColumn>
                )}

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
              </React.Fragment>
            )
          })}</FlexColumn>

          <PageHeadingSecondary>Premium Account</PageHeadingSecondary>
          
          <FlexColumn mb={2}>
            <Text>The first six modules are free</Text>
          </FlexColumn>

        </FlexColumn>
      </PageWrapper>
    );
  };
};

export default LessonTemplate;
