import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
import { ExternalLink } from '../atoms/ClickableStyles';

class Resources extends React.Component<PropTypes.IResourcesProps, {}> {
  public render() {
    const { resources } = this.props;
    return (
      <FlexColumn>
        {resources.map((resource, index) => (
          <ExternalLink key={index} href={resource.url}>
            {resource.url}
          </ExternalLink>
        ))}
      </FlexColumn>
    );
  };
};

export default Resources;
