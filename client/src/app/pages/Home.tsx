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
  PricingCard,
  PricingList,
  PricingListItem,
  Price,
  PricingButtonStyles,
} from '../atoms/HomeStyles';
import { H1, H2, H3, Text } from '../atoms/TextStyles';
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
                <H1>Watashi Engine.</H1>
                
                <HomepageSection>
                  <H2>What is it?</H2>
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
                  <H2>Features</H2>
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
                  <H2>What it doesn't do</H2>
                  <List>
                    <Item>Translate arbitrary Japanese text into English.</Item>
                    <Item>Focus on enhancing your vocabulary or speaking skills.</Item>
                    <Item>Provide in-depth knowledge of Japanese grammar (we use Kim Tae and Watashi as excellent references).</Item>
                  </List>
                </HomepageSection>


                <HomepageSection>
                  <H2>Pricing</H2>
                </HomepageSection>

                <PricingWrapper>

                  <PricingCard>
                    <H3>Free</H3>
                    <Price>$0</Price>
                    <PricingList>
                      <PricingListItem>Limited access to basic grammar exercises.</PricingListItem>
                      <PricingListItem>Try Watashi Engine before you buy.</PricingListItem>
                    </PricingList>
                    <Link style={PricingButtonStyles} routeName={ROUTE_TITLE.SIGN_UP} routeOptions={{reload: true}}>Try me</Link>                      
                  </PricingCard>

                  <PricingCard>
                    <H3>Monthly</H3>
                    <Price>$7.95</Price>
                    <PricingList>
                      <PricingListItem>Full access to the Watashi Engine.</PricingListItem>
                      <PricingListItem>Full access to all 100+ grammar exercises.</PricingListItem>
                    </PricingList>
                    <Link style={PricingButtonStyles} routeName={ROUTE_TITLE.SIGN_UP} routeOptions={{reload: true}}>Try me</Link>                      
                  </PricingCard>

                  <PricingCard>
                    <H3>Yearly</H3>
                    <Price>$59.95</Price>
                    <PricingList>
                      <PricingListItem>Full access to the Watashi Engine at a discounted price.</PricingListItem>
                    </PricingList>
                    <Link style={PricingButtonStyles} routeName={ROUTE_TITLE.SIGN_UP} routeOptions={{reload: true}}>Try Me</Link>
                  </PricingCard>

                </PricingWrapper>

                <HomepageSection>
                  <H2>Strong use cases</H2>
                  <List>
                    <Item>Students aiming to take the isntantaneous composition method seriously.</Item>
                    <Item>Students who benefit from a micro approach towards language.</Item>
                    <Item>Students seeking mass exposure to various Japanese grammar concepts.</Item>
                    <Item>Teachers wanting the ability to easily create grammar exercises for their students.</Item>
                  </List>
                </HomepageSection>

                <HomepageSection>
                  <H2>Free features</H2>
                  <List>
                    <Item>Limited access to the basic grammar course.</Item>
                    <Item>Limited access the grammar engine.</Item>
                  </List>
                </HomepageSection>
            
                <HomepageSection>
                  <H2>Premium features</H2>
                  <List>
                    <Item>Full Access to all 100 pre-defined grammar exercises.</Item>
                    <Item>Exercises ranging from N1 to N5 JLPT levels.</Item>
                    <Item>Full access of the grammar engine in order to create your own exercises.</Item>
                  </List>
                </HomepageSection>

                <HomepageSection>
                  <H2>Try Watashi Engine Today</H2>
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
