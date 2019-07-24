import React, { useState } from "react";
import { render, Box } from "ink";
import useKeypress from "./useKeypress.js";

const Counter = () => {
  const [value, setValue] = useState(0);
  useKeypress(() => setValue(value + 1));

  return (
    <Box marginY={3} justifyContent="center">
      <Box>Press any key to increment: {value}</Box>
    </Box>
  );
};

render(<Counter />);
