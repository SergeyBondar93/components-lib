import { getClassName, IThemedProps } from "@cheaaa/theme";
import { memo, useMemo } from "react";

import { useStyles } from "./styles";
import { ComponentNames } from "./styles/types";
import { Locale } from "./types";
import { getWeekdayNamesByLocale } from "./utils";

interface IWeekdaysProps extends Required<IThemedProps> {
  locale: Locale;
}

export const Weekdays = memo(
  ({ baseAppearance, appearance, locale }: any & IWeekdaysProps) => {
    const classes = useStyles();

    const className = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "weekday"
    );

    const englishWeekdays = useMemo(() => getWeekdayNamesByLocale("en"), []);

    const weekdays = useMemo(() => getWeekdayNamesByLocale(locale), [locale]);

    return (
      <>
        {weekdays.map((weekday, index) => {
          return (
            <span
              className={className}
              key={weekday}
              data-weekday={englishWeekdays[index].toLowerCase()}
            >
              {weekday}
            </span>
          );
        })}
      </>
    );
  }
);
