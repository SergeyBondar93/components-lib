import { createSelector, createSlice } from "@reduxjs/toolkit";
import set from "lodash.set";
import get from "lodash.get";

// type ModalData = { [key: string]: any };

// type ModalPayload = {
//     name: string;
// };

// type OpenModalPayload = ModalPayload & {
//     data?: ModalData;
// };

// type CloseModalPayload = ModalPayload;
// type OpenModalAction = PayloadAction<OpenModalPayload>;
// type CloseModalAction = PayloadAction<CloseModalPayload>;

// interface IModalState {
//     [key: string]: {
//         isOpen: boolean;
//         data: ModalData;
//     };
// }

// export const MODAL_STATE_NAMESPACE = '@modal';

// interface IModal<T extends {}> {
//     isOpen: boolean;
//     data: T;
// }

// const defaultModalState: IModal<{}> = {
//     isOpen: false,
//     data: {},
// };

// const initialState: IModalState = {};

// export interface IStoreWithModalState {
//     [MODAL_STATE_NAMESPACE]: IModalState;
// }

export const FORMS_STATE_NAMESPACE = "forms";

const regexp = /\[([0-9]+)\]$/;
const isRemoveFromArray = (path) => {
  return regexp.test(path);
};

const getPathToArrayAndElementIndex = (path) => {
  const result = path.match(regexp);

  const pathToArray = path.substring(0, path.length - result[0].length);
  const elementIndex = result[1];

  return {
    pathToArray,
    elementIndex,
  };
};

const getPathToObjectAndFieldName = (path) => {
  const splittedPath = path.split(".");
  const { length } = splittedPath;
  let pathToObject = splittedPath.slice(0, length - 1).join(".");

  let fieldName = splittedPath[length - 1];

  return {
    pathToObject: pathToObject ? `.${pathToObject}` : "",
    fieldName,
  };
};

const defaultFormState = {
  isInited: false,
  toched: {},
  errors: {},
  values: {},
  isShowAllErrors: false,
};

const initialState = {};

const FormsSlice = createSlice({
  name: FORMS_STATE_NAMESPACE,
  initialState,
  reducers: {
    initForm: (state, { payload: { formName, ...params } }: any) => {
      const initialValue = { ...defaultFormState, ...params };
      set(state, formName, initialValue);
    },
    removeField: (state, { payload: { formName, name } }: any) => {
      let newValues: any = null;
      let newToched: any = null;
      let valuesPath: string = "";
      let touchedPath: string = "";

      if (isRemoveFromArray(name)) {
        const { pathToArray, elementIndex } =
          getPathToArrayAndElementIndex(name);

        valuesPath = `${formName}.values.${pathToArray}`;
        touchedPath = `${formName}.toched.${pathToArray}`;
        newValues = [...get(state, valuesPath, [])];
        newToched = [...get(state, touchedPath, [])];

        newValues.splice(elementIndex, 1);
        newToched.splice(elementIndex, 1);
      } else {
        const { pathToObject, fieldName } = getPathToObjectAndFieldName(name);

        valuesPath = `${formName}.values${pathToObject}`;
        touchedPath = `${formName}.toched${pathToObject}`;
        newValues = { ...get(state, valuesPath, {}) };
        newToched = { ...get(state, touchedPath, {}) };

        delete newValues[fieldName];
        delete newToched[fieldName];
      }

      set(state, valuesPath, newValues);
      set(state, touchedPath, newToched);
    },
    setFieldValue: (state, { payload: { formName, name, value } }: any) => {
      set(state, `${formName}.values.${name}`, value);
    },
    setFieldTouched: (
      state,
      { payload: { formName, name, isTouched } }: any
    ) => {
      set(state, `${formName}.toched.${name}`, isTouched);
    },
    setIsShowAllErrors: (state, { payload: { formName, value } }: any) => {
      set(state, `${formName}.isShowAllErrors`, value);
    },
    setFieldError: (state, { payload: { formName, name, error } }: any) => {
      set(state, `${formName}.errors.${name}`, error);
    },
    setErrors: (state, { payload: { formName, errors } }: any) => {
      set(state, `${formName}.errors`, errors);
    },
    clear: (state, { payload: { formName } }: any) => {
      set(state, formName, defaultFormState);
    },
  },
});

export const formSelector =
  (formName: string, defaultValues = {}) =>
  (state) =>
    state[FORMS_STATE_NAMESPACE][formName] || {
      ...defaultFormState,
      ...defaultValues,
    };

export const formIsShowAllErrorsSelector = (formName: string) =>
  createSelector(
    formSelector(formName),
    (form) => form.isShowAllErrors || false
  );

export const formValuesSelector = (formName: string, defaultValues = {}) =>
  createSelector(
    formSelector(formName, { values: defaultValues }),
    (form) => form.values || defaultValues
  );
export const formTochedSelector = (formName: string, defaultValues = {}) =>
  createSelector(
    formSelector(formName, { values: defaultValues }),
    (form) => form.toched || defaultValues
  );

export const formFieldValueSelector = (
  formName: string,
  name: string,
  defaultValue: unknown = ""
) =>
  createSelector(formSelector(formName), (form) =>
    get(form.values, name, defaultValue)
  );

export const formFieldErrorSelector = (formName: string, name: string) =>
  createSelector(formSelector(formName), (form) => get(form.errors, name, ""));

export const formFieldIsTouchedSelector = (formName: string, name: string) =>
  createSelector(formSelector(formName), (form) =>
    get(form.toched, name, false)
  );

export const { reducer: formsReducer, actions: formActions } = FormsSlice;
