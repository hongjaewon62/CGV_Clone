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
    border-bottom: 1px solid #f4f4f4;
`

const NoticeTitle = styled.strong`
    color: #222222;
    font-size: 16px;
`

const NoticeLinkBtn = styled.a`
    justify-content: center;
    align-items: center;
    color: #222222;
    font-size: 14px;;
    width: 300px;
    height: 20px;
    margin: 2px 0 0 28px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
        text-decoration: underline; 
        cursor: pointer;
    }
`

const MoreButton = styled.div`
    padding: 2px 15px 3px;
    font-weight: 400;
    font-size: 12px;
    color: #666;
    border: 1px solid #f4f4f4;
    border-radius: 11px;
    cursor: pointer;
`;

const ClientWrapper = styled.div`
    padding: 19px 0 22px;
    display: flex;
    justify-content: center;
`;

function NoticeContent() {
    return (
        <Wrapper> 
            <ContentWrapper>
                <NoticeClientWrapper>
                    <ContentNoticeWrapper>
                        <NoticeTitle>공지사항</NoticeTitle>
                        <NoticeLinkBtn>[시스템 점검]iOS 18 업데이트 관련 예매 서비스 이용 안내</NoticeLinkBtn>
                        <MoreButton>더보기</MoreButton>
                    </ContentNoticeWrapper>
                    <ClientWrapper>
                    <NoticeTitle>고객센터</NoticeTitle>
                    </ClientWrapper>
                </NoticeClientWrapper>
            </ContentWrapper>
        </Wrapper>
    );
}

export default NoticeContent;