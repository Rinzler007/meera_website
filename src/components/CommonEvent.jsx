import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Reveal";

const Section = styled.section`
  width: 100%;
  padding: 4rem 4rem;
  background-color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Heading = styled.div`
  position: relative;
  color: ${({ primary }) => (primary ? "#e7e7e7" : "#000d1a")};
  padding: 15px 15px;

  h1 {
    font-size: clamp(1rem, 2vw, 1.5rem);
  }

  p {
    font-size: clamp(0.6rem, 2.02vw, 1.2rem);
  }
  margin-bottom: 10px;
`;
const CardContainer = styled.div`
  background: ${({ primary }) => (!primary ? "#fff" : "#000d1a")};
  height: 450px;
  border-radius: 12px;
  transition: 0.4s ease-in-out;
  &:hover {
    transform: scale(1.04);
  }
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`;
const CommonEvent = ({ primary, data }) => {
  return (
    <>
      <Section primary={primary}>
      <Fade bottom>
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "3rem",
            color: `${!primary ? "#fff" : "#000d1a"}`,
          }}
        >
          {!primary ? "OUR PROJECTS" : "OUR EVENTS"}
        </h1>
       
        <Container>
          {data.map((item, index) => {
            return (
                <CardContainer primary={primary} key={index}>
                  <div>
                    <Image src={item.image}></Image>
                    <Heading primary={primary}>
                      <h1>{item.name}</h1>
                      <br />
                      <p>{item.description}</p>
                    </Heading>
                  </div>
                </CardContainer>
              
            );
          })}
        </Container>
        </Fade>
      </Section>
    </>
  );
};

export default CommonEvent;
