import { createClasses, ITheme } from "@cheaaa/theme";
import { createUseStyles } from "react-jss";

import {
  INPUT_COMPONENT_NAMESPACE,
  CODE_INPUT_COMPONENT_NAMESPACE,
} from "./consts";
import { defaultInputTheme } from "./defaultInputTheme";
import {
  defaultCodeInputTheme,
  pulseAnimation,
  shakeAnimation,
} from "./defaultCodeInputTheme";

export const useBaseStyles = createUseStyles(
  createClasses(defaultInputTheme, INPUT_COMPONENT_NAMESPACE),
  {
    name: "input",
  }
);

export const useCodeInputStyles = createUseStyles(
  (theme: ITheme) => ({
    ...shakeAnimation,
    ...pulseAnimation,
    ...createClasses(
      defaultCodeInputTheme,
      CODE_INPUT_COMPONENT_NAMESPACE
    )(theme),
  }),
  {
    name: "code-input",
  }
);
