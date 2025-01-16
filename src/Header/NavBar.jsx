import React, { useState} from "react";
import styled from "styled-components";
import NavBarButton from "../Ui/NavBarButton";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

const NavMenu = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
`;

const Search = styled.div`
    width: 233px;
    height: 24px;
    border-left: 1.5px solid #CACACA;
    border-right: 1.5px solid #CACACA;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 300px;
`;

const SerachInput = styled.input`
    width: 187px;
    height: 24px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SearchIcon = styled.img`
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    margin: 2px;
`;

// const DropdownMenu = styled.div`
//     display: ${(props) => (props.isVisible ? "flex" : "none")};
//     position: absolute;
//     top: 100%;
//     left: 0;
//     background-color: white;
//     border: 1px solid #ccc;
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//     z-index: 1;
//     padding: 20px;
//     width: 100%;
//     justify-content: space-around;
// `;

// const DropdownSection = styled.div`
//     display: flex;
//     flex-direction: column;
//     margin: 0 20px;
// `;

// const SectionTitle = styled.div`
//     font-weight: bold;
//     margin-bottom: 10px;
// `;

// const SectionItem = styled.div`
//     margin-bottom: 5px;
//     color: #666;
//     cursor: pointer;

//     &:hover {
//         color: #000;
//     }
// `;

function NavBar() {
    // const [isDropdownVisible, setDropdownVisible] = useState(false);

    // const handleMouseEnter = () => {
    //     setDropdownVisible(true);
    // };

    // const handleMouseLeave = () => {
    //     setDropdownVisible(false);
    // };
    return(
        // <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Wrapper>
            <NavMenu>
                <NavBarButton title="영화" />
                <NavBarButton title="극장" />
                <NavBarButton title="예메" color="#FB4357" />
                <NavBarButton title="스토어" />
                <NavBarButton title="이벤트" />
                <NavBarButton title="헤택" />
            </NavMenu>
            <Search>
                <SerachInput type="text" />
                <SearchIcon src="img/search.png" />
            </Search>
            {/* <DropdownMenu isVisible={isDropdownVisible}>
                <DropdownSection>
                    <SectionTitle>영화</SectionTitle>
                    <SectionItem>무비차트</SectionItem>
                    <SectionItem>아트하우스</SectionItem>
                    <SectionItem>ICECON</SectionItem>
                </DropdownSection>
                <DropdownSection>
                    <SectionTitle>극장</SectionTitle>
                    <SectionItem>CGV 극장</SectionItem>
                    <SectionItem>특별관</SectionItem>
                </DropdownSection>
                <DropdownSection>
                    <SectionTitle>예매</SectionTitle>
                    <SectionItem>빠른예매</SectionItem>
                    <SectionItem>상영스케줄</SectionItem>
                    <SectionItem>English Ticketing</SectionItem>
                    <SectionItem>English Schedule</SectionItem>
                </DropdownSection>
                <DropdownSection>
                    <SectionTitle>스토어</SectionTitle>
                    <SectionItem>패키지</SectionItem>
                    <SectionItem>영화관람권</SectionItem>
                    <SectionItem>기프트카드</SectionItem>
                    <SectionItem>콤보</SectionItem>
                    <SectionItem>팝콘</SectionItem>
                    <SectionItem>음료</SectionItem>
                    <SectionItem>스낵</SectionItem>
                    <SectionItem>플레이존</SectionItem>
                    <SectionItem>씨네샵</SectionItem>
                </DropdownSection>
                <DropdownSection>
                    <SectionTitle>이벤트</SectionTitle>
                    <SectionItem>SPECIAL</SectionItem>
                    <SectionItem>영화/예매</SectionItem>
                    <SectionItem>멤버십/CLUB</SectionItem>
                    <SectionItem>CGV 극장별</SectionItem>
                    <SectionItem>제휴할인</SectionItem>
                    <SectionItem>당첨자 발표</SectionItem>
                    <SectionItem>종료된 이벤트</SectionItem>
                </DropdownSection>
                <DropdownSection>
                    <SectionTitle>혜택</SectionTitle>
                    <SectionItem>CGV 할인정보</SectionItem>
                    <SectionItem>CLUB 서비스</SectionItem>
                    <SectionItem>VIP 라운지</SectionItem>
                </DropdownSection>
            </DropdownMenu> */}
        </Wrapper>
    );
}

export default NavBar;