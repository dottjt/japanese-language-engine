import * as React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router5';
import { GET_ALL_WORDS_AND_OPTIONS } from '../../graphql/queries';

// import { randomArrayElement } from '../../util/functions';
import { LESSON_TITLE, /* LESSON_OPTIONS */ } from '../../util/constants/lessonConstants';
import { ROUTE_TITLE } from '../../util/constants/generalConstants';

// import generateExercises from '../../util/conjugations/generateExercises';
import Navbar from '../components/Navbar';
// import SentenceModule from '../modules/SentenceModule/SentenceModule'

import { 
  Card,
  PricingList,
  PricingListItem,
  PricingButtonStyles,
} from '../atoms/HomeStyles';

import { Heading, Text } from '../atoms/TextStyles';
import { Button } from '../atoms/ClickableStyles';
import { Flex, FlexColumn, List, ListItem } from '../atoms/LayoutStyles';



class Home extends React.Component<{}, { randomIndex: number }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      randomIndex: 0 // randomArrayElement(Object.keys(LESSON_WORDS).length)
    };
  }

  public render() {
    return (
      <Query query={GET_ALL_WORDS_AND_OPTIONS}>
        {({ data }) => {
          // const randomIndex = this.state.randomIndex;
          // const randomProperty = Object.keys(LESSON_WORDS)[randomIndex];
          // const exercise = generateExercises(LESSON_WORDS[randomProperty](data.nouns) as any, LESSON_OPTIONS[randomProperty], 1);

          return (
            <FlexColumn>
              
              <Navbar/>

              <FlexColumn mt={8} ml={4} mb={8} mr={4}>

                <Heading>Watashi Engine.</Heading>
                
                <FlexColumn width='600px'>
                  <Heading is='h2'>What is it?</Heading>
                  <Text>A highly sophisticated Japanese language engine.</Text>
                  <Button onClick={this.randomiseSentence}>Random</Button>
                  {/* <SentenceModule
                    sentenceDisplayOptions={data.sentenceDisplayOptions}
                    englishSentence={exercise[randomIndex].englishSentence}
                    japaneseSentence={exercise[randomIndex].japaneseSentence}
                    options={exercise[randomIndex].options}
                  /> */}
                </FlexColumn>
                
                <FlexColumn width='600px'>
                  <Heading is='h2'>Features</Heading>
                  <List>
                    <ListItem>Allows you to create a variety of accurate Japanese sentences using random Kanji.</ListItem>
                    <ListItem>Provides in-depth analysis of Japanese word and sentence structure. </ListItem>
                    <ListItem>Provides english mappings to various Japanese sentence types. </ListItem>
                    <ListItem>Japanese grammar ranging from N1 to N5 JLPT levels.</ListItem>
                    <ListItem>Actively teaches you Japanese grammar usage in the most effective and intuitive way possible.</ListItem>
                    <ListItem>More than 100 randomly generated grammar exercises.</ListItem>
                  </List>
                </FlexColumn>

                <FlexColumn width='600px'>
                  <Heading is='h2'>What it doesn't do</Heading>
                  <List>
                    <ListItem>Translate arbitrary Japanese text into English.</ListItem>
                    <ListItem>Focus on enhancing your vocabulary or speaking skills.</ListItem>
                    <ListItem>Provide in-depth knowledge of Japanese grammar (we use Kim Tae and Watashi as excellent references).</ListItem>
                  </List>
                </FlexColumn>


                <FlexColumn width='600px'>
                  <Heading is='h2'>Pricing</Heading>
                </FlexColumn>

                <Flex justifyContent='space-around' mb={4}>

                  <Card borderColor="blacks.3">
                    <Heading is='h3'>Free</Heading>
                    <Heading is='h2'>$0</Heading>
                    <PricingList>
                      <PricingListItem>Limited access to basic grammar exercises.</PricingListItem>
                      <PricingListItem>Try Watashi Engine before you buy.</PricingListItem>
                    </PricingList>
                    <Link style={PricingButtonStyles} routeName={ROUTE_TITLE.SIGN_UP} routeOptions={{reload: true}}>Try me</Link>                      
                  </Card>

                  <Card borderColor="blacks.3">
                    <Heading is='h3'>Monthly</Heading>
                    <Heading is='h2'>$7.95</Heading>
                    <PricingList>
                      <PricingListItem>Full access to the Watashi Engine.</PricingListItem>
                      <PricingListItem>Full access to all 100+ grammar exercises.</PricingListItem>
                    </PricingList>
                    <Link style={PricingButtonStyles} routeName={ROUTE_TITLE.SIGN_UP} routeOptions={{reload: true}}>Try me</Link>                      
                  </Card>

                  <Card borderColor="blacks.3">
                    <Heading is='h3'>Yearly</Heading>
                    <Heading is='h2'>$59.95</Heading>
                    <PricingList>
                      <PricingListItem>Full access to the Watashi Engine at a discounted Heading.</PricingListItem>
                    </PricingList>
                    <Link style={PricingButtonStyles} routeName={ROUTE_TITLE.SIGN_UP} routeOptions={{reload: true}}>Try Me</Link>
                  </Card>

                </Flex>

                <FlexColumn width='600px'>
                  <Heading is='h2'>Strong use cases</Heading>
                  <List>
                    <ListItem>Students aiming to take the isntantaneous composition method seriously.</ListItem>
                    <ListItem>Students who benefit from a micro approach towards language.</ListItem>
                    <ListItem>Students seeking mass exposure to various Japanese grammar concepts.</ListItem>
                    <ListItem>Teachers wanting the ability to easily create grammar exercises for their students.</ListItem>
                  </List>
                </FlexColumn>

                <FlexColumn width='600px'>
                  <Heading is='h2'>Free features</Heading>
                  <List>
                    <ListItem>Limited access to the basic grammar course.</ListItem>
                    <ListItem>Limited access the grammar engine.</ListItem>
                  </List>
                </FlexColumn>
            
                <FlexColumn width='600px'>
                  <Heading is='h2'>Premium features</Heading>
                  <List>
                    <ListItem>Full Access to all 100 pre-defined grammar exercises.</ListItem>
                    <ListItem>Exercises ranging from N1 to N5 JLPT levels.</ListItem>
                    <ListItem>Full access of the grammar engine in order to create your own exercises.</ListItem>
                  </List>
                </FlexColumn>

                <FlexColumn width='600px'>
                  <Heading is='h2'>Try Watashi Engine Today</Heading>
                    <Text>Decide before you buy.</Text>
                    <Link routeName={LESSON_TITLE.L001} routeOptions={{reload: true}}>N1 JLPT grammar module free</Link>
                </FlexColumn>

              </FlexColumn>

            </FlexColumn>
          )      
      }
    }
  </Query>
  )
  };

  private randomiseSentence = () => {
    this.setState({
      // randomIndex: randomArrayElement(Object.keys(LESSON_WORDS).length),
    });
  };

};

export default Home;
