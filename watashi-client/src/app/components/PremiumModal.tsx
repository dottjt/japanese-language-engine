import * as React from 'react';
// import styled from 'styled-components';

import { Flex } from '../atoms/LayoutStyles';

class PremiumModal extends React.Component<{}, { dropdownOpenState: boolean }> {

  public render() {
    return (
      <Flex 
        css={{
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: '100%',
          width: '260px',
          minWidth: '260px',        
        }}
        >

      </Flex>
    );
  };

  
};


export default PremiumModal;
