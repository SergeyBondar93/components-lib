import { createUseStyles } from "react-jss";

import { createClasses } from "@cheaaa/theme";

import {
  BLANKET_COMPONENT_NAMESPACE,
  BLANKET_COMPONENTS_NAMES,
} from "./consts";
import { defaultBlanketStyles } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultBlanketStyles, BLANKET_COMPONENT_NAMESPACE),
  {
    name: "blanket",
  }
);

export { BLANKET_COMPONENT_NAMESPACE, BLANKET_COMPONENTS_NAMES };
