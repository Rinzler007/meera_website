import React from "react";
import styled from "styled-components";
import { PieChart } from "react-minimal-pie-chart";
import { chartData } from "../data/ChartData";
import Flip from "react-reveal/Flip";

const Container = styled.div`
  text-align: center;
  padding: 5rem calc((100vw-1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 800px;
  align-items: center;
  grid-gap: -2rem;
  margin-top: -18rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Heading = styled.div`
  padding: 2rem 4rem;
  flex-direction: column;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #0D1821;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;

  p {
    margin-top: 20px;
    font-size: 1rem;
    font-weight: 400;
  }
`;
const Impact = () => {
  return (
    <section
      style={{
        paddingLeft: "5rem",
        paddingRight: "5rem",
        marginBottom: "-8rem",
        paddingTop:"4rem",
      }}
    >
      <Flip left>
        <Heading>
          <div>Our Impact</div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto id
            adipisci maxime officiis modi sit, dignissimos magnam voluptatum vel
            amet, similique aliquid nisi quis inventore dicta dolor
            reprehenderit, aut accusamus. 
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus officiis iusto, quos blanditiis cupiditate
            qui vel unde labore error porro ipsa, odio exercitationem.
          </p>
        </Heading>
      </Flip>
      <Container>
        {chartData.map((item, index) => {
          return (
            <div>
              <PieChart
                animate={true}
                data={item.data}
                key={index}
                radius={25}
                reveal={({ item }) => item.value}
                lineWidth={40}
                background="#363546"
                animationDuration={1000}
                
              />
              <h3 style={{ marginTop: "-3rem", color: "#a5a9c0" }}>
                {item.label}
              </h3>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default Impact;
