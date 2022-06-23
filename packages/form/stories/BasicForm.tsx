import { createSelector } from "@reduxjs/toolkit";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form } from "../src/Form";
import { FormField } from "../src/FormField";
import {
  formActions,
  formFieldValueSelector,
  formIsShowAllErrorsSelector,
  formTochedSelector,
  formValuesSelector,
} from "../src/slice";

import { BASIC_FORM_FIELDS } from "./consts";
import { InputWithError } from "./InputWithError";
import { IBasicFormModel } from "./types";
import { validateBaseForm } from "./validation";

const emailsSelector = (formName) =>
  createSelector(
    formFieldValueSelector<IBasicFormModel["emails"]>(
      formName,
      BASIC_FORM_FIELDS.emails
    ),
    (emails) => emails || []
  );

const wrapperStyles = {
  marginBottom: "15px",
  display: "flex",
  paddingBottom: "20px",
  position: "relative",
} as const;

const AlertFormModel = ({ formName }) => {
  const formModel = useSelector(formValuesSelector<IBasicFormModel>(formName));

  const handleShowFormModel = () => {
    alert(JSON.stringify(formModel, null, 2));
  };

  return (
    <div style={wrapperStyles}>
      <button type="button" onClick={handleShowFormModel}>
        Show form model to Alert
      </button>
    </div>
  );
};

const Emails = ({ formName }) => {
  const emails = useSelector(emailsSelector(formName));
  const dispatch = useDispatch();

  const handleRemoveEmail = (idx) => () => {
    dispatch(
      formActions.removeField({
        formName: formName,
        name: `${BASIC_FORM_FIELDS.emails}[${idx}]`,
      })
    );
  };

  return (
    <>
      {emails.map((_, idx) => (
        <div style={wrapperStyles} key={idx}>
          <FormField
            component={InputWithError}
            name={`${BASIC_FORM_FIELDS.emails}[${idx}]`}
            placeholder="ivanov@mail.com"
            label="Email"
          />
          <button
            style={{ marginLeft: "15px" }}
            onClick={handleRemoveEmail(idx)}
            type="button"
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

const AddEmail = ({ formName }) => {
  const dispatch = useDispatch();
  const emails = useSelector(emailsSelector(formName));

  const handleAddEmail = () => {
    dispatch(
      formActions.setFieldValue({
        formName: formName,
        name: `${BASIC_FORM_FIELDS.emails}[${emails.length}]`,
        value: "",
      })
    );
  };

  return (
    <button type="button" onClick={handleAddEmail}>
      Add email
    </button>
  );
};

interface IBasicFormProps {
  formName: string;
}

export const BasicForm = ({ formName }: IBasicFormProps) => {
  const lastnameRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const isShowAllErrors = useSelector(formIsShowAllErrorsSelector(formName));
  const touched = useSelector(formTochedSelector<IBasicFormModel>(formName));

  const toggleShowAllErrors = () => {
    dispatch(
      formActions.setIsShowAllErrors({
        formName: formName,
        isShow: !isShowAllErrors,
      })
    );
  };

  const handleRemoveField = (fieldName) => () => {
    dispatch(
      formActions.removeField({
        formName: formName,
        name: fieldName,
      })
    );
  };

  // Функция добавлена что бы отображать ошибки на полях при начале ввода а не при потере фокуса как по дефолту
  const handleSetIsTouched =
    (fieldName: typeof BASIC_FORM_FIELDS[keyof typeof BASIC_FORM_FIELDS]) =>
    () => {
      if (!touched[fieldName]) {
        // задержка нужна что бы поле поставилось touched только после валидации
        setTimeout(() => {
          dispatch(
            formActions.setFieldTouched({
              formName: formName,
              name: fieldName,
              isTouched: true,
            })
          );
        });
      }
    };

  return (
    <Form formName={formName} validate={validateBaseForm}>
      <div style={wrapperStyles}>
        <button type="button" onClick={toggleShowAllErrors}>
          Toggle Show All Errors
        </button>
      </div>
      <div style={wrapperStyles}>
        <button type="button" onClick={() => lastnameRef.current?.focus()}>
          Focus to Lastname
        </button>
      </div>
      <div style={wrapperStyles}>
        <FormField
          component={InputWithError}
          name={BASIC_FORM_FIELDS.firstname}
          onChange={handleSetIsTouched(BASIC_FORM_FIELDS.firstname)}
          placeholder="Ivan"
          label="Firstname"
        />
        <button
          style={{ marginLeft: "15px" }}
          onClick={handleRemoveField(BASIC_FORM_FIELDS.firstname)}
          type="button"
        >
          Remove field from model
        </button>
      </div>
      <div style={wrapperStyles}>
        <FormField
          component={InputWithError}
          name={BASIC_FORM_FIELDS.lastname}
          onChange={handleSetIsTouched(BASIC_FORM_FIELDS.lastname)}
          placeholder="Ivanov"
          label="Lastname"
          ref={lastnameRef}
        />
        <button
          style={{ marginLeft: "15px" }}
          onClick={handleRemoveField(BASIC_FORM_FIELDS.lastname)}
          type="button"
        >
          Remove field from model
        </button>
      </div>
      <div style={wrapperStyles}>
        <FormField
          component={InputWithError}
          name={BASIC_FORM_FIELDS.age}
          onChange={handleSetIsTouched(BASIC_FORM_FIELDS.age)}
          placeholder="30"
          label="Age"
        />
        <button
          style={{ marginLeft: "15px" }}
          onClick={handleRemoveField(BASIC_FORM_FIELDS.age)}
          type="button"
        >
          Remove field from model
        </button>
      </div>

      <Emails formName={formName} />
      <div style={wrapperStyles}>
        <AddEmail formName={formName} />
      </div>
      <AlertFormModel formName={formName} />
    </Form>
  );
};