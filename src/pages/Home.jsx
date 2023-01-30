import React from 'react'
import Categories from '../componets/Categories'
import Footer from '../componets/Footer'
import Navbar from '../componets/Navbar'
import Newsletter from '../componets/Newsletter'
import Products from '../componets/Products'
import Slider from '../componets/Slider'
import Announcement from './Announcement'

function Home() {
  return (
    <div>
<Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer />
    </div>
  )
}

export default Home