import { createSelector } from "@reduxjs/toolkit";
import get from "lodash.get";

import { defaultFormState, FORMS_STATE_NAMESPACE } from "./consts";
import { IStoreWithFormState } from "./slice";
import { FormState } from "./types";

export const formSelector =
  <TToched = object, TErrors = object, TValues = object>(
    formName: string,
    defaultValues = {}
  ) =>
  (state: IStoreWithFormState) =>
    (state[FORMS_STATE_NAMESPACE][formName] || {
      ...defaultFormState,
      ...defaultValues,
    }) as FormState<TToched, TErrors, TValues>;

export const formIsShowAllErrorsSelector = (formName: string) =>
  createSelector(
    formSelector(formName),
    (form: FormState): boolean => form.isShowAllErrors || false
  );

export const formValuesSelector = <TValues = {}>(
  formName: string,
  defaultValues = {}
) =>
  createSelector(
    formSelector(formName, { values: defaultValues }),
    (form): FormState<{}, {}, TValues>["values"] => {
      return form.values || defaultValues;
    }
  );

export const formTochedSelector = <TToched = {}>(
  formName: string,
  defaultValues = {}
) =>
  createSelector(
    formSelector(formName, { values: defaultValues }),
    (form): FormState<TToched>["toched"] => form.toched || defaultValues
  );

export const formFieldValueSelector = <TValue = unknown>(
  formName: string,
  name: string,
  defaultValue: unknown = ""
) =>
  createSelector(
    formSelector(formName),
    (form): TValue => get(form.values, name, defaultValue)
  );

export const formFieldErrorSelector = (formName: string, name: string) =>
  createSelector(formSelector(formName), (form): string | string[] =>
    get(form.errors, name, "")
  );

export const formFieldIsTouchedSelector = (formName: string, name: string) =>
  createSelector(formSelector(formName), (form): boolean =>
    get(form.toched, name, false)
  );
