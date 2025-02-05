import React from "react";
import HeaderContent from "../Header/HeaderContent";
import MovieContent from "./MovieContents";
import EventContent from "./EventContent";
import SpecialHallContent from "./SpecialHallContent";
import GiftconContent from "./GiftconContent";
import NoticeContent from './NoticeContent';

function MainPage() {
    return (
        <>
            <HeaderContent />
            <MovieContent />
            <EventContent />
            <SpecialHallContent />
            <GiftconContent />
            <NoticeContent />
        </>
    );
}

export default MainPage;