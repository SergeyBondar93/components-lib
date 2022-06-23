import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { formsReducer, FORMS_STATE_NAMESPACE } from "../src/slice";

import { BaseForm } from "./BaseForm";
import { PrefilledForm } from "./PrefilledForm";
const reducer = { [FORMS_STATE_NAMESPACE]: formsReducer };
const store = configureStore({ reducer });

// eslint-disable-next-line no-console
store.subscribe(() => console.log(store.getState()[FORMS_STATE_NAMESPACE]));

const WithStore = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default {
  title: "Form",
  decorators: [
    (Story) => (
      <WithStore>
        <Story />
      </WithStore>
    ),
  ],
};

export const Base = BaseForm.bind({});
export const Prefilled = PrefilledForm.bind({});
