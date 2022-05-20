import React, { useState } from "react";
import styled from "styled-components";
import { Text, MainText } from "./textes.jsx";

const Button = styled.button`
  @media (max-width: 720px) {
    width: 90vw;
    height: 5em;
  }
  @media (min-width: 720px) {
    width: 20em;
    height: 5em;
    margin: 1em;
  }
`;

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #39ace6;
  transition: all 1s;
  position: absolute;
  left: ${(props) => (props.props.step2 ? "-100%" : "0%")};
  top: 0%;
  overflow-x: hidden;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const Final = ({ step2, setStep3 }) => {
  const [Message, setMessage] = useState("");

  return (
    <Page props={{ step2 }}>
      <MainText>Wybierz kwotę!</MainText>
      <Row>
        <Button
          onClick={() => setMessage("Opcja 10$ jest chwilowo niedostępna :(")}
        >
          <Text>10$</Text>
        </Button>
        <Button
          onClick={() => setMessage("Opcja 25$ jest chwilowo niedostępna :(")}
        >
          <Text>25$</Text>
        </Button>
        <Button onClick={() => setStep3(false)}>
          <Text>50$</Text>
        </Button>
        <Button
          onClick={() => setMessage("Opcja 100$ jest chwilowo niedostępna :(")}
        >
          <Text>100$</Text>
        </Button>
      </Row>
      <MainText>{Message}</MainText>
    </Page>
  );
};

export default Final;
