export const capitalise = (value: string): string => value.charAt(0).toUpperCase() + value.slice(1);
export const randomArrayElement = (array: string[] | Util.Word[]): number => Math.floor(Math.random() * array.length);

interface IValues {
  value: string,
  selected: boolean,
};

export const convertValuesIntoButtonArray = (values: string[]): IValues[] =>
  values.map((value, index) => {
    if (index === 0) {
      return {
        value,
        selected: true,
      }
    }
    return {
      value,
      selected: false,
    }
  });

export const createError = (fileLocation: string, functionName: string, errorMessage: string): string => {
  return `Error. file: ${fileLocation}, function: ${functionName}, ${errorMessage}`;
};