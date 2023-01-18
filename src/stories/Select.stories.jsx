import { Select } from '../components/Select';
import '../index.css';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    options: {
      options: [
        { id: 'draft', name: 'draft' },
        { id: 'ready', name: 'ready' },
        { id: 'published', name: 'published' },
      ],
      control: { type: 'object' },
    },
  },
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Status',
  name: 'status',
  options: [
    { id: 'draft', name: 'draft' },
    { id: 'ready', name: 'ready' },
    { id: 'published', name: 'published' },
  ],
};
