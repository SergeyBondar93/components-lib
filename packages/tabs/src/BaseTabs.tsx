import { Tab, TabsList, TabPanel, TabsContext } from "./components";

interface IBaseTabs {
  Tab: typeof Tab;
  TabsContext: typeof TabsContext;
  TabsList: typeof TabsList;
  TabPanel: typeof TabPanel;
}

export const Tabs: IBaseTabs = {
  Tab,
  TabsContext: TabsContext,
  TabsList,
  TabPanel,
};
