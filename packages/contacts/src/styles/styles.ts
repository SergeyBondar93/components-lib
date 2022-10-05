import { createUseStyles } from "react-jss";

import { createClasses } from "@cheaaa/theme";

import { CONTACTS_COMPONENT_NAMESPACE } from "./consts";
import { defaultTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultTheme, CONTACTS_COMPONENT_NAMESPACE),
  {
    name: "contacts",
  }
);
