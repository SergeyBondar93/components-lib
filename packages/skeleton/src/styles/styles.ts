import { createClasses, ITheme } from "@cheaaa/theme";
import { createUseStyles } from "react-jss";

import { animations } from "./animations";
import { SKELETON_COMPONENT_NAMESPACE } from "./consts";
import { defaultTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  (theme: ITheme) => ({
    ...animations,
    ...createClasses(defaultTheme, SKELETON_COMPONENT_NAMESPACE)(theme),
  }),
  {
    name: "skeleton",
  }
);
