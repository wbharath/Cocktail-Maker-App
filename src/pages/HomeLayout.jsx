import { Link, Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  //tells us the state whether the page is loading or idle
  const navigation = useNavigation()
  // console.log(navigation)
  const isPageLoading = navigation.state === 'loading'

  const value = 'some value'
  return (
    <div>
      {/* <Link to='/about'>About Page</Link> */}
      <Navbar />
      {/* <Outlet/> */}
      <section className="page">
        {isPageLoading ? <div className="loading" /> : 
        // <Outlet context={{value}}/>}
        <Outlet/>
        }
      </section>
    </div>
  )
}

export default HomeLayout
