import * as React from 'react';
import { Query } from 'react-apollo';

import { HomepageWrapper, MainWrapper, HomepageSection, List, Item } from '../atoms/Layout';
import { Link } from '../atoms/Clickables';
import { H1, H2, Text } from '../atoms/Text';

import Header from '../components/Header';
import SentenceModule from '../modules/SentenceModule'

import { GET_ALL_WORDS_AND_OPTIONS } from '../../graphql/queries';

// import { randomArrayElement } from '../../util/functions';
import { LESSON_WORDS, LESSON_OPTIONS } from '../../util/constants/lessonConstants';

import generateExercises from '../../util/conjugations';


class Homepage extends React.Component<{}, {}> {

  public render() {
    return (
      <Query query={GET_ALL_WORDS_AND_OPTIONS}>
        {({ data }) => {
          const randomIndex = 0 // randomArrayElement(Object.keys(LESSON_WORDS).length);
          const randomProperty = Object.keys(LESSON_WORDS)[randomIndex];
          const exercise = generateExercises(LESSON_WORDS[randomProperty](data.nouns) as any, LESSON_OPTIONS[randomProperty], 1);

          return (
            <HomepageWrapper>
              <Header/>
              <MainWrapper>
                <H1>Watashi Language Engine.</H1>
                
                <HomepageSection>
                  <H2>What is it?</H2>
                  <Text>A highly sophisticated Japanese language engine.</Text>
                  <Text>It is designed to do stuff like this:</Text>
                  <SentenceModule
                    sentenceDisplayOptions={data.sentenceDisplayOptions}
                    englishSentence={exercise[0].englishSentence}
                    japaneseSentence={exercise[0].japaneseSentence}
                    options={exercise[0].options}
                  />
              
                </HomepageSection>
                
                <HomepageSection>
                  <H2>Features</H2>
                  <List>
                    <Item>Allows you to create a variety of accurate Japanese sentences using random Kanji.</Item>
                    <Item>Provides in-depth analysis of Japanese word and sentence structure. </Item>
                    <Item>Provides english mappings to various Japanese sentence types. </Item>
                    <Item>Actively teaches you Japanese grammar usage in the most effective and intuitive way possible.</Item>
                    <Item>More than 100 randomly generated grammar exercises.</Item>
                  </List>
                </HomepageSection>

                <HomepageSection>
                  <H2>What it doesn't do</H2>
                  <List>
                    <Item>Translate arbitrary Japanese text into English.</Item>
                    <Item>Effectively teach you vocabulary or enhance your ability to speak.</Item>
                    <Item>Provide in-depth knowledge of Japanese grammar.</Item>
                  </List>
                </HomepageSection>

                <HomepageSection>
                  <H2>Strong use cases</H2>
                  <List>
                    <Item>Students aiming to take the isntantaneous composition method seriously.</Item>
                    <Item>Students who benefit from a micro approach towards language.</Item>
                    <Item>Students seeking mass exposure to various Japanese concepts.</Item>
                    <Item>Teachers wanting the ability to easily create grammar exercises for their students.</Item>
                  </List>
                </HomepageSection>

                <HomepageSection>
                  <H2>Why Watashi Engine?</H2>
                  <Text>Basically, there is no other tool out there. It was incredibly difficult to build, </Text>
                </HomepageSection>

                <HomepageSection>
                  <H2>Free features</H2>
                  <List>
                    <Item>Limited access to the basic grammar course.</Item>
                    <Item>Limited access the grammar engine.</Item>
                  </List>
                  <Link href="">Try me</Link>
                </HomepageSection>
            
                <HomepageSection>
                  <H2>Premium features</H2>
                  <List>
                    <Item>Full Access to all 100 pre-defined grammar exercises.</Item>
                    <Item>Full access of the grammar engine in order to create your own exercises.</Item>
                  </List>
                </HomepageSection>
              </MainWrapper>

            </HomepageWrapper>
          )      
      }
    }
  </Query>
  )
  };
};

export default Homepage;
