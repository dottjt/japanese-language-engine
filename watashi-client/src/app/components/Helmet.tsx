import * as React from 'react';
import { Helmet } from "react-helmet";
import { WEBSITE_NAME } from '../../util/constants/generalConstants';

class HelmetComponent extends React.Component<{ title: string, description: string }, {}> {
  public render() {
    return (
      <Helmet>
        <meta charSet="utf-8"/>
        <title>{WEBSITE_NAME} | {this.props.title}</title>
        <meta name="description" content={this.props.description}/>

        <meta property="og:title" content={this.props.title}/>
        <meta name="twitter:title" content={this.props.title}/>    
        <meta property="og:description" content="@meta_description"/>   
        <meta name="twitter:description" content="@meta_description"/>    
        <meta name="twitter:image:alt" content={this.props.title}/>
        <meta property="og:image" content="@product.featured_image"/>
        <meta name="twitter:image" content="@product.featured_image"/>

        <meta name="author" content={WEBSITE_NAME}/>
        <meta name="keywords" content='Japanese Language Engine'/>

          {/* NOTE: MUST GET URL FROM THE ROUTER< IT WILL MAKE THINGS A  LOT EASIER */}
        <meta property="og:url" content='some url'/>
        <meta property="og:site_name" content="Application.get_env(:ac, :website_description)"/>

        <meta name="twitter:site" content="Application.get_env(:ac, :website_twitter)"/>
        <meta name="twitter:creator" content="Application.get_env(:ac, :website_twitter)"/>
        <meta name="twitter:card" content="summary_large_image"/>

        {/* <meta name="msapplication-config" content="/images/<%= Application.get_env(:ac, :website_acronym)%>/favicon/browserconfig.xml">
        <link rel="shortcut icon" href="/images/<%= Application.get_env(:ac, :website_acronym)%>/favicon/favicon.ico">

        <link rel="apple-touch-icon" sizes="180x180" href="/images/<%= Application.get_env(:ac, :website_acronym)%>/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/images/<%= Application.get_env(:ac, :website_acronym)%>/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/images/<%= Application.get_env(:ac, :website_acronym)%>/favicon/favicon-16x16.png">
        <link rel="manifest" href="/images/<%= Application.get_env(:ac, :website_acronym)%>/favicon/manifest.json">
        <link rel="mask-icon" href="/images/<%= Application.get_env(:ac, :website_acronym)%>/favicon/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="apple-mobile-web-app-title" content="<%= Application.get_env(:ac, :website_name)%>">
        <meta name="application-name" content="<%= Application.get_env(:ac, :website_name)%>">
        <meta name="theme-color" content="#ffffff"> */}
      </Helmet>
    );
  };
};

export default HelmetComponent;
