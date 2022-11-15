import Navbar from './Partials/NavBar'
import Footer from './Partials/Footer'
import { Outlet } from 'react-router-dom'

import "../components/statics/styles/Main.css"

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <main className='back_img'>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default Layout