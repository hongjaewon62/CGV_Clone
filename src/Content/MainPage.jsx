import React, { useState, useEffect } from "react";
import HeaderContent from "../Header/HeaderContent";
import MovieContent from "./MovieContents";
import EventContent from "./EventContent";
import SpecialHallContent from "./SpecialHallContent";
import GiftconContent from "./GiftconContent";
import NoticeContent from './NoticeContent';
import styled from "styled-components";

const ScrollToTopButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 120px;
    right: 18%;
    width: 48px;
    height: 48px;
    background: #ffffff;
    border: 1px solid #000;
    box-shadow: 1px 3px 6px 0 rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    cursor: pointer;
    display: ${(props) => (props.show ? "block" : "none")};
    transition: opacity 0.2s;
    z-index: 6;
`;

const ScrollButtonImg = styled.img`
    width: 15px;
    height: 21px;
`;

const ScrollButtonTicketingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 120px;
    right: ${(props) => (props.show ? "21.5%" : "18%")};
    opacity: ${(props) => (props.show ? 1 : 0)};
    width: 136px;
    padding: 12px 0 14px;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    background: linear-gradient(to left, rgb(255, 115, 86), rgb(251, 67, 87));
    box-shadow: 1px 3px 6px 0 rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    transition: right 0.4s;
    z-index: 5;
`;

function MainPage() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 120) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <HeaderContent />
            <MovieContent />
            <EventContent />
            <SpecialHallContent />
            <GiftconContent />
            <NoticeContent />
            <ScrollToTopButton show={showButton} onClick={scrollToTop}>
                <ScrollButtonImg src="img/gotoTop.png" />
            </ScrollToTopButton>
            <ScrollButtonTicketingWrapper show={showButton}>
                예매하기
            </ScrollButtonTicketingWrapper>
        </>
    );
}

export default MainPage;