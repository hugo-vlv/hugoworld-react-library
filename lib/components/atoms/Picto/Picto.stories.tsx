import type { Meta, StoryObj } from '@storybook/react';
import { Picto } from '@atoms/Picto';

const meta = {
  title: 'Atoms/Picto',
  component: Picto,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { },
} satisfies Meta<typeof Picto>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'beer',
    height: 50,
    width: 50,
  },
};

export const Large: Story = {
  args: {
    name: 'beer',
    height: 150,
    width: 150,
  },
};
