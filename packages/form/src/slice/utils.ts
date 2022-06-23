const regexp = /\[([0-9]+)\]$/;

export const isRemoveFromArray = (path) => {
  return regexp.test(path);
};

export const getPathToArrayAndElementIndex = (path) => {
  const result = path.match(regexp);

  const pathToArray = path.substring(0, path.length - result[0].length);
  const elementIndex = result[1];

  return {
    pathToArray,
    elementIndex,
  };
};

export const getPathToObjectAndFieldName = (path) => {
  const splittedPath = path.split(".");
  const { length } = splittedPath;
  let pathToObject = splittedPath.slice(0, length - 1).join(".");

  let fieldName = splittedPath[length - 1];

  return {
    pathToObject: pathToObject ? `.${pathToObject}` : "",
    fieldName,
  };
};
