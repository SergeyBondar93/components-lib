import { getClassName, IThemedProps } from "@cheaaa/theme";
import { useMemo } from "react";

import { useStyles } from "./styles";
import { ComponentNames } from "./styles/types";
import SwitchButton from "./SwitchButton";
import { months } from "./utils";

interface IHeaderProps extends Required<IThemedProps> {
  selectedMonth: number;
  selectedYear: number;
  onNext: any;
  onPrev: any;
}

export const Header = ({
  baseAppearance,
  appearance,
  selectedMonth,
  selectedYear,
  onNext,
  onPrev,
}: IHeaderProps) => {
  const classes = useStyles();
  const classNames = useMemo(() => {
    const wrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "wrapper"
    );
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
      wrapperClassName,
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
          {months[selectedMonth]}
        </span>
        <span className={classNames.yearWrapperClassName}>{selectedYear}</span>
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