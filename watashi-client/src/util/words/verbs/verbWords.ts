import {
  PRIMARY_TYPE_VERB,
  CATEGORY_FOOD,
  CATEGORY_DRINK,
  CATEGORY_HUMAN_ACTION,

  SENTENCE_TYPE_VERB_TYPE_RU,
  // SENTENCE_TYPE_VERB_TYPE_U,

  // DIRECTION_VERB,
} from '../../constants/wordConstants';

import { createVerbWord } from '../utilWord';

export const wordEat = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU, 
  verbCategory: [ CATEGORY_FOOD, CATEGORY_HUMAN_ACTION ], 
  kanji: '食べる',
  inifinitive: 'hack',
  presentTense: 'eat',
  presentParticiple: '',
  simplePast: 'ate',
  pastParticiple: '',
});


// "eat"
// "cry"


const verbTenseConjugation = () => {

const subVerb = {

  simplePastContinuous: "was" + verbPresentParticiple,
  simplePastConditional: ,
  
  perfectPastContinuous: ,
  perfectPastConditional: ,
  perfectPresentContinuous: ,

  simpleFuture : "will" + verb.Infinitive,
  perfectFuture: 
};


[
  {
    "hack": {
      "verb": {
        "Infinitive": "to hack",
        "Present Participle": "hacking",
        "Past Participle": "hacked",
        "Simple Future": "will" + "hack",
        
        // Simple Past Conditional - 'have' ('did' if he/she/it) + Past Participle
        // Simple Present Continuous - Variable, but I think doable. 

        // Perfect Past Continuous - 'had been' - Present Participle
        // Perfect Past Conditional - 'would have' (if he/she/it, 'has') + Past Participle
        // Perfect Present Continuous - 'have' + Past Participle // unsure (unless if he/she/it, then 'has') 
        // Perfect Future - 'will' + Past Participle

        "Simple Past Continuous": {
          "single": {
            "I": {
              "prefix": "was",
              "verb": "hacking"
            },
            "You": {
              "prefix": "have", // "were"
              "verb": "hacked" 
            },
            "He/She/It": {
              "prefix": "was",
              "verb": "hacking"
            }
          },
          "plural": {
            "We": {
              "prefix": "were",
              "verb": "hacking"
            },
            "You": {
              "prefix": "were",
              "verb": "hacking"
            },
            "They/Those": {
              "prefix": "were",
              "verb": "hacking"
            }
          }
        },
        // "Simple Past Conditional": {
        //   "single": {
        //     "I": {
        //       "prefix": "have",
        //       "verb": "hacked"
        //     },
        //     "You": {
        //       "prefix": "have",
        //       "verb": "hacked"
        //     },
        //     "He/She/It": {
        //       "prefix": "have", // "did"?
        //       "verb": "hacked"
        //     }
        //   },
        //   "plural": {
        //     "We": {
        //       "prefix": "have",
        //       "verb": "hacked"
        //     },
        //     "You": {
        //       "prefix": "have",
        //       "verb": "hacked"
        //     },
        //     "They/Those": {
        //       "prefix": "have",
        //       "verb": "hacked"
        //     }
        //   }
        // },
        "Perfect Past Conditional": {
          "single": {
            "I": {
              "prefix": "would have",
              "verb": "hacked"
            },
            "You": {
              "prefix": "would have",
              "verb": "hacked"
            },
            "He/She/It": {
              "prefix": "has",
              "verb": "hacked"
            }
          },
          "plural": {
            "We": {
              "prefix": "would have",
              "verb": "hacked"
            },
            "You": {
              "prefix": "would have",
              "verb": "hacked"
            },
            "They/Those": {
              "prefix": "would have",
              "verb": "hacked"
            }
          }
        },
        // "Perfect Past Continuous": {
        //   "single": {
        //     "I": {
        //       "prefix": "had been",
        //       "verb": "hacking"
        //     },
        //     "You": {
        //       "prefix": "had been",
        //       "verb": "hacking"
        //     },
        //     "He/She/It": {
        //       "prefix": "had been",
        //       "verb": "hacking"
        //     }
        //   },
        //   "plural": {
        //     "We": {
        //       "prefix": "had been",
        //       "verb": "hacking"
        //     },
        //     "You": {
        //       "prefix": "had been",
        //       "verb": "hacking"
        //     },
        //     "They/Those": {
        //       "prefix": "had been",
        //       "verb": "hacking"
        //     }
        //   }
        // },


        // "Infinitive": "to hack",
        // "Present Participle": "hacking",
        // "Past Participle": "hacked",


        "Simple Present Continuous": {
          "single": {
            "I": {
              "prefix": "am",
              "verb": "hacking" // infinitive
            },
            "You": {
              "prefix": "would",
              "verb": "hack" // 
            },
            "He/She/It": {
              "prefix": "is",
              "verb": "hacks"
            }
          },
          "plural": {
            "We": {
              "prefix": "are",
              "verb": "hacking"
            },
            "You": {
              "prefix": "are",
              "verb": "hacking"
            },
            "They/Those": {
              "prefix": "are",
              "verb": "hacking"
            }
          }
        },
        // "Perfect Present Continuous": {
        //   "single": { // eaten, slept, done, smacked, pretended, hoped, gathered, sought
        //     "I": {
        //       "prefix": "have", 
        //       "verb": "hacked" // past participle.
        //     },
        //     "You": {
        //       "prefix": "have",
        //       "verb": "hacked"
        //     },
        //     "He/She/It": {
        //       "prefix": "have", // has 
        //       "verb": "hacked"
        //     }
        //   },
        //   "plural": {
        //     "We": {
        //       "prefix": "have",
        //       "verb": "hacked"
        //     },
        //     "You": {
        //       "prefix": "have",
        //       "verb": "hacked"
        //     },
        //     "They/Those": {
        //       "prefix": "have",
        //       "verb": "hacked"
        //     }
        //   }
        // },
        "Simple Future": { // ALWAYS THE SAME
          "single": {
            "I": { // ALWAYS THE SAME.
              "prefix": "will", // eat, sleep, do, smack, pretend, hope, gather.
              "verb": "hack" // default
            },
            "You": { // ALWAYS THE SAME.
              "prefix": "will",
              "verb": "hack"
            },
            "He/She/It": { // ALWAYS THE SAME.
              "prefix": "will",
              "verb": "hack"
            }
          },
          "plural": {
            "We": { // ALWAYS THE SAME
              "prefix": "will",
              "verb": "hack"
            },
            "You": { // ALWAYS THE SAME
              "prefix": "will",
              "verb": "hack"
            },
            "They/Those": { // ALWAYS THE SAME
              "prefix": "will",
              "verb": "hack"
            }
          }
        },
        // "Perfect Future": {
        //   "single": {
        //     "I": { // ALWAYS THE SAME.
        //       "prefix": "will have", // eaten, slept, done, smacked, pretended, hoped, gathered.
        //       "verb": "hacked" // Past Participle
        //     },
        //     "You": { // ALWAYS THE SAME.
        //       "prefix": "will have",
        //       "verb": "hacked"
        //     },
        //     "He/She/It": { // ALWAYS THE SAME.
        //       "prefix": "will have",
        //       "verb": "hacked"
        //     }
        //   },
        //   "plural": {
        //     "We": { // ALWAYS THE SAME.
        //       "prefix": "will have",
        //       "verb": "hacked"
        //     },
        //     "You": { // ALWAYS THE SAME.
        //       "prefix": "will have",
        //       "verb": "hacked"
        //     },
        //     "They/Those": { // ALWAYS THE SAME.
        //       "prefix": "will have",
        //       "verb": "hacked"
        //     }
        //   }
        // }
      }
    }
  }
]




export const wordSleep = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_HUMAN_ACTION ],
  kanji: '寝る',
  presentTense: 'sleep',
  presentParticiple: '',
  simplePast: 'slept',
  pastParticiple: '',
});

