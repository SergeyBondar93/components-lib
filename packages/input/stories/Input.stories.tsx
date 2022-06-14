import { Story, Meta } from "@storybook/react";

import { Input } from "../src";

export default {
  component: Input,
  title: "Input",
} as Meta;

const Template: Story = () => <Input />;

export const Primary = Template.bind({});
