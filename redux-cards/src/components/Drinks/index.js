import React from "react";
import { withFormik } from 'formik'
import Drink from "components/Drink";
import { Form, Button, Input } from "components/Shared/Form";
import styled from '@emotion/styled'

const DrinksList = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const DrinkForm = (props) => {
  const { drinks = [] } = props;

  return (
    <div>
      <Form>
        <Input
          name="base"
          type="text"
          placeholder="Enter a base"
        />
        <Button type="submit">Search</Button>
      </Form>
      <DrinksList>
        {drinks.map(drink => (
          <Drink key={drink.idDrink} {...drink} />
        )) }
      </DrinksList>
    </div>
  );
}

const formikConfig = {
  mapValuestoProps: () => ({
    base: ""
  }),
  handleSubmit: ({ base }, { props }) => {
    const { searchDrinks } = props;
    
    searchDrinks(base)
  }
}

export default withFormik(formikConfig)(DrinkForm)