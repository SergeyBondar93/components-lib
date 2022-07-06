import { Story, Meta } from "@storybook/react";
import { ReactNode } from "react";
import { ThemeProvider, JssProvider } from "react-jss";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import { Button, IconButton } from "../src";

import { DeleteIcon, NavArrowIcon, SendIcon, BasketIcon } from "./Icons";
import { theme } from "./theme";

const wrapperStyles = { marginBottom: "15px" };

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
    type: disabled,
  },
} as Meta;

interface IStoryParams {
  children: string;
  href: string;
  type: "button" | "reset" | "submit";
  disabled: boolean;
  shouldFitContent: boolean;
}
// eslint-disable-next-line no-console
const onClick = () => console.log("Clicked!");

const ButtonTemplate: Story<IStoryParams> = (args) => {
  return <Button {...args} onClick={onClick} />;
};
const LinkComponent = (props) => {
  return <a {...props} />;
};

interface ICustomComponentProps {
  children: ReactNode;
  color: "red" | "green" | "blue";
}

const MyCustomComponent = ({
  children,
  color,
  ...props
}: ICustomComponentProps) => {
  return (
    <div style={{ color }} {...props}>
      {children}
    </div>
  );
};

interface ICustomComponentTemplateProps {
  disabled: boolean;
  shouldFitContent: boolean;
}

const CustomComponentTemplate: Story<ICustomComponentTemplateProps> = (
  args
) => {
  return (
    <>
      <h4>Custom Link Component</h4>
      <Button
        href="https://google.com"
        component={LinkComponent}
        {...args}
        onClick={onClick}
      >
        I am link!
      </Button>
      <h4>Added href attribute for make link</h4>
      <Button href="https://google.com" {...args} onClick={onClick}>
        I am link!
      </Button>
      <h4>React Router Link</h4>
      <BrowserRouter>
        <Button
          href="https://google.com"
          {...args}
          component={Link}
          to={"/"}
          onClick={onClick}
        >
          I am link!
        </Button>
      </BrowserRouter>
      <h4>Cusrom component </h4>
      <Button
        {...args}
        component={MyCustomComponent}
        color="green"
        onClick={onClick}
      >
        Custom div component
      </Button>
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

export const CustomComponent = CustomComponentTemplate.bind({});

CustomComponent.argTypes = {
  href: disabled,
  baseAppearance: disabled,
  appearance: disabled,
  component: disabled,
  onClick: disabled,
  target: disabled,
  type: disabled,
};

CustomComponent.args = {
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
                  <Button appearance={appearance} {...args} onClick={onClick} />
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
                        onClick={onClick}
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

interface IIconButtonTemplateProps {
  disabled: boolean;
  shouldFitContent: boolean;
  width: number;
  height: number;
  children: never;
  // component: never;
}

const IconButtonTemplate: Story<IIconButtonTemplateProps> = ({
  width,
  height,
  ...args
}) => {
  return (
    <>
      <div style={wrapperStyles}>
        <IconButton
          {...args}
          onClick={onClick}
          icon={<DeleteIcon width={width} height={height} />}
        />
      </div>
      <div style={wrapperStyles}>
        <IconButton
          {...args}
          component={LinkComponent}
          target="_blank"
          href="https://google.com"
          onClick={onClick}
          icon={<NavArrowIcon width={width} height={height} />}
        />
      </div>
      <div style={wrapperStyles}>
        <IconButton
          {...args}
          onClick={onClick}
          icon={<SendIcon width={width} height={height} />}
        />
      </div>
      <div style={wrapperStyles}>
        <IconButton
          {...args}
          onClick={onClick}
          icon={<BasketIcon width={width} height={height} />}
        />
      </div>
    </>
  );
};

export const IconButtons = IconButtonTemplate.bind({});

IconButtons.args = {
  type: "button",
  disabled: false,
  width: 25,
  height: 25,
};
