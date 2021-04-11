import styled from "styled-components";
import React from "react";
import { galleryData } from "../data/GalleryData";
import { SRLWrapper } from "simple-react-lightbox";
import Pulse from "react-reveal/Fade";
import FlipCard from "../components/FlipCard";

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  margin: auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const ImageComponent = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

const Section = styled.section`
  padding: 5rem 4rem;
  background: #0D1821;
`;

const Heading = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;

  h1 {
    text-align: center;
  }
  p {
    margin-top: 20px;
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

const PhotoGallery = () => {
  return (
    <div>
      <Section>
        <Pulse>
          <Heading>
            Our Gallery
            <p>
              <i>
                “Your mysterious young friend, whose name you have never told
                me, but whose picture really fascinates me, never thinks.”
              
              <br /> <strong>- Oscar Wilde, The Picture of Dorian Gray</strong> </i>
            </p>
          </Heading>
        </Pulse>
        <SRLWrapper>
          <GalleryWrapper>
            {galleryData.map((item, index) => {
              return (
                <a href={`/images/img (${item.id}).jpeg`}>
                  <ImageComponent
                    src={`/images/img (${item.id}).jpeg`}
                    alt={item.alt}
                    key={index}
                  />
                </a>
              );
            })}
          </GalleryWrapper>
        </SRLWrapper>
      </Section>
    </div>
  );
};

export default PhotoGallery;
