import { createContext } from "react";

interface ITabsContext {
  activePanelName: string;
  tabsName: string;
}

export const Context = createContext<ITabsContext>({
  activePanelName: "",
  tabsName: "",
});
