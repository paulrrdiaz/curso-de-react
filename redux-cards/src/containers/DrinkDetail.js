import {connect } from 'react-redux'
import DrinkDetail from 'components/DrinkDetail'
import slugify from 'slugify'

const drinkSlug = (str) => slugify(str.toLowerCase(), {
  remove: /[*+~.()'"!:@]/g
})

const mapStateToProps = ({ drinks: {searchedDrinks = []} }, { id }) => {
  const drink = searchedDrinks.filter(drink => {
    const output = id === drinkSlug(drink.strDrink)
    return output
  })

  return {
    drink: drink[0]
  }
}

export default connect(mapStateToProps)(DrinkDetail)