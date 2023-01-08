import { configureStore } from "@reduxjs/toolkit";
import { Story, Meta } from "@storybook/react";
import { useState } from "react";
import { Provider } from "react-redux";

import { Drawer, DRAWER_STATE_NAMESPACE, drawerReducer } from "../src";

import { DrawerContent } from "./DrawerContent";

const reducer = { [DRAWER_STATE_NAMESPACE]: drawerReducer };
const store = configureStore({ reducer });

const WithStore = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default {
  title: "Drawer",
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

export const Base: Story<IStoryParams> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>Open</button>
      <Drawer
        isOpen={isOpen}
        onClose={handleClose}
        name={"drawer"}
        title={"Drawer"}
        {...props}
      >
        <DrawerContent />
        <button onClick={handleClose}>Close</button>
      </Drawer>
    </>
  );
};
