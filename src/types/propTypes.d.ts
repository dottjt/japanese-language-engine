declare module PropTypes {

  // Container props
  export interface IAppProps {
    route: any, // NOTE: Will need to get proper type. 
  }

  export interface IMainProps {
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
    explanation: string, 
  }
  
  // Sentence props
  export interface IResourcesProps {
    resources: Util.Resource[],
  }

  export interface ISentencesProps {
    options: Util.Options
    englishSentence: Util.Sentence,
    japaneseSentence: Util.Sentence,
  }

  export interface ISentenceProps {
    sentence: Util.Sentence,
  }

  export interface ISentenceHintsProps {
    options: Util.Options,
  }

  export interface ISentenceBasicStatementProps {
    statement: string,
  }

  export interface ISentenceBasicQuestionProps {
    question: string,
    answer: string,
  }
}
