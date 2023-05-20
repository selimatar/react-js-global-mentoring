import React from 'react';
import Dialog from '../../components/Dialog/dialog';

export default {
  title: 'Dialog',
  component: Dialog,
};

const Template = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Example Dialog',
  onClose: () => console.log('Dialog closed'),
  children: <p>This is the content of the dialog.</p>,
};