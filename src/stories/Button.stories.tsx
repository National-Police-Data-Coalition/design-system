import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../components";

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "link"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["large", "medium", "small"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const ExampleButton: Story = {
  args: {
    buttonText: "Label",
    variant: "primary",
    size: "large",
    isFull: false,
    isDisabled: false,
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};
