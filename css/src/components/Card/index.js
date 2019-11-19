import React from "react";
import style from "./style.module.css";
import { Card, CardPicture } from './styles'

export default ({
  image = "https://placeimg.com/640/480/any",
  title = "Default title",
  subtitle = "Default subtitle",
  background
}) => {
  return (
    <Card background={background}>
      <CardPicture>
        <img src={image} alt={title} />
      </CardPicture>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__subtitle">{subtitle}</p>
      </div>
    </Card>
  );
};
