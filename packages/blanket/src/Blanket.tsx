import { useRef } from "react";
import { Transition } from "react-transition-group";
import { ENTERED, ENTERING, EXITING } from "react-transition-group/Transition";
import { useTheme } from "react-jss";
import { getClassName, ITheme, IThemedProps } from "@cheaaa/theme";

import { useStyles } from "./styles";
import {
  defaultOpacityBlanket,
  DEFAULT_ANIMATION_DURATION,
} from "./styles/consts";
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

  return (
    <Transition
      timeout={{
        enter: 0,
        exit: theme?.transition?.duration || 2000 || DEFAULT_ANIMATION_DURATION,
      }}
      in={isVisible}
      nodeRef={blanketRef}
    >
      {(animationState) =>
        [ENTERING, ENTERED, EXITING].includes(animationState) && (
          <div
            ref={blanketRef}
            className={getClassName<ComponentNames>(
              classes,
              baseAppearance,
              appearance,
              "overlay",
              animationState
            )}
            style={{
              opacity: defaultOpacityBlanket[animationState],
            }}
            onClick={onClick}
          />
        )
      }
    </Transition>
  );
};
