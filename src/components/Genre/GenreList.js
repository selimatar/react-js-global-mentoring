import React, { useState } from "react";
import Genre from "./Genre"
import "./genre-list.css";

const GenreList = () => {
    const genreList = [{name:"All", id:1}, {name:"Documentary", id:2}, {name:"Comedy", id:3}, {name:"Horror", id:4}];
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (index) => {
        const existedGenre = genreList.find((element) => element.id === index);
        if(existedGenre) {
            setSelectedGenre(existedGenre.name);
        }
        setActiveIndex(index);
    };
    const checkActive = (index, className) => activeIndex === index ? className : "";

    return (
      <>
        <div style={{width: "50%", margin: 40}}>
            <div className="tabs">
                {genreList && genreList.map((genre) => {
                    return <Genre genre={genre} checkActive={checkActive} handleClick={handleClick}/>
                })}
            </div>
            <div className="panels">
                <div className={`panel ${checkActive(activeIndex, "active")}`}>
                    <p>{selectedGenre}</p>
                </div>
            </div>
        </div>
      </>
    );
}

export default GenreList;