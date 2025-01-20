import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import VideoData from "../data/VideoData";
import DetailButton from "../Ui/DetailButton";

const VideoPlaceHolderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    background: black;
    height: 498px;
`;

const VideoContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 980px;
    height: 100%;
    margin: 0 auto;
`

const VideoWrapper = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    white-space: pre-line;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-image: linear-gradient(to right, #000 0%, rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.25) 75%, #000 100%);
        z-index: 2;
    }
`;

const VideoTitle = styled.strong`
    position: absolute;
    top: 170px;
    left: 0;
    font-weight: 700;
    font-size: 40px;
    color: #fff;
    line-height: 1.450em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.72);
    z-index: 2;
    pointer-events: none;
`;

const VideoDesc = styled.span`
    overflow: hidden;
    position: absolute;
    top: 210px;
    left: 0;
    max-width: 100%;
    font-size: 20px;
    color: #fff;
    line-height: 1.450em;
    text-overflow: ellipsis;
    z-index: 3;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    pointer-events: none;
`;

const VideoStyled = styled.video`
    position: relative;
    width: 100%;
    height: 100%;
    transform: scale(1.35);
    z-index: 1;
`;

const VideoButton = styled.a`
    display: block;
    position: absolute;
    margin-left: 10px;
    width: 28px;
    height: 28px;
    font-size: 0;
    background: transparent url(${(props) => (props.isActive ? props.activeUrl : props.inactiveUrl)}) center / 18px scroll no-repeat;
    border: 1px solid #979797;
    border-radius: 50%;  
    cursor: pointer;
    z-index: 2;
    top: ${(props) => (props.top || "100px")};
    left: ${(props) => (props.left || "100px")};   
`;

function Movie() {
    const [randomVideo, setRandomVideo] = useState(0);
    const [playVideo, setPlayVideo] = useState(false);
    const [muted, setMuted] = useState(true);
    const videoRef = useRef(null);

    const getRandomVideo = () => {
        const randomIndex = Math.floor(Math.random() * VideoData.length);
        setRandomVideo(VideoData[randomIndex]);
    };

    useEffect(() => {
        getRandomVideo();
    }, []);

    const togglePlayVideo = () => {
        if (videoRef.current) {
            if (playVideo) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
            setPlayVideo((prev) => !prev); 
          }
    };

    const toggleSound = () => {
        setMuted((prev) => !prev);
    };

    return(
        <VideoPlaceHolderWrapper>
            <VideoContent>
                <VideoWrapper>
                    <VideoStyled 
                        ref={videoRef}
                        autoPlay
                        muted={muted} 
                        src={randomVideo.video}>
                    </VideoStyled>
                    <VideoTitle>{randomVideo.title}</VideoTitle>
                    <VideoDesc>{randomVideo.description}</VideoDesc>
                    {/* <VideoDetailView>상세보기</VideoDetailView> */}
                    <DetailButton title="상세보기" top="310px" />
                    <VideoButton 
                        isActive={playVideo}
                        activeUrl="img/play.png"
                        inactiveUrl="img/pause.png"
                        onClick={togglePlayVideo}
                        top="310px"
                        left="110px">
                        STOP
                    </VideoButton>
                    <VideoButton 
                        isActive={muted}
                        activeUrl="img/soundOff.png"
                        inactiveUrl="img/soundOn.png"
                        onClick={toggleSound}
                        top="310px"
                        left="150px">
                        STOP
                    </VideoButton>
                </VideoWrapper>
            </VideoContent>
        </VideoPlaceHolderWrapper>
    );
}

export default Movie;