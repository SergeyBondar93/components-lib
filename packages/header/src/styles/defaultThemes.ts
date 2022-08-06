import { ComponentTheme } from "@cheaaa/theme";
import {
  ENTERED,
  ENTERING,
  EXITING,
  EXITED,
} from "react-transition-group/Transition";

import { HEADER_COMPONENTS_NAMES } from "./consts";
import { HeaderComponentNames } from "./types";

export const defaultHeaderDropdownTheme: Required<
  ComponentTheme<HeaderComponentNames>
> = {
  [HEADER_COMPONENTS_NAMES.headerWrapper]: {
    display: "flex",
    justifyContent: "space-between",
    height: "52px",
    alignItems: "center",
  },

  [HEADER_COMPONENTS_NAMES.mainLogo]: {},
  [HEADER_COMPONENTS_NAMES.menus]: {
    display: "flex",
    gap: "9px",
  },
  [HEADER_COMPONENTS_NAMES.whyNew]: {
    height: "32px",
    border: "1px solid rgba(255,255,255,0.55)",
    background: "transparent",
    textDecoration: "none",
    boxSizing: "border-box",
    color: "white",
    flexShrink: 0,
    cursor: "pointer",
    borderRadius: "16px",
    padding: "0px 12px",
    transition: "0.2s",
    "&:hover": {
      border: "1px solid rgb(255,255,255)",
    },
    "&:active": {
      transform: "scale(0.96)",
    },
  },
  [HEADER_COMPONENTS_NAMES.contactsList]: {
    padding: "12px",
    listStyle: "none",
    margin: "0px",
    display: "flex",
    flexDirection: "column",
    gap: "9px",
  },
  [HEADER_COMPONENTS_NAMES.contactsListItem]: {
    color: "#808FA4",
    fontSize: "13px",
    fontWeight: 400,
    letterSpacing: "-.45px",
  },

  [HEADER_COMPONENTS_NAMES.contactsListItemLink]: {
    textDecoration: "none",
    marginRight: "3px",
    fontSize: "13px",
    fontWeight: 400,
    letterSpacing: "-.45px",
    color: "#636AFF",
  },
  [HEADER_COMPONENTS_NAMES.callUsButton]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "25px",
    background: "white",
    border: "1px solid currentColor",
    borderRadius: "8px",
    padding: "0 6px",
    color: "#636AFF",
    cursor: "pointer",
    transition: "0.2s",
    "& svg": {
      marginRight: "5px",
    },

    "&:active": {
      transform: "scale(0.95)",
    },
  },
  [HEADER_COMPONENTS_NAMES.menuList]: {
    padding: "5px",
  },
  [HEADER_COMPONENTS_NAMES.menuListItem]: {
    display: "flex",
    alignItems: "center",
    height: "31px",
    padding: "4px 14px 4px 4px",
    borderRadius: "8px",
    color: "#101820",
    textDecoration: "none",
    background: "transparent",
    cursor: "pointer",
    width: "100%",
    border: "none",
    boxSizing: "border-box",
    fontSize: "14px",
    letterSpacing: "-.45px",
    fontWeight: 400,
    "&:hover": {
      color: "#636AFF",
      background: "#EDF4FE",
    },
  },
  [HEADER_COMPONENTS_NAMES.menuListItemIcon]: {
    width: "19px",
    marginRight: "11px",

    textAlign: "center",
  },

  [HEADER_COMPONENTS_NAMES.dropdownWrapper]: {
    position: "relative",
    display: "inline-block",
    '&[data-shouldfitcontent="true"]': {
      width: "100%",
    },
  },
  [HEADER_COMPONENTS_NAMES.dropdownTitle]: {
    width: "32px",
    height: "32px",
    border: "1px solid rgba(255,255,255,0.55)",
    background: "transparent",
    textDecoration: "none",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "16px",
    transition: "0.2s",
    cursor: "pointer",
    "&:hover": {
      border: "1px solid rgb(255,255,255)",
    },
    "&:active": {
      transform: "scale(0.95)",
    },
  },

  [HEADER_COMPONENTS_NAMES.dropdownBody]: {
    right: "0px",
    position: "absolute",
    zIndex: 1,
    background: "#FFF",
    maxHeight: "fit-content",
    transform: "translateY(10px)",
    boxShadow: "0 2px 12px rgb(0 0 0 / 15%)",
    borderRadius: "12px",
    width: "max-content",

    transition: "0.3s",
    [`&[data-animation-state="${ENTERING}"]`]: {
      opacity: 0,
    },
    [`&[data-animation-state="${ENTERED}"]`]: {
      opacity: 1,
    },
    [`&[data-animation-state="${EXITING}"]`]: {
      opacity: 0,
    },
    [`&[data-animation-state="${EXITED}"]`]: {
      opacity: 0,
    },

    "&::-webkit-scrollbar": {
      width: "4px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#485B75",
    },
  },
};
