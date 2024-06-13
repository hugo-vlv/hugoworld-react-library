import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '@atoms/Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'button',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'button',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    type: 'button',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    type: 'button',
    label: 'Button',
  },
};
