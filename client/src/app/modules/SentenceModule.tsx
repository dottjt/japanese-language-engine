import * as React from 'react'

import { Card, Flex } from 'rebass';
import { FlexColumn } from '../atoms/Layout';
import { Button } from '../atoms/Button';
import { Text } from '../atoms/Text';

import {
  convertPolitenessIntoValue,
  convertPolarityIntoValue,
} from '../../util/functions';

// class SentenceOptions extends React.Component<{}, {}> {
//   public render() {
//     return (
//       <Card>
//         <Flex>
//           <Button
//             onClick={() => this.toggleShowSentenceHints(client, data.sentenceDisplayOptions.showSentenceHints)}  
//           >
//             toggle show sentence hints
//           </Button>
//           <Button>
//             reset sentence examples
//           </Button>
//         </Flex>
//       </Card>
//     );
//   }

//   private toggleShowSentenceHints = (client: any, value: boolean): void =>
//     client.writeData({
//       data: {
//         sentenceDisplayOptions: { showSentenceHints: value!, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }
//       }
//     });
// };


class SentenceHints extends React.Component<PropTypes.ISentenceHintsProps, {}> {
  public render() {
    const { politeness, polarity, /* primaryType, variation */ } = this.props.options;
    return (
      <Card>
        {this.props.sentenceDisplayOptions.showSentenceHints &&
          <Flex>
            <Text>
              {convertPolitenessIntoValue(politeness)}
            </Text>
            <Text>
              {convertPolarityIntoValue(polarity)}
            </Text>
          </Flex>
        }
      </Card>    
    );
  }
};

class Sentences extends React.Component<PropTypes.ISentencesProps, {}> {
  public render() {    
    return (
      <FlexColumn>
        <SentenceHints
          sentenceDisplayOptions={this.props.sentenceDisplayOptions}
          options={this.props.options}
        />
        <Flex>
          {this.props.englishSentence}
        </Flex>
        <Flex>
          {this.props.japaneseSentence}
        </Flex>
      </FlexColumn>
    );
  };
};

export default Sentences;
