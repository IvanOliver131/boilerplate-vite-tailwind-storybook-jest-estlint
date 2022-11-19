import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";

import { Form } from ".";

export default {
  title: "Sign In/Form",
  component: Form,
  args: {},
  argTypes: {}
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("Digite seu e-mail"),
      "ivanoliver131@gmail.com"
    );
    userEvent.type(canvas.getByPlaceholderText("************"), "12345678");

    // userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      expect(canvas.getByText("Endereço de e-mail")).toBeInTheDocument();
      expect(canvas.getByText("Sua senha")).toBeInTheDocument();
    });
  }
};
