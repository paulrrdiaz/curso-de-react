import React from "react";

export default ({ owner, html_url, description, files }) => {
  return (
    <a href={html_url} rel="noopenner" className="gist">
      <h2 className="gist__title">{owner.login}</h2>
      <p className="gist__text">
        {description || files[Object.keys(files)[0]].filename}
      </p>
    </a>
  );
};
