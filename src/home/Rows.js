import { React } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import movies from "../data/data";

function Rows({ title }) {
  return (
    <>
      <Wrap className="title">{title}</Wrap>
      <Content>
        {movies.map((movie) =>
          movie.type === title ? (
            <Comp>
              <Link to={`/details/${movie.id}`}>
                <img
                  src={movie.type === title ? movie.cardImg : movie.title}
                  alt="movies"
                />
              </Link>
            </Comp>
          ) : (
            <></>
          )
        )}
      </Content>
    </>
  );
}

const Wrap = styled.div`
  margin-top: 50px;
  font-size: 1.3rem;
  margin-left: 20px;
  font-weight: 500;
`;

const Comp = styled.div`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.25);
  border: 3px solid rgba(255, 255, 255, 0.1);

  &:hover {
    border: 3px solid rgba(255, 255, 255, 0.8);
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    inset: 0px;
    display: block;
    z-index: 5;

    top: 0;
  }

  a {
    margin: 0;
    padding: 0;
  }
`;

const Content = styled.div`
  display: grid;

  grid-gap: 15px;
  gap: 15px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export default Rows;
