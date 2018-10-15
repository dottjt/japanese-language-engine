import * as React from 'react';

import { 
    QUESTION_VARIATION_NEGATIVE,
    QUESTION_VARIATION_POSITIVE,
        
    POLITENESS_TYPE_CASUAL,
    POLITENESS_TYPE_FORMAL,

  __TYPENAME_OPTIONS,
 } from '../../util/constants';

import Buttons from './Options/Buttons';

import { IOptionsProps } from 'propTypes';

class Options extends React.Component<IOptionsProps, {}> {

  public render() {
    return (
      <div className='options'>
        <Buttons
          title={'Sentence Politeness'}
          values={[POLITENESS_TYPE_CASUAL, POLITENESS_TYPE_FORMAL]}
          onClickCallback={this.sentencePolitenessCallback}
        />
        <Buttons
          title={'Question Variation'}
          values={[QUESTION_VARIATION_POSITIVE, QUESTION_VARIATION_NEGATIVE]}
          onClickCallback={this.sentenceVariationCallback}
        />
      </div>
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
