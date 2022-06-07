import React from "react";
import styled from "styled-components";
import "../styles/Viewers.css";
function Viewers() {
  return (
    <Components>
      <Wrap>
        <img src="images/viewers-disney.png" alt="" className="img" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="images/viewers-marvel.png" alt="" className="img" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="videos/1564676115-marvel.mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="images/viewers-national.png" alt="" className="img" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="videos/1564676296-national-geographic.mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="images/viewers-pixar.png" alt="" className="img" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="videos/1564676714-pixar.mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="images/viewers-starwars.png" alt="" className="img" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" />
        </video>
      </Wrap>
    </Components>
  );
}
const Components = styled.div`
  margin-top: 50px;
  padding: 30px, 0, 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  border-radius: 10px;

  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.25);
  border: 3px solid rgba(255, 255, 255, 0.1);
  video {
    width: 100%;
    height: 100%;
    ${"" /* position: absolute; */}
    top: 0;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    border: 3px solid rgba(255, 255, 255, 0.8);
    transform: scale(1.05);

    video {
      opacity: 1;
    }
  }
`;
export default Viewers;
