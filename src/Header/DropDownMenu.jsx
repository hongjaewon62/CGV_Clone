import React from "react";
import styled from "styled-components";

const DropDownWrapper = styled.div`
    background: pink;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DropDownMenuContent = styled.div`
    background : skyblue ;
    display: flex;
    justify-content: start;
    align-items: start;
    width: 150px;
    height: 300px;
    border-left: 1px solid black;
    flex-direction: column;
`;

const DropDownTitle = styled.div`
    color: #222222;
    font-size: 14px;
    font-weight: 700;
    margin: 20px 5px 5px 25px;
`;

const DropDownContent = styled.div`
    color: #666666;
    font-size: 14px;
    font-weight: 400;
    margin: 5px 5px 5px 25px;
`

function DropDownMenu() {
    return (
        <DropDownWrapper>
            <DropDownMenuContent>
                <DropDownTitle>영화</DropDownTitle>
                <DropDownContent>무비차트</DropDownContent>
                <DropDownContent>아트하우스</DropDownContent>
                <DropDownContent>ICTCON</DropDownContent>
            </DropDownMenuContent>
            <DropDownMenuContent>
                <DropDownTitle>극장</DropDownTitle>
            </DropDownMenuContent>
            <DropDownMenuContent>
                <DropDownTitle>예메</DropDownTitle>
            </DropDownMenuContent>
            <DropDownMenuContent>
                <DropDownTitle>스토어</DropDownTitle>
            </DropDownMenuContent>
            <DropDownMenuContent>
                <DropDownTitle>혜택</DropDownTitle>
            </DropDownMenuContent>
        </DropDownWrapper>
    );
}

export default DropDownMenu;