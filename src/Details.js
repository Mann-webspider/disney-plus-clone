import { React, useState } from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import movies from "./data/data";

function Details() {
  const { id } = useParams();
  const [playing, setPlaying] = useState(false);
  const [movieplay, setMoviePlay] = useState(true);

  return (
    <Container>
      {movies.map((movie) =>
        id === movie.id ? (
          <BackgroundImg>
            <Fadder></Fadder>
            {playing || !movieplay ? (
              <>
                <ReactPlayer
                  url={!movieplay ? movie.movie : movie.video}
                  playing={true}
                  playsinline={true}
                  autoPlay={true}
                  width="0%"
                  height="0%"
                  controls={!movieplay ? true : false}
                  className={!movieplay ? "playerMovie" : "player"}
                  muted={false}
                />
              </>
            ) : (
              <img className="backimg" src={movie.backgroundImg} alt="" />
            )}
            <img className="title_img" src={movie.titleImg} alt="" />
            <div>
              <Player onClick={() => setMoviePlay(false)}>
                <img src="/images/play-icon-black.png" alt="" />
                <span>PLAY</span>
              </Player>
              {/* <Trailer onClick={() => setPlaying(true)}>
                <img src="/images/play-icon-white.png" alt="" />
                <span>TRAILER</span>
              </Trailer> */}
            </div>

            <Title>{movie.title}</Title>
            <Subtitle>{movie.subTitle}</Subtitle>
            <Description>{movie.description}</Description>
          </BackgroundImg>
        ) : (
          <></>
        )
      )}
    </Container>
  );
}

const Fadder = styled.div`
  height: 100vh;
  width: 75vw;
  position: absolute;
  z-index: 0;
  top: 0;
  background-image: linear-gradient(
    270deg,
    transparent,
    rgba(0, 0, 0, 0.6),
    #000
  );

  @media (max-width: 420px) {
    display: none;
    background-image: linear-gradient(
      270deg,
      transparent,
      rgba(0, 0, 0, 0),
      transparent
    );
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: absolute;
  z-index: -5;
`;
const BackgroundImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100vw;
  height: 100vh;
  .playerMovie {
    z-index: 5;
    width: 0%;
    height: 0%;
  }

  .player {
    z-index: 1;
    width: 0%;
    height: 0%;
    ${"" /* display: none; */}
  }
  video {
    object-fit: cover;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: 2;
  }

  .backimg {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }

  .title_img {
    z-index: 2;
    width: 400px;
    position: relative;
    top: 50px;
  }

  div {
    display: flex;

    z-index: 2;
  }

  @media (max-width: 768px) {
    .title_img {
      width: 200px;
    }

    video {
      width: 100%;
      object-fit: contain;
      top: -220px;
      position: absolute;
      height: 100%;
    }
  }

  @media (max-width: 425px) {
    .backimg {
      width: 100%;
      object-fit: contain;
      top: -220px;
      posiotion: absolute;
      height: 100%;
    }

    video {
      width: 100%;
      object-fit: contain;
      top: -220px;
      position: absolute;
      height: 100%;
    }
  }
  @media (max-width: 430px) {
    .title_img {
      width: 200px;
      visibility: hidden;
    }
  }
  @media (max-height: 430px) {
    .title_img {
      width: 200px;
      display: none;
    }
  }
`;

const Player = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  color: color;
  padding: 0px 24px;
  font-weight: 500;
  font-size: 18px;
  margin: 100px 0px 30px 40px;
  height: 56px;
  border: 1px solid rgb(0, 0, 0);
  cursor: pointer;
  z-index: 2;
  img {
    width: 30px;
    z-index: 5;
    z-index: 2;
  }

  @media (max-width: 768px) {
    margin: 200px 0px 30px 40px;
    font-size: 12px;
    padding: 0px 14px;
  }
  @media (max-height: 430px) {
    margin: 100px 0px 30px 40px;
    font-size: 12px;
    padding: 0px 10px;
    height: 40px;
    font-size: 9px;
    img {
      width: 20px;
    }
  }

  @media (max-height: 659px) {
    margin: 100px 0px 0px 40px;
  }
`;

const Trailer = styled(Player)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(255, 255, 255);
  color: white;
  z-index: 2;
`;

const Title = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 25px;
  min-height: 15px;
  margin: 30px 0px 10px 40px;
  z-index: 2;

  @media (max-width: 645px) {
    font-size: 10px;
    margin: 0px 0px 0px 20px;
  }

  @media (max-width: 430px) {
    font-size: 15px;
    margin: 0px 0px 0px 20px;
  }
  @media (max-height: 430px) {
    font-size: 10px;
    margin: 0px 0px 10px 20px;
  }
`;

const Description = styled.div`
  line-height: 40px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 20px;
  width: 800px;
  margin-left: 40px;
  z-index: 2;

  @media (max-width: 846px) {
    width: 600px;
    font-size: 15px;
  }

  @media (max-width: 645px) {
    width: 400px;
    line-height: 20px;
    font-size: 10px;
    margin-top: 50px;
  }

  @media (max-width: 440px) {
    width: 300px;
  }
  @media (max-width: 340px) {
    width: 250px;
  }

  @media (max-height: 659px) {
    width: 500px;
    line-height: 15px;
    font-size: 10px;
  }
`;

const Subtitle = styled(Title)`
  z-index: 2;
`;
export default Details;
