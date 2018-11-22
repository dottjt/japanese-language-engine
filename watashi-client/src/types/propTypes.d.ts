declare module PropTypes {

  // Container props
  export type IAppProps = {
    auth: any,
    client: any,
    route: any, // NOTE: Will need to get proper type. 
  }
  
  export type IHomeProps = {
    client: any,
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
    client: any,
    user: Util.User,
    exercises: Util.EnglishJapaneseOptionsSentence[],
    sentenceDisplayOptions: Util.SentenceDisplayOptions,
    sentenceStats: Util.SentenceStats,
  }
  
  export type ISentenceControlPanelProps = {
    sentenceDisplayOptions: Util.SentenceDisplayOptions,
    preOptions: Util.Options,
    client: any, // NOTE: Will need to get proper type. 
    path: string,
  }

  export type ISentenceOptionsProps = {
    sentenceDisplayOptions: Util.SentenceDisplayOptions,
    client: any, // NOTE: Will need to get proper type. 
    path: string, // NOTE: Will need to get proper type. 
  }


  export type IButtonsProps = {
    title: string,
    type: string,
    values: Util.IButtonValues[],
    client: any,
    onClickRedirect: (client: any, n: string) => void,
  }

  // Lesson props
  export type ILessonTemplateProps = {
    title: string,
    description: string,
    exercises: Util.EnglishJapaneseOptionsSentence[],
    resources: Util.Resource[],
    explanation: string[], 
    preOptions: Util.PreOptions,
    sentenceDisplayOptions: Util.SentenceDisplayOptions,
    sentenceStats: Util.SentenceStats,
    client: any,
    path: string,
    isAuthenticated: string,
    auth: any,
    premiumLesson: boolean,
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
    englishSentence: Util.WordArrayElement[],
    japaneseSentence: Util.WordArrayElement[],
    exerciseIndex: number,
  }

  export type ISentencePropTypes = {
    client: any,
    options: Util.Options,
    sentence: Util.WordArrayElement[],
    exerciseIndex: number,
    sentenceStats: Util.SentenceStats,
    sentenceDisplayOptions: Util.SentenceDisplayOptions,
    
    title: string;
  }

  export type IJapaneseSentenceProps = {
    client: any,
    options: Util.Options,
    sentence: Util.WordArrayElement[],
    exerciseIndex: number,
    sentenceStats: Util.SentenceStats,
    sentenceDisplayOptions: Util.SentenceDisplayOptions,
  }

  export type IEnglishSentenceProps = {
    client: any,
    options: Util.Options,
    sentence: Util.WordArrayElement[],
    exerciseIndex: number,
    sentenceStats: Util.SentenceStats,
    sentenceDisplayOptions: Util.SentenceDisplayOptions,
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

