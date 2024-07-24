/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { UserForm } from "../components/useForm";
import { useParams } from "react-router-dom";
import { useUserStore } from "../store/userStore";

export const EditUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { users } = useUserStore();
  const user = users.find((u) => u.id === id);
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
          Edit
        </span>
        <span
          css={css`
            font-weight: 200;
          `}
        >
          Item
        </span>
      </h2>
      <UserForm user={user} />
    </div>
  );
};
