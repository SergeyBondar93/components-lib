import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";

import { Context } from "./context";
import { activePanelNameTabsSelector } from "./slice";

interface ITabContextProps {
  children: ReactNode;
  /**
   * Имя используемое для управления состоянием в сторе, для разделения одинаковых компонентов
   */
  tabsName: string;
  /**
   * Табы показываемые по умолчанию. принимает panelName
   */
  defaultActiveTabName: string;
}

export const TabContext: FC<ITabContextProps> = ({
  children,
  tabsName,
  defaultActiveTabName,
}) => {
  const activePanelName =
    useSelector(activePanelNameTabsSelector(tabsName)) || defaultActiveTabName;

  return (
    <Context.Provider value={{ activePanelName, tabsName }}>
      {children}
    </Context.Provider>
  );
};
