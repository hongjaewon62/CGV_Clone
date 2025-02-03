import React, {useState} from "react";
import styled from "styled-components";
import EventChartData from "../data/EventChartData";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Autoplay} from "swiper/modules";
import "swiper/css";
import "./SwiperNavigation.css";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const EventImg = styled.img`
    width: 310px;
    height: 207px;
    border-radius: 10px;
    z-index: 1;
    cursor: pointer;
`
const EventImgWrapper = styled.div`
    overflow: hidden;
    position: relative;
    width: 310px;
    height: 207px;
    border-radius: 10px;
`

const EventTitle = styled.div`
    display: block;
    overflow: hidden;
    margin-top: 16px;
    font-weight: 500;
    font-size: 18px;
    color: #222;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const EventData = styled.span`
    display: block;
    margin-top: 4px;
    font-size: 14px;
    color: #666;
`

function EventChart() {
    // const [play, setPlay] = useState(false);
    return(
        <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={3}
        navigation
        autoplay={{delay: 2500, disableOnInteraction: false}}
      >
        {
        EventChartData.map((event, index) => (
            <SwiperSlide key={index}>         
                <Wrapper>
                    <EventImgWrapper>
                        <EventImg src={event.img} />
                    </EventImgWrapper>
                    <EventTitle>{event.title}</EventTitle>
                    <EventData>{event.data}</EventData>
                </Wrapper>
            </SwiperSlide>
        ))}
        </Swiper>
    );
}

export default EventChart;