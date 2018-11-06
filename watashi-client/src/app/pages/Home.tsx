import * as React from 'react';
import { Query } from 'react-apollo';
import GET_EVERYTHING from '../../graphql/queries/getEverything';

import { lessonPathArray } from '../../util/constants/lessonConstants';
import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

import { randomArrayElement, getExercisesApollo } from '../../util/functions';

import SentenceModule from '../modules/SentenceModule/SentenceModule';

import Helmet from '../components/Helmet';

import { PageHeading, SecondaryPageHeading, Text } from '../atoms/TextStyles';
import { FlexColumn, PageWrapper, List, ListItem } from '../atoms/LayoutStyles';


class Home extends React.Component<PropTypes.IHomeProps, { randomIndex: number }> {
  constructor(props) {
    super(props);
    getExercisesApollo(this.props.client, this.props.route.path, 1);
  };

  public render() {

    // setTimeout(() => {
      this.randomiseExerices(this.props.client);
    // }, 1500);

    return (
      <Query query={GET_EVERYTHING}>
        {({ data, client }) => {
            
          return (
            <PageWrapper>
              
              <Helmet title={ROUTE_TITLE.HOME} description={ROUTE_DESCRIPTION.HOME}/>

              <PageHeading>Watashi Engine beta.</PageHeading>
              
              <Text>Disclaimer: This project is constantly being worked on and is currently in very early alpha. Like, so alpha it can't even speak yet alpha. So that's something to think about.</Text>

              <FlexColumn width={600} mb={5}>
                <SecondaryPageHeading>What is it?</SecondaryPageHeading>
                <Text>A highly sophisticated Japanese language engine.</Text>
                
                {data.exercises.map((exercise: Util.EnglishJapaneseOptionsSentence, exerciseIndex: number) => (
                  <SentenceModule
                    key={exerciseIndex}
                    exerciseIndex={exerciseIndex}

                    options={exercise.options}
                    englishSentence={exercise.englishSentence}
                    japaneseSentence={exercise.japaneseSentence}

                    client={client}
                    sentenceDisplayOptions={data.sentenceDisplayOptions}
                    sentenceStats={data.sentenceStats}
                  />
                ))}
              </FlexColumn>

              <SecondaryPageHeading>Why Watashi Engine?</SecondaryPageHeading>
              <FlexColumn width={600} mb={4}>
                <Text>01 - Watashi Engine is highly focused on what you want to achieve.</Text>
                <Text>Need to practice sentence translations of only を and に verb sentence variations, using vocabulary specific to JLPT N2, while also relevant to a particular theme, with only negative phrases in polite form, all completely randomly generated?</Text>
                {/* Then here, actually insert that configuration. */}
                <Text>Watashi Engine can.</Text>
              </FlexColumn>

              // <FlexColumn width={600} mb={5}>
              //   <Text>02 - Watashi Engine provides you with tools for analysis.</Text>
              //   <Text>Aside from generating accurate Japanese sentences in a variety of forms.</Text>
              //   {/* Then here, actually insert that configuration. */}
              //   <Text>Watashi Engine can.</Text>
              // </FlexColumn>

              <FlexColumn width={600} mb={5}>
                <SecondaryPageHeading>Features</SecondaryPageHeading>
                <List>
                  <ListItem>Allows you to create a variety of accurate Japanese sentences using random Kanji.</ListItem>
                  <ListItem>Provides in-depth analysis of Japanese word and sentence structure. </ListItem>
                  <ListItem>Provides english mappings to various Japanese sentence types. </ListItem>
                  <ListItem>Japanese grammar ranging from N1 to N5 JLPT levels.</ListItem>
                  <ListItem>Actively teaches you Japanese grammar usage in the most effective and intuitive way possible.</ListItem>
                  <ListItem>More than 100 randomly generated grammar exercises.</ListItem>
                </List>
              </FlexColumn>

              <FlexColumn width={600} mb={5}>
                <SecondaryPageHeading>What it doesn't do</SecondaryPageHeading>
                <List>
                  <ListItem>Translate arbitrary Japanese text into English.</ListItem>
                  <ListItem>Focus on enhancing your vocabulary or speaking skills.</ListItem>
                  <ListItem>Provide in-depth knowledge of Japanese grammar (we use Kim Tae and Watashi as excellent references).</ListItem>
                </List>
              </FlexColumn>

              <FlexColumn width={600} mb={5}>
                <SecondaryPageHeading>Strong use cases</SecondaryPageHeading>
                <List>
                  <ListItem>Students aiming to take the isntantaneous composition method seriously.</ListItem>
                  <ListItem>Students who benefit from a micro approach towards language.</ListItem>
                  <ListItem>Students seeking mass exposure to various Japanese grammar concepts.</ListItem>
                  <ListItem>Teachers wanting the ability to easily create grammar exercises for their students.</ListItem>
                </List>
              </FlexColumn>

              <FlexColumn width={600} mb={5}>
                <SecondaryPageHeading>Try Watashi Engine Today</SecondaryPageHeading>
                <Text>Select a module from the sidebar to begin practicing your Japanese grammar with the Instantaneous Composition Method.</Text>
              </FlexColumn>

            </PageWrapper>
          )      
        }
      }
    </Query>
  )
  };

  private randomiseExerices = (client: any): void => {
    getExercisesApollo(client, lessonPathArray[randomArrayElement(lessonPathArray.length)], 1);
  };
};

export default Home;
