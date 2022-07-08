import { CSSProperties } from "react";
import { TransitionStatus } from "react-transition-group";

import { BLANKET_COMPONENTS_NAMES } from "./consts";

type TransitionStatusMaps = {
  [key in TransitionStatus]: number;
};

export const defaultOpacityBlanket: TransitionStatusMaps = {
  entering: 0,
  entered: 1,
  exiting: 0,
  exited: 0,
  unmounted: 0,
};
export type ComponentNames =
  typeof BLANKET_COMPONENTS_NAMES[keyof typeof BLANKET_COMPONENTS_NAMES];

export type BlanketTheme = {
  [key in ComponentNames]: CSSProperties;
};
