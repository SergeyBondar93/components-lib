import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { formsReducer, FORMS_STATE_NAMESPACE } from "../src/slice";

import { BaseForm } from "./BaseForm";
const reducer = { [FORMS_STATE_NAMESPACE]: formsReducer };
const store = configureStore({ reducer });

// store.subscribe(() =>
// console.log((store.getState()[FORMS_STATE_NAMESPACE] as any).form)
// );

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

/**
 проблема в том что сначала ставим значение и что поле потрогано

 но в нём уже есть ошибка на тот момент потому что оно было не заполнено

 и только потом мы смотрим что модель изменилась и снимаем ошибку
 */
