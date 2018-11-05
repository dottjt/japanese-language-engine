import * as React from 'react';
import { Query } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { getExercisesApollo } from '../util/functions';

import GET_EVERYTHING from '../graphql/queries/getEverything'

import { Flex, FlexColumn } from './atoms/LayoutStyles';

// import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import './reset.css';

class App extends React.Component<PropTypes.IAppProps, {}> {

  public render() {
    const { auth, client, route } = this.props;
    
    getExercisesApollo(client, route.path, 10);

    return (
      <FlexColumn>
        <AppHelmet/>
        <Query query={GET_EVERYTHING}>
          {({ data, client }) => (
            <React.Fragment>
              {/* <Navbar
                user={data.user}
                auth={auth}/> */}
              <Flex>
                <Sidebar
                  route={route}
                />
                <Main 
                  auth={auth}
                  route={route}
                  client={client}
                  {...data}
                />
              </Flex>
            </React.Fragment>
          )}
        </Query>
      </FlexColumn>
    );
  };
};

const AppHelmet = () => (
  <Helmet>
    <meta charSet="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-127798073-1"></script>
    <script>{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-127798073-1');
    `}
    </script>

    {/* reset.css */}
    <style type='text/css'>{`button,hr,input{overflow:visible}progress,sub,sup{vertical-align:baseline}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{padding:.35em .75em .625em}legend{color:inherit;display:table;max-width:100%;white-space:normal}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}`}</style>
  </Helmet>
);

export default App;
