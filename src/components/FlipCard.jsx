import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styled from "styled-components";

const Image = styled.img`
  height: 455px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  filter: opacity(0.5);
  transition: 0.3s ease;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 255px;
  }
`;
const Heading = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ primary }) => (primary ? "#e7e7e7" : "#0D0D26")};
  padding: 15px 15px;

  h1 {
    font-size: clamp(1rem, 2vw, 2rem);
  }

  p {
    font-size: clamp(0.6rem, 2.02vw, 1.2rem);
  }
`;
const Container = styled.div`
  position: relative;
  text-align: center;
  overflow:hidden;
  h1 {
    padding:11px;
    transition: 0.3s ease;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #fff;
    font-size: clamp(1rem, 2vw, 1.5rem);
    text-transform: uppercase;
    transform: translate(-50%, -50%);
  }
  p{
    transition: 0.3s ease;
    position: absolute;
    top: 75%;
    left: 50%;
    color: #fff;
    font-style:italic;
    font-size: clamp(.6rem, 1.5vw, 1.1rem);
    transform: translate(-50%, -50%);
  }
  &:hover {
    h1,p {
      filter:opacity(0);
    }
    ${Image}{
        filter:opacity(1);
    }
  }
`;
const FlipCard = ({ src, primary, name, description,tag }) => {
  const [isFlipped, setisFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setisFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <Container onClick={handleClick}>
        <Image src={src}  />
        <h1>{name}</h1>
        {tag&&(
          <p>{tag}</p>
        ) }
      </Container>

      <Heading primary={primary} onClick={handleClick}>
        <h1>{name}</h1>
        <br />
        <p>{description}</p>
      </Heading>
    </ReactCardFlip>
  );
};

export default FlipCard;
