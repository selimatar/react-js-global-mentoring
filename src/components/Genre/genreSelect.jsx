import React, { useState } from "react";
import Genre from "./genre"
import "./css/genre-list.css";

const GenreSelect = ({ genreList, currentSelected, selectGenre }) => {
    const [selectedGenre, setSelectedGenre] = useState(currentSelected);
    const [activeIndex, setActiveIndex] = useState(1);
    const checkActive = (index, className) => activeIndex === index ? className : "";

    const handleClick = (index) => {
        const existedGenre = selectGenre(index);
        if(existedGenre) {
            setSelectedGenre(existedGenre.name);
        }
        setActiveIndex(index);
    };

    return (
        <div style={{width: "50%", margin: 40}}>
            <h2>Genre List Component</h2>
            <div className="tabs">
                {genreList && genreList.map((genre) => {
                    return <Genre key={genre} genre={genre} checkActive={checkActive} handleClick={handleClick}/>
                })}
            </div>
            <div className="panels">
                <div className={`panel ${checkActive(activeIndex, "active")}`}>
                    <p>{selectedGenre}</p>
                </div>
            </div>
        </div>
    );
}

export default GenreSelect;