import { TransitionStatus } from "react-transition-group";
import { ComponentTheme, Styles } from "@cheaaa/theme";

import { MODAL_COMPONENTS_NAMES } from "./consts";

export type TransitionStatusMaps<T> = {
  [key in TransitionStatus]: T;
};

export type ComponentNames =
  typeof MODAL_COMPONENTS_NAMES[keyof typeof MODAL_COMPONENTS_NAMES];

export type ModalThemeStyles = {
  [key in ComponentNames]?: Styles;
};

export type ModalTransitionsStyles = TransitionStatusMaps<ModalThemeStyles>;

export type ModalTheme = ComponentTheme<ComponentNames> &
  ModalTransitionsStyles;
