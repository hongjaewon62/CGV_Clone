import React, {useState} from "react";
import styled from "styled-components";
import DetailButton from "../Ui/DetailButton";

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
    background: skyblue;
    //background: linear-gradient(to bottom, rgb(255, 255, 255), rgb(247, 247, 247));
    width: 980px;
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
    width: 100%;
    background: white;
`;

const TabButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MoiveButton = styled.div`
    font-weight: ${(props) => (props.active ? "700" : "400")};
    font-size: 26px;
    color: ${(props) => (props.active ? "#222222" : "#666666")};
    line-height: 1.423em;
    margin: 10px;
    cursor: pointer;
`

const MoiveSwiperWrapper = styled.div`
    //position: relative;
    display: flex;
    width: 100%;
    height: 295px;
    //z-index: 1;
    /* transition-property: transform;
    box-sizing: content-box; */
    background: pink;
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
                        <MoiveButton active={movieActive === 0} onClick={() => handleClick(0)}>무비차트</MoiveButton>
                        <MoiveButton active={movieActive === 1} onClick={() => handleClick(1)}>상영예정작</MoiveButton>
                    </TabButtonWrapper>
                    <DetailButton title="전체보기"/>
                </MovieChartBeScreenButtonWrapper>
                <MoiveSwiperWrapper>
                    영화
                </MoiveSwiperWrapper>
            </ContentWrapper>
        </Wrapper>
    );
}

export default MovieContent;