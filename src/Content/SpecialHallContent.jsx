import React from "react";
import styled from "styled-components";
import DetailButton from "../Ui/DetailButton";
import SpecialHallData from "../data/SpecialHallData";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 398px;
    padding: 60px 0 0;
`;

const SpecialHallWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 980px;
    height: 261px;
    padding: 19px 0 0;
    background: pink;
`

const SpecialHallTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 980px;
    height: 37px;
    margin: 0 0 20px;
    background: steelblue;
`

const TitleWrapper = styled.div`
    float: left;
    height: auto;
    margin: 0;
    font-weight: 700;
    font-size: 26px;
    color: #222;
    line-height: 1.423em;
    background-image: none;
    cursor: pointer;
`

const SpecialHallImg = styled.img`
    width: 500px;
    height: 261px;
`;

const SpecialHallListWrapper = styled.div`
    width: 440px;
    height: 261px;
`;

const SpecialHallList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:440px;
    height: 65px;
    background: yellow;
    border-bottom: 1px solid #666666;
`;

const SpecialHallDesc = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 438px;
    height: 64px;
    padding: 19px 25px 19px 19px;
`;

const SpecialHallListTitle = styled.strong`
    font-size: 18px;
    color: #222222;
`;

const ListTagWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 7px;
`;

const SpecialHallListTag = styled.span`
    font-size: 14px;
    color: #666666;
    background: #F6F6F6;
`;

function SpecialHallContent () {

    const hall = SpecialHallData;
    return (
        <Wrapper>
            <SpecialHallTitleWrapper>
                <TitleWrapper>특별관</TitleWrapper>
                <DetailButton title="전체보기" />
            </SpecialHallTitleWrapper>
            <SpecialHallWrapper>
                <SpecialHallImg src={hall[0].img} />
                <SpecialHallListWrapper>
                    {hall.map((specialHall, index) => (
                        <SpecialHallList key={index}>
                            <SpecialHallDesc>
                                <SpecialHallListTitle>{specialHall.title}</SpecialHallListTitle>
                                
                                <ListTagWrapper >
                                    {specialHall.desc.split(",").map((word, index) => (
                                            <SpecialHallListTag key={index}>#{word}</SpecialHallListTag>
                                    ))}
                                </ListTagWrapper>
                            </SpecialHallDesc>
                        </SpecialHallList>
                    ))}
                </SpecialHallListWrapper>
            </SpecialHallWrapper>
        </Wrapper>
    );
}

export default SpecialHallContent;