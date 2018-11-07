## Development Build Steps 

First you will need to install node.js on your local machine. It is what allows you to use Javascript as a server-side language on your computer.

I also recommend installing yarn `npm i -g yarn` as a replacement for npm, which is what allows us to download other Javascript libraries, as well as run the project. 

Once that is complete, in the `watashi-client` folder of the project run:

- yarn (installs all required dependencies. `npm install` will also work)
- yarn start (this will start the project on http://localhost:3000. `npm start` will also work)

## Production Build Steps

To build a production version of this project, we use a library called `react-snap` which essentially compiles our fully Javascript React application into static HTML, CSS and JS files. Neat! 

To create these files, go into `/watashi-client` and run:

- yarn build

The static files should then be output in `/watashi-client/build`

Personally I use docker on a VPS, along with Travis CI in order to deploy this project to https://watashiengine.com, however there are a million different ways to serve static files, and this is certainly not the easiest (although it's super scalable).


## Build from scratch 

- yarn add create-react-app
- create-react-app watashi-client 

- yarn add @types/react @types/react-dom @types/auth0-js @types/graphql @types/rebass @types/styled-components @types/react-helmet 
- yarn add typescript graphql router5 react-router5 react-apollo apollo-cache-inmemory apollo-client apollo-link-http apollo-link-state apollo-link auth0-js react-app-rewired react-helmet @loadable/component react-markdown rebass styled-components system-components 
- yarn add --dev react-app-rewired react-app-rewire-styled-components react-snap react babel-plugin-styled-components typescript-plugin-styled-components
