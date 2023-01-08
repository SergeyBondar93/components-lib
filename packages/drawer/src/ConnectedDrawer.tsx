import { FC, memo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { IDrawerProps, Drawer } from "./Drawer";
import { drawerActions, drawerSelector } from "./slice";

interface IConnectedDrawerProps
  extends Omit<IDrawerProps, "onClose" | "isOpen"> {
  name: string;
}

export const ConnectedDrawer: FC<IConnectedDrawerProps> = memo(
  ({ name, ...props }) => {
    const { isOpen } = useSelector(drawerSelector(name));
    const dispatch = useDispatch();

    const handleClose = useCallback(() => {
      dispatch(drawerActions.close({ name }));
    }, [name]);

    return (
      <Drawer name={name} {...props} isOpen={isOpen} onClose={handleClose} />
    );
  }
);
