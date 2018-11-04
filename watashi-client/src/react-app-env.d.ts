/// <reference types="react-scripts" />

declare module 'rebass';
declare module 'system-components';
declare module 'styled-system';

// types/mdx.d.ts
declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}