import React from "react";
import SearchForm from "../../components/Search/searchForm";

export default {
  title: "SearchForm",
  component: SearchForm,
  argTypes: {
    handleChange: { action: "search query changed" },
    handleSubmit: { action: "form submitted" },
  },
};

const Template = (args) => <SearchForm {...args} />;

export const Default = Template.bind({});

export const WithInitialQuery = Template.bind({});
WithInitialQuery.args = {
  value: "Initial query",
};

export const WithCustomSubmit = Template.bind({});
WithCustomSubmit.args = {
  handleSubmit: (value) => console.log(`Custom submit function: ${value}`),
};

export const WithCustomChange = Template.bind({});
WithCustomChange.args = {
  handleChange: (event) => console.log(`Custom change function: ${event.target.value}`),
};