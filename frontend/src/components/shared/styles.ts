import styled from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  @media screen and (max-width: 1166px) {
    padding: 50px;
  }
  @media screen and (max-width: 1024px) {
    padding: 40px;
  }
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`;

export const SmallTextfield = styled.text`
  border: 1px solid;
  height: 100%;
  text-align: center;
  width: 50%;
  margin: auto;
  color: palevioletred;
  padding: 0.25em 1em;
  border-radius: 8px;
  font-size: 2.6vw;
`;

export const WideTextfield = styled.text`
  color: palevioletred;
  font-size: 1.6vw;
  text-align: center;
  border: 1px solid;
  height: 100%;
  width: 100%;
  margin: auto;
  padding: 0.25em 1em;
  border-radius: 8px;
  display: block;
`;

export const WideButton = styled.button`
  color: rgba(ff3f46);
  font-size: 1em;
  margin: 0 auto;
  left: 50%;
  display: block;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 100%;
`;

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 2vw;
  text-align: center;
  color: palevioletred;
`;

export const BACKGROUND = "#f9f5f1";
export const BUTTON_RED = "#ff3f46";
export const BUTTON_BLUE = "#ccf5e9";

export const Header = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 63, 70, 1) 9%,
    rgba(247, 113, 3, 1) 29%,
    rgba(255, 63, 70, 1) 50%,
    rgba(255, 72, 94, 1) 100%
  );
`;

export const ScrollPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12rem;
`;
