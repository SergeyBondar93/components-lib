import { Tab, ConnectedTabsContext, TabsList, TabPanel } from "./components";

interface IConnectedTabs {
  Tab: typeof Tab;
  TabsContext: typeof ConnectedTabsContext;
  TabsList: typeof TabsList;
  TabPanel: typeof TabPanel;
}

export const ConnectedTabs: IConnectedTabs = {
  Tab,
  TabsContext: ConnectedTabsContext,
  TabsList,
  TabPanel,
};
