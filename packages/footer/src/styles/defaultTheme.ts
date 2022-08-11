import { BREAKPOINTS, ComponentTheme } from "@cheaaa/theme";

import { FOOTER_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  [FOOTER_COMPONENTS_NAMES.navigationWrapper]: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: "4px 0px",
    [BREAKPOINTS.up("xl")]: {
      borderBottom: "1px solid rgba(113, 130, 153, 0.25)",
      borderTop: "1px solid rgba(113, 130, 153, 0.25)",
      padding: "25px 0px 23px 0px",
      flexDirection: "row",
    },
  },
  [FOOTER_COMPONENTS_NAMES.navigationList]: {
    fontSize: "13px",
    fontWeight: "400",
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    padding: "0px",
  },
  [FOOTER_COMPONENTS_NAMES.navigationListItem]: {
    marginBottom: "13px",
  },
  [FOOTER_COMPONENTS_NAMES.navigationListItemLink]: {
    textDecoration: "none",
    color: "#718299",
  },
  [FOOTER_COMPONENTS_NAMES.navigationListTitle]: {
    borderBottom: "none",
    pointerEvents: "none",
    margin: "0px 0px 11px 0px",
    padding: "0px",
    color: "#101820",
    fontSize: "13px",
  },

  [FOOTER_COMPONENTS_NAMES.bottomBlock]: {
    display: "flex",
    gap: "30px",
    margin: "25px 0px",
    flexDirection: "column-reverse",
    [BREAKPOINTS.up("sm")]: {
      flexDirection: "row",
      alignItems: "flex-end",
    },
  },
  [FOOTER_COMPONENTS_NAMES.infoWrapper]: {},
  [FOOTER_COMPONENTS_NAMES.infoCheLogo]: {
    display: "flex",
    alignItems: "center",
  },
  [FOOTER_COMPONENTS_NAMES.infoCheName]: {
    marginLeft: "10px",
    color: "#636AFF",
    fontSize: "13px",
  },
  [FOOTER_COMPONENTS_NAMES.infoCopyright]: {
    marginTop: "15px",
    fontSize: "11.5px",
    lineHeight: "15.72px",
    color: "#718299",
  },
  [FOOTER_COMPONENTS_NAMES.infoCopyrightBr]: {},
  [FOOTER_COMPONENTS_NAMES.infoCompanyInfo]: {
    marginTop: "10px",
    fontSize: "11.5px",
    lineHeight: "15.72px",
    color: "#718299",
  },
  [FOOTER_COMPONENTS_NAMES.infoPaymentIcons]: {
    marginTop: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& svg": {
      height: "100%",
    },
    height: "22px",
    [BREAKPOINTS.up("md")]: {
      height: "34px",
      justifyContent: "flex-start",
      gap: "20px",
    },
  },
};
