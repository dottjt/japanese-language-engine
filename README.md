Grammar Sensei

# Tech

Frontend: Create-React-App, Typescript, React, apollo-boost, react-router5
CSS: Styled-Components, Rebass
Testing: Jest
Backend: Node.js, feathersjs, GraphQL, apollo-server, typeorm
Database: Postgres
Authentication: Auth0
CI: Buildkite
Server: AWS Lightsail
Infrastructure: Docker, AWS

yarn add @types/auth0-js @types/graphql @types/rebass @types/styled-components
yarn add graphql router5 react-router5 react-apollo apollo-boost auth0-js rebass styled-components rewire
yarn add node-sass sass-loader react-flexbox-grid

# TODO
- Unit Testing
- 


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





$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```