import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

import { usePortal } from "./usePortal";

export const Portal = ({ children }: PropsWithChildren<{}>) => {
  const elem = usePortal();

  // Фича-баг с тем как работаю всплытия событий в реакте
  // что бы не всплывало из портала в дом дерево https://github.com/facebook/react/issues/11387
  return createPortal(
    <div onClick={(e) => e.stopPropagation()}>{children}</div>,
    elem as HTMLDivElement
  );
};
