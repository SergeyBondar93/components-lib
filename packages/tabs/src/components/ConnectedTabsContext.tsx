import { FC, ReactNode, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { activePanelNameTabsSelector, tabsActions } from "../slice";

import { Context } from "./context";

export interface IConnectedTabsContextProps {
  children: ReactNode;
  /**
   * Имя используемое для управления состоянием в сторе, для разделения одинаковых компонентов
   */
  tabsName: string;
  /**
   * Табы показываемые по умолчанию. принимает panelName
   */
  defaultActivePanelName: string;
}

export const ConnectedTabsContext: FC<IConnectedTabsContextProps> = ({
  children,
  tabsName,
  defaultActivePanelName,
}) => {
  const dispatch = useDispatch();
  const activePanelName =
    useSelector(activePanelNameTabsSelector(tabsName)) ||
    defaultActivePanelName;

  const setActivePanelName = useCallback(({ tabsName, panelName }) => {
    dispatch(
      tabsActions.setActiveTab({
        tabsName,
        activePanelName: panelName,
      })
    );
  }, []);

  return (
    <Context.Provider value={{ activePanelName, tabsName, setActivePanelName }}>
      {children}
    </Context.Provider>
  );
};
