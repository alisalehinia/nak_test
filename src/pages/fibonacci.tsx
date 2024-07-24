/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { FibonacciComp } from "../components/fibonacciComp";

export const Fibonacci: React.FC = () => {
  return (
    <div>
      <h2
        css={css`
          text-align: center;
          font-weight: 200;
          font-size: 48px;

          font-weight: 600;
          margin-bottom: 56px;
        `}
      >
        Fibonacci
      </h2>
      <FibonacciComp />
    </div>
  );
};
