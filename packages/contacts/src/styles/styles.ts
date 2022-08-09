import { createClasses } from "@cheaaa/theme";
import { createUseStyles } from "react-jss";

import { CONTACTS_COMPONENT_NAMESPACE } from "./consts";
import { defaultTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultTheme, CONTACTS_COMPONENT_NAMESPACE),
  {
    name: "contacts",
  }
);
