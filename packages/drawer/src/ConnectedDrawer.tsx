import { FC, memo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DrawerPosition } from "./BaseDrawer";
import { IDrawerProps, Drawer } from "./Drawer";
import { drawerActions, drawerSelector } from "./slice";

interface IConnectedDrawerProps
  extends Omit<IDrawerProps, "onClose" | "isOpen" | "position"> {
  position?: DrawerPosition;
  name: string;
}

export const ConnectedDrawer: FC<IConnectedDrawerProps> = memo(
  ({ name, position = "right", ...props }) => {
    const { isOpen } = useSelector(drawerSelector(name));
    const dispatch = useDispatch();

    const handleClose = useCallback(() => {
      dispatch(drawerActions.close({ name }));
    }, [name]);

    return (
      <Drawer
        name={name}
        {...props}
        position={position}
        isOpen={isOpen}
        onClose={handleClose}
      />
    );
  }
);
