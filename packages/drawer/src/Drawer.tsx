import { BaseDrawer, IBaseDrawerProps } from "./BaseDrawer";

export interface IDrawerProps extends Omit<IBaseDrawerProps, "classes"> {}

export const Drawer = (props: IDrawerProps) => {
  return <BaseDrawer {...props} />;
};