export const wordDrink = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_DRINK, CATEGORY_HUMAN_ACTION ],
  kanji: '飲む',
  presentTense: 'drink',
  presentParticiple: '',
  simplePast: 'drank',
  pastParticiple: '',
});

export const wordDrink = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_DRINK, CATEGORY_HUMAN_ACTION ],
  kanji: '飲む',
  presentTense: 'drink',
  presentParticiple: '',
  simplePast: 'drank',
  pastParticiple: '',
});


export const wordSee = createVerbWord({
  primaryType: PRIMARY_TYPE_VERB,
  verbType: SENTENCE_TYPE_VERB_TYPE_RU,
  nounType: 'TODO',
  nounPluralType: 'TODO',
  // verbPrepositionType: DIRECTION_VERB,
  category: [ CATEGORY_HUMAN_ACTION ],
  kanji: '見る',
  hiragana: 'みる',
  furigana: 'miru',
  presentTense: 'see',
  // presentParticiple
  simplePast: 'saw',
  // pastParticiple
});

// you have transitive, and intransitive.

// export const wordDo = {
//   japanese: { 
//     kanji: 'する',
//     // hiragana: 'する',
//     // furigana: 'suru',
//     __typename: __TYPENAME_JAPANESE,
//   },
//   english: {
//     presentTense: 'do',
//     simplePast: 'did',
//     __typename: __TYPENAME_ENGLISH,
//   },
//   primaryType: PRIMARY_TYPE_VERB,
//   category: [ CATEGORY_FOOD ],
//   meta: {
//     verbType: SENTENCE_TYPE_VERB_TYPE_RU,
// verbPrepositionType: '',
//     __typename: __TYPENAME_META,
//   },
//   __typename: __TYPENAME_WORD,
// };

// export const wordCome = {
//   japanese: { 
//     kanji: '来る',
//     // hiragana: 'くる',
//     // furigana: 'suru',
//     __typename: __TYPENAME_JAPANESE,
//   },
//   english: {
//     presentTense: 'come',
//     simplePast: 'came',
//     __typename: __TYPENAME_ENGLISH,
//   },
//   primaryType: PRIMARY_TYPE_VERB,
//   category: [ CATEGORY_FOOD ],
//   meta: {
//     verbType: SENTENCE_TYPE_VERB_TYPE_RU,
// verbPrepositionType: '',
//     __typename: __TYPENAME_META,
//   },
//   __typename: __TYPENAME_WORD,
// };



const verbArray = [
  wordEat,
  wordDrink,
  wordSleep,
  wordSee,
  // wordLook,
  // wordDo,
];

export default verbArray;