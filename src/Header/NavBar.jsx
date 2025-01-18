import React, { useState} from "react";
import styled from "styled-components";
import NavBarButton from "../Ui/NavBarButton";
import DropDownMenu from './DropDownMenu';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

// const NavBarContainer = styled.div`
//     position: relative;
//     width: 100%;
// `;

// const DropDownContainer = styled.div`
//     position: absolute;
//     left: 0;
//     right: 0;
//     top: 100%;
//     z-index: 100;
// `;

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

const NavOverMenu = styled.div`
    display: block;
    overflow: hidden;
    margin-top: 0px;
    padding-bottom: 0px;
`

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
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };
    return(
        <>
            <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* <Wrapper> */}
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

            </Wrapper>
            {/* <DropDownMenu isVisible={dropdownVisible} ></DropDownMenu> */}
            {/* <NavBarContainer>
            <DropDownContainer>
            </DropDownContainer>
            </NavBarContainer> */}
        </>
    );
}

export default NavBar;