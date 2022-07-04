import { forwardRef, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useFormName } from "./context";
import {
  formFieldErrorSelector,
  formFieldIsTouchedSelector,
  formFieldValueSelector,
  formIsShowAllErrorsSelector,
  formActions,
} from "./slice";
import { IFormFieldComponentProps } from "./types";

export type FormFieldProps<TComponentProps> = Omit<
  TComponentProps,
  keyof IFormFieldComponentProps
> & {
  component: React.ComponentType<TComponentProps & IFormFieldComponentProps>;
  name: string;

  /**
   * Если true, ставит поле touched не только при onBlur но и при onChange
   */
  isTouchAfterChange?: boolean;

  /**
   * передав, в action помимо payload добавится поле {meta} с переденными данными
   */
  actionMetaParams?: any;

  onChange?: IFormFieldComponentProps["onChange"];
  onBlur?: IFormFieldComponentProps["onBlur"];
};

const Field = function <TProps>(
  {
    component: Component,
    onChange,
    onBlur,
    name,
    isTouchAfterChange,
    actionMetaParams,
    ...props
  }: FormFieldProps<TProps>,
  ref
): React.ReactElement<TProps> {
  const formName = useFormName();
  const dispatch = useDispatch();
  const isShowAllErrors = useSelector(formIsShowAllErrorsSelector(formName));
  const value = useSelector(formFieldValueSelector(formName, name));
  const stateError = useSelector(formFieldErrorSelector(formName, name));
  const isTouched = useSelector(formFieldIsTouchedSelector(formName, name));

  const showError = isShowAllErrors || isTouched;

  const error = showError ? stateError : null;

  const invalid = showError ? !!error : false;

  const handleChange = useCallback(
    (...args) => {
      const value = args[0];
      dispatch(
        formActions.setFieldValue({ formName, value, name }, actionMetaParams)
      );

      if (isTouchAfterChange && !isTouched) {
        /**
         TODO зарежка нужна потому что валидация выполняется асинхронно 
         и необходимо дождаться пока она закончится после onChange
         */
        setTimeout(() => {
          dispatch(
            formActions.setFieldTouched({ formName, name, isTouched: true })
          );
        }, 0);
      }

      onChange?.(...args);
    },
    [name, onChange, formName, isTouchAfterChange, isTouched, actionMetaParams]
  );

  const handleBlur = useCallback(
    (...args) => {
      dispatch(
        formActions.setFieldTouched({ formName, isTouched: true, name })
      );
      onBlur?.(...args);
    },
    [name, onBlur, formName]
  );

  return (
    <Component
      ref={ref}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      error={error}
      invalid={invalid}
      {...(props as any)}
    />
  );
};

export const FormField = memo(forwardRef(Field)) as typeof Field;
