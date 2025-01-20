import React from "react";
import styled from "styled-components";

const VideoDetailView = styled.div`
    display: block;
    padding: 5px 30px 5px 18px;
    font-size: 14px;
    color: #343434;
    background: rgba(255, 255, 255, 0.8) url(img/arrowR_8x13.png) calc(100% - 11px) center / 8px 13px scroll no-repeat;
    border-radius: 15px;
    position: absolute;
    z-index: 2;
    cursor: pointer;
    top: ${(props) => props.top || "0px"};
`;

function DetailButton(props) {
    const {title, onClick, top} = props
    return (
        <VideoDetailView onClick={onClick} top={top}>
            {title || "button"}
        </VideoDetailView>
    );
}

export default DetailButton;