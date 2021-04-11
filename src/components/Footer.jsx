import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 2rem;
  padding-bottom: 25px;
  position: relative;
  background: #0D1821;
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
  align-items: flex-start;
  flex-direction: column;
  border-left: thick solid #22AAA1;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }
`;

const FooterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
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

const SocialLink = styled.a`
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Footer = ({ reverse }) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1 style={{ marginLeft: "8px" }}>Project MEERA</h1>
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
            <SocialLink href="https://instagram.com/pehel.weforyou?igshid=1flftpz01arw2">
              <AiFillInstagram
                style={{ color: "#22AAA1", height: "40px", width: "40px" }}
              />
            </SocialLink>
            <SocialLink href=" https://youtube.com/channel/UC9m7YFaeTpDNZoMvbygnACw">
              <AiFillYoutube
                style={{ color: "#22AAA1", height: "40px", width: "40px" }}
              />
            </SocialLink>
            <SocialLink href="https://www.facebook.com/pehel.weforyou/">
              <FaFacebook
                style={{ color: "#22AAA1", height: "35px", width: "35px" }}
              />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/pehel">
              <FiLinkedin
                style={{ color: "#22AAA1", height: "35px", width: "35px" }}
              />
            </SocialLink>
          </Row>
        </ColumnLeft>
        <ColumnRight>
          <h1 style={{ color: "#22AAA1"}}>Address :</h1>
          <p>
            Arjuna Jk Tower, Gandhi Maidan West,
            <br /> Patna 800001 Bihar
          </p>
          <br />
          <h1 style={{ color: "#22AAA1"}}>Mail Us :</h1>
          <p>pehel.weforyou@gmail.com</p>
        </ColumnRight>
      </Container>
      <FooterText>{"\u00A9"} DESIGNED BY VINEET UPADHYAY</FooterText>
    </Section>
  );
};

export default Footer;
