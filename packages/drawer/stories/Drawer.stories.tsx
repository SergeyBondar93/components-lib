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
  const [params, setParams] = useState<any>({
    isOpen: false,
    position: "left",
  });

  const handleOpen = (position: any) => () => {
    setParams({ isOpen: true, position });
  };
  const handleClose = () => {
    setParams({ isOpen: false, position: params.position });
  };

  return (
    <>
      <button onClick={handleOpen("left")}>LEFT</button>
      <button onClick={handleOpen("right")}>RIGHT</button>
      <button onClick={handleOpen("top")}>TOP</button>
      <button onClick={handleOpen("bottom")}>BOTTOM</button>
      <Drawer
        isOpen={params.isOpen}
        position={params.position}
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
