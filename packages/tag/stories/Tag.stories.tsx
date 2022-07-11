import { Meta } from "@storybook/react";
import { ThemeProvider } from "react-jss";

import { Tag } from "../src";

import { theme } from "./theme";

export default {
  title: "Tag",
} as Meta;

export const BaseTemplate = () => {
  return (
    <>
      <Tag>Base tag</Tag>
      <br />
      <Tag onClick={() => alert("Click by Tag!")}>Base tag</Tag>
    </>
  );
};

export const Themed = () => {
  return (
    <ThemeProvider theme={theme}>
      <BaseTemplate />
      <br />
      <Tag appearance="custom">Custom appearance</Tag>
    </ThemeProvider>
  );
};
