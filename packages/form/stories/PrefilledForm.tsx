import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { formActions } from "../src";

import { BasicForm } from "./BasicForm";
import { BASIC_FORM_FIELDS, PREFILLED_FORM_NAME } from "./consts";

const values = {
  [BASIC_FORM_FIELDS.age]: "",
  [BASIC_FORM_FIELDS.firstname]: "Sergey",
  [BASIC_FORM_FIELDS.lastname]: "Sergeev",
  [BASIC_FORM_FIELDS.emails]: ["sergey@mail.com", "invalid@email"],
};

export const PrefilledForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      formActions.initForm({
        formName: PREFILLED_FORM_NAME,
        values,
        isShowAllErrors: true,
      })
    );
  }, []);

  return <BasicForm formName={PREFILLED_FORM_NAME} />;
};
