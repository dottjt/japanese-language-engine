
import * as React from 'react';
import { Query } from 'react-apollo';

import { GET_ALL_WORDS_AND_OPTIONS } from '../../graphql/queries/combined';

import Sentence from '../component/Sentence';
import Options from '../component/Options';

import { 
  filterRandomCorrectWordData,
} from '../../util/functions';

class L01BasicQuestion extends React.Component<{}, {}> {
  public render() {
    return (
      <Query query={GET_ALL_WORDS_AND_OPTIONS}>
        {({ data, client }) => {
          const {
            englishSentence, 
            japaneseSentence, 
          } = filterRandomCorrectWordData(data.options, data.nouns);

          return (
            <div className='lessons'>
              <div className='lessons__options'>
                <Options 
                  options={data.options} 
                  client={client}
                />
              </div>
              <div className='lessons__sentences'>
                <div className='sentences'>
                  <Sentence 
                    options={data.options}
                    sentence={englishSentence}
                  />
                  <Sentence
                    options={data.options}
                    sentence={japaneseSentence}
                  />
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default L01BasicQuestion;
