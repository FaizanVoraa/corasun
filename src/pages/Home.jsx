import React from 'react'
import Categories from '../componets/Categories'
import Navbar from '../componets/Navbar'
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
    </div>
  )
}

export default Home