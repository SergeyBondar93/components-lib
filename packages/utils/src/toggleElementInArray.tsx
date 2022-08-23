/**
 *
 * @param array массив элементов
 * @param element элемент который необходимо переключить в массиве
 * @returns новый массив
 */
export const toggleElementInArray = (array: any[], element: any) => {
  if (array.some((elem) => elem === element)) {
    return array.filter((elem) => elem !== element);
  }

  return [...array, element];
};
