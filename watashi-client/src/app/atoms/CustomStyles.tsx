import { Box } from './LayoutStyles';

import styled from 'styled-components';

export const ToggleVisibility = styled(Box)<any>`
  visibility: ${props => props.togglevisibility};
`;

ToggleVisibility.defaultProps = {
  togglevisibility: 'visible',
};

export const ToggleBackground = styled(Box)<any>`
  background: ${props => props.background};
`;

ToggleBackground.defaultProps = {
  background: 'white',
};

export const TextHover = styled(Box)<any>`
  background: ${props => props.hovercolour};
`;

TextHover.defaultProps = {
  hovercolour: 'initial',
};


export const ToggleSentenceOrder = styled(Box)<any>`
  flex-direction: ${props => props.sentenceorder};
`;

ToggleSentenceOrder.defaultProps = {
  sentenceorder: 'column',
};




// class LogoDropdown extends React.Component<{}, { dropdownOpenState: string }> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       dropdownOpenState: 'hidden',
//     }
//   }

//   public render() {
//     return (
//       <Flex 
//         bg='white'
//         css={{          
//           position: 'relative',
//           alignItems: 'center',
//           justifyContent: 'flex-start',
//           height: '64px',
//           width: '260px',
//           minWidth: '260px', 
//         }}
//         >
//         <ToggleVisibility
//           togglevisibility={this.state.dropdownOpenState}
//           >
//           <Flex
//             ml={7}
//             css={{
//               position: 'absolute',
//               marginTop: '2px',
//               width: '300px',
//               justifyContent: 'space-between',
//               marginRight: '1rem',          
//             }}
//             >
//             <InternalLink onClick={this.clickDropdown} routeName={ROUTE_TITLE.HOME} routeOptions={{reload: true}}>{ROUTE_TITLE.HOME}</InternalLink>
//             <InternalLink onClick={this.clickDropdown} routeName={ROUTE_TITLE.BLOG} routeOptions={{reload: true}}>{ROUTE_TITLE.BLOG}</InternalLink>
//             <InternalLink onClick={this.clickDropdown} routeName={ROUTE_TITLE.GUIDES} routeOptions={{reload: true}}>{ROUTE_TITLE.GUIDES}</InternalLink>
//             <InternalLink onClick={this.clickDropdown} routeName={ROUTE_TITLE.APP} routeOptions={{reload: true}}>{ROUTE_TITLE.APP}</InternalLink>
//             <InternalLink onClick={this.clickDropdown} routeName={ROUTE_TITLE.ABOUT} routeOptions={{reload: true}}>{ROUTE_TITLE.ABOUT}</InternalLink>
//           </Flex>
//         </ToggleVisibility>
//       </Flex>
//     );
//   };

//   private clickDropdown = () => {
//     this.setState({
//       dropdownOpenState: this.state.dropdownOpenState === 'hidden' ? 'visible' : 'hidden',
//     });
//   }
// };

