import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.div`
    color: ${(props) => props.color || "#222222"};
    padding: 20px;
    font-weight: 500;
    cursor: pointer;
`;

function NavBarButton(props) {
    const {title, color} = props;
    return(
        <ButtonStyled color={color}>
            {title || "Button"}
        </ButtonStyled>
    );
}

export default NavBarButton;