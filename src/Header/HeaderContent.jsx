import React, {useState, useEffect} from "react";
import styled from "styled-components";
import HeaderButton from "../Ui/HeaderButton";
import NavBar from "./NavBar";
import Movie from "./Movie";

const HeaderContentStyled = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px 0px;
    border-bottom: 1px solid #dfdfdf;
`;

const Content = styled.div`
    background: white;
    padding: 30px 6px 25px 5px;
    display: flex;
    //align-items: end;
    justify-content: space-between;
    width: 991px;
`;

const ContentTitle = styled.span`
    font-size: 16px;
    color: #222222;
    letter-spacing: 4px;
`;

const Logo = styled.span`
    display: flex;
    justify-content: start;
    align-items: center;
`

const Login = styled.span`
    display: flex;
    align-items: center;
    justify-content: end;
`

const NavBarStyled = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    border-bottom: 1.5px solid #FB4357;
    background : ${(props) => (props.scroll ? "linear-gradient(to right, rgb(215, 67, 87), rgb(241, 79, 58) 59%, rgb(239, 100, 47))": "none")};
`;

function HeaderContent() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 120) {
                    setScroll(true);
                } else {
                    setScroll(false);
                }
            };
    
            window.addEventListener("scroll", handleScroll);
    
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, []);
    return (
        <>
            <HeaderContentStyled>
                <Content>
                    <Logo>
                        <img src="img/logo.png" alt="logo" width="117px" height="53px" />
                        <ContentTitle>DEEP DIVE SPACE</ContentTitle>
                    </Logo>
                    <Login>
                        <HeaderButton title="로그인" image={"img/loginPassword.png"} />
                        <HeaderButton title="회원가입" image={"img/loginJoin.png"} />
                        <HeaderButton title="MY CGV" image={"img/loginMember.png"} />
                        <HeaderButton title="고객센터" image={"img/loginCustomer.png"} />
                    </Login>
                </Content>
            </HeaderContentStyled>
            <NavBarStyled>
                <NavBar scroll={scroll}/>
            </NavBarStyled>
            <Movie />
        </>
    );
}

export default HeaderContent;