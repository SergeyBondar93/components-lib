import { Story, Meta } from "@storybook/react";

import { Button } from "../src";

export default {
  component: Button,
  title: "Button",
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "I am button! V2 LOL",
};
