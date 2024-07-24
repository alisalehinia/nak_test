/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";

const getFibonacciNeighbors = (num: number): [number, number] => {
  let prev = 0;
  let current = 1;

  if (num === 0) return [0, 1];

  while (current <= num) {
    const next = prev + current;
    if (current === num) {
      return [prev, next];
    }
    prev = current;
    current = next;
  }

  return [0, 1];
};

export const FibonacciComp: React.FC = () => {
  const [input, setInput] = useState<number | string>("");
  const [result, setResult] = useState<[number, number] | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleButtonClick = () => {
    const num = Number(input);
    if (!isNaN(num)) {
      setResult(getFibonacciNeighbors(num));
    }
  };

  return (
    <div
      css={css`
        padding: 20px;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <label
          htmlFor="number"
          css={css`
            width: 100%;
            max-width: 696px;
            margin-bottom: 5px;
            font-size: 16px;
            font-weight: 600;
            text-align: center;
          `}
        >
          Enter your number
        </label>
        <input
          id="number"
          value={input}
          onChange={handleInputChange}
          css={css`
            font-size: 36px;
            height: 98px;
            width: 100%;
            max-width: 696px;
            padding: 0 20px;
            margin-bottom: 20px;
            box-shadow: 0px 4px 22px 0px #0000000a;
            border: 1px solid var(--color-border-tertiary, #e6e6e6);
            border-radius: 12px;
            text-align: center;
          `}
        />
        <div
          css={css`
            width: 100%;
            max-width: 696px;
            display: flex;
            justify-content: flex-end;
            box-shadow: 0px 4px 22px 0px #0000000a;
            border: 1px solid var(--color-border-tertiary, #e6e6e6);
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 12px;
          `}
        >
          <button
            onClick={handleButtonClick}
            css={css`
              font-size: 24px;
              padding: 10px 20px;
              cursor: pointer;
              background-color: #242424;
              color: white;
              border: none;
              border-radius: 12px;
              &:hover {
                background-color: black;
              }
              &:disabled {
                background-color: #cccccc;
                cursor: not-allowed;
              }
            `}
          >
            Submit
          </button>
        </div>
        <div
          css={css`
            width: 100%;
            height: 1px;
            background-color: var(--color-border-tertiary, #e6e6e6);
            margin-bottom: 20px;
          `}
        />
        <label
          css={css`
            width: 100%;
            max-width: 696px;
            margin-bottom: 5px;
            font-size: 16px;
            font-weight: 600;
            text-align: center;
          `}
        >
          Result
        </label>
        <div
          css={css`
            display: flex;
            justify-content: space-around;
            width: 100%;
            max-width: 696px;
            padding: 20px;
            box-shadow: 0px 4px 22px 0px #0000000a;
            border: 1px solid var(--color-border-tertiary, #e6e6e6);
            border-radius: 12px;
            background-color: #fff;
            flex-wrap: wrap;

            @media (max-width: 768px) {
              flex-direction: column;
              align-items: center;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              width: 150px;
              height: 150px;
              background-color: #f1f1f1;
              border-radius: 12px;
              font-size: 24px;
              font-weight: 600;
              margin: 10px;

              @media (max-width: 768px) {
                width: 100%;
                height: 150px;
                margin: 5px;
              }
            `}
          >
            {result ? result[0] : "-"}
          </div>
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              width: 150px;
              height: 150px;
              background-color: #f1f1f1;
              border-radius: 12px;
              font-size: 24px;
              font-weight: 600;
              margin: 10px;

              @media (max-width: 768px) {
                width: 100%;
                height: 150px;
                margin: 5px;
              }
            `}
          >
            {input === "" ? "-" : input}
          </div>
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              width: 150px;
              height: 150px;
              background-color: #f1f1f1;
              border-radius: 12px;
              font-size: 24px;
              font-weight: 600;
              margin: 10px;

              @media (max-width: 768px) {
                width: 100%;
                height: 150px;
                margin: 5px;
              }
            `}
          >
            {result ? result[1] : "-"}
          </div>
        </div>
        <p
          css={css`
            width: 100%;
            max-width: 696px;
            margin: 0 auto;
            margin-bottom: 5px;
            font-size: 16px;
            font-weight: 600;
            text-align: center;
            margin-top: 10px;
            color: #808080;
          `}
        >
          Your Number
        </p>
      </div>
    </div>
  );
};
