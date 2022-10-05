import { BaseDropdown, IBaseDropdownProps } from "./BaseDropdown";
import { useSmoothDropdownStyles } from "./styles";

type IDropdownProps = Omit<IBaseDropdownProps, "classes">;

export const SmoothDropdown = (props: IDropdownProps) => {
  const classes = useSmoothDropdownStyles();

  return <BaseDropdown {...props} classes={classes} />;
};
