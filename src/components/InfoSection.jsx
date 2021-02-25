import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Fade from "react-reveal/Fade";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 3rem 2rem;
  background-color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
`;

const Container = styled.div`
  padding: 3rem calc((100vw-1000px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: ${({ height }) => (height)};
  align-items: center;
  direction:${({ primary }) => (primary ? "ltr" : "rtl")};

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  direction:ltr;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1 rem;
    color: ${({ primary }) => (primary ? "#000d1a" : "#fff")};
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    color: ${({ primary }) => (primary ? "#000d1a" : "#fff")};
    margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }
  img {
    width: ${({ about }) => (about ? "65%" : "90%")};
    height: 100%;
    object-fit: cover;
    border-radius:10px;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 90%;
    }
  }
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
  primary,
  height,
  about,
  donate,
  name,
  acc,
  ifsc,
  bank,
  branch,
}) => {
  return (
    <Section primary={primary}>
      <Container primary={primary} height={height}>
        <Fade left>
          <ColumnLeft primary={primary}>
            {!donate?(
              <div>
            <h1>{heading}</h1>
            <p>{paragraphOne}</p>
            <p>{paragraphTwo}</p>
              </div>
             
            ):  <div style={{lineHeight:"5px"}}>
            <h1 style={{marginBottom:"50px"}}>{heading}</h1>
            <p>{name}</p>
            <p>{acc}</p>
            <p>{ifsc}</p>
            <p>{bank}</p>
            <p>{branch}</p>
              </div> }
            
            
          </ColumnLeft>
        </Fade>
        <Fade right>
          <ColumnRight reverse={reverse} about={about}>
            <img src={image} alt="home" />
          </ColumnRight>
        </Fade>
      </Container>
    </Section>
  );
};

export default InfoSection;
