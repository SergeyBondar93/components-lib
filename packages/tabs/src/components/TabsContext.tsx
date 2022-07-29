import { FC, ReactNode, useCallback, useEffect, useState } from "react";

import { Context } from "./context";

export interface ITabsContextProps {
  children: ReactNode;
  /**
   * Табы показываемые по умолчанию. принимает panelName
   */
  activePanelName: string;
}

export const TabsContext: FC<ITabsContextProps> = ({
  children,
  activePanelName: activePanelNameProps,
}) => {
  const [activePanelName, setActivePanelName] = useState(activePanelNameProps);

  useEffect(() => {
    setActivePanelName(activePanelNameProps);
  }, [activePanelNameProps]);

  const handleSetActivePanelName = useCallback(({ panelName }) => {
    setActivePanelName(panelName);
  }, []);

  return (
    <Context.Provider
      value={{
        activePanelName,
        setActivePanelName: handleSetActivePanelName,
        tabsName: "",
      }}
    >
      {children}
    </Context.Provider>
  );
};
