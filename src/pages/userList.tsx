/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { UserList } from "../components/userList";

export const UserListPage: React.FC = () => {
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
          User
        </span>
        <span
          css={css`
            font-weight: 200;
          `}
        >
          Item
        </span>
      </h2>
      <UserList />
    </div>
  );
};
