import * as React from 'react';
import { Flex, Heading, Text } from 'rebass';

class Prerequistes extends React.Component<{}, {}> {
  public render() {
    return (
      <Flex flexDirection='column'>
        <Flex flexDirection='column'>
          <Heading>
            Prequisites
          </Heading>
          <Text>
            This application heavily utilises 
          </Text>
        </Flex>

        <Flex flexDirection='column'>
          <Heading>
            My number one recommendation
          </Heading>
          <Text>
            Having learnt Japanese to a sufficient degree, there is one single point I can recommend for your future progress.
          </Text>
          <Text>
            Don't aim to perfect every single small detail of the language. 
          </Text>
          <Text>
            The main reason is because it is impossible to try and perfect something which doesn't make sense without the broader context of all the other grammar in the language.
          </Text>
          <Text>
            Instead, I would recommend that you aim to maintain a big picture of everything, in regards to how everything relates to each other.
          </Text>
          <Text>
            Language is not something that can be perfected. In part, because language is entirely abstract in almost every single way.
          </Text>
          <Text>
            For example, have you ever had to work with someone you just didn't get along with where you end up disagreeing on everything?
          </Text>
          <Text>
            Even though you may be both speaking the same language, interpretation and context are unique challenges that even language itself cannot address. 
          </Text>
          <Text>
            At best, what we can aim for is accuracy with our intention, and that is what grammar provides us with. 
          </Text>
          <Text>
            Grammar does this by providing us with a bunch of 'common' conventions for which we can hope to understand. 
          </Text>
          <Text>
            It is not mean to be a one-to-one translation. It is a fluid interpretation and if you can keep this in mind, you'll do well.             
          </Text>

          <Heading>
            Effective Learning
          </Heading>
          <Text>
            There really are two aspects to keep in mind: Understanding and active practice.
          </Text>
          <Text>
            What this application essentially provides is the active practice aspect of this equation. 
          </Text>
        </Flex> 
    </Flex> 
    );
  };
};

export default Prerequistes;
