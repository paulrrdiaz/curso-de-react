import React from "react";
import { Drink, DrinkTitle, DrinkPicture } from "./styled";

export default ({ title = "Default Drink title", id, image }) => {
  return (
    <Drink>
      <DrinkTitle>{title}</DrinkTitle>
      <DrinkPicture>
        <img src={image} alt={title} />
      </DrinkPicture>
    </Drink>
  );
};
