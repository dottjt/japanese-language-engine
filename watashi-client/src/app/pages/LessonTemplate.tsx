
import * as React from 'react';

import { FlexColumn, Flex, PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading, Heading, Text } from '../atoms/TextStyles';

import Helmet from '../components/Helmet';

import SentenceControlPanel from '../modules/SentenceModule/SentenceControlPanel';
import SentenceOptions from '../modules/SentenceModule/SentenceOptions';
import SentenceModule from '../modules/SentenceModule/SentenceModule';
import ResourceModule from '../modules/ResourceModule';
import ExplanationModule from '../modules/ExplanationModule';

class LessonTemplate extends React.Component<PropTypes.ILessonTemplateProps, {}> {
  public render() {
    const { 
      title,
      description,
      client,
      path,
      sentenceDisplayOptions,
      preOptions,
      sentenceStats,
      exercises,
      explanation,
      resources,        
      isAuthenticated,
      premiumLesson, } = this.props;

      console.log(isAuthenticated)
    return (
      <PageWrapper>
        <Helmet
          title={title}
          description={description}
        />
        <Flex>
          <PageHeading>{title}</PageHeading>
          {premiumLesson ? (
            <Text ml={3}>Premium lesson</Text>
          ) : (
            <Text ml={3}>Free lesson :D</Text>
          )}
        </Flex>
        
        
        <FlexColumn>
          <Heading is='h2' fontSize={4} mt={4} mb={4}>Grammatical Resources</Heading>
          <FlexColumn mb={2}><ResourceModule resources={resources}/></FlexColumn>

          <Heading is='h2' fontSize={4} mt={4} mb={4}>Grammatical Notes</Heading>
          <FlexColumn mb={2}><ExplanationModule explanation={explanation}/></FlexColumn>

          <Heading is='h2' fontSize={4} mt={4} mb={4}>Refined Sentence Options</Heading>
          
          <FlexColumn 
            css={{
              position: 'relative',
            }}
            mb={2}>
            {!isAuthenticated && 
              <FlexColumn
                css={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  zIndex: 9,
                  background: 'grey',
                }}
                p={3}
                >This is a premium feature. Sorry!</FlexColumn>
            }
            <SentenceControlPanel
              sentenceDisplayOptions={this.props.sentenceDisplayOptions}
              preOptions={preOptions}
              client={client}
              path={path}
            />
          </FlexColumn>

          <Heading is='h2' fontSize={4} mt={4} mb={4}>Sentence Analysis Options</Heading>
          <FlexColumn mb={2}><SentenceOptions
            sentenceDisplayOptions={this.props.sentenceDisplayOptions}
            client={client}
            path={path}
          /></FlexColumn>

          <Heading is='h2' fontSize={4} mt={4} mb={4}>Lesson Exercises</Heading>

          <FlexColumn 
            css={{
              position: 'relative',
            }}
            mb={2}>
            {exercises.map((exercise: Util.EnglishJapaneseOptionsSentence, exerciseIndex: number) => {
            return (
              <React.Fragment>
                {!isAuthenticated && premiumLesson && (
                  <FlexColumn
                    css={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      zIndex: 9,
                      background: 'grey',
                    }}
                    p={3}
                    >
                    <Text>You must create an account in order to access these exercises.</Text>
                    <Text>The first 6 modules do not require an account.</Text>
                    <Text>Please click on this link to create an account. It will take you to our secure login platform.</Text>


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

          <Heading is='h2' fontSize={4} mt={4} mb={4}>Premium Account</Heading>
          
          <FlexColumn mb={2}>
            <Text>The first six modules </Text>

          </FlexColumn>

        </FlexColumn>
      </PageWrapper>
    );
  };
};

export default LessonTemplate;
