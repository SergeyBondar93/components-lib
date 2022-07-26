import { getClassName, IThemedProps } from "@cheaaa/theme";
import { memo } from "react";

import { useStyles } from "./styles";
import { ComponentNames } from "./styles/types";
import { weekdays } from "./utils";

interface IWeekdaysProps extends Required<IThemedProps> {}

export const Weekdays = memo(
  ({ baseAppearance, appearance }: IWeekdaysProps) => {
    const classes = useStyles();

    const className = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "weekday"
    );

    return (
      <>
        {weekdays.map((weekday) => {
          return (
            <div className={className} key={weekday}>
              {weekday}
            </div>
          );
        })}
      </>
    );
  }
);
