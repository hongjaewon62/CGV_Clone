import React, {useState} from "react";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "./SwiperNavigation.css";
import ChartButton from "../Ui/ChartButton";

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
        ${(props) => (props.mouse
            ?`  
                content: "";
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.4);
                z-index: 2;  
            `
            :
            `
                content: "";
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.09) 35%, rgba(0, 0, 0, 0.85));
                z-index: 2; 
            `
        )};
        /* content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        z-index: 2;   */
    }

    &::after {
        ${(props) => (props.mouse
            ? ""
            :  `
                content: "${props.rank}";
            `
        )}
        position: absolute;
        left: 9px;
        bottom: -4px;
        font-weight: 400;
        font-size: 50px;
        font-style: italic;
        color: #fff;
        line-height: 1em;
        z-index: 3;
        text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.5)
    }
`;

const ChartButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: 5px;
`;

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
                            <PosterWithMouseEffect rank={movie.rank} img={movie.img} />
                            {/* <ChartButton title="상세보기" color="#FFFFFF" fontColor="#666666" />
                            <ChartButton title="예매하기" color="#FB4357" fontColor="#FFFFFF" /> */}
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

const PosterWithMouseEffect = ({ rank, img }) => {
    const [mouse, setMouse] = useState(false);

    const handleMouseEnter = () => {
        setMouse(true);
    };

    const handleMouseLeave = () => {
        setMouse(false);
    };

    return (
        <PosterWrapper
            rank={rank}
            mouse={mouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {mouse && <ChartButtonWrapper>
                <ChartButton title="상세보기" color="#FFFFFF" fontColor="#666666" />
                <ChartButton title="예매하기" color="#FB4357" fontColor="#FFFFFF" />
            </ChartButtonWrapper>}
            <MoviePoster url={img}>
            </MoviePoster>
        </PosterWrapper>
    );
};

export default MovieChart;