import React from "react";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieChartData from "../data/MovieChartData";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "./SwiperNavigation.css";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    //padding-right: 32px;
`

const MovieName = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    margin-top: 14px;
    font-size: 18px;
    color: #222;
    line-height: 1.167em;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 170px;
    font-weight: 500;
`;

const GoldenEggWrapper = styled.span`
    margin-top: 9px;
    font-size: 14px;
    color: #444;
`;

const GoldenEggImg = styled.img`
    width: 16px;
    height: 16px;
`

const ReservationWrapper = styled.span`
    margin-top: 9px;
    font-size: 14px;
    color: #444;
    padding-left: 16px;
`

const PercentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

function MovieChart() {
    return(
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={32}
        slidesPerView={5}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
            {MovieChartData.map((movie) => {
                return(
                    <SwiperSlide>
                        <Wrapper key={movie.rank}>
                            <MoviePoster url={movie.img}/>
                            <MovieName>{movie.title || "영화 제목"}</MovieName>
                            <PercentWrapper>
                                <GoldenEggWrapper><GoldenEggImg src={movie.egg === "pre" ? "img/eggGoldeneggPreegg.png" : "img/eggGoldenegggood.png"} /> {movie.eggPercent}%</GoldenEggWrapper>
                                <ReservationWrapper>예매율 {movie.reservation}%</ReservationWrapper>
                            </PercentWrapper>
                        </Wrapper>
                    </SwiperSlide>
                );
            })}
      </Swiper>
    );
}

export default MovieChart;