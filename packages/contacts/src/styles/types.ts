import { CONTACTS_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof CONTACTS_COMPONENTS_NAMES[keyof typeof CONTACTS_COMPONENTS_NAMES];
