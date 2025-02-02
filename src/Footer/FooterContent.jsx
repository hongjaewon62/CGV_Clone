import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #f8f8f8;
`

const PloicyWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 980px;
    margin: 0 auto;
    padding: 23px 0;
    border-bottom: 1px solid #ebebeb;
`

const PolicyList = styled.div`
    font-weight: 500;
    margin: 5px;
    font-size: 13px;
    color: #666;
    line-height: 1.462em;
    cursor: pointer;
`;

const AdWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    background: #ede1d2;
    height: 182px;
    margin-top: 60px;
`

const ComponyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 980px;
    margin: 0 auto;
    padding: 23px 0;
`;

const ComponyContent = styled.span`
    font-size: 12px;
    color: #666666;
`;

const ComponyAdd = styled.address`
    font-style: normal;
    font-size: 12px;
    color: #666666;
`;

const policies = [
    "회사소개",
    "지속가능경영",
    "IR",
    "채용정보",
    "광고/제휴/출점문의",
    "이용약관",
    "편성기준",
    "개인정보처리방침",
    "법적고지",
    "이메일주소무단수집거부",
    "윤리경영",
    "사이버감사실",
];

function FooterContent() {
    return (
        <>
            <AdWrapper>
            <img src="img/0113_980x240.png" />
            </AdWrapper>
            <Wrapper>
                <PloicyWrapper>
                {policies.map((policy, index) => {
                    return (
                        <PolicyList key={index}>
                            {policy}
                        </PolicyList>
                    );
                })}
                </PloicyWrapper>
                <ComponyWrapper>
                    <ComponyAdd style={{fontStyle: "normal", fontSize: "12px"}}>(04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한강로동)</ComponyAdd>
                    <ComponyContent>대표이사 : 허민회 ⦁ 사업자등록번호 : 104-81-45690 ⦁ 통신판매업신고번호 : 2017-서울용산-0662 사업자정보확인</ComponyContent>
                    <ComponyContent>호스팅사업자 : CJ올리브네트웍스 ⦁ 대표이메일 : cjcgvmaster@cj.net</ComponyContent>
                    <ComponyContent>© CJ CGV. All Rights Reserved</ComponyContent>

                </ComponyWrapper>
            </Wrapper>
        </>
    );
}

export default FooterContent;