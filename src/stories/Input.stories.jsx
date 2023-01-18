import { Input } from '../components/Input';
import '../index.css';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    name: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    required: {
      control: { type: 'boolean' },
    },
    value: {
      control: { type: 'text' },
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: 'First Name',
  name: 'first_name',
  placeholder: '',
  required: false,
  type: 'text',
  value: '',
};

export const Email = Template.bind({});
Email.args = {
  label: 'Email',
  name: 'email',
  placeholder: '',
  required: true,
  type: 'email',
  value: '',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  name: 'password',
  placeholder: '',
  required: false,
  type: 'password',
  value: '',
};
