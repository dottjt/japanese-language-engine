// import { Route } from "router5";

declare namespace propTypes {
  
  export type Options = {
    sentencePoliteness: string,
    sentenceType: string,
    sentenceVariation: string,
  }

  export type Sentence = {
    type: string,
    question: string,
    answer: string, 
  }

  // Container props
  export interface IAppProps {
    route: any, // NOTE: Will need to get proper type. 
  }

  export interface IMainProps {
    route: any, // NOTE: Will need to get proper type. 
  }

  // Component props 
  export interface IOptionsProps {
    options: Options,
    client: any, // NOTE: Will need to get proper type. 
  }

  export interface IButtonsProps {
    title: string,
    values: string[],
    onClickCallback: (n: string) => void,
  }

  export interface IJapaneseSentenceProps {
    options: Options,
    sentence: Sentence,
  }

  export interface IEnglishSentenceProps {
    options: Options,
    sentence: Sentence,
  }
}

declare module 'propTypes' {
  export = propTypes;
}