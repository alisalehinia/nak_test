/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { UserForm } from "../components/useForm";

export const CreateUser: React.FC = () => {
  return (
    <div>
      <h2
        css={css`
          text-align: center;
          font-weight: 200;
          font-size: 48px;

          margin-bottom: 56px;
        `}
      >
        <span
          css={css`
            font-weight: 600;
          `}
        >
          Create
        </span>
        <span
          css={css`
            font-weight: 200 !important;
          `}
        >
          New Item
        </span>
      </h2>
      <UserForm />
    </div>
  );
};
