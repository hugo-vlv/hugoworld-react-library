import { screen, render } from '@utils/test-utils';

import { composeStory } from '@storybook/react';

import Meta, { Primary, Children } from './Button.stories';

const PrimaryButton = composeStory(Primary, Meta);
const ChildrenButton = composeStory(Children, Meta);

describe('Button.tsx', () => {
  it('renders primary button', () => {
    render(<PrimaryButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('renders button with children', () => {
    render(<ChildrenButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
