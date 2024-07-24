/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div
      css={css`
        border-bottom: 1px solid #ababab;
        font-size: 24px;
        display: flex;
        gap: 15px;
        justify-content: center;
        margin-bottom: 48px;

        @media (max-width: 768px) {
          font-size: 18px;
          margin-bottom: 32px;
        }
      `}
    >
      <NavLink
        to="/list-item"
        css={css`
          color: #808080;
          text-decoration: none;
          padding: 10px 15px;
          position: relative;
          transition: color 0.3s ease;
          font-weight: 500;

          &.active {
            color: #242424;

            &::after {
              content: "";
              position: absolute;
              bottom: -2px;
              left: 0;
              width: 100%;
              height: 2px;
              background-color: #242424;
              transition: transform 0.3s ease;
              transform: scaleX(1);
            }
          }

          &::after {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: transparent;
            transition: transform 0.3s ease;
            transform: scaleX(0);
          }

          @media (max-width: 768px) {
            font-size: 16px;
            font-weight: 600;
          }
        `}
      >
        List item
      </NavLink>
      <NavLink
        to="/Fibonacci"
        css={css`
          color: #808080;
          text-decoration: none;
          padding: 10px 15px;
          position: relative;
          transition: color 0.3s ease;
          font-weight: 500;

          &.active {
            color: #242424;

            &::after {
              content: "";
              position: absolute;
              bottom: -2px;
              left: 0;
              width: 100%;
              height: 2px;
              background-color: #242424;
              transition: transform 0.3s ease;
              transform: scaleX(1);
            }
          }

          &::after {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: transparent;
            transition: transform 0.3s ease;
            transform: scaleX(0);
          }

          @media (max-width: 768px) {
            font-size: 16px;
            font-weight: 600;
          }
        `}
      >
        Fibonacci
      </NavLink>
      <NavLink
        to="/Collatz_Conjecture"
        css={css`
          color: #808080;
          text-decoration: none;
          padding: 10px 15px;
          position: relative;
          transition: color 0.3s ease;
          font-weight: 500;

          &.active {
            color: #242424;

            &::after {
              content: "";
              position: absolute;
              bottom: -2px;
              left: 0;
              width: 100%;
              height: 2px;
              background-color: #242424;
              transition: transform 0.3s ease;
              transform: scaleX(1);
            }
          }

          &::after {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: transparent;
            transition: transform 0.3s ease;
            transform: scaleX(0);
          }

          @media (max-width: 768px) {
            font-size: 16px;
            font-weight: 600;
          }
        `}
      >
        Collatz Conjecture
      </NavLink>
    </div>
  );
}
