import React from 'react';
import Counter from '../components/Counter/counter';

export default {
  title: "Counter",
  component: Counter,
  argTypes: {
    count: { control: 'number' },
    onIncrement: { action: 'incremented' },
    onDecrement: { action: 'decremented' },
  },
};

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});

export const WithInitialCount = Template.bind({});
WithInitialCount.args = {
  count: 5,
};

export const WithCustomIncrement = Template.bind({});
WithCustomIncrement.args = {
  onIncrement: () => alert('Custom increment function'),
};

export const WithCustomDecrement = Template.bind({});
WithCustomDecrement.args = {
  onDecrement: () => alert('Custom decrement function'),
};