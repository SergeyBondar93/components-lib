import { CSSProperties, RefObject, useEffect, useRef } from "react";

import { isBrowser, noop, off, on } from "./utils";
import useMountedState from "./useMountedState";
import useSetState from "./useSetState";

export interface State {
  isSliding: boolean;
  value: number;
}

export interface Options {
  onScrub: (value: number) => void;
  onScrubStart: () => void;
  onScrubStop: (value: number) => void;
  reverse: boolean;
  styles: boolean | CSSProperties;
  vertical?: boolean;
}

export const useDoubleSlider = (
  refLine: RefObject<HTMLElement>,
  refPoint: RefObject<HTMLElement>,
  options: Partial<Options> = {}
): State => {
  const isMounted = useMountedState();
  const isSliding = useRef(false);
  const valueRef = useRef(0);
  const frame = useRef(0);
  const [state, setState] = useSetState<State>({
    isSliding: false,
    value: 0,
  });

  valueRef.current = state.value;

  useEffect(() => {
    if (isBrowser) {
      const styles = options.styles === undefined ? true : options.styles;
      const reverse = options.reverse === undefined ? false : options.reverse;

      if (refLine.current && styles) {
        refLine.current.style.userSelect = "none";
      }

      const startScrubbing = () => {
        if (!isSliding.current && isMounted()) {
          (options.onScrubStart || noop)();
          isSliding.current = true;
          setState({ isSliding: true });
          bindEvents();
        }
      };

      const stopScrubbing = () => {
        if (isSliding.current && isMounted()) {
          (options.onScrubStop || noop)(valueRef.current);
          isSliding.current = false;
          setState({ isSliding: false });
          unbindEvents();
        }
      };

      const onMouseDown = (event: MouseEvent) => {
        startScrubbing();
        onMouseMove(event);
      };
      const onMouseMove = options.vertical
        ? (event: MouseEvent) => onScrub(event.clientY)
        : (event: MouseEvent) => onScrub(event.clientX);

      const onTouchStart = (event: TouchEvent) => {
        startScrubbing();
        onTouchMove(event);
      };
      const onTouchMove = options.vertical
        ? (event: TouchEvent) => onScrub(event.changedTouches[0].clientY)
        : (event: TouchEvent) => onScrub(event.changedTouches[0].clientX);

      const bindEvents = () => {
        on(document, "mousemove", onMouseMove);
        on(document, "mouseup", stopScrubbing);

        on(document, "touchmove", onTouchMove);
        on(document, "touchend", stopScrubbing);
      };

      const unbindEvents = () => {
        off(document, "mousemove", onMouseMove);
        off(document, "mouseup", stopScrubbing);

        off(document, "touchmove", onTouchMove);
        off(document, "touchend", stopScrubbing);
      };

      const onScrub = (clientXY: number) => {
        cancelAnimationFrame(frame.current);

        frame.current = requestAnimationFrame(() => {
          if (isMounted() && refLine.current) {
            const rect = refLine.current.getBoundingClientRect();
            const pos = options.vertical ? rect.top : rect.left;
            const length = options.vertical ? rect.height : rect.width;

            // Prevent returning 0 when element is hidden by CSS
            if (!length) {
              return;
            }

            let value = (clientXY - pos) / length;

            if (value > 1) {
              value = 1;
            } else if (value < 0) {
              value = 0;
            }

            if (reverse) {
              value = 1 - value;
            }

            setState({
              value,
            });

            (options.onScrub || noop)(value);
          }
        });
      };

      on(refPoint.current, "mousedown", onMouseDown);
      on(refPoint.current, "touchstart", onTouchStart);

      return () => {
        off(refPoint.current, "mousedown", onMouseDown);
        off(refPoint.current, "touchstart", onTouchStart);
      };
    } else {
      return undefined;
    }
  }, [options.vertical]);

  return state;
};
