import React from "react";
import HeaderContent from "../Header/HeaderContent";
import MovieContent from "./MovieContents";
import EventContent from "./EventContent";
import SpecialHallContent from "./SpecialHallContent";

function MainPage() {
    return (
        <>
            <HeaderContent />
            <MovieContent />
            <EventContent />
            <SpecialHallContent />
        </>
    );
}

export default MainPage;