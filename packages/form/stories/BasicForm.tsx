import { createSelector } from "@reduxjs/toolkit";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Form,
  FormField,
  formActions,
  formFieldValueSelector,
  formIsShowAllErrorsSelector,
  formValuesSelector,
} from "../src";

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
  marginBottom: "3px",
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
        field: `${BASIC_FORM_FIELDS.emails}[${idx}]`,
      })
    );
  };

  return (
    <>
      {emails.map((_, idx) => (
        <div style={wrapperStyles} key={idx}>
          <FormField
            name={`email${idx + 1}`}
            component={InputWithError}
            field={`${BASIC_FORM_FIELDS.emails}[${idx}]`}
            placeholder="ivanov@mail.com"
            actionMetaParams={{ changedEmail: idx }}
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
      formActions.setFieldValue(
        {
          formName: formName,
          field: `${BASIC_FORM_FIELDS.emails}[${emails.length}]`,
          value: "",
        },
        { someMetaParam: 42 }
      )
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
        field: fieldName,
      })
    );
  };

  return (
    <Form formName={formName} id="client-info" validate={validateBaseForm}>
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
          name="firstname"
          field={BASIC_FORM_FIELDS.firstname}
          isTouchAfterChange
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
          name="lastname"
          component={InputWithError}
          field={BASIC_FORM_FIELDS.lastname}
          isTouchAfterChange
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
          name="age"
          type={"number"}
          component={InputWithError}
          field={BASIC_FORM_FIELDS.age}
          isTouchAfterChange
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
      <div style={wrapperStyles}>
        <FormField
          name="country"
          component={InputWithError}
          field={BASIC_FORM_FIELDS.country}
          placeholder="Russia"
          label="Country"
        />
        <button
          style={{ marginLeft: "15px" }}
          onClick={handleRemoveField(BASIC_FORM_FIELDS.country)}
          type="button"
        >
          Remove field from model
        </button>
      </div>
      <div style={wrapperStyles}>
        <FormField
          name="language"
          component={InputWithError}
          field={BASIC_FORM_FIELDS.language}
          placeholder="Language"
          label="language"
        />
        <button
          style={{ marginLeft: "15px" }}
          onClick={handleRemoveField(BASIC_FORM_FIELDS.country)}
          type="button"
        >
          Remove field from model
        </button>
      </div>
      <div style={wrapperStyles}>
        <FormField
          name="street-address"
          component={InputWithError}
          field={BASIC_FORM_FIELDS.street}
          placeholder="Address"
          label="Address"
        />
        <button
          style={{ marginLeft: "15px" }}
          onClick={handleRemoveField(BASIC_FORM_FIELDS.country)}
          type="button"
        >
          Remove field from model
        </button>
      </div>
      <div style={wrapperStyles}>
        <FormField
          name="organization"
          component={InputWithError}
          field={BASIC_FORM_FIELDS.organization}
          placeholder="Organization"
          label="Organization"
        />
        <button
          style={{ marginLeft: "15px" }}
          onClick={handleRemoveField(BASIC_FORM_FIELDS.organization)}
          type="button"
        >
          Remove field from model
        </button>
      </div>

      <div style={wrapperStyles}>
        <FormField
          name="bday"
          component={InputWithError}
          field={BASIC_FORM_FIELDS.birthday}
          placeholder="Birthday"
          label="Birthday"
        />
        <button
          style={{ marginLeft: "15px" }}
          onClick={handleRemoveField(BASIC_FORM_FIELDS.birthday)}
          type="button"
        >
          Remove field from model
        </button>
      </div>

      <div style={wrapperStyles}>
        <FormField
          name="tel"
          component={InputWithError}
          field={BASIC_FORM_FIELDS.phone}
          placeholder="Phone"
          label="Phone"
        />
        <button
          style={{ marginLeft: "15px" }}
          onClick={handleRemoveField(BASIC_FORM_FIELDS.phone)}
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
