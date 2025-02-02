import React from "react";
import HeaderContent from "../Header/HeaderContent";
import MovieContent from "./MovieContents";
import EventContent from "./EventContent";

function MainPage() {
    return (
        <>
            <HeaderContent />
            <MovieContent />
            <EventContent />
        </>
    );
}

export default MainPage;