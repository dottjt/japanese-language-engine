import * as React from 'react';
import Markdown from 'markdown-to-jsx';

import { FlexColumn } from '../atoms/LayoutStyles';

import example from '../../blog/example.md';

class Blog extends React.Component {
  public render() {
    return (
      <FlexColumn>
        <Markdown>{example}</Markdown>
      </FlexColumn>
    );
  }
}

export default Blog;
