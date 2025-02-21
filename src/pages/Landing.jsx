import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const loader = async ({ request }) => {
  // console.log('Request URL:', request.url)
  const url = new URL(request.url)
  const searchTerm = url.searchParams.get('search') || ''

  //doing this coz the api doesn't work if we don't mention the atleast one letter to the search term in base url
  const query = searchTerm && searchTerm !== '' ? searchTerm : 'a'
  // console.log('Extracted searchTerm:', searchTerm)
  const response = await axios.get(`${cocktailSearchUrl}${query}`)
  // console.log(response)
  return { drinks: response.data.drinks, searchTerm }
}

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData()
  // console.log(drinks)
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  )
}

export default Landing
