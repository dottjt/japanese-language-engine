import * as React from 'react';

import { HomepageWrapper, HomepageSection } from '../atoms/Layout';
import { Link } from '../atoms/Clickables';
import { H1, H2, Text } from '../atoms/Text';
import Header from '../components/Header';

class Homepage extends React.Component<{}, {}> {

  public render() {
    return (
    <HomepageWrapper>
      <Header/>
      
      <H1>Watashi Language Engine.</H1>
      
      <HomepageSection>
        <H2>What is it?</H2>
        <Text>A highly sophisticated Japanese language engine.</Text>
      </HomepageSection>
      
      <HomepageSection>
        <H2>What it does</H2>
        <ul>
          <li>Allows you to create a variety of accurate Japanese sentences using random Kanji.</li>
          <li>Provides in-depth analysis of Japanese word and sentence structure. </li>
          <li>Provides english mappings to various Japanese sentence types. </li>
          <li>Actively teaches you Japanese grammar usage in the most effective and intuitive way possible.</li>
        </ul>
      </HomepageSection>

      <HomepageSection>
        <H2>What it doesn't do</H2>
        <ul>
          <li>Translate arbitrary Japanese text.</li>
          <li>Effectively teach you vocabulary or your ability to speak.</li>
          <li>Provide in-depth knowledge of Japanese grammar (I highly recommend Kim Tae and Watashi).</li>
        </ul>
      </HomepageSection>

      <HomepageSection>
        <H2>Strong use cases</H2>
        <ul>
          <li>Students wanting to learn Japanese grammar via the isntantaneous composition method.</li>
          <li>Students who benefit from a micro approach towards language.</li>
          <li>Students seeking mass exposure to various Japanese concepts.</li>
          <li>Teachers wanting the ability to easily create grammar exercises for their students.</li>
        </ul>
      </HomepageSection>

      <HomepageSection>
        <H2>Why Watashi Engine?</H2>
        <Text>Basically, there is no other tool out there. It was incredibly difficult to build, </Text>
      </HomepageSection>

      <HomepageSection>
        <H2>Free features</H2>
        <ul>
          <li>Limited access to the basic grammar course.</li>
          <li>Limited access the grammar engine.</li>
        </ul>
        <Link href="">Try me</Link>
      </HomepageSection>
  
      <HomepageSection>
        <H2>Premium features</H2>
        <ul>
          <li>Full Access to all 100 pre-defined grammar exercises.</li>
          <li>Full access of the grammar engine in order to create your own exercises.</li>
        </ul>
      </HomepageSection>

    </HomepageWrapper>
  )
  };
};

export default Homepage;
