import React from "react";
import styled from "styled-components";

const Mono = styled.div`
  padding: 2rem;
  ${props => (props.big ? "" : `font-size: 0.7em;`)};
`;

export default ({ big = false, children }) => (
  <Mono big={big}>
    <code>{children}</code>
  </Mono>
);
