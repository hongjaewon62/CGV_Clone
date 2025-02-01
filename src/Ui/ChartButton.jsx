import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const ButtonStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.color || "#FFFFFF")} ;
    width: 120px;
    height: 34px;
    font-weight: 500;
    font-size: 13px;
    line-height: 1.462em;
    border-radius: 4px;
    color: ${(props) => (props.fontColor || "#000000")} ;
    z-index: 3;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`

function ChartButton(props) {
    const {title, color, fontColor} = props
    return (
        <Wrapper>
            <ButtonStyled color={color} fontColor={fontColor}>
                {title || "button"}
            </ButtonStyled>
        </Wrapper>
    );
}

export default ChartButton;