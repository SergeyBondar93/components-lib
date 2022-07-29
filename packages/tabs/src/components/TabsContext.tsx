import { FC, ReactNode, useCallback, useEffect, useState } from "react";

import { Context } from "./context";

export interface ITabsContextProps {
  children: ReactNode;
  /**
   * Табы показываемые по умолчанию. принимает panelName
   */
  activePanelName: string;

  /**
   * Контроль activePanelName только только через props.
   * @default false
   */
  isControlled?: boolean;
}

export const TabsContext: FC<ITabsContextProps> = ({
  children,
  activePanelName: activePanelNameProps,
  isControlled = false,
}) => {
  const [activePanelName, setActivePanelName] = useState(activePanelNameProps);

  useEffect(() => {
    setActivePanelName(activePanelNameProps);
  }, [activePanelNameProps]);

  const handleSetActivePanelName = useCallback(
    ({ panelName }) => {
      !isControlled && setActivePanelName(panelName);
    },
    [isControlled]
  );

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
