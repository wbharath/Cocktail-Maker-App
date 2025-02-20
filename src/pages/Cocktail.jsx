import axios from 'axios'
import { Link, useLoaderData, Navigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailPage'

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const loader = async ({params}) => {
  // console.log(data)
  const { id } = params
  const {data} = await axios.get(`${singleCocktailUrl}${id}`)
  // console.log(response)

  return { id, data}
}
const Cocktail = () => {
  const { id, data } = useLoaderData()
  // if(!data) return <h2>Something went wrong</h2>
  if(!data) return <Navigate to='/'/>
  const singleDrink = data.drinks[0]

  // const ingredients = singleDrink 
  // console.log(singleDrink)
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions
  } = singleDrink
  // console.log(singleDrink)
  const validIngredients = Object.keys(singleDrink)
  .filter((key)=>key.startsWith('strIngredient') && singleDrink[key]!==null)
  .map((key)=>singleDrink[key])

  // console.log(validIngredients)




  

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>
            {validIngredients.map((item, index)=>{
              return <span className='ing' key={item}>{item}{index<validIngredients.length -1? ',':''}</span>
            })}
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Cocktail
