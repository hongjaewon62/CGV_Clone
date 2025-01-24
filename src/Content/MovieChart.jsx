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

const PosterWrapper = styled.div`
    overflow: hidden;
    position: relative;
    width: 170px;
    height: 234px;
    border-radius: 10px;
    
    &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.09) 35%, rgba(0, 0, 0, 0.85));
        z-index: 2;  
    }

    &::after {
        content: "${props => props.rank}";
        position: absolute;
        left: 9px;
        bottom: -4px;
        font-weight: 400;
        font-size: 50px;
        font-style: italic;
        color: #fff;
        line-height: 1em;
        z-index: 3;
        text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.45)
    }
`;

const PosterButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.85));
`

function MovieChart(props) {
    const {data} = props
    return(
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={32}
        slidesPerView={5}
        slidesPerGroup={5}
        navigation
      >
            {data.map((movie) => {
                return(
                    <SwiperSlide>
                        <Wrapper key={movie.rank}>
                            <PosterWrapper rank={movie.rank}>
                                <MoviePoster url={movie.img}/>
                            </PosterWrapper>
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