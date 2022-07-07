import { getClassName } from "@cheaaa/theme";
import { useMemo } from "react";

import { CheckboxBase, IBaseCheckboxProps } from "./CheckboxBase";
import { useSwitchStyles } from "./styles";
import { SwitcherComponentNames } from "./styles/types";

export interface ITogglerProps {
  checked: boolean;
  className?: string;
}

export interface ISwitchProps extends Omit<IBaseCheckboxProps, "classes"> {
  toggler?: (props: ITogglerProps) => JSX.Element;
}

const DefaultToggler = ({ checked, className }: ITogglerProps) => {
  return <div className={className} data-checked={String(!!checked)} />;
};

export const Switcher = ({
  baseAppearance = "base",
  appearance = "base",
  toggler,
  ...props
}: ISwitchProps) => {
  const classes = useSwitchStyles();

  const togglerClassName = useMemo(() => {
    return getClassName<SwitcherComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "toggler"
    );
  }, [classes, baseAppearance, appearance]);

  const Icon = useMemo(() => {
    return toggler || DefaultToggler;
  }, [toggler]);

  return (
    <CheckboxBase
      {...props}
      baseAppearance={baseAppearance}
      appearance={appearance}
      classes={classes}
      checkedIcon={<Icon className={togglerClassName} checked />}
      uncheckedIcon={<Icon className={togglerClassName} checked={false} />}
    />
  );
};
