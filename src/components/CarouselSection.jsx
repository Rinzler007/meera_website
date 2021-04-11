import React from "react";
import ReactCardCarousel from "react-card-carousel";
import styled from "styled-components";
import Fade from "react-reveal/Fade";


const CardContainer = styled.div`
  position: relative;
  padding: 20px;
  height: 70vh;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: middle;
`;

const CardStyle = styled.div`
  height: 400px;
  padding: 12px 20px;
  width: 350px;
  padding-top: 80px;
  text-align: center;
  background: #031b35;
  color: #fff;
  font-family: sans-serif;
  font-size: 12px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const Image = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;
const Container = styled.div`
margin-top:20px;
  padding: 3rem calc((100vw-1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: ${({ height }) => height};
  align-items: center;
  direction: ltr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  direction: ltr;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1 rem;
    color: #0D0D26;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    color: #0D0D26;
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
`;
const Btn=styled.a`
transition:0.3s ease-in-out;
margin:15px 17px;
padding:10px 15px;
border-radius:5px;
max-width:100%;
height:60px;
display:flex;
justify-content:center;
align-items:center;
background:#280D8C;
text-decoration:none;
color:#000;
font-weight:bold;
font-size:.8rem;
color:#fff;

&:hover{
    transform:scale(1.1);
}
`;
const CarouselSection = ({textData, carouselData, team}) => {
  return (
    <div>
      <Container>
        <Fade left>
          <ColumnLeft>
            <h1>{textData.heading}</h1>
            <br/>
            <p>
              {team&&
              <h3>“Team never stands for I, it is WE.” </h3>
              }
              {textData.paragraph}
            </p>
          </ColumnLeft>
        </Fade>
        <Fade right>
          <ColumnRight>
            <CardContainer>
              <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                {carouselData.map((item, index) => {
                  return (
                    <CardStyle key={index}>
                      <Image src={item.image} />
                      <h1>{item.name}</h1>
                      {team?(
                          <div>
                            <h2 style={{ fontWeight: 400, marginBottom: "1.2rem" }}>
                        {item.position}
                      </h2>
                      <i>
                        <q style={{ fontSize: "1rem" }}>{item.quote}</q>
                      </i>
                          </div>
                      ):
                      <Btn href={item.src}>
                          Know More
                      </Btn>
                          
                      
                      }
                      
                    </CardStyle>
                  );
                })}
              </ReactCardCarousel>
            </CardContainer>
          </ColumnRight>
        </Fade>
      </Container>
    </div>
  );
};

export default CarouselSection;
