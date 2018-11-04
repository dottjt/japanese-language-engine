import * as React from 'react';

import { ExternalLink } from '../atoms/ClickableStyles';

class Resources extends React.Component<PropTypes.IResourcesProps, {}> {
  public render() {
    const { resources } = this.props;
    return (
      <React.Fragment>
        {resources.map((resource: Util.Resource, index: number): any => (
          <ExternalLink key={index} href={resource.url}>
            {resource.url}
          </ExternalLink>
        ))}
      </React.Fragment>
    );
  };
};

export default Resources;
