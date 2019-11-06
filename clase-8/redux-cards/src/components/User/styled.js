import styled from "@emotion/styled";

export const User = styled.div`
  display: flex;
  padding: 15px;
  background-color: rgba(var(--white), 0.9);
  border-radius: 4px;

  & + & {
    margin-top: 0.5em;
  }
`;

export const UserPicture = styled.picture`
  flex: 1;
  margin-right: 0.5em;

  img {
    border-radius: 50%;
    max-width: 100%;
  }
`;

export const UserDetails = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgba(var(--green), 1);
`;

export const UserName = styled.h3`
  margin-bottom: 0.25em;
  font-weight: bold;
`;

export const UserEmail = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
`;
