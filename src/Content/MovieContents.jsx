import React, {useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    height: 460px;
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: skyblue;
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
    background: pink;
`;

const TabButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MoiveButton = styled.div`
    font-weight: 400;
    font-size: 26px;
    color: #666;
    line-height: 1.423em;
    margin: 10px;
`

function MovieContent() {
    const [movieActive, setMovieActive] = useState(false);
    return (
        <Wrapper>
            <ContentWrapper>
                <MovieChartBeScreenButtonWrapper>
                    <TabButtonWrapper>
                        <MoiveButton>무비차트</MoiveButton>
                        <MoiveButton>상영예정작</MoiveButton>
                    </TabButtonWrapper>
                </MovieChartBeScreenButtonWrapper>
                영화
            </ContentWrapper>
        </Wrapper>
    );
}

export default MovieContent;