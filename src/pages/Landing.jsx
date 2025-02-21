import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import { useQuery } from '@tanstack/react-query'


const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      searchTerm = searchTerm || 'a'

      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
      return response.data.drinks
    }
  }
}
const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const loader =
  (queryClient) =>
  async ({ request }) => {
    // console.log('Request URL:', request.url)
    const url = new URL(request.url)
    const searchTerm = url.searchParams.get('search') || ''
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))

    //doing this coz the api doesn't work if we don't mention the atleast one letter to the search term in base url
    // const query = searchTerm && searchTerm !== '' ? searchTerm : 'a'
    // console.log('Extracted searchTerm:', searchTerm)
    // const response = await axios.get(`${cocktailSearchUrl}${query}`)
    // console.log(response)
    // return { drinks: response.data.drinks, searchTerm }
    return { searchTerm }
  }

const Landing = () => {
  // const { drinks, searchTerm } = useLoaderData()
  const { searchTerm } = useLoaderData()
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm))
  // console.log(drinks)
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  )
}

export default Landing
