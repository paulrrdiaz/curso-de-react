import { css } from "@emotion/core";
import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction = "row" }) => direction};
  margin-bottom: ${({ marginBottom = false }) => (marginBottom ? "1em" : "0")};

  > div + div {
    margin-left: ${({ direction = "row" }) =>
      direction === "row" ? ".5em" : "0"};
    margin-top: ${({ direction = "row" }) =>
      direction !== "row" ? ".5em" : "0"};
  }
`;

export const FormControl = styled.div`
  width: 100%;
`;

const getBackground = ({ looks }) => {
  switch (looks) {
    case "danger":
      return "rgba(var(--red), 0.9)";
    default:
      return "rgba(var(--black), 0.5)";
  }
};

export const Button = styled.button`
  background-color: ${props => getBackground(props)};
  border-radius: 4px;
  padding: 10px 20px;
  text-align: center;
  transition: background-color 0.3s linear 0s;
  width: 100%;

  & + button {
    margin-top: 0.5em;
  }

  &[disabled] {
    background-color: rgba(var(--black), 0.25);
    cursor: not-allowed;
  }
`;

const input = css`
  font-size: 0.75rem;
  border: 1px solid rgba(var(--white), 0.25);
  border-radius: 4px;
  padding: 10px 15px;
  width: 100%;
  transition: all 0.3s linear 0s;

  &:focus {
    border-color: rgba(var(--black), 0.25);
    box-shadow: 0 0 12px 2px rgba(var(--yellow), 0.75);
  }
`;

export const Input = styled.input`
  ${input}
`;

export const Textarea = styled.textarea`
  ${input}
  height: 80px;
`;
