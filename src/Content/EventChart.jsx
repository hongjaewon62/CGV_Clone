import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "./SwiperNavigation.css";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
`;

const EventImg = styled.img`
    width: 310px;
    height: 207px;
    border-radius: 10px;
    z-index: 1;
`
const EventImgWrapper = styled.div`
    overflow: hidden;
    position: relative;
    width: 310px;
    height: 207px;
    border-radius: 10px;
`

function EventChart() {
    const eventImgs = [
        "img/Event1.jpg",
        "img/Event2.jpg",
        "img/Event3.jpg",
        "img/Event4.jpg",
        "img/Event5.jpg",
        "img/Event6.jpg"
    ];
    return(
        // <Wrapper>
        // <EventImgWrapper>
        //     <EventImg src="img/Event1.jpg" />
        //     <EventImg src="img/Event2.jpg" />
        //     <EventImg src="img/Event3.jpg" />
        // </EventImgWrapper>
        // </Wrapper>
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={3}
        navigation
      >
        {
        eventImgs.map((src, index) => (
            <SwiperSlide key={index}>         
                <Wrapper>
                    <EventImg src={src} />
                </Wrapper>
            </SwiperSlide>
        ))}
        </Swiper>
    );
}

export default EventChart;