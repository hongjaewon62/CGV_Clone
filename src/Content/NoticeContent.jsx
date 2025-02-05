import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;;
    height: 388px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0 120px;
    background: pink;
`
const ContentWrapper = styled.div`
    width: 980px;
    height: 238px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: yellow;
`

const NoticeClientWrapper = styled.div`
    width: 514px;
    height: 236px;
    padding: 24px 26px 20px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: skyblue;
    background-clip: padding-box;
`;

const ContentNoticeWrapper = styled.div`
    padding: 0 0 21px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NoticeTitle = styled.strong`
    color: #222222;
    font-size: 16px;
`

function NoticeContent() {
    return (
        <Wrapper> 
            <ContentWrapper>
                <NoticeClientWrapper>
                    <ContentNoticeWrapper>
                        <NoticeTitle>공지사항</NoticeTitle>
                    </ContentNoticeWrapper>
                </NoticeClientWrapper>
            </ContentWrapper>
        </Wrapper>
    );
}

export default NoticeContent;