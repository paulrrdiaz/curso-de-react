import React from "react";
import styled from "@emotion/styled";

import Lists from "containers/Lists";
import Users from "components/Users";
import CreateList from "components/CreateList";

const Board = styled.section`
  display: flex;

  > div:nth-of-type(1) {
    max-width: 300px;
    margin-right: 1em;
  }

  > div:nth-of-type(2) {
    flex: 1;
    overflow-x: auto;
  }
`;

const ListsWrapper = styled.div`
  overflow-x: auto;
`;

export default () => (
  <Board>
    <div>
      <Users />
    </div>
    <div>
      <CreateList />
      <ListsWrapper>
        <Lists />
      </ListsWrapper>
    </div>
  </Board>
);
