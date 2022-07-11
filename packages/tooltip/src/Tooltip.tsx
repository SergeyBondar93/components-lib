import { FC, memo } from "react";
import ReactTooltip, { TooltipProps } from "react-tooltip";
import { Portal } from "@cheaaa/portal";
import { getClassName, IThemedProps } from "@cheaaa/theme";

import { useStyles } from "./styles";
import { ComponentNames } from "./styles/types";

interface ITooltipProps extends IThemedProps, TooltipProps {}

export const Tooltip: FC<ITooltipProps> = memo(
  ({
    place = "right",
    arrowColor = "#636AFF",
    baseAppearance = "base",
    appearance = "base",
    ...props
  }) => {
    const classes = useStyles();

    return (
      <Portal>
        <ReactTooltip
          multiline
          arrowColor={arrowColor}
          className={getClassName<ComponentNames>(
            classes,
            baseAppearance,
            appearance,
            "body"
          )}
          effect="solid"
          place={place}
          offset={{ [place]: 11 }}
          // delayHide={1e10}
          {...props}
        />
      </Portal>
    );
  }
);

export { TooltipProps };
