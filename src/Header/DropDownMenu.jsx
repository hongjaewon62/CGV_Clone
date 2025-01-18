import React from "react";
import styled from "styled-components";

const DropDownWrapper = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    //display: ${(props) => (props.isVisible ? "flex" : "none")};
    transition: opacity 0.3s ease, transform 0.3s ease;
    /* opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transform: ${(props) => (props.isVisible ? "translateY(0)" : "translateY(-10px)")}; */
`;

const DropDownMenuContent = styled.div`
    background : white ;
    display: flex;
    justify-content: start;
    align-items: start;
    width: 160px;
    height: 320px;
    border-left: 0.5px solid #EEEEEE;
    border-right: 0.5px solid #EEEEEE;
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
const menuData = [
    {
        title: "영화",
        items: ["무비차트", "아트하우스", "ICTCON"],
    },
    {
        title: "극장",
        items: ["CGV 극장", "특별관"],
    },
    {
        title: "예매",
        items: ["빠른예매", "상영스케줄", "English Ticketing", "English Schedule"],
    },
    {
        title: "스토어",
        items: ["패키지", "영화관람권", "기프트카드", "콤보", "팝콘", "음료", "스낵", "플레이존", "씨네샵"],
    },
    {
        title: "이벤트",
        items: ["SPECIAL", "영화/예매", "멤버쉽/CLUB", "CGV극장별", "제휴할인", "당첨자 발표", "종료된 이벤트"],
    },
    {
        title: "혜택",
        items: ["CGV 할인정보", "CLUB 서비스", "VIP 라운지"],
    },
];

function DropDownMenu({isVisible}) {
    return (
        <DropDownWrapper isVisible={isVisible}>
            {menuData.map((menu, index) => (
                <DropDownMenuContent key={index}>
                    <DropDownTitle>{menu.title}</DropDownTitle>
                    {menu.items.map((item, subIndex) => (
                        <DropDownContent key={subIndex}>{item}</DropDownContent>
                    ))}
                </DropDownMenuContent>
            ))}
        </DropDownWrapper>
    );
}

export default DropDownMenu;