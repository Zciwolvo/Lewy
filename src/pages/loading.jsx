import React from "react";
import styled from "styled-components";
import ProgressBar from "react-bootstrap/ProgressBar";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #39ace6;
  overflow-x: hidden;
`;

const Loading = ({ Progress, steps, setSteps }) => {
  return (
    <Page>
      <ProgressBar style={{ width: "90vw", height: "5em" }}>
        <ProgressBar striped variant="success" now={Progress} key={1} />
        <ProgressBar variant="warning" now={Progress} key={2} />
        <ProgressBar striped variant="danger" now={Progress} key={3} />
        <ProgressBar striped variant="info" now={Progress} key={4} />
      </ProgressBar>
    </Page>
  );
};

export default Loading;
