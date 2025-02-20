import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "../components";

type StoryProps = ComponentProps<typeof TextInput>;

const meta: Meta<StoryProps> = {
  component: TextInput,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Text: Story = {
  args: {
    label: "Name",
    isFull: false,
  },
  render: (args) => <TextInput {...args} />,
};
