import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DrawerData = { [key: string]: any };

type DrawerPayload = {
  name: string;
};

type OpenDrawerPayload = DrawerPayload & {
  data?: DrawerData;
};

type CloseDrawerPayload = DrawerPayload;
type OpenDrawerAction = PayloadAction<OpenDrawerPayload>;
type CloseDrawerAction = PayloadAction<CloseDrawerPayload>;

interface IDrawerState {
  [key: string]: {
    isOpen: boolean;
    data: DrawerData;
  };
}

export const DRAWER_STATE_NAMESPACE = "drawer";

interface IDrawer<T extends {}> {
  isOpen: boolean;
  data: T;
}

const defaultDrawerState: IDrawer<{}> = {
  isOpen: false,
  data: {},
};

const initialState: IDrawerState = {};

export interface IStoreWithDrawerState {
  [DRAWER_STATE_NAMESPACE]: IDrawerState;
}

const DrawerSlice = createSlice({
  name: DRAWER_STATE_NAMESPACE,
  initialState,
  reducers: {
    open: (state, { payload: { name, data = {} } }: OpenDrawerAction) => {
      state[name] = {
        isOpen: true,
        data,
      };
    },
    close: (state, { payload: { name } }: CloseDrawerAction) => {
      if (state[name]) {
        state[name].isOpen = false;
      }
    },
  },
});

export const drawerSelector =
  <T extends {} = never>(name: string) =>
  (state: IStoreWithDrawerState): IDrawer<T> =>
    (state[DRAWER_STATE_NAMESPACE][name] as IDrawer<T>) || defaultDrawerState;

export const isSomeDrawerOpenSelector = (state: IStoreWithDrawerState) => {
  return Object.values(state[DRAWER_STATE_NAMESPACE]).some(
    ({ isOpen }) => isOpen
  );
};

export const { reducer: drawerReducer, actions: drawerActions } = DrawerSlice;
