import React from "react";
import styled from "styled-components";

const VideoPlaceHolderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`;

const VideoContent = styled.div`
    
`

function Movie() {
    return(
        <VideoPlaceHolderWrapper>
            <VideoContent>
                
            </VideoContent>
        </VideoPlaceHolderWrapper>
    );
}

export default Movie;