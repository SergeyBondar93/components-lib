import { createContext } from "react";

interface Context {
  activePanelName: string;
  tabsName: string;
  setActivePanelName: any;
}

export const Context = createContext<Context>({
  activePanelName: "",
  tabsName: "",
  setActivePanelName: () => {},
});
