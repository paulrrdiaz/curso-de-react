import React from "react";
import { Link } from '@reach/router'
import slugify from 'slugify'
import styled from '@emotion/styled'

const Drink = styled(Link)`
  width: 30%;

  img {
    width: 100%;
    max-width: 100%;
  }
`

export default props => {
  const { strDrink, strDrinkThumb } = props;
  const drinkSlug = slugify(strDrink.toLowerCase(), {
    remove: /[*+~.()'"!:@]/g
  })

  return (
    <Drink to={`details/${drinkSlug}`}>
      <h2>
        {props.strDrink} {props.strIngredient1} {props.strIngredient2}
      </h2>
      <picture>
        <img src={strDrinkThumb} alt="" />
      </picture>
    </Drink>
  );
};
