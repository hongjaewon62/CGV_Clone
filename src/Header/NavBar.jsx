import React, { useState} from "react";
import styled from "styled-components";
import NavBarButton from "../Ui/NavBarButton";
import DropDownMenu from './DropDownMenu';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

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
            <NavWrapper>
                <Wrapper>
                    <NavMenu onMouseEnter={handleMouseEnter}>
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
                <DropDownMenu onMouseLeave={handleMouseLeave} isVisible={dropdownVisible}/>
            </NavWrapper>
        </>
    );
}

export default NavBar;