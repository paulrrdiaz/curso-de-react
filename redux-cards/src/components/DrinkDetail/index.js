import React from 'react'

export default (props) => {
  console.log(props);

  const { strDrink, strIngredient1, strIngredient2, strDrinkThumb } = props.drink

  return (
    <div>
      <h2>
        {strDrink} {strIngredient1} {strIngredient2}
      </h2>
      <picture>
        <img src={strDrinkThumb} alt="" />
      </picture>
    </div>
  )
}