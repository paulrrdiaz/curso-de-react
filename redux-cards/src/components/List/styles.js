import styled from "@emotion/styled";

export const List = styled.div`
  background-color: rgba(var(--black), 0.3);
  border-radius: 4px;
  padding: 10px 20px 20px;
  min-width: 300px;
  width: 300px;
  word-break: break-all;

  & + & {
    margin-left: 1em;
  }
`;

export const ListTitle = styled.div`
  margin-bottom: 0.5em;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: normal;
`;
