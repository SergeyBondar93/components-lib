import { FC, ReactNode } from "react";
import { useContext } from "react";

import { Context } from "./context";

export interface ITabPanelProps {
  panelName: string;
  children: ReactNode;
}

export const TabPanel: FC<ITabPanelProps> = ({ panelName, children }) => {
  const { activePanelName } = useContext(Context);

  if (panelName !== activePanelName) return null;

  return <>{children}</>;
};
