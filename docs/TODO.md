## TODO PRIORITY 
- Sort out verb conjugation algorithms.
- Sort out verb conjugation words.
- Create Watashi API with basic user information.
- Find way to fetch user data from server.
- Will need to reset controlPanelOptions when switch between URL routes, so that exercises are left unhampered.
- Write Blog Articles.
- TypeORM with graphql - tutorial.
- Numbers module.
- Separate words into different types. Verbs. Nouns. 
- Confirm verb tenses make sense. 
- separate actual watashi engine from website and lesson config and all that which is specific to the engine only. 
- Properly figure out nouns and how to do them nicely. 
- Just put the plural in the actual word. It will make everything so much easier than trying to handle exceptions. Then if you want, build a plural machine. 
- So it seems that a eventPOV cannot be set, it needs to be implied. from the topic. topicPOV can change depending on the topic. 
- Incorporate 'preterite'
- Ability in the front-end to show which words are being used for these exercises.
- Get adjectives for foods. 
- Different types of lessons.

# TODO NICE HAVES 
- Find open contributors. 
  https://github.com/smooth-code/loadable-components // to use with react-snap
- Get a logo/font.
- Sitemap (wait for React-Snap)
- Profile page
- Figure out versioning.
- Implement Stripe
- SidebarItem highlights a specific colour if selected. 
- Optimise getExercisesApollo // NOTE: Can probably optimise so it only gets nouns once, although it also may cache the results anyway, so no biggie.
- An actual API.
- Create Social Media accounts. 
- Actual functioning terraform. 
- Unit Testing
- Code splitting
- Fix up some of the CONSTANT names.
- Consider separate sidebar and lesson titles.
- Figure out community strategy.
- Discourse.
- try/catch around every single call to database .

## ADDITIONAL APPS
- Japanese verb conjugation tester. (Basically, you are given an english word and you need to conjugate it into Japanese.)
- Interactive Kanji Chart
- Interactive Katakana Chart

## Blog Ideas

- Free Exercises List
- Understanding the technical details behind Watashi Engine.
- Understanding the instantaeous composition method.
- How to master N1 JLPT in 2 months
- Understanding the Watashi Engine Docker strategy

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

### MISC

import React from 'react'; import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends React.Component { render() { return ( Hello, world! ); } }

"semantic-ui-react": "^0.82.5", "semantic-ui-react-single": "^0.1.2",

Possibile optimisations: Limit constant length. May be unnecessary.

### GOOD TUTORIALS 

- Setting up SSH with Travis CI oncletom.io/2016/travis-ssh-deploy
- SSL On server https/ssl/how-to-set-up-free-ssl-certificates-from-lets-encrypt-using-docker-and-nginx
  

## LICENCING

There are two kinds of contributor agreements. In a Contributor License Agreement (CLA), the original contributor retains copyright ownership of their contributions, but grants the project a broad set of rights such that the project can incorporate and distribute the contributions as it needs to. In a Copyright Assignment Agreement (CAA), the contributor actually transfers copyright ownership of the contributions to the project, who can then license it however they want since they own it (but a CAA typically grants very broad non-exclusive rights back to the contributor so that they too can use, distribute, sublicense etc their contribution freely).

Will go towards CAA. 

