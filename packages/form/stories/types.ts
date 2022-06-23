import { BASIC_FORM_FIELDS } from "./consts";

export interface IBasicFormModel {
  [BASIC_FORM_FIELDS.age]?: string;
  [BASIC_FORM_FIELDS.firstname]?: string;
  [BASIC_FORM_FIELDS.lastname]?: string;
  [BASIC_FORM_FIELDS.emails]?: string[];
}
