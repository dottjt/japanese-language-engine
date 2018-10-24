import * as React from 'react';
import Markdown from 'markdown-to-jsx';

import { PageWrapper } from '../atoms/LayoutStyles';

import example from '../../blog/example.md';

class Blog extends React.Component {
  public render() {
    return (
      <PageWrapper>
        <Markdown>{example}</Markdown>
      </PageWrapper>
    );
  }
}

export default Blog;
