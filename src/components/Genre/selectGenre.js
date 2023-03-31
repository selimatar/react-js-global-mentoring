import { genreList } from "./genre-list";

export const selectGenre = (index) => {
    const existedGenre = genreList.find((element) => element.id === index);
    return existedGenre;
}