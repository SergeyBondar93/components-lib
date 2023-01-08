import { FC, useMemo } from "react";

import { BaseModal, IModalProps } from "@cheaaa/modal";

import {
  DRAWER_POSITION_BOTTOM,
  DRAWER_POSITION_LEFT,
  DRAWER_POSITION_RIGHT,
  DRAWER_POSITION_TOP,
  DRAWER_STYLES_BY_POSITION,
  useStyles,
} from "./styles";

export type DrawerPosition =
  | typeof DRAWER_POSITION_LEFT
  | typeof DRAWER_POSITION_RIGHT
  | typeof DRAWER_POSITION_TOP
  | typeof DRAWER_POSITION_BOTTOM;

export interface IBaseDrawerProps extends IModalProps {
  position: DrawerPosition;
}

export const BaseDrawer: FC<IBaseDrawerProps> = (props) => {
  const classes = useStyles();

  const componentStylesByPosition = useMemo(() => {
    const stylesset = DRAWER_STYLES_BY_POSITION[props.position];

    const formattedToAttrs = Object.entries(stylesset).map(
      ([componentName, style]) => [
        componentName,
        { style, "data-drawer-position": props.position },
      ]
    );

    return Object.fromEntries(formattedToAttrs);
  }, [props.position]);

  return (
    <BaseModal
      classes={classes}
      componentsProps={componentStylesByPosition}
      {...props}
    />
  );
};
