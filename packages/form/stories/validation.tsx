import { IBasicFormModel } from "./types";

const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const numericRegex = /[0-9]/;
const englishRegex = /[A-Za-z]/;

const EMAIL_ERROR_TEXT = "Не валидный email";

const isValidEmail = (email) => {
  return emailRegex.test(email);
};

export const validateBaseForm = async (model) => {
  const { firstname = "", lastname = "", age = "", emails = [] } = model;

  const $age = age?.trim();

  const ageNum = Number($age);

  const errors: IBasicFormModel = {
    firstname: "",
    lastname: "",
    age: "",
    emails: [],
  };

  if (!englishRegex.test(firstname)) {
    errors.firstname = "Только английский язык";
  }

  if (!englishRegex.test(lastname)) {
    errors.lastname = "Только английский язык";
  }

  if (!numericRegex.test($age)) {
    errors.age = "Тут должно быть число";
  }

  if (!errors.age && ageNum < 18) {
    errors.age = "Нельзя до 18";
  }

  if (!errors.age && ageNum > 100) {
    errors.age = "Слишком много";
  }

  emails.forEach((email) => {
    if (isValidEmail(email)) {
      errors.emails!.push("");
    } else {
      errors.emails!.push(EMAIL_ERROR_TEXT);
    }
  });

  return new Promise((res) => setTimeout(res)).then(() => errors);
};
