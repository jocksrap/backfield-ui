import { Alert } from '../components/Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    message: {
      options: { type: 'text' },
    },
    style: {
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger'],
      control: { type: 'inline-radio' },
    },
  },
};

const Template = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  message: 'There seems to be a problem.',
  style: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  message: 'There seems to be a problem.',
  style: 'secondary',
};

export const Info = Template.bind({});
Info.args = {
  message: 'There seems to be a problem.',
  style: 'info',
};

export const Success = Template.bind({});
Success.args = {
  message: 'There seems to be a problem.',
  style: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'There seems to be a problem.',
  style: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  message: 'There seems to be a problem.',
  style: 'danger',
};
