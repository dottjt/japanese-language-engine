import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
import { Link } from '../atoms/ClickableStyles';

class Resources extends React.Component<PropTypes.IResourcesProps, {}> {
  public render() {
    const { resources } = this.props;
    return (
      <FlexColumn>
        {resources.map((resource, index) => (
          <Link key={index} href={resource.url}>
            {resource.url}
          </Link>
        ))}
      </FlexColumn>
    );
  };
};

export default Resources;
