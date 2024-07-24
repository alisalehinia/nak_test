/** @jsxImportSource @emotion/react */
import React from "react";
import { useUserStore } from "../store/userStore";
import { UserRow } from "./userRow";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

export const UserList: React.FC = () => {
  const { users } = useUserStore();
  const navigate = useNavigate();

  return (
    <div
      css={css`
        padding: 0 24px;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          background-color: #fff;
          border: 1px solid #e6e6e6;
          border-radius: 24px 24px 0 0;
        `}
      >
        <h2
          css={css`
            margin: 0;
            color: #242424;
          `}
        >
          Items
        </h2>
        <button
          onClick={() => navigate("/list-item/create-user")}
          css={css`
            padding: 10px 20px;
            background-color: #242424;
            color: white;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            span {
              font-size: 18px;
            }
            &:hover {
              background-color: black;
            }
          `}
        >
          Add New Item <span>&#43;</span>
        </button>
      </div>
      <div
        css={css`
          overflow-x: auto;
          box-shadow: inset 1px 0 5px -2px rgba(0, 0, 0, 0.2);
          @media (max-width: 820px) {
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          }
        `}
      >
        <table
          css={css`
            width: 100%;
            border-collapse: collapse;
            min-width: 600px; /* Ensure the table has a minimum width to enable scrolling */
            th,
            td {
              padding: 16px 24px;
              color: #242424;
              border-top: 1px solid #e6e6e6;
              border-bottom: 1px solid #e6e6e6;
              text-align: left;
            }
            tr {
              border: 1px solid #e6e6e6;
            }
            th {
              background-color: #fafafa;
              border-bottom: 2px solid #e6e6e6;
              &:last-child {
                text-align: left;
              }
            }
            td {
              background-color: #fff;
            }
            tbody tr:last-child td {
              border-radius: 12px;
            }
          `}
        >
          <thead>
            <tr>
              <th>Item</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow key={index} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
