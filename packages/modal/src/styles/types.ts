import { TransitionStatus } from "react-transition-group";

import { MODAL_COMPONENTS_NAMES } from "./consts";

export type TransitionStatusMaps<T> = {
  [key in TransitionStatus]: T;
};

export type ComponentNames =
  typeof MODAL_COMPONENTS_NAMES[keyof typeof MODAL_COMPONENTS_NAMES];
