import React from "react";
import Gist from "src/components/Gist";

export default ({ data: gists = [] }) => {
  return (
    <div className="gists">
      {gists.map(gist => (
        <Gist key={gist.id} {...gist} />
      ))}
    </div>
  );
};
