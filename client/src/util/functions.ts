export const capitalise = (word: string): string => word ? word[0].toUpperCase() + word.slice(1) : word
export const randomArrayElement = (arrayLength: number): number => Math.floor(Math.random() * arrayLength);
export const startOfSentence = (sentenceLength: number, index: number) => index === 0;
export const endOfSentence = (sentenceLength: number, index: number) => sentenceLength - 1 === index;
export const emptyWordElement = (): Util.WordElement => ({ wordArray: [''], wordType: 'NA', __typename: 'NA' });

interface IValues {
  value: string,
  selected: boolean,
};

export const convertValuesIntoButtonArray = (values: string[]): IValues[] =>
  values.map((value, index) => {
    if (index === 0) {
      return { value, selected: true }
    }
    return { value, selected: false }
  });

export const createError = (fileLocation: string, functionName: string, errorMessage: string): string => {
  return `Error. file: ${fileLocation}, function: ${functionName}, ${errorMessage}`;
};
