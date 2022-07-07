export const toggleElementInArray = (array: any[], element: any) => {
  if (array.some((elem) => elem === element)) {
    return array.filter((elem) => elem !== element);
  }

  return [...array, element];
};
