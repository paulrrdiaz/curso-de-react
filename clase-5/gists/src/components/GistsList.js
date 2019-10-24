import React from "react";
import PropTypes from "prop-types";
import Masonry from "react-masonry-css";
import Gist from "./Gist";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const GistsList = ({ data }) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data.map(gist => {
        return <Gist key={gist.id} {...gist} />;
      })}
    </Masonry>
  );
};

GistsList.propTypes = {
  data: PropTypes.array
};

export default GistsList;
