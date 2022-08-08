import { configureStore } from "@reduxjs/toolkit";
import { Story, Meta } from "@storybook/react";
import { useState } from "react";
import { ThemeProvider } from "react-jss";
import { Provider, useDispatch } from "react-redux";

import {
  ConnectedModal,
  Modal,
  modalActions,
  modalReducer,
  MODAL_STATE_NAMESPACE,
} from "../src";

import { ModalContent } from "./ModalContent";
import { theme } from "./theme";

const reducer = { [MODAL_STATE_NAMESPACE]: modalReducer };
const store = configureStore({ reducer });

const WithStore = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default {
  title: "Modal",
  decorators: [
    (Story) => (
      <WithStore>
        <Story />
      </WithStore>
    ),
  ],
} as Meta;

interface IStoryParams {
  withBlanket: boolean;
  withCloseButton: boolean;
  closeClickByBlanket: boolean;
  name?: string;
  appearance?: string;
}

export const ConnectedToStore: Story<IStoryParams> = ({
  name = "connected-modal",
  appearance,
  ...props
}) => {
  const dispatch = useDispatch();

  const handleOpen = () => dispatch(modalActions.open({ name }));

  return (
    <>
      <button onClick={handleOpen}>Open</button>
      <ConnectedModal
        name={name}
        appearance={appearance}
        title={"Connected Modal"}
        {...props}
      >
        <ModalContent />
      </ConnectedModal>
    </>
  );
};

ConnectedToStore.args = {
  withBlanket: true,
  withCloseButton: true,
  closeClickByBlanket: true,
};

export const Base: Story<IStoryParams> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [counter, setCounter] = useState(0);

  const handleToggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleToggleIsOpen}>Open</button>
      <Modal
        isOpen={isOpen}
        onClose={handleToggleIsOpen}
        name={"modal"}
        title={"Connected Modal"}
        {...props}
      >
        <ModalContent count={counter} onClick={() => setCounter(counter + 1)} />
        <button onClick={handleToggleIsOpen}>Close</button>
      </Modal>
    </>
  );
};

Base.args = ConnectedToStore.args;

export const ThemedModal = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <span>Changed Animation: </span>{" "}
      <ConnectedToStore
        name="changedAnimation"
        appearance="changedAnimation"
        {...props}
      />
      <br />
      <span>Full Screen: </span>
      <ConnectedToStore name="fullScreen" appearance="fullScreen" {...props} />
      <br />
      <span>Like a mobile application: </span>
      <ConnectedToStore name="likeMobile" appearance="likeMobile" {...props} />
    </ThemeProvider>
  );
};

ThemedModal.args = ConnectedToStore.args;
