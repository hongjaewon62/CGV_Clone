import React, { useState, useEffect} from "react";
import styled from "styled-components";
import NavBarButton from "../Ui/NavBarButton";
import DropDownMenu from './DropDownMenu';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: ${(props) => (props.show) ? "fixed": "relative"};
    transform: ${(props) => (props.show) ? "translate(-50%, 0%);": "none"};
    background : ${(props) => (props.show ? "linear-gradient(to right, rgb(215, 67, 87), rgb(241, 79, 58) 59%, rgb(239, 100, 47))": "none")};
    top: ${(props) => (props.show ? "0" : "none")};
    z-index: 5;
`;

const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NavBarStyled = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    border-bottom: 1.5px solid #FB4357;
`;

const Search = styled.div`
    width: 233px;
    height: 24px;
    border-left: ${(props) => (props.show) ? "1.5px solid #000000" : "1.5px solid #CACACA"};
    border-right: ${(props) => (props.show) ? "1.5px solid #000000" : "1.5px solid #CACACA"};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 300px;
`;

const SerachInput = styled.input`
    width: 187px;
    height: 24px;
    background: ${(props) => (props.show) ? "transparent": "none"};
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
    cursor: pointer;
`;

const ScrollLogoImg = styled.img`
    width: 70px;
    height: 32px;
    padding: 20px;
`;

function NavBar({scroll}) {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return(
        <> 
            <NavWrapper>
                <Wrapper show={scroll}>
                    <NavMenu onMouseEnter={handleMouseEnter}>
                        {scroll && <ScrollLogoImg src="img/logoWhite.png" />}
                        <NavBarButton title="영화" color={scroll ? "#FFFFFF" : "#222222"}/>
                        <NavBarButton title="극장" color={scroll ? "#FFFFFF" : "#222222"}/>
                        <NavBarButton title="예메" color={scroll ? "#FFFFFF" : "#FB4357"} />
                        <NavBarButton title="스토어" color={scroll ? "#FFFFFF" : "#222222"}/>
                        <NavBarButton title="이벤트" color={scroll ? "#FFFFFF" : "#222222"}/>
                        <NavBarButton title="헤택" color={scroll ? "#FFFFFF" : "#222222"}/>
                    </NavMenu>
                    <Search>
                        <SerachInput type="text" />
                        <SearchIcon src="img/search.png" />
                    </Search>
                </Wrapper>
                <DropDownMenu onMouseLeave={handleMouseLeave} isVisible={dropdownVisible}/>
            </NavWrapper>
        </>
    );
}

export default NavBar;