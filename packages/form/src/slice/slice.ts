import { createSlice } from "@reduxjs/toolkit";
import set from "lodash.set";
import get from "lodash.get";

import { FORMS_STATE_NAMESPACE } from "./consts";
import {
  InitFormAction,
  RemoveFormFieldAction,
  SetFormFieldValueAction,
  SetFormFieldTouchedAction,
  SetFormIsShowAllErrorsAction,
  SetFormFieldErrorAction,
  SetFormErrorsAction,
  ClearFormAction,
  FormState,
} from "./types";
import {
  getPathToArrayAndElementIndex,
  getPathToObjectAndFieldName,
  isRemoveFromArray,
} from "./utils";

export interface IFormState {
  [key: string]: FormState<{}>;
}

export interface IStoreWithFormState {
  [FORMS_STATE_NAMESPACE]: IFormState;
}

const defaultFormState: FormState = {
  toched: {},
  errors: {},
  values: {},
  isShowAllErrors: false,
};

const initialState: IFormState = {};

const FormsSlice = createSlice({
  name: FORMS_STATE_NAMESPACE,
  initialState,
  reducers: {
    initForm: (state, { payload: { formName, ...params } }: InitFormAction) => {
      const initialValue = { ...defaultFormState, ...params };
      set(state, formName, initialValue);
    },
    removeField: (
      state,
      { payload: { formName, name } }: RemoveFormFieldAction
    ) => {
      let newValues: object | Array<unknown> | null = null;
      let newToched: object | Array<unknown> | null = null;
      let valuesPath: string = "";
      let touchedPath: string = "";

      /* 
        если путь заканчивается как элемент массива [number] 
        то получаем массив и удалем необходимый элемент
      */
      if (isRemoveFromArray(name)) {
        const { pathToArray, elementIndex } =
          getPathToArrayAndElementIndex(name);

        valuesPath = `${formName}.values.${pathToArray}`;
        touchedPath = `${formName}.toched.${pathToArray}`;
        newValues = [...get<unknown[]>(state, valuesPath, [])];
        newToched = [...get<unknown>(state, touchedPath, [])];

        (newValues as Array<unknown>).splice(elementIndex, 1);
        (newToched as Array<unknown>).splice(elementIndex, 1);
        /**
          иначе получаем объект из которого удаляем свойство
          и удаляем из него свойство 
        */
      } else {
        const { pathToObject, fieldName } = getPathToObjectAndFieldName(name);

        valuesPath = `${formName}.values${pathToObject}`;
        touchedPath = `${formName}.toched${pathToObject}`;
        newValues = { ...get(state, valuesPath, {}) };
        newToched = { ...get(state, touchedPath, {}) };

        delete (newValues as object)[fieldName];
        delete (newToched as object)[fieldName];
      }

      /*
        и ставим по пути массива/объекта который изменяли новый массив/объект с удалённым свойством
      */
      set(state, valuesPath, newValues);
      set(state, touchedPath, newToched);
    },
    setFieldValue: (
      state,
      { payload: { formName, name, value } }: SetFormFieldValueAction
    ) => {
      set(state, `${formName}.values.${name}`, value);
    },
    setFieldTouched: (
      state,
      { payload: { formName, name, isTouched } }: SetFormFieldTouchedAction
    ) => {
      set(state, `${formName}.toched.${name}`, isTouched);
    },
    setIsShowAllErrors: (
      state,
      { payload: { formName, isShow } }: SetFormIsShowAllErrorsAction
    ) => {
      set(state, `${formName}.isShowAllErrors`, isShow);
    },
    setFieldError: (
      state,
      { payload: { formName, name, error } }: SetFormFieldErrorAction
    ) => {
      set(state, `${formName}.errors.${name}`, error);
    },
    setErrors: (
      state,
      { payload: { formName, errors } }: SetFormErrorsAction
    ) => {
      set(state, `${formName}.errors`, errors);
    },
    clear: (state, { payload: { formName } }: ClearFormAction) => {
      set(state, formName, defaultFormState);
    },
  },
});

export const { reducer: formsReducer, actions: formActions } = FormsSlice;
