import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";
import { SignIn } from ".";

export default {
  title: "Sign In/SignIn",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "Login realizado!",
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  // Dentro desta função realizamos os testes
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("Digite seu e-mail"),
      "ivanoliver131@gmail.com"
    );
    userEvent.type(canvas.getByPlaceholderText("************"), "12345678");

    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      expect(canvas.getByText("Login realizado!")).toBeInTheDocument();
    });
  },
};
