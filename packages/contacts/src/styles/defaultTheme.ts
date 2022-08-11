import { ComponentTheme } from "@cheaaa/theme";

import { CONTACTS_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  [CONTACTS_COMPONENTS_NAMES.contactsList]: {
    padding: "0px",
    listStyle: "none",
    margin: "0px",
    display: "flex",
    flexDirection: "column",
    gap: "9px",
    width: "max-content",
    flexShrink: 0,
  },
  [CONTACTS_COMPONENTS_NAMES.contactsListItem]: {
    color: "#808FA4",
    fontSize: "13px",
    fontWeight: 400,
    letterSpacing: "-.45px",
  },

  [CONTACTS_COMPONENTS_NAMES.contactsListItemSocialNetworks]: {
    marginTop: "19px",
    display: "flex",
    gap: "20px",
  },
  [CONTACTS_COMPONENTS_NAMES.contactsSocialNetworkLink]: {},
  [CONTACTS_COMPONENTS_NAMES.contactsListItemLink]: {
    textDecoration: "none",
    marginRight: "3px",
    fontSize: "13px",
    fontWeight: 400,
    letterSpacing: "-.45px",
    color: "#636AFF",
  },
  [CONTACTS_COMPONENTS_NAMES.callUsButton]: {
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

    "&:hover": {
      background: "#EDF4FE",
    },
    "&:active": {
      transform: "scale(0.95)",
    },
  },
};
