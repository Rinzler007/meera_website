import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Reveal";
import FlipCard from "./FlipCard";

const Section = styled.section`
  width: 100%;
  padding: 4rem 4rem;
  background-color: ${({ primary }) => (primary ? "#fff" : "#0D1821")};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CardContainer = styled.div`
  background: ${({ primary }) => (!primary ? "#fff" : "#0D1821")};
  height: 449px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius: 12px;
  transition: 0.4s ease-in-out;
  overflow:hidden;

  &:hover {
    transform: scale(1.04);
  }
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`;

const CommonEvent = ({ primary, data, project }) => {
  return (
    <>
      <Section primary={primary}>
        <Fade bottom>
          <h1
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              marginBottom: "3rem",
              color: `${!primary ? "#fff" : "#0D1821"}`,
            }}
          >
            {project ? "OUR PROJECTS" : "OUR EVENTS"}
          </h1>

          <Container>
            {data.map((item, index) => {
              return (
                <CardContainer primary={primary} key={index}>
                  <FlipCard
                    src={item.image}
                    primary={primary}
                    name={item.name}
                    tag={project?item.tag:null}
                    description={item.description}
                  />
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
