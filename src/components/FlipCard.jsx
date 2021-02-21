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
  color: ${({ primary }) => (primary ? "#e7e7e7" : "#000d1a")};
  padding: 15px 15px;

  h1 {
    font-size: clamp(1rem, 2vw, 1.5rem);
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
    transition: 0.3s ease;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #fff;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
  }

  &:hover {
    h1 {
      filter:opacity(0);
    }
    ${Image}{
        filter:opacity(1);
    }
  }
`;
const FlipCard = ({ src, primary, name, description }) => {
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
