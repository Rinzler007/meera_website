import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Fade from "react-reveal/Fade";
import ContactForm from "./ContactForm";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 4rem;
  padding-bottom:25px;
  background: #0D1821;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 10px 10px;
  }
`;
const Container = styled.div`
  padding: 3rem calc((100vw-1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: ${({ height }) => height};
  align-items: center;
  justify-content: center;
  direction: ltr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 10px 10px;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  direction: ltr;
  border-right: thick solid #ec851d;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }
`;
const FooterText = styled.div`
  display: flex;
  margin-top:2rem;
  justify-content: center;
  align-items: center;
  font-size: clamp(.8rem, 1.5vw, 1rem);
  color: #384053;
  bottom: 2px;
  font-weight: bold;
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <Fade left>
          <ColumnLeft>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41292.87720330957!2d85.09285012473178!3d25.622102208613143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58598eb52405%3A0x7f6d196ac3dce5ce!2sGandhi%20Maidan!5e0!3m2!1sen!2sin!4v1613742856042!5m2!1sen!2sin"
              width="100%"
              height="400px"
              frameborder="0"
              style={{ border: 0, borderRadius: "5px" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </ColumnLeft>
        </Fade>
        <Fade right>
          <ColumnRight>
            <ContactForm />
          </ColumnRight>
        </Fade>
      </Container>
      <FooterText>{"\u00A9"} DESIGNED BY VINEET UPADHYAY</FooterText>
    </Section>
  );
};

export default Contact;
