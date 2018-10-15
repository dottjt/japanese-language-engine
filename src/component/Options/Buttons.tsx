import * as React from 'react';

import { capitalizeFirstLetter } from '../../util/functions';

import { IButtonsProps } from 'propTypes';

interface IValues {
  value: string,
  selected: boolean,
};

const convertValuesIntoButtonArray = (values: string[]): IValues[] => 
  values.map((value, index) => {
    if (index === 0) {
      return {
        value,
        selected: true,
      }
    }
    return {
      value,
      selected: false,
    }
  });

class QuestionVariationButton extends React.Component<IButtonsProps, {}> {

  public render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        {convertValuesIntoButtonArray(this.props.values).map(value => (
            <button className={`options__buton options__button-${value.selected}`} value={value.value} onClick={this.handleSentenceVariationSelectChange}>{capitalizeFirstLetter(value.value)}</button>
          ))}
      </div>
    );
  }

  private handleSentenceVariationSelectChange = (event: React.FormEvent<HTMLButtonElement>): void => {
    this.props.onClickCallback(event.currentTarget.value);
  }
}

export default QuestionVariationButton;
