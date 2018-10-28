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
  HomepageWrapper, 
  MainWrapper, 
  HomepageSection, 
  List,
  Item,
  PricingWrapper,
  Card,
  PricingList,
  PricingListItem,
  PricingButtonStyles,
} from '../atoms/HomeStyles';
import { Heading, Text } from '../atoms/TextStyles';
import { Button } from '../atoms/ClickableStyles';

class Home extends React.Component<{}, { randomIndex: number }> {
  constructor({}) {
    super({});
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
            <HomepageWrapper>
              <Navbar/>
              <MainWrapper>
                <Heading>Watashi Engine.</Heading>
                
                <HomepageSection>
                  <Heading is='h2'>What is it?</Heading>
                  <Text>A highly sophisticated Japanese language engine.</Text>
                  <Button onClick={this.randomiseSentence}>Random</Button>
                  {/* <SentenceModule
                    sentenceDisplayOptions={data.sentenceDisplayOptions}
                    englishSentence={exercise[randomIndex].englishSentence}
                    japaneseSentence={exercise[randomIndex].japaneseSentence}
                    options={exercise[randomIndex].options}
                  /> */}
                </HomepageSection>
                
                <HomepageSection>
                  <Heading is='h2'>Features</Heading>
                  <List>
                    <Item>Allows you to create a variety of accurate Japanese sentences using random Kanji.</Item>
                    <Item>Provides in-depth analysis of Japanese word and sentence structure. </Item>
                    <Item>Provides english mappings to various Japanese sentence types. </Item>
                    <Item>Japanese grammar ranging from N1 to N5 JLPT levels.</Item>
                    <Item>Actively teaches you Japanese grammar usage in the most effective and intuitive way possible.</Item>
                    <Item>More than 100 randomly generated grammar exercises.</Item>
                  </List>
                </HomepageSection>

                <HomepageSection>
                  <Heading is='h2'>What it doesn't do</Heading>
                  <List>
                    <Item>Translate arbitrary Japanese text into English.</Item>
                    <Item>Focus on enhancing your vocabulary or speaking skills.</Item>
                    <Item>Provide in-depth knowledge of Japanese grammar (we use Kim Tae and Watashi as excellent references).</Item>
                  </List>
                </HomepageSection>


                <HomepageSection>
                  <Heading is='h2'>Pricing</Heading>
                </HomepageSection>

                <PricingWrapper>

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

                </PricingWrapper>

                <HomepageSection>
                  <Heading is='h2'>Strong use cases</Heading>
                  <List>
                    <Item>Students aiming to take the isntantaneous composition method seriously.</Item>
                    <Item>Students who benefit from a micro approach towards language.</Item>
                    <Item>Students seeking mass exposure to various Japanese grammar concepts.</Item>
                    <Item>Teachers wanting the ability to easily create grammar exercises for their students.</Item>
                  </List>
                </HomepageSection>

                <HomepageSection>
                  <Heading is='h2'>Free features</Heading>
                  <List>
                    <Item>Limited access to the basic grammar course.</Item>
                    <Item>Limited access the grammar engine.</Item>
                  </List>
                </HomepageSection>
            
                <HomepageSection>
                  <Heading is='h2'>Premium features</Heading>
                  <List>
                    <Item>Full Access to all 100 pre-defined grammar exercises.</Item>
                    <Item>Exercises ranging from N1 to N5 JLPT levels.</Item>
                    <Item>Full access of the grammar engine in order to create your own exercises.</Item>
                  </List>
                </HomepageSection>

                <HomepageSection>
                  <Heading is='h2'>Try Watashi Engine Today</Heading>
                    <Text>Decide before you buy.</Text>
                    <Link routeName={LESSON_TITLE.L001} routeOptions={{reload: true}}>N1 JLPT grammar module free</Link>
                </HomepageSection>

              </MainWrapper>

            </HomepageWrapper>
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
