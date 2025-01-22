import React from "react";
import styled from "styled-components";

const VideoDetailView = styled.div`
    display: block;
    padding: 5px 30px 5px 18px;
    font-size: 14px;
    color: #343434;
    background: rgba(255, 255, 255, 0.8) url(img/arrowR_8x13.png) calc(100% - 11px) center / 8px 13px scroll no-repeat;
    border: 1px solid #e2e2e2;
    border-radius: 15px;
    position: ${(props) => props.position || ""};
    z-index: 2;
    cursor: pointer;
    top: ${(props) => props.top || "auto"};
`;

function DetailButton(props) {
    const {title, onClick, top, position} = props
    return (
        <VideoDetailView onClick={onClick} top={top} position={position}>
            {title || "button"}
        </VideoDetailView>
    );
}

export default DetailButton;