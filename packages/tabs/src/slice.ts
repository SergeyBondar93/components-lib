import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

type TabsData = { [key: string]: any };

type SetActiveTabPayload = {
  data?: TabsData;
  tabsName: string;
  activePanelName: string;
};

type SetActiveTabAction = PayloadAction<SetActiveTabPayload>;

interface ITabsState {
  [key: string]: {
    data?: TabsData;
    activePanelName: string;
  };
}

export const TABS_STATE_NAMESPACE = "tabs";

interface ITabs<T extends {}> {
  activePanelName: string;
  data: T;
}

const defaultTabsState: ITabs<{}> = {
  activePanelName: "",
  data: {},
};

const initialState: ITabsState = {};

export interface IStoreWithTabsState {
  [TABS_STATE_NAMESPACE]: ITabsState;
}

const TabsSlice = createSlice({
  name: TABS_STATE_NAMESPACE,
  initialState,
  reducers: {
    setActiveTab: (
      state,
      { payload: { tabsName, activePanelName, data = {} } }: SetActiveTabAction
    ) => {
      state[tabsName] = {
        activePanelName,
        data,
      };
    },
  },
});

export const tabsSelector =
  <T extends {} = never>(tabsName: string) =>
  (state: IStoreWithTabsState): ITabs<T> =>
    (state[TABS_STATE_NAMESPACE][tabsName] as ITabs<T>) || defaultTabsState;

export const activePanelNameTabsSelector = <T extends string>(
  tabsName: string
) =>
  createSelector(
    tabsSelector(tabsName),
    ({ activePanelName }) => activePanelName as T
  );

export const { reducer: tabsReducer, actions: tabsActions } = TabsSlice;
