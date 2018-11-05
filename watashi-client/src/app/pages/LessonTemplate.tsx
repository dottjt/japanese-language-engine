
import * as React from 'react';

import { PageWrapper, FlexColumn, FlexColumnCenter, Flex } from '../atoms/LayoutStyles';
import { PageHeading, SecondaryPageHeading, Text } from '../atoms/TextStyles';

import Helmet from '../components/Helmet';

import SentenceControlPanel from '../modules/SentenceModule/SentenceControlPanel';
import SentenceOptions from '../modules/SentenceModule/SentenceOptions';
import SentenceModule from '../modules/SentenceModule/SentenceModule';
import ResourceModule from '../modules/ResourceModule';
import ExplanationModule from '../modules/ExplanationModule';
import { ExternalLink } from '../atoms/ClickableStyles';

class LessonTemplate extends React.Component<PropTypes.ILessonTemplateProps, {}> {
  public render() {
    const { title, description, client, path, sentenceDisplayOptions, preOptions, sentenceStats, exercises, explanation, resources, auth, isAuthenticated, premiumLesson, } = this.props;

    return (
      <PageWrapper>
        
        <Helmet title={title} description={description}/>

        <Flex>
          <PageHeading>{title}</PageHeading>
          <Text ml={3}>{premiumLesson ? 'Premium lesson' : 'Free lesson'}</Text>
        </Flex>
        
        <FlexColumn>
          <SecondaryPageHeading>Grammar Resources</SecondaryPageHeading>
          <FlexColumn mb={2}>
            <ResourceModule resources={resources}/>
          </FlexColumn>

          <SecondaryPageHeading>Grammar Notes</SecondaryPageHeading>
          <FlexColumn mb={2}>
            <ExplanationModule explanation={explanation}/>
          </FlexColumn>

          <SecondaryPageHeading>Refined Sentence Options</SecondaryPageHeading>
          <FlexColumn
            mb={2}
            css={{
              position: 'relative',
            }}
            >
            <PremiumFilter isAuthenticated={isAuthenticated}>
              <Text fontSize={4} mb={0} color='white'>You must <ExternalLink onClick={auth.login} fontSize={4} mb={0}>login</ExternalLink> or <ExternalLink onClick={auth.login} fontSize={4} mb={0}>create an account</ExternalLink> in order to use this feature.</Text>
            </PremiumFilter>

            <SentenceControlPanel
              sentenceDisplayOptions={this.props.sentenceDisplayOptions}
              preOptions={preOptions}
              client={client}
              path={path}
            />
          </FlexColumn>

          <SecondaryPageHeading>Sentence Analysis Options</SecondaryPageHeading>
          <Flex mb={2}>
            <SentenceOptions
              sentenceDisplayOptions={this.props.sentenceDisplayOptions}
              client={client}
              path={path}
            />
          </Flex>

          <SecondaryPageHeading>Lesson Exercises</SecondaryPageHeading>

          <FlexColumn 
            mb={2}
            css={{
              position: 'relative',
            }}
            >
            {exercises.map((exercise: Util.EnglishJapaneseOptionsSentence, exerciseIndex: number) => {
            return (
              <React.Fragment>

                {premiumLesson &&
                  <PremiumFilter isAuthenticated={isAuthenticated}>
                    <Text fontSize={5} color='white'>You must create an account in order to access these exercises.</Text>
                    <Text fontSize={5} color='white'>The first 6 modules do not require an account.</Text>
                    <Text fontSize={5} color='white'>Please click on this link to create an account. It will take you to our secure login platform.</Text>
                  </PremiumFilter>
                }

                <FlexColumn mb={2}>
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
                </FlexColumn>
                
              </React.Fragment>
            )
          })}</FlexColumn>

          <SecondaryPageHeading>Premium Account</SecondaryPageHeading>
          
          <FlexColumn mb={2}>
            <Text>The first six modules are free</Text>
          </FlexColumn>

        </FlexColumn>
      </PageWrapper>
    );
  };
};

const PremiumFilter = ({ isAuthenticated, children }) => (
  !isAuthenticated ?
    <FlexColumnCenter
      bg='transparentGrey'
      css={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 9,
      }}
      >
      <Flex
        bg='grey'
        p={2}
        css={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
        {children}
      </Flex>
    </FlexColumnCenter> : null
);

export default LessonTemplate;
