import * as React from 'react';
import { Query } from 'react-apollo';
import GET_EVERYTHING from '../../graphql/queries/getEverything';

import { LESSON_TITLE, lessonPathArray } from '../../util/constants/lessonConstants';
import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

import { randomArrayElement, getExercisesApollo } from '../../util/functions';

import SentenceModule from '../modules/SentenceModule/SentenceModule';

import Helmet from '../components/Helmet';

import { PageHeading, SecondaryPageHeading, Text } from '../atoms/TextStyles';
import { InternalLink } from '../atoms/ClickableStyles';
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

              <PageHeading>Watashi Engine.</PageHeading>
              
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
                <SecondaryPageHeading>Free features</SecondaryPageHeading>
                <List>
                  <ListItem>Limited access to the basic grammar course.</ListItem>
                  <ListItem>Limited access the grammar engine.</ListItem>
                </List>
              </FlexColumn>
          
              <FlexColumn width={600} mb={5}>
                <SecondaryPageHeading>Premium features</SecondaryPageHeading>
                <List>
                  <ListItem>Full Access to all 100 pre-defined grammar exercises.</ListItem>
                  <ListItem>Exercises ranging from N1 to N5 JLPT levels.</ListItem>
                  <ListItem>Full access of the grammar engine in order to create your own exercises.</ListItem>
                </List>
              </FlexColumn>

              <FlexColumn width={600} mb={5}>
                <SecondaryPageHeading>Try Watashi Engine Today</SecondaryPageHeading>
                  <Text>Decide before you buy.</Text>
                  <InternalLink routeName={LESSON_TITLE.L001} routeOptions={{reload: true}}>N1 JLPT grammar module free</InternalLink>
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
