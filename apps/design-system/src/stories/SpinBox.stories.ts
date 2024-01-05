import { expect } from '@storybook/jest'
import { userEvent, within } from '@storybook/testing-library'

import { SpinBox } from './SpinBox'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Example/SpinBox',
  component: SpinBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj

const min = 10
const max = 20
const defaultValue = 15

export const DefaultSpinBox: Story = {
  args: {
    defaultValue,
    min,
    max,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const incrementButton = await canvas.getByRole('button', { name: /\+/ })
    const decrementButton = await canvas.getByRole('button', { name: /-/ })
    const countDisplay = await canvas.getByTestId('count')

    expect(countDisplay).toHaveTextContent(defaultValue.toString())

    await Array.from({ length: max + 5 }).reduce(async (previousPromise, _) => {
      await previousPromise

      await userEvent.click(incrementButton)
    }, Promise.resolve())

    expect(countDisplay).toHaveTextContent(max.toString())

    await Array.from({ length: max + 5 }).reduce(async (previousPromise, _) => {
      await previousPromise

      await userEvent.click(decrementButton)
    }, Promise.resolve())

    expect(countDisplay).toHaveTextContent(min.toString())
  },
}
