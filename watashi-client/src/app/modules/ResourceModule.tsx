import * as React from 'react';
// import MicrolinkCard from 'react-microlink';
import { ExternalLink } from '../atoms/ClickableStyles';
import { Flex } from '../atoms/LayoutStyles';

class Resources extends React.Component<PropTypes.IResourcesProps, {}> {
  public render() {
    const { resources } = this.props;
    return (
      <React.Fragment>
        {resources.map((resource: Util.Resource, index: number): any => (
          <Flex mb={2}>
            {/* <MicrolinkCard 
              key={index}
              // screenshot={true}
              prerender={true}
              // loading={true}
              url={resource.url} 
              target='_blank' 
            /> */}
            <ExternalLink key={index} href={resource.url}>
              {resource.url}
            </ExternalLink>
          </Flex>
        ))}
      </React.Fragment>
    );
  };
};

export default Resources;
