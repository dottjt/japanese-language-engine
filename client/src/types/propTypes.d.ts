declare module PropTypes {

  // Container props
  export type IAppProps = {
    auth: any,
    route: any, // NOTE: Will need to get proper type. 
  }

  export type ILoginProps = {
    auth: any, // NOTE: Will need to get proper type. 
  }

  export type IExplanationProps = {
    explanation: string[]
  }
  
  export type IMainProps = {
    auth: any,
    route: any, // NOTE: Will need to get proper type. 
  }
  
  // Component props 
  export type IOptionsProps = {
    sentenceDisplayOptions: Util.SentenceDisplayOptions,
    client: any, // NOTE: Will need to get proper type. 
  }

  export type IButtonsProps = {
    title: string,
    values: string[],
    onClickCallback: (n: string) => void,
  }

  // Lesson props
  export type ILessonTemplateProps = {
    title: string,
    exercises: Util.EnglishJapaneseOptionsSentence[],
    resources: Util.Resource[],
    explanation: string[], 
    sentenceDisplayOptions: Util.SentenceDisplayOptions,
    client: any,
  }
  
  // Sentence props
  export type IResourcesProps = {
    resources: Util.Resource[],
  }

  export type ISentencesProps = {
    options: Util.Options,
    sentenceDisplayOptions: Util.SentenceDisplayOptions,
    englishSentence: Util.ConjugatedEnglishArray,
    japaneseSentence: Util.ConjugatedJapaneseArray,
  }

  export type IJapaneseSentenceProps = {
    options: Util.Options,
    sentence: Util.ConjugatedJapaneseArray,
  }

  export type IEnglishSentenceProps = {
    options: Util.Options,
    sentence: Util.ConjugatedEnglishArray,
  }

  export type ISentenceStatsProps = {
    sentenceDisplayOptions: Util.SentenceDisplayOptions,
    options: Util.Options,
  }

  export type IConjugationTableProps = {
    
  }
}

