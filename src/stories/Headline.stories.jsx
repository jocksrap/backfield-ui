import { Headline } from '../components/Headline';
import '../index.css';

export default {
  title: 'Components/Headline',
  component: Headline,
  argTypes: {
    level: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' },
    },
    margin: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    text: {
      control: { type: 'text' },
    },
  },
};

const Template = (args) => <Headline {...args} />;

export const Headline1 = Template.bind({});
Headline1.args = { level: 1, margin: true, text: 'Lions Knock Out the Packers' };

export const Headline2 = Template.bind({});
Headline2.args = { level: 2, margin: true, text: 'Lions Knock Out the Packers' };

export const Headline3 = Template.bind({});
Headline3.args = { level: 3, margin: true, text: 'Lions Knock Out the Packers' };

export const Headline4 = Template.bind({});
Headline4.args = { level: 4, margin: true, text: 'Lions Knock Out the Packers' };

export const Headline5 = Template.bind({});
Headline5.args = { level: 5, margin: true, text: 'Lions Knock Out the Packers' };

export const Headline6 = Template.bind({});
Headline6.args = { level: 6, margin: true, text: 'Lions Knock Out the Packers' };
