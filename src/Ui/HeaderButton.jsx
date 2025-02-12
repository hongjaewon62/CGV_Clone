import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #666666;
    font-size: 13px;
    padding: 10px 10px 0px 10px;
    width: 60px;
    height: 57px;
`;

const ButtonImg = styled.img`
    width: 36px;
    height: 36px;
`;

function HeaderButton(props) {
    const {onClick, image, title} = props;
    return(
        <ButtonStyled onClick={onClick}>
            <ButtonImg src={image} />
            {title || "button"}
        </ButtonStyled>
    );
}

export default HeaderButton;