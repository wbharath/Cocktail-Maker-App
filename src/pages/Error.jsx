
import { Link, useRouteError} from "react-router-dom"
import Wrapper  from "../assets/wrappers/ErrorPage"
import img from '../assets/not-found.svg'
const Error = () => {
  const error = useRouteError()
  console.log(error)
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh!!</h3>
          <p>We can't seem to find the page you are looking for</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div>
        <h3>Something Went Wrong</h3>
      </div>
    </Wrapper>
  )
  return <h2>Error</h2>
}

export default Error
