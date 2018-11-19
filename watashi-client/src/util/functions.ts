export const capitalise = (word: string): string => word ? word[0].toUpperCase() + word.slice(1) : word
export const randomArrayElement = (arrayLength: number): number => Math.floor(Math.random() * arrayLength);
export const startOfArray = (sentenceLength: number, index: number): boolean => index === 0;
export const endOfArray = (sentenceLength: number, index: number): boolean => (sentenceLength - 1) === index;
export const determineToggleBackground = (toggleSentenceOrder: boolean, hoverState: boolean, toggleSentenceHide: boolean): string => toggleSentenceOrder || hoverState || toggleSentenceHide ? 'none' : 'black'; 

export const createError = (fileLocation: string, functionName: string, errorMessage: string): string => {
  return `Error. file: ${fileLocation}, function: ${functionName}, ${errorMessage}`;
};
