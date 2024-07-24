/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";

const getCollatzLoops = (num: number): number => {
  let count = 0;
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = 3 * num + 1;
    }
    count++;
  }
  return count;
};

export const CollatzComp: React.FC = () => {
  const [input, setInput] = useState<number | string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleButtonClick = () => {
    const num = Number(input);
    if (!isNaN(num) && num > 0) {
      setResult(getCollatzLoops(num));
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
            margin: 0 auto;
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
          type="number"
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
            Calculate Cycles
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
            margin: 0 auto;
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
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: 696px;
            padding: 20px;
            box-shadow: 0px 4px 22px 0px #0000000a;
            border: 1px solid var(--color-border-tertiary, #e6e6e6);
            border-radius: 12px;
            background-color: #fff;

            @media (max-width: 768px) {
              padding: 10px;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 150px;
              background-color: #f1f1f1;
              border-radius: 12px;
              font-size: 24px;
              font-weight: 600;
              box-sizing: border-box;

              @media (max-width: 768px) {
                width: 100%;
                height: 150px;
              }
            `}
          >
            {result !== null ? result : "-"}
          </div>
        </div>
      </div>
    </div>
  );
};
