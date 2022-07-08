import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalData = { [key: string]: any };

type ModalPayload = {
  name: string;
};

type OpenModalPayload = ModalPayload & {
  data?: ModalData;
};

type CloseModalPayload = ModalPayload;
type OpenModalAction = PayloadAction<OpenModalPayload>;
type CloseModalAction = PayloadAction<CloseModalPayload>;

interface IModalState {
  [key: string]: {
    isOpen: boolean;
    data: ModalData;
  };
}

export const MODAL_STATE_NAMESPACE = "modal";

interface IModal<T extends {}> {
  isOpen: boolean;
  data: T;
}

const defaultModalState: IModal<{}> = {
  isOpen: false,
  data: {},
};

const initialState: IModalState = {};

export interface IStoreWithModalState {
  [MODAL_STATE_NAMESPACE]: IModalState;
}

const ModalSlice = createSlice({
  name: MODAL_STATE_NAMESPACE,
  initialState,
  reducers: {
    open: (state, { payload: { name, data = {} } }: OpenModalAction) => {
      state[name] = {
        isOpen: true,
        data,
      };
    },
    close: (state, { payload: { name } }: CloseModalAction) => {
      if (state[name]) {
        state[name].isOpen = false;
      }
    },
  },
});

export const modalSelector =
  <T extends {} = never>(name: string) =>
  (state: IStoreWithModalState): IModal<T> =>
    (state[MODAL_STATE_NAMESPACE][name] as IModal<T>) || defaultModalState;

export const isSomeModalOpenSelector = (state: IStoreWithModalState) => {
  return Object.values(state[MODAL_STATE_NAMESPACE]).some(
    ({ isOpen }) => isOpen
  );
};

export const { reducer: modalReducer, actions: modalActions } = ModalSlice;
