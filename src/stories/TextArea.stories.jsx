import { TextArea } from '../components/TextArea';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    name: {
      control: { type: 'text' },
    },
    rows: {
      controls: { type: 'number' },
    },
  },
};

const Template = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'TextArea',
  name: 'text_area',
  rows: 10,
};
