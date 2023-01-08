import { BaseDrawer, DrawerPosition, IBaseDrawerProps } from "./BaseDrawer";

export interface IDrawerProps
  extends Omit<IBaseDrawerProps, "classes" | "position"> {
  position?: DrawerPosition;
}

export const Drawer = ({ position = "right", ...props }: IDrawerProps) => {
  return <BaseDrawer {...props} position={position} />;
};
