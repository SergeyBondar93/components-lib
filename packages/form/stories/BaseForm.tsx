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

import { BASE_FORM_NAME } from "./consts";
import { InputWithError } from "./InputWithError";
import { validateBaseForm, Validation } from "./validation";

const BASE_FORM_FIELDS = {
  firstname: "firstname",
  lastname: "lastname",
  age: "age",
};

const emailsSelector = createSelector(
  formFieldValueSelector(BASE_FORM_NAME, "emails"),
  (emails) => emails
);

const wrapperStyles = {
  marginBottom: "15px",
  display: "flex",
  paddingBottom: "20px",
  position: "relative",
} as const;

const AlertFormModel = ({ formName }) => {
  const formModel = useSelector(formValuesSelector(formName));

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

const Emails = () => {
  const emails = useSelector(emailsSelector) || [];
  const dispatch = useDispatch();

  const handleRemoveEmail = (idx) => () => {
    dispatch(
      formActions.removeField({
        formName: BASE_FORM_NAME,
        name: `emails[${idx}]`,
      })
    );
  };

  return (
    <>
      {emails.map((_, idx) => (
        <div style={wrapperStyles} key={idx}>
          <FormField
            component={InputWithError}
            name={`emails[${idx}]`}
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

const AddEmail = () => {
  const dispatch = useDispatch();
  const emails = useSelector(emailsSelector);

  const handleAddEmail = () => {
    dispatch(
      formActions.setFieldValue({
        formName: BASE_FORM_NAME,
        name: `emails[${emails.length}]`,
        value: "",
        isToched: false,
      })
    );
  };

  return (
    <button type="button" onClick={handleAddEmail}>
      Add email
    </button>
  );
};

export const BaseForm = () => {
  const lastnameRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const formModel = useSelector(formValuesSelector(BASE_FORM_NAME));
  const tochedFields = useSelector(formTochedSelector(BASE_FORM_NAME));
  const isShowAllErrors = useSelector(
    formIsShowAllErrorsSelector(BASE_FORM_NAME)
  );

  const toggleShowAllErrors = () => {
    const errors = validateBaseForm(formModel, tochedFields, true);
    dispatch(formActions.setErrors({ formName: BASE_FORM_NAME, errors }));
    dispatch(
      formActions.setIsShowAllErrors({
        formName: BASE_FORM_NAME,
        value: !isShowAllErrors,
      })
    );
  };

  const handleRemoveField = (fieldName) => () => {
    dispatch(
      formActions.removeField({
        formName: BASE_FORM_NAME,
        name: fieldName,
      })
    );
  };

  return (
    <Form formName={BASE_FORM_NAME}>
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
      <Validation />
      <div style={wrapperStyles}>
        <FormField
          component={InputWithError}
          name={BASE_FORM_FIELDS.firstname}
          placeholder="Ivan"
          label="Firstname"
        />
        <button
          style={{ marginLeft: "15px" }}
          onClick={handleRemoveField(BASE_FORM_FIELDS.firstname)}
          type="button"
        >
          Remove field from model
        </button>
      </div>
      <div style={wrapperStyles}>
        <FormField
          component={InputWithError}
          name={BASE_FORM_FIELDS.lastname}
          placeholder="Ivanov"
          label="Lastname"
          ref={lastnameRef}
        />
        <button
          style={{ marginLeft: "15px" }}
          onClick={handleRemoveField(BASE_FORM_FIELDS.lastname)}
          type="button"
        >
          Remove field from model
        </button>
      </div>
      <div style={wrapperStyles}>
        <FormField
          component={InputWithError}
          name={BASE_FORM_FIELDS.age}
          placeholder="30"
          label="Age"
        />
        <button
          style={{ marginLeft: "15px" }}
          onClick={handleRemoveField(BASE_FORM_FIELDS.age)}
          type="button"
        >
          Remove field from model
        </button>
      </div>

      <Emails />
      <div style={wrapperStyles}>
        <AddEmail />
      </div>
      <AlertFormModel formName={BASE_FORM_NAME} />
    </Form>
  );
};
