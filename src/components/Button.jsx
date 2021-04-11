import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#000d18" : "#22AAA1")};
  white-space:nowrap;
  outline:none;
  border:none;
  min-width:100px;
  max-width:200px;
  cursor:pointer;
  text-decoration:none;
  transition: 0.5s;
  display:flex;
  font-weight:600;
  border-radius:5px;
  justify-content:center;
  align-items:center;
  padding: ${({big})=>(big?'16px 40px':'14px 24px')};
  color: ${({primary})=>(primary?'#fff':"#0D1821")};
  font-size:${({big})=>(big?'20px':'14px')};

  &:hover{
      transform:translateY(-2px);
  }
`;

export const SliderButton = styled.a`
  background: ${({ primary }) => (primary ? "#000d18" : "#22AAA1")};
  white-space:nowrap;
  outline:none;
  border:none;
  min-width:100px;
  max-width:200px;
  cursor:pointer;
  text-decoration:none;
  transition: 0.5s;
  display:flex;
  font-weight:600;
  border-radius:5px;
  justify-content:center;
  align-items:center;
  padding: ${({big})=>(big?'16px 40px':'14px 24px')};
  color: ${({primary})=>(primary?'#fff':"#0D1821")};
  font-size:${({big})=>(big?'20px':'14px')};

  &:hover{
      transform:translateY(-2px);
  }
`;
