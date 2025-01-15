import React from "react";
import styled from "styled-components";
import HeaderButton from "../Ui/HeaderButton";

const HeaderContentStyled = styled.div`
    background: skyblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px 0px 50px;
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
    font-family: "Noto Sans KR", sans-serif;
    letter-spacing: 4px;
`;

const Logo = styled.span`
    display: flex;
    align-items: center;
    justify-content: start;
`

const Login = styled.span`
    display: flex;
    align-items: center;
    justify-content: end;
`

function HeaderContent() {
    return (
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
    );
}

export default HeaderContent;