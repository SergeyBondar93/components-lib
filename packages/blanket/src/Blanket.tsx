import { useRef, useMemo } from "react";
import { Transition } from "react-transition-group";
import { ENTERED, ENTERING, EXITING } from "react-transition-group/Transition";
import { useTheme } from "react-jss";
import { getClassName, ITheme, IThemedProps } from "@cheaaa/theme";

import { useStyles } from "./styles";
import { DEFAULT_ANIMATION_DURATION } from "./styles/consts";
import { ComponentNames } from "./styles/types";

export interface IBlanketProps extends IThemedProps {
  isVisible?: boolean;
  onClick?: () => void;
}

export const Blanket = ({
  appearance = "base",
  baseAppearance = "base",
  isVisible = false,
  onClick,
}: IBlanketProps) => {
  const blanketRef = useRef<HTMLDivElement>(null);
  const classes = useStyles();
  const theme = useTheme<ITheme>();

  const animationDuration =
    theme?.transition?.duration || DEFAULT_ANIMATION_DURATION;

  const className = useMemo(() => {
    return getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "overlay"
    );
  }, [classes, baseAppearance, appearance]);

  return (
    <Transition
      timeout={{
        enter: 0,
        exit: animationDuration,
      }}
      in={isVisible}
      nodeRef={blanketRef}
    >
      {(animationState) => {
        return (
          [ENTERING, ENTERED, EXITING].includes(animationState) && (
            <div
              ref={blanketRef}
              className={className}
              data-animation-state={animationState}
              onClick={onClick}
            />
          )
        );
      }}
    </Transition>
  );
};
