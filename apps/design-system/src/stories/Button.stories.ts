import { expect } from '@storybook/jest'
import { within, userEvent } from '@storybook/testing-library'

import { Button } from '@/stories/Button'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const ButtnUnit: Story = {
  args: {
    label: 'Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const button = await canvas.getByRole('button', { name: /Button/i })

    await userEvent.hover(button)

    await new Promise((resolve) => setTimeout(resolve, 100))

    const style = getComputedStyle(button)

    const expectedBlue300Color = 'rgb(59, 130, 246)'

    expect(style.backgroundColor).toBe(expectedBlue300Color)
  },
}
