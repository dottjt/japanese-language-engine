# Brief description

Introducing the Watashi Engine.

What it is:

- A highly sophisticated Japanese language engine. 

Use cases:
- Teachers wanting the ability to easily create grammar exercises for their students.
- Students wanting to study via the isntantaneous composition method.
- Students who benefit from a macro approach towards language.  

What it isn't:

- A language translator (although it may become one in the distant future)

# Tech

- Frontend: Create-React-App, Typescript, React, apollo-boost, react-router5
- CSS: Styled-Components, Rebass
- Testing: Jest
- Backend: Node.js, feathersjs, GraphQL, apollo-server, typeorm
- Database: Postgres
- Authentication: Auth0
- CI: Buildkite
- Server: AWS Lightsail
- Infrastructure: Docker, AWS

## Setup

create-react-app watashi-client

touch .env  // SKIP_PREFLIGHT_CHECK=true

yarn add @types/react @types/react-dom @types/auth0-js @types/graphql @types/rebass @types/styled-components 
yarn add typescript graphql router5 react-router5 react-apollo apollo-cache-inmemory apollo-client apollo-link-http apollo-link-state apollo-link auth0-js react-app-rewired react-helmet @loadable/component react-markdown
yarn add react-flexbox-grid rebass styled-components system-components
yarn add --dev react-app-rewired react-app-rewire-styled-components react-snap react

npm install --save-dev babel-plugin-styled-components typescript-plugin-styled-components



https://github.com/nfl/react-helmet
https://github.com/stereobooster/react-snap // seems to be a few caveats
https://github.com/smooth-code/loadable-components // to use with react-snap

http://astronautweb.co/react-static-sites/ - wow, really good guide.
https://medium.com/yld-engineering-blog/a-tale-of-react-server-side-rendering-cb95a441ca01 // server side render with razzle.
React-snap may be exactly what I'm looking for.


With cra-universal - basically it makes it... possibly might be stuck with react-scripts.

https://medium.com/@cereallarceny/server-side-rendering-with-create-react-app-fiber-react-router-v4-helmet-redux-and-thunk-275cb25ca972

https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f


// the problem is that I'm getting a set of words per lesson, even though each lesson has different sentence types. 
// Instead, what should be happening is that I should only be getting certain words per sentence type.

// instead, I need to begin sending in the lesson variation via Main. 

- Time to start specing out what bits of information are valuable to the user to analyse. Topic, Subject, Verb. 


# ATTEMPTING 
- の possesive 
- から and まで
- Sentence endings ね, よ, and よね // put it in the options 
- Demonstratives.
- Question Markers.


# REMAINING TYPES 

- Objects of Japanese Verbs と https://www.wasabi-jpn.com/japanese-grammar/subjects-of-japanese-verbs-with-the-particles-wa-and-ga/ 
- Different verb exceptions.
- Different に, を and 
- Parallel Markers: と, や, か, and とか
- Nominalizers: こと and の
- Adverbs and Adjectives
- Transitive and Intransitive Verbs
- Adjectives

- Where/What/Who/


# TODO
- Unit Testing
- Implement Stripe
- 0Auth setup (proper)
- Markdown-to-jsx
- SSR and code splitting
- Link hover states with the actual words.
- Figure out appropiate words to use with different sentence types. 
- Break down sentence structure even more so that it's ever-more accurate. 
- Amazon SES
- Save the Sentence Stats transformations inside the apollo cache, rather than dynamically generate it. 
- Consider separate sidebar and lesson titles. 
- Japanese verb conjugation tester. (Basically, you are given an english word and you need to conjugate it into Japanese.)

- Interactive Kanji Chart 
- Interactive Katakana Chart

You could think of it as a 'did do' relationship. 


https://stackoverflow.com/questions/31798849/how-to-serve-static-files-with-nginx-inside-of-a-docker-container
https://stackoverflow.com/questions/39202964/how-to-reach-another-container-from-a-dockerised-nginx
https://stackoverflow.com/questions/29905953/how-to-correctly-link-php-fpm-and-nginx-docker-containers
https://www.peterbe.com/plog/how-to-create-react-app-with-docker
https://mherman.org/blog/dockerizing-a-react-app/

https://docs.docker.com/compose/gettingstarted/#step-2-create-a-dockerfile

https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

$ docker build -t dottjt/watashi-client-nginx .

- Word options
- Sentence options :)

The ultimate way to learn Kim Tae. 

I think what I need is a subject as part of the predicate as well. So subject, then verb. 

----------
Meet grammar boss.
The most advanced Japananese grammar engine ever built. 

Here's what we've done. 

Using the excellent grammar material at Wasabi JPN and Kim Tae.

I have devised incredibly intelligence grammar exercises to help you learn japanese grammar. 

----------

This project is in it's easy stages, so this reade me is gonna be a mess.

What is the purpose of this project?
To make money and most importantly, to make something that I'm proud of. 

As a result, the code base is abolutely MINT. 

Auth0

Highlight the areas which are polite, negative in a sentence when hovering over the hints. 

Auto import node modules.

meta: {
  verbType?: string 
};

- vscode helpers for things like styled components etc.

- prettify to project. 
- router 5

- react-onclickoutside
- tslint 
- lint-staged
- jest unit tests
- jss
- typeorm
- feathersjs. 
- Docker 

ts jest

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} md={3}>
            Hello, world!
          </Col>
        </Row>
      </Grid>
    );
  }
}


"semantic-ui-react": "^0.82.5",
"semantic-ui-react-single": "^0.1.2",


Possibile optimisations: Limit constant length. May be unnecessary. 


NOTE: Remove politeness from determineNounEndingEnglish switch statement because it is redundant.





Steps:
- adding normalize code in <index class="html"></index>



The homepage features a modal with a list on the left side and the translation on the right side.
Demonstrating how it can create random sentences on the fly. 

Return each word as an array. That way you can keep the formatting consistent. 


- Predefined lesson constants
