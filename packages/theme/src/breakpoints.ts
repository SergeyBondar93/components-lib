import { mediaMinWidth, mediaMaxWidth, mediaBetweenWidth } from "./utils";

export const BREAKPOINTS = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1160,
  xxl: 1400,
  up: mediaMinWidth,
  down: mediaMaxWidth,
  between: mediaBetweenWidth,
} as const;
