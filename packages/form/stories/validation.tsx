import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  formActions,
  formIsShowAllErrorsSelector,
  formTochedSelector,
  formValuesSelector,
} from "../src/slice";

import { BASE_FORM_NAME } from "./consts";

const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const numericRegex = /[0-9]/;
const englishRegex = /[A-Za-z]/;

const EMAIL_ERROR_TEXT = "Не валидный email";

const isValidEmail = (email) => {
  return emailRegex.test(email);
};

export const validateArrayEmailsForm = (emails) => {
  return emails.map((email) => (isValidEmail(email) ? null : EMAIL_ERROR_TEXT));
};

const isNeedToValidate = (isTouched, isShowAllErrors) => {
  if (isTouched) return true;

  return true || isShowAllErrors;
};

export const validateBaseForm = (model, touched, isShowAllErrors = false) => {
  const { firstname = "", lastname = "", age = "", emails = [] } = model;

  const $age = age?.trim();

  const ageNum = Number($age);

  const errors: any = {
    firstname: "",
    lastname: "",
    age: "",
    emails: [],
  };

  if (
    isNeedToValidate(touched.firstname, isShowAllErrors) &&
    !englishRegex.test(firstname)
  ) {
    errors.firstname = "Только английский язык";
  }

  if (
    isNeedToValidate(touched.lastname, isShowAllErrors) &&
    !englishRegex.test(lastname)
  ) {
    errors.lastname = "Только английский язык";
  }

  if (
    isNeedToValidate(touched.age, isShowAllErrors) &&
    !numericRegex.test($age)
  ) {
    errors.age = "Тут должно быть число";
  }

  if (
    isNeedToValidate(touched.age, isShowAllErrors) &&
    !errors.age &&
    ageNum < 18
  ) {
    errors.age = "Нельзя до 18";
  }

  if (
    isNeedToValidate(touched.age, isShowAllErrors) &&
    !errors.age &&
    ageNum > 100
  ) {
    errors.age = "Слишком много";
  }

  emails.forEach((email) => {
    if (isValidEmail(email)) {
      errors.emails.push(null);
    } else {
      errors.emails.push(EMAIL_ERROR_TEXT);
    }
  });

  return errors;
};

export const Validation = () => {
  const formModel = useSelector(formValuesSelector(BASE_FORM_NAME));
  const tochedFields = useSelector(formTochedSelector(BASE_FORM_NAME));
  const isShowAllErrors = useSelector(
    formIsShowAllErrorsSelector(BASE_FORM_NAME)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const errors = validateBaseForm(formModel, tochedFields, isShowAllErrors);
    dispatch(formActions.setErrors({ formName: BASE_FORM_NAME, errors }));
  }, [formModel]);

  return null;
};
