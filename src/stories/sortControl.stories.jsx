import React from "react";
import SortControl from "../components/SortControl/sortControl";

export default {
  title: "SortControl",
  component: SortControl,
  argTypes: {
    currentSelection: { control: 'select', options: ['release-date', 'title'] },
    handleSelectionChange: { action: "selection changed" }
  },
};

const Template = (args) => <SortControl {...args} />;

export const Default = Template.bind({});
Default.args = {
    currentSelection: 'title',
    onSelectionChange: (value) => {
        console.log(`Value has been changed with: ${value}`);
    },
};

export const WithRelaseDate = Template.bind({});
WithRelaseDate.args = {
    currentSelection: 'release-date',
};