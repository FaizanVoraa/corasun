import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:30px;
background-color:teal;
coloe:white;
display:flex;
align-items:center;
justify-content:center;
font-sizw:14px;
font-weight:500;

`

function Announcement() {
  return (
    <Container>Super Deal! Free Shipping On orders Over $50</Container>
  )
}

export default Announcement