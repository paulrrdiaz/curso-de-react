import styled from "@emotion/styled";

export const Card = styled.div`
  background-color: rgba(var(--white), 0.95);
  border-radius: 4px;
  box-shadow: -3px 0 7px 2px rgba(var(--black), 0.25);
  color: rgba(var(--black), 0.75);
  max-width: 300px;
  padding: 10px 15px;
  width: 100%;
  word-break: break-all;

  & + & {
    margin-top: 1em;
  }
`;

export const CardTitle = styled.h4`
  font-weight: bold;
  line-height: normal;
  margin-bottom: 0.5em;
`;

export const CardDescription = styled.h4`
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.4;
`;