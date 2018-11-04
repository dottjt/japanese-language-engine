# Introducing the Watashi Engine.

## What is it?

A highly sophisticated Japanese language engine.

## Use cases
- Teachers wanting the ability to easily create grammar exercises for their students.
- Students wanting to study via the isntantaneous composition method.
- Students who benefit from a macro approach towards language.

## Tech
- Frontend: create-react-app, typescript, react, apollo, react-router5
- SSR: react-snap
- CSS: styled-components, styled-system, rebass
- Testing: jest
- Backend: node.js, graphql, graphql-yoga, typeorm
- Database: postgres
- Authentication: auth0
- CI: buildkite
- Infrastructure: terraform, docker, AWS

## MVP REQUIREMENTS
- Docker build
- Implement Stripe
- 0Auth setup (proper) + Users
- Markdown-to-jsx
- SSR
- Amazon SES
- Verb basics
- Conjugation exercises / modules
- Premium permissions on certain features. 
- Profile page
- Will need to reset controlPanelOptions when switch between URL routes, so that exercises are left unhampered. 

## TODO BACKLOG 
- Unit Testing
- Code splitting
- Figure out appropiate words to use with different sentence types.
- Consider separate sidebar and lesson titles.
- Optimise getExercisesApollo     // NOTE: Can probably optimise so it only gets nouns once, although it also may cache the results anyway, so no biggie.
- SidebarItem highlights a specific colour if selected. 

## ADDITIONAL APPS
- Japanese verb conjugation tester. (Basically, you are given an english word and you need to conjugate it into Japanese.)
- Interactive Kanji Chart
- Interactive Katakana Chart

## Blog Ideas

- The perfect Watashi Engine Workout.
- Understanding the technical details behind Watashi Engine.
- What is the instanteous composition method.
- Understanding the instantaeous composition method.

## Build Steps 

- yarn add @types/react @types/react-dom @types/auth0-js @types/graphql @types/rebass @types/styled-components @types/react-helmet 
- yarn add typescript graphql router5 react-router5 react-apollo apollo-cache-inmemory apollo-client apollo-link-http apollo-link-state apollo-link auth0-js react-app-rewired react-helmet @loadable/component react-markdown 
- yarn add react-flexbox-grid rebass styled-components system-components 
- yarn add --dev react-app-rewired react-app-rewire-styled-components react-snap react

- npm install --save-dev babel-plugin-styled-components typescript-plugin-styled-components

## Notes: 

- React Snap has quite particular configurations. 
- Apollo only works with null, not with undefined

### ATTEMPTING
- の possesive
- から and まで
- Sentence endings ね, よ, and よね // put it in the options
- Demonstratives.
- Question Markers.

### REMAINING TYPES
- Objects of Japanese Verbs と https://www.wasabi-jpn.com/japanese-grammar/subjects-of-japanese-verbs-with-the-particles-wa-and-ga/
- Different verb exceptions.
- Different に, を and
- Parallel Markers: と, や, か, and とか
- Nominalizers: こと and の
- Adverbs and Adjectives
- Transitive and Intransitive Verbs
- Adjectives
- Where/What/Who/

### Docker things 

- docker swarm init
- docker stack deploy --compose-file docker-compose.yml haproxy

Docker Swarm - Docker Machine - Docker Engine 

$ docker build -t dottjt/watashi-client-nginx .

### MISC

import React from 'react'; import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends React.Component { render() { return ( Hello, world! ); } }

"semantic-ui-react": "^0.82.5", "semantic-ui-react-single": "^0.1.2",

Possibile optimisations: Limit constant length. May be unnecessary.

http://astronautweb.co/react-static-sites/
https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f