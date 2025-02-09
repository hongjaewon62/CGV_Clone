import React, {useState} from "react";
import styled from "styled-components";
import DetailButton from "../Ui/DetailButton";
import MovieChart from "./MovieChart";
import MovieChartData from "../data/MovieChartData";
import ToBeScreenedData from "../data/ToBeScreenedData";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 460px;
    background: linear-gradient(to bottom, rgb(255, 255, 255), rgb(247, 247, 247));
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, rgb(255, 255, 255), rgb(247, 247, 247));
    width: 1040px;
    height: 100%;
    margin: 0 auto;
    flex-direction: column;
`

const MovieChartBeScreenButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    height:37px;
    width: 980px;
    background: white;
`;

const TabButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MovieButton = styled.div`
    font-weight: ${(props) => (props.active ? "700" : "400")};
    font-size: 26px;
    color: ${(props) => (props.active ? "#222222" : "#666666")};
    line-height: 1.423em;
    margin: 10px;
    cursor: pointer;
`

const MovieSwiperWrapper = styled.div`
    background: linear-gradient(to bottom, rgb(255, 255, 255), rgb(247, 247, 247));
    position: relative;
    width: 980px;
    height: 295px;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
    transform: translate3d(0px, 0px, 0px);
    transition-duration: 0ms;
`

function MovieContent() {
    const [movieActive, setMovieActive] = useState(0);

    const handleClick = (index) => {
        setMovieActive(index);
    };

    return (
        <Wrapper>
            <ContentWrapper>
                <MovieChartBeScreenButtonWrapper>
                    <TabButtonWrapper>
                        <MovieButton active={movieActive === 0} onClick={() => handleClick(0)}>무비차트</MovieButton>
                        <MovieButton active={movieActive === 1} onClick={() => handleClick(1)}>상영예정작</MovieButton>
                    </TabButtonWrapper>
                    <DetailButton title="전체보기"/>
                </MovieChartBeScreenButtonWrapper>
                <MovieSwiperWrapper>
                    <MovieChart data={movieActive === 0 ? MovieChartData : ToBeScreenedData}/>
                </MovieSwiperWrapper>
            </ContentWrapper>
        </Wrapper>
    );
}

export default MovieContent;