import { Link, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const HomeLayout = () => {
  return (
    <div>
        
        {/* <Link to='/about'>About Page</Link> */}
        <Navbar/>
        {/* <Outlet/> */}
        <section className="page">
            <Outlet/>
        </section>

    </div>
  )
}

export default HomeLayout
