import { FormState } from "./types";

export const FORMS_STATE_NAMESPACE = "forms";

export const defaultFormState: FormState = {
  toched: {},
  errors: {},
  values: {},
  isShowAllErrors: false,
};
