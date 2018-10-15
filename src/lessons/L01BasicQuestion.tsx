
import * as React from 'react';
import { Query } from 'react-apollo';

import { GET_ALL_WORDS_AND_OPTIONS } from '../graphql/queries/combined';

import EnglishSentence from '../component/Sentence/EnglishSentence';
import JapaneseSentence from '../component/Sentence/JapaneseSentence';
import Options from '../component/Options/Options';

import { 
  filterRandomCorrectWordData,
} from '../util/functions';

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
            <div className="Questions">
              <Options 
                options={data.options} 
                client={client}
              />
              <EnglishSentence 
                options={data.options}
                sentence={englishSentence}
              />
              <JapaneseSentence
                options={data.options}
                sentence={japaneseSentence}
              />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default L01BasicQuestion;
