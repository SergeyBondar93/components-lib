import { bounceAnimations, bounceKeyframes } from "./BounceAnimation";
import { zoomAnimations, zoomKeyframes } from "./ZoomAnimation";
import { flipAnimations, flipKeyframes } from "./FlipAnimation";
import { slideAnimations, slideKeyframes } from "./SlideAnimation";
import {
  progressBarAnimation,
  progressBarKeyframes,
} from "./ProgressBarAnimation";

export const keyframes = {
  ...bounceKeyframes,
  ...zoomKeyframes,
  ...flipKeyframes,
  ...slideKeyframes,
  ...progressBarKeyframes,
};

export const animations = {
  ...bounceAnimations,
  ...zoomAnimations,
  ...flipAnimations,
  ...slideAnimations,
  ...progressBarAnimation,
};
