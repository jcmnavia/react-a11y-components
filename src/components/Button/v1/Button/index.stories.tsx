import { FC } from 'react';
import { ComponentMeta, ComponentStory as Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { ButtonProperties } from '.';
export default {
  component: Button,
  title: 'Button'
} as ComponentMeta<typeof Button>;

const Template: Story<FC<ButtonProperties>> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Basic Log Button',
  onClick: action('Button 1 clicked')
};

export const ToggleButton = Template.bind({});

ToggleButton.args = {
  children: 'Basic Log Button',
  onClick: action('Button 2 clicked'),
  name: 'Example',
  ariaLabel: 'example label'
};
