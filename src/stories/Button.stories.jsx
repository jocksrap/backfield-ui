import { Button } from '../components/Button';
import '../index.css';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    style: {
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger'],
      control: { type: 'inline-radio' },
    },
    type: {
      options: ['submit', 'reset', 'button'],
      control: { type: 'inline-radio' },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'Submit', size: 'md', style: 'primary', type: 'submit' };

export const Secondary = Template.bind({});
Secondary.args = { label: 'Cancel', size: 'md', style: 'secondary', type: 'submit' };

export const Info = Template.bind({});
Info.args = { label: 'Submit', size: 'md', style: 'info', type: 'submit' };

export const Success = Template.bind({});
Success.args = { label: 'Submit', size: 'md', style: 'success', type: 'submit' };

export const Warning = Template.bind({});
Warning.args = { label: 'Submit', size: 'md', style: 'warning', type: 'submit' };

export const Danger = Template.bind({});
Danger.args = { label: 'Remove', size: 'md', style: 'danger', type: 'submit' };

export const Dark = Template.bind({});
Dark.args = { label: 'Remove', size: 'md', style: 'dark', type: 'submit' };
