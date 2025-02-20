import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/Navbar'
// import styled from 'styled-components'

// const StyledBtn = styled.button`
//   background: red;
//   color: white;
//   font-size: 2rem;
//   padding: 2rem;
// `

const Navbar = () => {
  return (
    // <nav>
    <Wrapper>
      <div className="nav-center">
        {/* <StyledBtn>Styled btn</StyledBtn> */}
        <span className=" logo">Cocktail Master</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
    // </nav>
  )
}


export default Navbar
