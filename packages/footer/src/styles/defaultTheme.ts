import { BREAKPOINTS, ComponentTheme } from "@cheaaa/theme";

import { FOOTER_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  [FOOTER_COMPONENTS_NAMES.infoWrapper]: {
    background: "red",
  },
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
    gap: "20px",
    justifyContent: "space-between",
    [BREAKPOINTS.up("md")]: {
      justifyContent: "flex-start",
    },
  },

  [FOOTER_COMPONENTS_NAMES.navigationAccordionWrapper]: {
    width: "fit-content",
    '&[data-shouldfitcontent="true"]': {
      width: "100%",
    },
  },
  [FOOTER_COMPONENTS_NAMES.navigationAccordionIcon]: {
    marginRight: "14px",
    transition: "0.2s",
    fill: "#718299",
    '&[data-is-open="true"]': {
      transform: "rotate(90deg)",
    },
  },
  [FOOTER_COMPONENTS_NAMES.navigationAccordionBody]: {
    position: "relative",
    overflow: "hidden",
    '&[data-is-opened="true"]': {
      overflow: "initial",
    },
  },
  /**
   * для отступа внутри children для правильного
   * высчитывания размеров блока необходимо добавлять padding к children
   */
  [FOOTER_COMPONENTS_NAMES.navigationAccordionChildrenWrapper]: {},
};
