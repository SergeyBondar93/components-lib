import { BREAKPOINTS, ComponentTheme } from "@cheaaa/theme";

import { FOOTER_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  [FOOTER_COMPONENTS_NAMES.wrapper]: {},
  [FOOTER_COMPONENTS_NAMES.cheLogo]: {
    display: "flex",
    alignItems: "center",
  },
  [FOOTER_COMPONENTS_NAMES.cheName]: {
    marginLeft: "10px",
    color: "#636AFF",
    fontSize: "13px",
  },
  [FOOTER_COMPONENTS_NAMES.copyright]: {
    marginTop: "15px",
    fontSize: "13px",
    color: "#718299",
  },
  [FOOTER_COMPONENTS_NAMES.copyrightBr]: {},
  [FOOTER_COMPONENTS_NAMES.companyInfo]: {
    marginTop: "10px",
    fontSize: "13px",
    color: "#718299",
  },
  [FOOTER_COMPONENTS_NAMES.paymentIcons]: {
    marginTop: "15px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    justifyContent: "space-between",
    [BREAKPOINTS.up("md")]: {
      justifyContent: "flex-start",
    },
  },
};
