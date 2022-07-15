import { PayloadAction } from "@reduxjs/toolkit";

type TochedModel<TModel> = {
  [Key in keyof TModel]: TModel[Key] extends object
    ? TochedModel<TModel[Key]>
    : boolean;
};

type ErrorsModel<TModel> = {
  [Key in keyof TModel]: TModel[Key] extends object
    ? TochedModel<TModel[Key]>
    : string | string[];
};
/*
TODO Возможно понадобится тип который принимает модель и делает из неё тип ошибок, 
где ошибка может быть на каждом уровне вложенности 
например 
Model = { a: { b: c: { string } } }
Result = 
 { a: ErrorType } |
 { a: { b: ErrorType } } |
 { a: { b: { c: ErrorType} } } |
*/

export type FormState<TModel = {}> = {
  toched: TochedModel<TModel>;
  errors: ErrorsModel<TModel>;
  values: TModel;
  isShowAllErrors: boolean;
};

type RequeredPayloadParams = {
  formName: string;
};

export type InitFormPayload = RequeredPayloadParams & Partial<FormState>;

export type RemoveFormFieldPayload = RequeredPayloadParams & {
  field: string;
};
export type SetFormFieldValuePayload = RequeredPayloadParams & {
  field: string;
  value: any;
};
export type SetFormFieldTouchedPayload = RequeredPayloadParams & {
  field: string;
  isTouched: boolean;
};
export type SetFormIsShowAllErrorsPayload = RequeredPayloadParams & {
  isShow: boolean;
};
export type SetFormFieldErrorPayload = RequeredPayloadParams & {
  field: string;
  error: string | string[];
};
export type SetFormErrorsPayload = RequeredPayloadParams & {
  errors: object;
};
export type ClearFormPayload = RequeredPayloadParams & {};

export type InitFormAction = PayloadAction<InitFormPayload>;
export type RemoveFormFieldAction = PayloadAction<RemoveFormFieldPayload>;
export type SetFormFieldValueAction = PayloadAction<SetFormFieldValuePayload>;
export type SetFormFieldTouchedAction =
  PayloadAction<SetFormFieldTouchedPayload>;
export type SetFormIsShowAllErrorsAction =
  PayloadAction<SetFormIsShowAllErrorsPayload>;
export type SetFormFieldErrorAction = PayloadAction<SetFormFieldErrorPayload>;
export type SetFormErrorsAction = PayloadAction<SetFormErrorsPayload>;
export type ClearFormAction = PayloadAction<ClearFormPayload>;
