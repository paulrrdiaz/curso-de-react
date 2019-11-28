import React from 'react'
import styled from '@emotion/styled'

const DrinkDetail = styled('div')`
  text-align: center;

  h2 { 
    margin-bottom: 10px;
  }

  picture {
    display: block;
    margin: 0 auto;
    width: 50%;
  }

  img {
    max-width: 100%;
    width: 100%;
  }
`

export default (props) => {
  const { strDrink = "", strIngredient1 = "", strIngredient2 = "", strDrinkThumb = "" } = props.drink || {}

  return (
    <DrinkDetail>
      <h2>
        {strDrink} {strIngredient1} {strIngredient2}
      </h2>
      <picture>
        <img src={strDrinkThumb} alt="" />
      </picture>
    </DrinkDetail>
  )
}