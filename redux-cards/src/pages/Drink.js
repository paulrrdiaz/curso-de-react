import React from "react";
import DrinkDetail from 'containers/DrinkDetail'

export default (props) => {
  const { id } = props
  
  return (
    <div>
      <DrinkDetail id={id} />
    </div>
  );
};
