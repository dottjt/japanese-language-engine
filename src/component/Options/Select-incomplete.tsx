import * as React from 'react';

import { 
  __TYPENAME_OPTIONS,
  
  QUESTION_VARIATION_NEGATIVE,
  QUESTION_VARIATION_POSITIVE,
 } from '../../util/constants';

import { capitalizeFirstLetter } from '../../util/functions';

import { IOptionsProps } from 'propTypes';

class QuestionVariationSelect extends React.Component<IOptionsProps, {}> {

  public render() {
    return (
      <div>
        <h3>Question variation</h3>
        <select onChange={this.handleSentenceVariationSelectChange} value={this.props.options.sentenceVariation}>
          <option value={QUESTION_VARIATION_POSITIVE}>{capitalizeFirstLetter(QUESTION_VARIATION_POSITIVE)}</option>
          <option value={QUESTION_VARIATION_NEGATIVE}>{capitalizeFirstLetter(QUESTION_VARIATION_NEGATIVE)}</option>
        </select>
      </div>
    )
  }

  private handleSentenceVariationSelectChange = (event: React.FormEvent<HTMLSelectElement>): void => {
    this.props.client.writeData({ data: { options: { sentenceVariation: event.currentTarget.value, __typename: __TYPENAME_OPTIONS } } });
  }
}

export default QuestionVariationSelect;
