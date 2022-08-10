import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

import { usePortal } from "./usePortal";

export const Portal = ({ children }: PropsWithChildren<{}>) => {
  const elem = usePortal();

  return createPortal(
    <div onClick={(e) => e.stopPropagation()}>{children}</div>,
    elem as HTMLDivElement
  );
};
