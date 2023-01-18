import { Badge } from '../components/Badge';
import '../index.css';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    style: {
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'dark'],
      control: { type: 'inline-radio' },
    },
  },
};

const Template = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  style: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  style: 'secondary',
};

export const Info = Template.bind({});
Info.args = {
  label: 'Info',
  style: 'info',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success',
  style: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Warning',
  style: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger',
  style: 'danger',
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Dark',
  style: 'dark',
};
