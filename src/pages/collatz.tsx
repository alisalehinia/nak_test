/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { CollatzComp } from "../components/collatzComp";

export const Collatz: React.FC = () => {
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
        Collatz Conjecture
      </h2>
      <CollatzComp />
    </div>
  );
};
