import styled from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  @media screen and (max-width:1166px){
      padding:50px;
  }
  @media screen and (max-width:1024px){
    padding:40px;
}
@media screen and (max-width:767px){
    padding:20px;
}
`;

export const Textfield = styled.text`
    border: 1px solid;
    height: 100%;
    text-align: center;
    width: 40%;
    margin: auto;
    color: palevioletred;
    padding: 0.25em 1em;
    border-radius: 8px;
    
`;

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 2vw;
  text-align: center;
  color: palevioletred;
`;

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 0 auto;
  left: 50%;
  display: block;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 100%;
`;
