import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { waitFor, within } from "@storybook/testing-library";

import { Footer } from ".";

export default {
  title: "Sign In/Footer",
  component: Footer,
  args: {},
  argTypes: {}
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() => {
      expect(canvas.getByText("Esqueceu sua senha?")).toBeInTheDocument();
      expect(
        canvas.getByText("Não possui conta? Crie uma agora!")
      ).toBeInTheDocument();
    });
  }
};
