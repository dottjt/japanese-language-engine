import * as React from 'react'

import { Sentence, Phrase, EnglishWord } from '../../atoms/SentenceStyles';

import {
  createError,
  // capitalise,
  startOfSentence,
  endOfSentence,
  capitalise,
  tagArray,
} from '../../../util/functions';

import {
  HAS_QUESTION,

  CONJUGATION_TYPE_NOUN_ENGLISH,
  CONJUGATION_TYPE_VERB_ENGLISH,

  VERB_ENGLISH,
  // VERB_ENGLISH_CONJUGATION,
  NOUN_ENGLISH,
  // NOUN_ENGLISH_CONJUGATION,
  NOUN_ENGLISH_POLARITY,
  // NOUN_ENGLISH_INDEFINITE_ARTICLE,
} from '../../../util/constants/optionsConstants';

const wordOptionsEnglish = (wordArrayElement: Util.WordArrayElement, englishSentenceLength: number, options: Util.Options, index: number, phraseLength: number, phraseIndex: number): string => {

  if(startOfSentence(englishSentenceLength, index) && startOfSentence(phraseLength, phraseIndex)) {
    return capitalise(wordArrayElement.word);
  };

  if (endOfSentence(englishSentenceLength, index) && endOfSentence(phraseLength, phraseIndex)) {
    return options.question === HAS_QUESTION ? `${wordArrayElement.word}?` : `${wordArrayElement.word}.`
  };

  return wordArrayElement.word;
};

const phraseOptionsEnglish = (phraseArray: Util.WordArrayElement[], options: Util.Options, phraseIndex: number): Util.WordArrayElement[] => {
  const filteredArray: Util.WordArrayElement[] = phraseArray.filter((wordArrayElement: Util.WordArrayElement): boolean => wordArrayElement.word !== '');
  return filteredArray;
};

const sentenceOptionsEnglish = (sentenceArray: Util.ConjugatedEnglishWord[], options: Util.Options): Util.ConjugatedEnglishWord[] => {
  return sentenceArray;
};

const convertSentenceStatsEnglish = (sentenceStats: Util.SentenceStats, exerciseIndex: number, tag: string): string => {
  // console.log(sentenceStats.selectedExerciseNumber, exerciseIndex, tag);
  if (sentenceStats && exerciseIndex === sentenceStats.selectedExerciseNumber) {
    if (sentenceStats.polarityHover && tag === NOUN_ENGLISH_POLARITY) {
      return 'red';
    }

    // switch(`{tag}`) {
    //   case VERB_ENGLISH: return 'blue';
    //   case VERB_ENGLISH_CONJUGATION: return 'green';
    //   case NOUN_ENGLISH: return 'red';
    //   case NOUN_ENGLISH_CONJUGATION: return 'orange';
    //   case NOUN_ENGLISH_POLARITY: return 'purple';
    //   case NOUN_ENGLISH_INDEFINITE_ARTICLE: return 'yellow';
    // }  
  }
  return '';  
};

class SentenceEnglish extends React.Component<PropTypes.IEnglishSentenceProps, {}> {
  public render() {
    const { /* sentenceStats,*/ sentence, options, exerciseIndex } = this.props;
    const phraseArrayComplete = sentenceOptionsEnglish(sentence, options);

    return (
      <Sentence>
          {phraseArrayComplete.map((phraseArray, phraseIndex: number) => {
            const nounPhrase = phraseArray as Util.ConjugatedEnglishWord;
            const verbPhrase = phraseArray as Util.ConjugatedEnglishWord;

            switch(phraseArray.type) {
              case CONJUGATION_TYPE_NOUN_ENGLISH:

                const tense = tagArray(nounPhrase.tense.wordArray, nounPhrase.tense.wordType);
                const polarity = tagArray(nounPhrase.polarity.wordArray, nounPhrase.polarity.wordType);
                const indefiniteArticle = tagArray(nounPhrase.indefiniteArticle.wordArray, nounPhrase.indefiniteArticle.wordType);
                const noun = tagArray([nounPhrase.word.english.present], NOUN_ENGLISH);

                const nounPhraseArray = tense.concat(polarity).concat(indefiniteArticle).concat(noun);
                const nounPhraseArrayComplete = phraseOptionsEnglish(nounPhraseArray, options, phraseIndex);
                // tense, polarity, indefiniteArticle, noun

                return (
                  <Phrase key={phraseIndex}>
                    {nounPhraseArrayComplete.map((word: Util.WordArrayElement, nounIndex: number) => {
                      const hoverColour = convertSentenceStatsEnglish(this.props.sentenceStats, exerciseIndex, word.tag);
                      return (
                        <EnglishWord hoverColour={hoverColour} key={nounIndex}>{wordOptionsEnglish(word, nounPhraseArrayComplete.length, options, nounIndex, phraseArrayComplete.length, phraseIndex)}</EnglishWord>
                      );
                    })}
                  </Phrase>
                );
              
              case CONJUGATION_TYPE_VERB_ENGLISH: 

                const verbPolarity = tagArray(verbPhrase.polarity.wordArray, verbPhrase.polarity.wordType);
                const verb = tagArray([verbPhrase.word.english.present], VERB_ENGLISH);

                const verbPhraseArray = verbPolarity.concat(verb);
                const verbPhraseArrayComplete = phraseOptionsEnglish(verbPhraseArray, options, phraseIndex);
                // verbPolarity
                
                return (
                  <Phrase key={phraseIndex}>
                    {verbPhraseArrayComplete.map((word: Util.WordArrayElement, verbIndex: number) => {
                      const hoverColour = convertSentenceStatsEnglish(this.props.sentenceStats, exerciseIndex, word.tag);
                      return (
                        <EnglishWord hoverColour={hoverColour} key={verbIndex}>{wordOptionsEnglish(word, verbPhraseArrayComplete.length, options, verbIndex, phraseArrayComplete.length, phraseIndex)}</EnglishWord>
                      )
                    })}
                  </Phrase>
                );
            }
            throw new Error(createError('SentenceModule.tsx', 'SentenceEnglish', `${phraseArray.type} does not exist.`));
          })
          }
      </Sentence>
    );
  };
};

export default SentenceEnglish;
