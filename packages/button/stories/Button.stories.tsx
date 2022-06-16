import { Story, Meta } from "@storybook/react";
import { ThemeProvider, JssProvider } from "react-jss";

import { Button } from "../src";

import { theme } from "./theme";

const disabled = {
  table: {
    disable: true,
  },
};

export default {
  component: Button,
  title: "Button",
  argTypes: {
    href: disabled,
    baseAppearance: disabled,
    appearance: disabled,
    component: disabled,
    onClick: disabled,
    target: disabled,
  },
} as Meta;

interface IStoryParams {
  children: string;
  href: string;
  type: "button" | "reset" | "submit";
  disabled: boolean;
  shouldFitContent: boolean;
}

const ButtonTemplate: Story<IStoryParams> = (args) => {
  return <Button {...args} />;
};
const LinkComponent = (props) => <a {...props} />;

const LinkTemplate: Story<IStoryParams> = (args) => {
  return (
    <>
      <h4>Custom Link Component</h4>
      <Button component={LinkComponent} {...args} />
      <h4>Added href attribute for make link</h4>
      <Button {...args} />
    </>
  );
};

export const Default = ButtonTemplate.bind({});

Default.args = {
  children: "Click me!",
  type: "button",
  disabled: false,
  shouldFitContent: false,
};

export const CustomLinkComponent = LinkTemplate.bind({});

CustomLinkComponent.argTypes = {
  href: disabled,
  baseAppearance: disabled,
  appearance: disabled,
  component: disabled,
  onClick: disabled,
  target: disabled,
  type: disabled,
};

CustomLinkComponent.args = {
  children: "I am link!",
  href: "https://google.com",
  target: "_blank",
  disabled: false,
  shouldFitContent: false,
};

const baseAppearanecs = ["small", "big"];
const appearanecs = ["primary", "secondary", "success", "warn", "dander"];

const tableStyles = {
  borderCollapse: "collapse",
} as const;

const cellStyles = {
  border: "1px solid black",
  padding: "10px",
  minWidth: "150px",
  height: "100px",
};

const ThemedTemplate = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <JssProvider generateId={({ key }) => key}>
        <table style={tableStyles}>
          <thead>
            <tr>
              <th style={cellStyles}>
                Appearance
                <span>→</span>
                <br />
                Base Appearance
                <span>↓</span>
              </th>
              {appearanecs.map((appearance) => (
                <th key={appearance} style={cellStyles}>
                  {appearance}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <th style={cellStyles}></th>
              {appearanecs.map((appearance) => (
                <th key={appearance} style={cellStyles}>
                  <Button appearance={appearance} {...args} />
                </th>
              ))}
            </tr>

            {baseAppearanecs.map((baseAppearance) => {
              return (
                <tr key={baseAppearance}>
                  <th style={cellStyles}>{baseAppearance}</th>
                  {appearanecs.map((appearance) => (
                    <th key={appearance} style={cellStyles}>
                      <Button
                        appearance={appearance}
                        baseAppearance={baseAppearance}
                        {...args}
                      />
                    </th>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </JssProvider>
    </ThemeProvider>
  );
};

export const Themed = ThemedTemplate.bind({});

Themed.args = Default.args;
