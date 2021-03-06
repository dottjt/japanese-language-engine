/// <reference types="react-scripts" />

declare module 'rebass';
declare module 'system-components';
declare module 'styled-system';


declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}