import React from "react";
import Drink from "components/Drink";
import { Button } from "components/Shared/Form";
import Loader from "components/Shared/Loader";
import { DrinksList, DrinksEmpty } from "./styled";

export default ({ drinks, fetchDrinksBySpirit, status }) => {
  const { isLoading } = status;

  return (
    <>
      <Button onClick={fetchDrinksBySpirit}>Fetch drinks</Button>
      {drinks.length === 0 && !isLoading ? (
        <DrinksEmpty>No drinks for you</DrinksEmpty>
      ) : isLoading ? (
        <Loader />
      ) : (
        <DrinksList>
          {drinks.map(({ idDrink, strDrinkThumb, strDrink }) => (
            <Drink
              key={idDrink}
              title={strDrink}
              image={strDrinkThumb}
              id={idDrink}
            />
          ))}
        </DrinksList>
      )}
    </>
  );
};
