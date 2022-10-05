import { useMemo } from "react";

import { getClassName, IThemedProps } from "@cheaaa/theme";

import { useStyles } from "./styles";
import { ComponentNames } from "./styles/types";
import SwitchButton from "./SwitchButton";
import { Locale } from "./types";

interface IHeaderProps extends Required<IThemedProps> {
  onNext: () => void;
  onPrev: () => void;
  visibleDate: Date;
  locale: Locale;
}

export const Header = ({
  baseAppearance,
  appearance,
  onNext,
  onPrev,
  locale,
  visibleDate,
}: IHeaderProps) => {
  const classes = useStyles();
  const classNames = useMemo(() => {
    const headerWrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "headerWrapper"
    );
    const titleWrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "titleWrapper"
    );
    const monthWrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "monthWrapper"
    );
    const yearWrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "yearWrapper"
    );

    return {
      headerWrapperClassName,
      titleWrapperClassName,
      monthWrapperClassName,
      yearWrapperClassName,
    };
  }, [classes, baseAppearance, appearance]);

  return (
    <div className={classNames.headerWrapperClassName}>
      <SwitchButton
        baseAppearance={baseAppearance}
        appearance={appearance}
        isNext={false}
        onClick={onPrev}
      />

      <span className={classNames.titleWrapperClassName}>
        <span className={classNames.monthWrapperClassName}>
          {visibleDate.toLocaleDateString(locale, { month: "long" })}
        </span>
        <span className={classNames.yearWrapperClassName}>
          {visibleDate.getFullYear()}
        </span>
      </span>
      <SwitchButton
        baseAppearance={baseAppearance}
        appearance={appearance}
        isNext
        onClick={onNext}
      />
    </div>
  );
};
