import React from "react";
import styled from "styled-components";

export const MainText = styled.p`
  font-family: "VT323", monospace;
  font-size: 5em;
  font-weight: 400;
  margin: 0;
  @media (max-width: 720px) {
    width: 90vw;
    font-size: 3em;
  }
`;

export const Text = styled.p`
  font-family: "VT323", monospace;
  font-size: 3em;
  font-weight: 400;
  margin: 0;
`;
