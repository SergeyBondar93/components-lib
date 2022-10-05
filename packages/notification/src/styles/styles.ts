import { createUseStyles } from "react-jss";

import { ITheme } from "@cheaaa/theme";

import { getTypedThemedStyles, getThemedStyles } from "./utils";
import { animations, keyframes } from "./animations";
import {
  body,
  closeButton,
  container,
  progressBar,
  toast,
  titleStyles,
  titleWrapperStyles,
} from "./componentsStyles";
import { messageStyles } from "./componentsStyles/messageStyles";

export const useStyles = createUseStyles(
  (theme: ITheme) => ({
    ...keyframes,
    root: {
      ...animations,

      ...container,

      ...toast,
      ...body,
      ...titleStyles,
      ...titleWrapperStyles,
      ...messageStyles,
      ...closeButton,
      ...progressBar,

      ...getThemedStyles(theme),

      ...getTypedThemedStyles(theme, "info"),
      ...getTypedThemedStyles(theme, "success"),
      ...getTypedThemedStyles(theme, "warning"),
      ...getTypedThemedStyles(theme, "error"),
      ...getTypedThemedStyles(theme, "default"),
    },
  }),
  { name: "notification" }
);
