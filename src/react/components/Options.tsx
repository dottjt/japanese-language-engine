import * as React from 'react';
import { Flex } from 'rebass';

import {
  VARIATION_NEGATIVE,
  VARIATION_POSITIVE,

  POLITENESS_TYPE_CASUAL,
  POLITENESS_TYPE_FORMAL,

  __TYPENAME_OPTIONS,
} from '../../util/constants';

import Buttons from '../atoms/Buttons';

class Options extends React.Component<PropTypes.IOptionsProps, {}> {

  public render() {
    return (
      <Flex flexDirection='column'>
        <Buttons
          title={'Sentence Politeness'}
          values={[POLITENESS_TYPE_CASUAL, POLITENESS_TYPE_FORMAL]}
          onClickCallback={this.sentencePolitenessCallback}
        />
        <Buttons
          title={'Question Variation'}
          values={[VARIATION_POSITIVE, VARIATION_NEGATIVE]}
          onClickCallback={this.sentenceVariationCallback}
        />
      </Flex>
    )
  };

  private sentencePolitenessCallback = (value: string): void => (
    this.props.client.writeData({ data: { options: { sentencePoliteness: value, __typename: __TYPENAME_OPTIONS } } })
  );

  private sentenceVariationCallback = (value: string): void => {
    this.props.client.writeData({ data: { options: { sentenceVariation: value, __typename: __TYPENAME_OPTIONS } } });
  }
};

export default Options;
