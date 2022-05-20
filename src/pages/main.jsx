import React from "react";
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
  left: ${(props) => (props.props.steps ? "0%" : "-100%")};
  overflow-x: hidden;
`;

const Main = ({ Progress, setProgress, steps, setSteps, setStep2 }) => {
  var i = 1;

  const AddProgress = () => {
    setSteps(false);
    setTimeout(function () {
      setProgress((Progress += 1));
      i++;
      if (i < 25) {
        AddProgress();
        if (i == 24) {
          setStep2(false);
        }
      }
    }, 100);
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Page props={{ steps }}>
        <MainText>Naciśnij przycisk aby otrzymać prezent!</MainText>
        <MainText>|</MainText>
        <MainText>\/</MainText>
        <Button
          onClick={() => {
            AddProgress(Progress, setProgress);
          }}
        >
          <Text>{"!!!"}</Text>
        </Button>
      </Page>
    </div>
  );
};

export default Main;
