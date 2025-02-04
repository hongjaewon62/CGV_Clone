import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    height: 372px;
    padding: 60px 0 0;
`;

const GiftListWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 980px;
    height: 375px;
`;

const GiftList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 19px 30px;
    margin-left: ${(props) => (props.first ? "none" : "25px")};
    width: 270px;
    height: 324px;
    border: 1px solid #e4e4e4;
    border-radius: 10px;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 29px;
`;

const Title = styled.div`
    color: #222222;
    font-size: 20px;
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

const GiftListItemWrapper = styled.div`
    width: 100%;
    height: 76px;
    display: flex;
    margin-top: 22px;
    cursor: pointer;
`;

const GiftListItemImg = styled.img`
    width: 75px;
    height: 76px;
`;

const GiftListItemDesc = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-left: 15px;
`;

const ItemDescTitle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #222222;
    font-size: 14px;
    font-weight: 500;
`
const ItemDescPrice = styled.strong`
    display: flex;
    color: #222222;
    font-size: 16px;
`

function GiftconContent() {
    return (
        <Wrapper>
            <GiftListWrapper>
                <GiftList first={true}>
                    <TitleWrapper>
                        <Title>패키지</Title>
                        <MoreButton>더보기</MoreButton>
                    </TitleWrapper>
                    <GiftListItemWrapper>
                        <GiftListItemImg src="img/Popcorn2.jpg"/>
                        <GiftListItemDesc>
                            <ItemDescTitle>우리 패키지</ItemDescTitle>
                            <ItemDescPrice>62,000원</ItemDescPrice>
                        </GiftListItemDesc>
                    </GiftListItemWrapper>
                    <GiftListItemWrapper>
                        <GiftListItemImg src="img/Popcorn1.jpg"/>
                        <GiftListItemDesc>
                            <ItemDescTitle>나랑 너 패키지</ItemDescTitle>
                            <ItemDescPrice>35,000원</ItemDescPrice>
                        </GiftListItemDesc>
                    </GiftListItemWrapper>
                    <GiftListItemWrapper>
                        <GiftListItemImg src="img/Popcorn3.jpg"/>
                        <GiftListItemDesc>
                            <ItemDescTitle>좋은날 패키지</ItemDescTitle>
                            <ItemDescPrice>18,000원</ItemDescPrice>
                        </GiftListItemDesc>
                    </GiftListItemWrapper>
                </GiftList>
                <GiftList>
                    <TitleWrapper>
                        <Title>영화관람권</Title>
                        <MoreButton>더보기</MoreButton>
                    </TitleWrapper>
                    <GiftListItemWrapper>
                        <GiftListItemImg src="img/MovieCGV.jpg"/>
                        <GiftListItemDesc>
                            <ItemDescTitle>CGV 영화관람권</ItemDescTitle>
                            <ItemDescPrice>13,000원</ItemDescPrice>
                        </GiftListItemDesc>
                    </GiftListItemWrapper>
                    <GiftListItemWrapper>
                        <GiftListItemImg src="img/MovieIMAX.jpg"/>
                        <GiftListItemDesc>
                            <ItemDescTitle>IMAX 영화관람권</ItemDescTitle>
                            <ItemDescPrice>18,000원</ItemDescPrice>
                        </GiftListItemDesc>
                    </GiftListItemWrapper>
                    <GiftListItemWrapper>
                        <GiftListItemImg src="img/Movie4DX.jpg"/>
                        <GiftListItemDesc>
                            <ItemDescTitle>4DX 영화관람권</ItemDescTitle>
                            <ItemDescPrice>19,000원</ItemDescPrice>
                        </GiftListItemDesc>
                    </GiftListItemWrapper>
                </GiftList>
                <GiftList>
                    <TitleWrapper>
                        <Title>기프트카드</Title>
                        <MoreButton>더보기</MoreButton>
                    </TitleWrapper>
                    <GiftListItemWrapper>
                        <GiftListItemImg src="img/PaconnieA.jpg"/>
                        <GiftListItemDesc>
                            <ItemDescTitle>PACONNIE A형</ItemDescTitle>
                            <ItemDescPrice>금액충전형</ItemDescPrice>
                        </GiftListItemDesc>
                    </GiftListItemWrapper>
                    <GiftListItemWrapper>
                    <GiftListItemImg src="img/PaconnieB.jpg"/>
                        <GiftListItemDesc>
                            <ItemDescTitle>PACONNIE B형</ItemDescTitle>
                            <ItemDescPrice>금액충전형</ItemDescPrice>
                        </GiftListItemDesc>
                    </GiftListItemWrapper>
                    <GiftListItemWrapper>
                    <GiftListItemImg src="img/PaconnieC.jpg"/>
                        <GiftListItemDesc>
                            <ItemDescTitle>PACONNIE C형</ItemDescTitle>
                            <ItemDescPrice>금액충전형</ItemDescPrice>
                        </GiftListItemDesc>
                    </GiftListItemWrapper>
                </GiftList>
            </GiftListWrapper>
        </Wrapper>
    );
}

export default GiftconContent;