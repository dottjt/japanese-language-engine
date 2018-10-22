import * as React from 'react'

import { Card, Flex } from 'rebass';
import { FlexColumn } from '../atoms/Layout';
import { SentenceWrapper } from '../atoms/Sentence';
// import { Button } from '../atoms/Button';
import { Text } from '../atoms/Text';

import {
  createError,
  capitalise,
  convertPolitenessIntoValue,
  convertPolarityIntoValue,
} from '../../util/functions';

import {
  CONJUGATION_TYPE_NOUN_ENGLISH,
  CONJUGATION_TYPE_VERB_ENGLISH,
  CONJUGATION_TYPE_NOUN_JAPANESE,
  CONJUGATION_TYPE_VERB_JAPANESE,
} from '../../util/constants/optionsConstants';

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

class EnglishSentence extends React.Component<PropTypes.IEnglishSentenceProps, {}> {
  public render() {
    return (
      <Flex>
        {this.props.sentence.map((element, index) => {
          const nounEnglishElement = element as Util.ConjugatedEnglishNoun;
          const verbEnglishElement = element as Util.ConjugatedEnglishVerb;
          
          console.log(nounEnglishElement);
          switch(element.type) {
            case CONJUGATION_TYPE_NOUN_ENGLISH: 
              return (
                <SentenceWrapper key={index}>
                  {capitalise(nounEnglishElement.nounTense)} {nounEnglishElement.nounPolarity} {nounEnglishElement.nounIndefiniteArticle} {nounEnglishElement.noun.english.present}
                </SentenceWrapper>
              );
            case CONJUGATION_TYPE_VERB_ENGLISH: 
              return (
                <SentenceWrapper key={index}>
                  {capitalise(verbEnglishElement.verbPolarity)} {verbEnglishElement.verb.english.present}
                </SentenceWrapper>
              );
          }
          throw new Error(createError('SentenceModule.tsx', 'EnglishSentence', `${element.type} does not exist.`));
        })
        }
      </Flex>
    );
  };
};

class JapaneseSentence extends React.Component<PropTypes.IJapaneseSentenceProps, {}> {
  public render() {
    return (
      <Flex>
        {this.props.sentence.map((element, index) => {
          const nounJapaneseElement = element as Util.ConjugatedJapaneseNoun;
          const verbJapaneseElement = element as Util.ConjugatedJapaneseVerb;
          switch(element.type) {
            case CONJUGATION_TYPE_NOUN_JAPANESE: 
              return (
                <SentenceWrapper key={index}>
                  {nounJapaneseElement.noun.japanese.kanji}{nounJapaneseElement.nounCategoryEnding}{nounJapaneseElement.nounEnding}{nounJapaneseElement.nounTopicParticle}
                </SentenceWrapper>
              );
            case CONJUGATION_TYPE_VERB_JAPANESE: 
              return (
                <SentenceWrapper key={index}>
                  {verbJapaneseElement.conjugatedVerb}
                </SentenceWrapper>
              );
          }
          throw new Error(createError('SentenceModule.tsx', 'JapaneseSentence', `${element.type} does not exist.`));
        })
        }
      </Flex>
    );
  };
};

class SentenceModule extends React.Component<PropTypes.ISentencesProps, {}> {
  public render() {    
    return (
      <FlexColumn>
        <SentenceHints
          sentenceDisplayOptions={this.props.sentenceDisplayOptions}
          options={this.props.options}
        />
        <EnglishSentence 
          sentence={this.props.englishSentence}
          options={this.props.options}
        />
        <JapaneseSentence 
          sentence={this.props.japaneseSentence}
          options={this.props.options}
        />
      </FlexColumn>
    );
  };
};

export default SentenceModule;
