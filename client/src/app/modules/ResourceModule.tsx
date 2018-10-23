import * as React from 'react';

import { FlexColumn } from '../atoms/Layout';
import { Link } from '../atoms/Clickables';

class Resources extends React.Component<PropTypes.IResourcesProps, {}> {
  public render() {
    return (
      <FlexColumn>
        {this.props.resources.map((resource, index) => (
          <Link key={index} href={resource.url}>
            {resource.url}
          </Link>
        ))}
      </FlexColumn>
    );
  };
};

export default Resources;
