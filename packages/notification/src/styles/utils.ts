import { TypeOptions } from "react-toastify";

import { ITheme } from "@cheaaa/theme";

import {
  NOTIFICATION_COMPONENT_NAMES,
  NOTIFICATION_COMPONENT_NAMESPACE,
} from "./consts";

const getTypesToastComponentThemedStyles = (
  theme: ITheme,
  type: TypeOptions,
  componentName: string
) => {
  return (
    theme.components?.[NOTIFICATION_COMPONENT_NAMESPACE]?.[type]?.[
      componentName
    ] || {}
  );
};

const getToastComponentThemedStyles = (
  theme: ITheme,
  componentName: string
) => {
  return (
    theme.components?.[NOTIFICATION_COMPONENT_NAMESPACE]?.[componentName] || {}
  );
};

export const getThemedStyles = (theme: ITheme) => {
  const ThemedCloseButtonStyles = getToastComponentThemedStyles(
    theme,
    NOTIFICATION_COMPONENT_NAMES.closeButton
  );
  const ThemedTitleWrapperStyles = getToastComponentThemedStyles(
    theme,
    NOTIFICATION_COMPONENT_NAMES.titleWrapper
  );
  const ThemedTitleStyles = getToastComponentThemedStyles(
    theme,
    NOTIFICATION_COMPONENT_NAMES.title
  );
  const ThemedMessageStyles = getToastComponentThemedStyles(
    theme,
    NOTIFICATION_COMPONENT_NAMES.message
  );

  return {
    "& .Toastify__toast .Toastify__close-button": ThemedCloseButtonStyles,
    "& .Toastify__toast .Toastify__toast-title-wrapper":
      ThemedTitleWrapperStyles,
    "& .Toastify__toast .Toastify__toast-title": ThemedTitleStyles,
    "& .Toastify__toast .Toastify__toast-message": ThemedMessageStyles,
  };
};

export const getTypedThemedStyles = (theme: ITheme, type: TypeOptions) => {
  const themedToastStyles = getTypesToastComponentThemedStyles(
    theme,
    type,
    NOTIFICATION_COMPONENT_NAMES.toast
  );
  const ThemedProgressBarStyles = getTypesToastComponentThemedStyles(
    theme,
    type,
    NOTIFICATION_COMPONENT_NAMES.progressBar
  );

  return {
    [`& .Toastify__toast--${type}`]: themedToastStyles,
    [`& .Toastify__progress-bar--${type}`]: ThemedProgressBarStyles,
  };
};
