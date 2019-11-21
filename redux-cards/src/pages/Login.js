import React from "react";
import styled from "@emotion/styled";

import Auth from "components/Auth";

const LoginWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 53px);
`;

export default () => {
  return (
    <LoginWrapper>
      <Auth />
    </LoginWrapper>
  );
};
