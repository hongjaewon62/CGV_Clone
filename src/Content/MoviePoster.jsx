import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
`;

const Poster = styled.img`
    width: 170px;
    height: 234px;
    border-radius: 10px;
`;

function MoviePoster(props) {
    const {url} = props;
    return (
        <Wrapper>
            <Poster url={url}/>
        </Wrapper>
    );
}

export default MoviePoster;