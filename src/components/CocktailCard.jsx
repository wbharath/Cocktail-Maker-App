import { Link, useOutletContext } from "react-router-dom"

import Wrapper from "../assets/wrappers/CocktailCard"

const CocktailCard = ({id, name, image, info, glass}) => {
  //global context in router DOM--> In homelayout for outlet we can pass any state down to the last child
  // const data = useOutletContext()
  // console.log(data)
  return <Wrapper>
    <div className="img-container">
        <img src={image} alt={name} className="img"/>
    </div>
    <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">details</Link>
    </div>


  </Wrapper>
}

export default CocktailCard
