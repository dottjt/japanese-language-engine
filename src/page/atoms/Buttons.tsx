import * as React from 'react';
import { Flex, Heading, Button } from 'rebass';

import {
  capitalise,
  convertValuesIntoButtonArray,
 } from '../../util/functions';

class Buttons extends React.Component<PropTypes.IButtonsProps, {}> {

  public render() {
    return (
      <Flex>
        <Heading>{this.props.title}</Heading>
        {convertValuesIntoButtonArray(this.props.values).map(value => (
          <Button
            key={value.value}
            // onClick={this.handleSentenceVariationSelectChange}
          >
            {capitalise(value.value)}
          </Button>
        ))}
      </Flex>
    );
  };

  // private handleSentenceVariationSelectChange = (event: React.FormEvent<HTMLButtonElement>): void => {
  //   this.props.onClickCallback(event.currentTarget.value);
  // };
};

export default Buttons;
