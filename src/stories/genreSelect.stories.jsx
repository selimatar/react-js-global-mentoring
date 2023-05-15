import React from "react";
import GenreSelect from "../components/Genre/genreSelect";
import { genreList } from "../components/Genre/genre-list";

export default {
  title: "GenreSelect",
  component: GenreSelect,
  argTypes: {
    selectedGenre: { action: "genre selected"}
  },
};

const Template = (args) => <GenreSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  genreList: genreList,
  currentSelected: genreList[0].name,
  selectGenre: (index) => {
    const selectedGenre = genreList.find((genre) => genre.id === index);
    return selectedGenre;
  },
};

export const Documentary = Template.bind({});
Documentary.args = {
  genreList: genreList,
  currentSelected: genreList[1].name,
  selectGenre: (index) => {
    const selectedGenre = genreList.find((genre) => genre.id === index);
    return selectedGenre;
  },
};