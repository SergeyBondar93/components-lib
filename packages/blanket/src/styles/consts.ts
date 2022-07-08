import { TransitionStatus } from "react-transition-group";

export const DEFAULT_ANIMATION_DURATION = 300;

type TransitionStatusMaps = {
  [key in TransitionStatus]: number;
};

export const defaultOpacityBlanket: TransitionStatusMaps = {
  entering: 0,
  entered: 0.2,
  exiting: 0,
  exited: 0,
  unmounted: 0,
};

export const BLANKET_COMPONENT_NAMESPACE = `@che/blanket`;

export const BLANKET_COMPONENTS_NAMES = {
  overlay: "overlay",
} as const;
