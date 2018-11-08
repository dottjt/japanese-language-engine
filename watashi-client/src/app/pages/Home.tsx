import * as React from 'react';
import { Query } from 'react-apollo';
import GET_EVERYTHING from '../../graphql/queries/getEverything';

// import { lessonPathArray } from '../../util/constants/lessonConstants';
import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

// import { randomArrayElement, getExercisesApollo } from '../../util/functions';

import SentenceModule from '../modules/SentenceModule/SentenceModule';

import Helmet from '../components/Helmet';

import { PageHeading, SecondaryPageHeading, Text } from '../atoms/TextStyles';
import { FlexColumn, PageWrapper, List, ListItem } from '../atoms/LayoutStyles';
import { ExternalLink } from '../atoms/ClickableStyles';


class Home extends React.Component<PropTypes.IHomeProps, { randomIndex: number }> {
  constructor(props) {
    super(props);
    // getExercisesApollo(this.props.client, this.props.route.path, 1);
  };

  public render() {

    // setTimeout(() => {
    //   console.log('hi')
    //   this.randomiseExerices(this.props.client);
    // }, 1500);

    return (
      <Query query={GET_EVERYTHING}>
        {({ data, client }) => {
            
          return (
            <PageWrapper>
              
              <Helmet title={ROUTE_TITLE.HOME} description={ROUTE_DESCRIPTION.HOME}/>

              <PageHeading>Watashi Engine.</PageHeading>
              
              <FlexColumn width={600} mb={5}>
                <Text>Disclaimer: This project is in super early alpha and is currently unusable, and will be unusable for probably about a year until this message is removed :).</Text>
              </FlexColumn>

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
                <Text>01 - Watashi Engine is entirely focused on what you want to achieve.</Text>
                <Text>Need to practice sentence translations of only を and に verb sentence variations, using vocabulary specific to JLPT N2, while also relevant to a particular theme, with only negative phrases in polite form, all completely randomly generated?</Text>
                {/* Then here, actually insert that configuration. */}
                <Text>In essence, Watashi Engine is highly configurable.</Text>
              </FlexColumn>

              <FlexColumn width={600} mb={4}>
                <Text>02 - Watashi Engine provides you with tools for analysis.</Text>
                <Text>Aside from generating accurate Japanese sentences in a variety of forms, Watashi Engineprovides both visual and analytical tools for you to completely understand sentence structure.</Text>
              </FlexColumn>

              <FlexColumn width={600} mb={5}>
                <Text>03 - Watashi Engine facilitates the Instantaneous Composition Method.</Text>
                <Text>The grammar course behind Watashi Engine has been designed solely to facility the <ExternalLink href='https:// '>Instantaneous Composition Method</ExternalLink> which in my opinion, is the most effective way to learn Japanese grammar.</Text>
                <Text>It is one of the few ways to accurately, (and most importantly, actively) practice your Japanese grammar.</Text>
                <Text>It is essentially what professional translators do enmass.</Text>
              </FlexColumn>

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
                  <ListItem>Provide in-depth knowledge of Japanese grammar (instead we use <ExternalLink href='http://www.guidetojapanese.org/'>Kim Tae</ExternalLink> and <ExternalLink href='https://www.wasabi-jpn.com/'>Watashi</ExternalLink> as excellent references).</ListItem>
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

  // private randomiseExerices = (client: any) => {
  //   getExercisesApollo(client, lessonPathArray[randomArrayElement(lessonPathArray.length)], 1);
  // };
};

export default Home;
