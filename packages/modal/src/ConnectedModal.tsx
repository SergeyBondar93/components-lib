import { FC, memo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { IModalProps, Modal } from "./Modal";
import { modalActions, modalSelector } from "./slice";

interface IConnectedModalProps extends Omit<IModalProps, "onClose" | "isOpen"> {
  name: string;
}

export const ConnectedModal: FC<IConnectedModalProps> = memo(
  ({ name, ...props }) => {
    const { isOpen } = useSelector(modalSelector(name));
    const dispatch = useDispatch();

    const handleClose = useCallback(() => {
      dispatch(modalActions.close({ name }));
    }, [name]);

    return (
      <Modal name={name} {...props} isOpen={isOpen} onClose={handleClose} />
    );
  }
);
