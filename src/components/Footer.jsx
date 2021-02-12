import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { columnOne, columnTwo } from "../data/FooterData";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillGoogleCircle } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 2rem;
  background: #000d1a;
`;

const Container = styled.div`
  padding: 1rem calc((100vw-1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  color: #fff;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1 rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  color: #fff;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }
`;

const Col = styled.div`
  flex: 50%;
`;

const FooterLink = styled(Link)`
  display: flex;
  color: #fff;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  max-width: 140px;
  line-height: 2.5rem;

  &:hover {
    border-bottom: 3px solid white;
  }
`;

const FooterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #384053;
  bottom: 2px;
  font-weight: bold;
`;

const Row = styled.div`
  display: flex;
  padding: 5px 5px;
  color: #fff;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
`;

const SocialLink = styled(Link)`
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const Footer = ({ reverse }) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1 style={{ marginLeft: "8px" }}>Lorem ipsum dolor sit amet.</h1>
          <h2
            style={{
              marginTop: "1rem",
              marginLeft: "8px",
              marginBottom: ".5rem",
            }}
          >
            Social Links :
          </h2>
          <Row>
            <SocialLink to="">
              <AiFillGoogleCircle
                style={{ color: "#fff", height: "40px", width: "40px" }}
              />
            </SocialLink>
            <SocialLink to="">
              <AiFillInstagram
                style={{ color: "#fff", height: "40px", width: "40px" }}
              />
            </SocialLink>
            <SocialLink to="">
              <FaFacebook
                style={{ color: "#fff", height: "35px", width: "35px" }}
              />
            </SocialLink>
            <SocialLink to="">
              <FiLinkedin
                style={{ color: "#fff", height: "35px", width: "35px" }}
              />
            </SocialLink>
          </Row>
        </ColumnLeft>
        <ColumnRight>
          <Col>
            {columnOne.map((item, index) => {
              return (
                <FooterLink key={index} to={item.link}>
                  {item.title}
                </FooterLink>
              );
            })}
          </Col>
          <Col>
            {columnTwo.map((item, index) => {
              return (
                <FooterLink key={index} to={item.link}>
                  {item.title}
                </FooterLink>
              );
            })}
          </Col>
        </ColumnRight>
      </Container>
      <FooterText>{"\u00A9"} DESIGNED BY VINEET UPADHYAY</FooterText>
    </Section>
  );
};

export default Footer;
