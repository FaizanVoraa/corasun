import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
height:60px;

`;

const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center; 
`;
const Left = styled.div`
flex:1;
display:flex;
align-items:center; 
`;
const Language = styled.span`
fornt-size:14px
carousel: pointer ;
`;

const SearchContainer =styled.div`
border:1px solid black;
display:flex;
align-items:center; 
margin-left:25px;
padding:5px;
`

const Input = styled.input`
border:none;
`

const Center = styled.div`
flex:1;
text-align:center;
`

const Logo = styled.h1`
font-weight:bold;
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center; 
justify-content:flex-end;

`;

const MenuItem = styled.div`
font-size:14px;
carousel: pointer;
margin-left:24px;
`

function Navbar() {
  return (

    
    <Container>
    <Wrapper>  
    <Left>
        <Language>
            EN
        </Language>
        <SearchContainer>
        <Input/>
           <Search style={{color:"gray", fontSize:16}}/>
        </SearchContainer>
    </Left>
    <Center>
    <Logo>
        <h1>Corasun Healthcare</h1>
    </Logo>
    </Center>
    <Right>
    <MenuItem>Register</MenuItem>
    <MenuItem>Sign In</MenuItem>
    <MenuItem>
    <Badge badgeContent={4} color='primary' >
        <ShoppingCartOutlined/>
    </Badge>
    </MenuItem>
    </Right>
    </Wrapper>
 </Container>
  )
}

export default Navbar