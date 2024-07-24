/** @jsxImportSource @emotion/react */
import React from "react";
import { UserEntity } from "../types/user";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

interface UserRowProps {
  user: UserEntity;
}

export const UserRow: React.FC<UserRowProps> = ({ user }) => {
  const navigate = useNavigate();

  return (
    <tr
      css={css`
        cursor: pointer;
        &:hover {
          background-color: #f5f5f5;
        }
      `}
      onClick={() => navigate(`/list-item/edit-user/${user.id}`)}
    >
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <span
          css={css`
            color: ${user.status === "active"
              ? "green"
              : user.status === "not_active"
              ? "red"
              : "black"};
            background-color: ${user.status === "active"
              ? "#ebfff1"
              : user.status === "not_active"
              ? "#fceeee"
              : "#f1f1f1"};
            border-radius: 33px;
            padding: 8px;
          `}
        >
          {user.status ? user.status : "Unknown"}
        </span>
      </td>
    </tr>
  );
};
