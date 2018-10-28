declare module PropTypes {

  // Container props
  export type IAppProps = {
    auth: any,
    route: any, // NOTE: Will need to get proper type. 
    previousRoute: any,
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
    previousRoute: any,
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
    variation: string,
    options: () => Util.Options,
    resources: Util.Resource[],
    explanation: string[], 
    sentenceDisplayOptions: Util.SentenceDisplayOptions,
    sentenceStats: Util.SentenceStats,
    client: any,
  }
  
  // Sentence props
  export type IResourcesProps = {
    resources: Util.Resource[],
  }

  export type ISentencesProps = {
    client: any,
    options: Util.Options,
    sentenceDisplayOptions: Util.SentenceDisplayOptions,
    sentenceStats: Util.SentenceStats,
    englishSentence: Util.ConjugatedEnglishWord[],
    japaneseSentence: Util.ConjugatedJapaneseWord[],
    exerciseIndex: number,
  }

  export type IJapaneseSentenceProps = {
    client: any,
    options: Util.Options,
    sentence: Util.ConjugatedJapaneseWord[],
    exerciseIndex: number,
    sentenceStats: Util.SentenceStats,
  }

  export type IEnglishSentenceProps = {
    client: any,  
    options: Util.Options,
    sentence: Util.ConjugatedEnglishWord[],
    exerciseIndex: number,
    sentenceStats: Util.SentenceStats,
  }

  export type ISentenceStatsProps = {
    client: any,  
    options: Util.Options,
    sentenceDisplayOptions: Util.SentenceDisplayOptions,
    exerciseIndex: number,
    sentenceStats: Util.SentenceStats,
  }

  export type IConjugationTableProps = {
    
  }
}

