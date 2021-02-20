import React from 'react'
import styled from "styled-components";
import { useForm } from "react-hook-form";


const Email = styled.div`
  margin-bottom: 10px;
`;
const Name = styled.div`
  margin-bottom: 10px;
  margin-top:20px;
 
`;
const Message = styled.div`
  margin-bottom: 10px;
 
`;

const Submit = styled.div`
input{
  min-width: 300px;
  width: 400px;
  padding: 10px 14px;
  border-radius: 5px;
  border: 1px solid #000d1a;
  background:#ec851d;
  font-size:1rem;
  color:#fff;
  font-weight:600;
  transition: .5s ease;
  &:hover{
  background:#011e3b;

}
}

`;
const Form = styled.div`
  color: #fff;
  
  input,textarea{

    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #000d1a;
    padding: 10px 14px;
    min-width: 300px;
    width: 500px;

    @media screen and (max-width: 768px) {
    width:250px;
  }
  }
 
`;

const ContactForm = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data.name);
    return (
        
            <Form>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 style={{fontSize:"2rem"}}>Contact Us</h1>
              <Name>
                <input
                  type="text"
                  name="name"
                  id="name"
                  ref={register}
                  placeholder="Name"
                />
              </Name>

              <Email>
                <input
                  type="email"
                  name="email"
                  id="email"
                  ref={register}
                  placeholder="Email"
                ></input>
              </Email>

              <Message>
                <textarea
                  name="message"
                  id="message"
                  rows="3"
                  cols="10"
                  ref={register}
                  placeholder="Message"
                ></textarea>
              </Message>
              <Submit>
                <input type="submit" />
              </Submit>
            </form>
          </Form>
        
    )
}

export default ContactForm
