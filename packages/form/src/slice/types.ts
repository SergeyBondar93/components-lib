import { PayloadAction } from "@reduxjs/toolkit";

export type FormState<TToched = {}, TErrors = {}, TValues = {}> = {
  toched: TToched;
  errors: TErrors;
  values: TValues;
  isShowAllErrors: boolean;
};

type RequeredPayloadParams = {
  formName: string;
};

export type InitFormPayload = RequeredPayloadParams & Partial<FormState>;

export type RemoveFormFieldPayload = RequeredPayloadParams & {
  name: string;
};
export type SetFormFieldValuePayload = RequeredPayloadParams & {
  name: string;
  value: any;
};
export type SetFormFieldTouchedPayload = RequeredPayloadParams & {
  name: string;
  isTouched: boolean;
};
export type SetFormIsShowAllErrorsPayload = RequeredPayloadParams & {
  isShow: boolean;
};
export type SetFormFieldErrorPayload = RequeredPayloadParams & {
  name: string;
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
