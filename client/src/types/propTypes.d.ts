declare module PropTypes {

  // Container props
  export interface IAppProps {
    auth: any,
    route: any, // NOTE: Will need to get proper type. 
  }

  export interface ILoginProps {
    auth: any, // NOTE: Will need to get proper type. 
  }

  export interface IExplanationProps {
    explanation: string[]
  }
  
  export interface IMainProps {
    auth: any,
    route: any, // NOTE: Will need to get proper type. 
  }
  
  // Component props 
  export interface IOptionsProps {
    options: Util.Options,
    client: any, // NOTE: Will need to get proper type. 
  }

  export interface IButtonsProps {
    title: string,
    values: string[],
    onClickCallback: (n: string) => void,
  }

  // Lesson props
  export interface ILessonTemplateProps {
    title: string,
    exercises: Util.EnglishJapaneseOptionsSentence[],
    resources: Util.Resource[],
    explanation: string[], 
  }
  
  // Sentence props
  export interface IResourcesProps {
    resources: Util.Resource[],
  }

  export interface ISentencesProps {
    options: Util.Options,
    sentenceDisplayOptions: Util.SentenceDisplayOptions,
    englishSentence: Util.ConjugatedEnglishArray,
    japaneseSentence: Util.ConjugatedJapaneseArray,
  }

  export interface ISentenceProps {
    options: Util.Options,
    sentence: Util.ConjugatedEnglishArray | Util.ConjugatedJapaneseArray,
  }

  export interface ISentenceHintsProps {
    sentenceDisplayOptions: Util.SentenceDisplayOptions,
    options: Util.Options,
  }

  export interface ISentenceBasicStatementProps {
    statement?: string,
  }

  export interface ISentenceBasicQuestionProps {
    question?: string,
    answer?: string,
  }
  export interface IConjugationTableProps {
    
  }
}

