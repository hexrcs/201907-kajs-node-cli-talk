import React from "react";
import styled from "styled-components";

const Span = styled.span`
  background-color: yellow;
  font-family: "Fira Code", Consolas, Monaco, "Andale Mono", "Ubuntu Mono",
    monospace;
  font-weight: bold;
  color: black;
`;

const Red = styled.span`
  background-color: red;
`;

export default () => (
  <Span>
    Karlsruhe<Red>JS</Red>
  </Span>
);
