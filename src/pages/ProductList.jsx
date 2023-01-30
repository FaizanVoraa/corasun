import React from 'react'
import styled from 'styled-components'
import Navbar from "../componets/Navbar"
import Announcemet from "../componets/Announcement"
import Products from "../componets/Products"
import Newsletter from "../componets/Newsletter"
import Footer from "../componets/Footer"

 const Container = styled.div``
 const Title = styled.h1`
 margin:20px;
 `
 const FilterContainer = styled.div`
 display:flex;
 justify-content:space-between;
 `
 const Filter = styled.div`
 margin:20px;
 `
const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right: 20px;
`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
`

const Option = styled.option``

function ProductList() {
  return (
    <Container>
    <Announcemet/>
<Navbar/>
<Title>Medicine</Title>
<FilterContainer>
    <Filter><FilterText>Product Iteams</FilterText>
    <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
    </Filter>
    <Filter><FilterText>Short Iteams</FilterText>
    <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
    </Filter>
</FilterContainer>
<Products/>
<Newsletter/>
<Footer/>
    </Container>
  )
}

export default ProductList