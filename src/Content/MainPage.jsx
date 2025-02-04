import React from "react";
import HeaderContent from "../Header/HeaderContent";
import MovieContent from "./MovieContents";
import EventContent from "./EventContent";
import SpecialHallContent from "./SpecialHallContent";
import GiftconContent from "./GiftconContent";

function MainPage() {
    return (
        <>
            <HeaderContent />
            <MovieContent />
            <EventContent />
            <SpecialHallContent />
            <GiftconContent />
        </>
    );
}

export default MainPage;