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
  font-family: 'Shadows Into Light Two', cursive;
  height: 100%;
  text-align: center;
  width: 50%;
  color: black;
  background-color: #ffa07a;
  opacity: 0.7;
  padding: 0.25em 1em;
  border-radius: 8px;
  font-size: 2.6vw;
`;

export const SmallTextWrapper = styled.div`
  margin: auto;
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
  color: ff3f46;
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

export const BACKGROUND = "#F9F5F1";
export const BUTTON_RED = "#FF3F46";
export const BUTTON_BLUE = "#CCF5E9";
export const Header = styled.div`
  background: linear-gradient(
    90deg,
    rgba(253,61,87,1) 37%,
    rgba(248,156,49,1) 100%
  );
`;
export const ScrollPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
  width: 100%;
`;

export const MainHeaderBackground = styled.div`
  background: #ff3f46;
  width: 350px;
  height: 45px;
  text-align: center;
  margin-top: 30px;
  margin-left: 5px;
  display: table-cell;
  vertical-align: middle;
`;

export const MainHeader = styled.h3`
  font-family: 'Shadows Into Light Two', cursive;
  color: #f9f5f1;
  font-size: 1.2rem;
`;

export const Text = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  text-align: justify;
  color: #707070;
`;

export const NormalHeader = styled.h3`
  font-family: 'Shadows Into Light Two', cursive;
`;

export const NormalHeaderLeft = styled.h3`
  font-family: 'Shadows Into Light Two', cursive;
  text-align: left;
  margin-left: 1rem;
  top: 10px;
`;

export const NormalHugeHeader = styled.h2`
  font-family: 'Shadows Into Light Two', cursive;
  font-size: 1.5rem;
`;

export const FullButton = styled.button<{ primary: boolean }>`
  background: ${(props) => (props.primary ? BUTTON_RED : BUTTON_BLUE)};
  color: ${(props) => (props.primary ? "white" : "black")};
  font-family: 'Shadows Into Light Two', cursive;
  font-size: 1rem;
  font-weight: 100;
  border: none;
  width: 350px;
  height: 50px;
  border-radius: 5px;
`;

export const HeaderButton = styled.button`
  background: ${BUTTON_BLUE};
  border: 2px ${BUTTON_BLUE};
  color: black;
  padding: 0.25em 1em;
  width: 7rem;
  height: 4rem;
  border-radius: 5px;
`;

export const DButtonSmall = styled.button`
  background: ${BUTTON_BLUE};
  color: black;
  border: none;
  padding: 0.3rem 2rem;
  box-shadow: 1px 1px 1px grey;
`;

export const DButtonBig = styled.button`
  background: ${BUTTON_RED};
  color: white;
  border: none;
  padding: 0.3rem 4rem;
  box-shadow: 1px 1px 1px grey;
`;
