import React from "react";
import styled from "styled-components";
import DetailButton from "../Ui/DetailButton";
import EventChart from "./EventChart";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    height: 395px;
`;

const EventWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 1040px;
    height: 329px;
    padding: 60px 0 6px;
`;

const EventTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 980px;
    height: 37px;
    margin: 0 0 20px;
`;

const TitleWrapper = styled.div`
    float: left;
    height: auto;
    margin: 0;
    font-weight: 700;
    font-size: 26px;
    color: #222;
    line-height: 1.423em;
    background-image: none;
`;

const EventSwiperWrapper = styled.div`
    position: relative;
    width: 980px;
    height: 272px;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
`;

function EventContent() {
    return(
        <Wrapper>
            <EventWrapper>
                <EventTitleWrapper>
                    <TitleWrapper>EVENT</TitleWrapper>
                    <DetailButton title="전체보기"/>
                </EventTitleWrapper>
                <EventSwiperWrapper>
                    <EventChart>

                    </EventChart>
                </EventSwiperWrapper>
            </EventWrapper>
        </Wrapper>
    );
}

export default EventContent;