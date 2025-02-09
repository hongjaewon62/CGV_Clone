import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;;
    height: 388px;
    display: flex;
    justify-content: center;
    align-items: start;
`;

const NoticeClientContainer = styled.div`
    display: flex;
    float: left;
    width: 736px;
    height: 236px;
    border: 1px solid #e4e4e4;
    border-radius: 10px;
`;
const ContentWrapper = styled.div`
    width: 980px;
    height: 238px;
    padding: 30px 0 120px;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const NoticeClientWrapper = styled.div`
    width: 514px;
    height: 236px;
    padding: 24px 26px 20px 30px;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    background-clip: padding-box;
`;

const ContentNoticeWrapper = styled.div`
    padding: 0 0 21px;
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    border-bottom: 1px solid #f4f4f4;
`;

const NoticeTitle = styled.strong`
    color: #222222;
    font-size: 16px;
`;

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
`;

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
    justify-content: left;
`;

const ClientList = styled.div`
    padding-left: 28px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
`;

const ClientNumber = styled.strong`
    font-weight: 700;
    font-size: 14px;
    color: #222;
`;

const ClientListTime = styled.span`
    font-size: 14px;
    color: #222;
`;

const ClientListP = styled.p`
    font-size: 14px;
    color: #666;
    margin: 0px;
`;

const ClientButtonWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`;

const ClientButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 14px;
    margin-left: ${(props) => (props.first ? "none" : "10px")};
    font-size: 14px;
    color: #222;
    background-color: #f6f6f6;
    border-radius: 5px;
`;

const QrWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border-left: 1px solid #e4e4e4;
    width: 222px;
`;

const QrTitle = styled.strong`
    margin-top: 24px;
    font-weight: 500;
    font-size: 16px;
    color: #222;
`;

const QrDesc = styled.span`
    width: 100%;
    margin-top: 5px;
    font-size: 12px;
    color: #222;
`;

const QrImgWrapper = styled.div`
    width: 60px;
    height: 60px;
    margin: 29px auto 0;
    position: relative;
    overflow: hidden;
`

const QrImg = styled.img`
    left: 0;
    top: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const QrImgDesc = styled.p`
    margin-top: 24px;
    font-size: 12px;
    color: #666;
`;

function NoticeContent() {
    return (
        <Wrapper> 
            <ContentWrapper>
                <NoticeClientContainer>
                    <NoticeClientWrapper>
                        <ContentNoticeWrapper>
                            <NoticeTitle>공지사항</NoticeTitle>
                            <NoticeLinkBtn>[시스템 점검]iOS 18 업데이트 관련 예매 서비스 이용 안내</NoticeLinkBtn>
                            <MoreButton>더보기</MoreButton>
                        </ContentNoticeWrapper>
                        <ClientWrapper>
                            <NoticeTitle>고객센터</NoticeTitle>
                            <ClientList>
                                <ClientNumber>1544-1122</ClientNumber>
                                <ClientListTime>
                                    고객센터 운영시간 (평일 09:00~18:00)
                                    <ClientListP>업무시간 외 자동응답 안내 가능합니다.</ClientListP>
                                </ClientListTime>
                            </ClientList>
                        </ClientWrapper>
                        <ClientButtonWrapper>
                            <ClientButton first={true}>FAQ</ClientButton>
                            <ClientButton>1:1 문의</ClientButton>
                            <ClientButton>대관/단체 문의</ClientButton>
                        </ClientButtonWrapper>
                    </NoticeClientWrapper>
                    <QrWrapper>
                        <QrTitle>앱 다운로드</QrTitle>
                        <QrDesc>CGV앱에서 더 편리하게 이용하세요</QrDesc>
                        <QrImgWrapper>
                            <QrImg src="img/img_qrcode.gif" />
                        </QrImgWrapper>
                        <QrImgDesc>
                            QR코드를 스캔하고
                            <br />
                            앱설치 페이지로 바로 이동하세요
                        </QrImgDesc>
                    </QrWrapper>
                </NoticeClientContainer>
            </ContentWrapper>
        </Wrapper>
    );
}

export default NoticeContent;