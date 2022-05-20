import React from "react";
import styled from "styled-components";
import "./rainbow.css";
import PeepoParty from "./peepoParty.png";

const Image = styled.img`
  width: 30em;
  height: 30em;
  @media (max-width: 720px) {
    width: 90vw;
    height: auto;
  }
`;

const Peppo = () => {
  return (
    <div class="wrapper">
      <Image src={PeepoParty} />
    </div>
  );
};

export default Peppo;
