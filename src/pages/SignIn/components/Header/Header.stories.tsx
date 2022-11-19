import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { waitFor, within } from "@storybook/testing-library";

import { Header } from ".";

export default {
  title: "Sign In/Header",
  component: Header,
  args: {},
  argTypes: {}
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() => {
      // expect(canvas.getByAltText("logo")).toBeInTheDocument();
      expect(canvas.getByText("Boilerplate - Vite 🔥🚀✨")).toBeInTheDocument();
      expect(
        canvas.getByText("Faça login e começe a usar! 😎")
      ).toBeInTheDocument();
    });
  }
};
