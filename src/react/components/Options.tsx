import * as React from "react";
import { Flex } from "rebass";

import {
  POLARITY_NEGATIVE,
  POLARITY_POSITIVE,
  POLITENESS_CASUAL,
  POLITENESS_FORMAL,
  __TYPENAME_OPTIONS
} from "../../util/constants";

import Buttons from "../atoms/Buttons";

class Options extends React.Component<PropTypes.IOptionsProps, {}> {
  public render() {
    return (
      <Flex flexDirection="column">
        <Buttons
          title={"Sentence Politeness"}
          values={[POLITENESS_CASUAL, POLITENESS_FORMAL]}
          onClickCallback={this.politenessCallback}
        />
        <Buttons
          title={"Question Variation"}
          values={[POLARITY_POSITIVE, POLARITY_NEGATIVE]}
          onClickCallback={this.variationCallback}
        />
      </Flex>
    );
  }

  private politenessCallback = (value: string): void =>
    this.props.client.writeData({
      data: {
        options: { politeness: value, __typename: __TYPENAME_OPTIONS }
      }
    });

  private variationCallback = (value: string): void => {
    this.props.client.writeData({
      data: {
        options: { variation: value, __typename: __TYPENAME_OPTIONS }
      }
    });
  };
}

export default Options;
