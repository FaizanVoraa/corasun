import { Facebook, Instagram, LinkedIn, Mail, Phone, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
display:flex;
`;
const Left = styled.div`
flex:1;
display:flex;
flex-direction: column;
padding: 20px;
`;

const Logo =styled.h1``
const Desc =styled.p`
margin: 20px 0px;
`;
const SocialIcon =styled.div`
width:40px;
height:40px;
border-radius: 50%;
color:white;
background-color:#${props => props.color};
display:flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;
const SocialContainer =styled.div`
display: flex;
`;


const Center = styled.div`
flex:1;
padding: 20px;
`;
const Title = styled.h3`
    margin-bottom:30px;

`;
const List = styled.ul`
  margin:0;
  padding:0;
  list-style:none;
  display:flex;
  flex-wrap: wrap;


`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom:10px;

`;

const Right = styled.div`
flex:1; 
padding: 20px;

`;
const ContactItem = styled.p`
margin-bottom: 20px;
display: flex;
align-items: center;

`;


function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Corasun Healthcare</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
         officia?</Desc>
         <SocialContainer>
            <SocialIcon color="3b5999">
            <Facebook/>
            </SocialIcon>
            <SocialIcon color="e4405f">
            <Instagram/>
            </SocialIcon>
            <SocialIcon color="55acee">
            <Twitter/>
            </SocialIcon>
            <SocialIcon color="0A66C2">
            <LinkedIn/>
            </SocialIcon>

         </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>First Aid Kit</ListItem>
          <ListItem>
          Order Tracking </ListItem>
          <ListItem>Catheter</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Syringe</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Glucose meter</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight: 10}}/> 811 Galaxy Appartment, Driving Road 
        , Ahmedabad.</ContactItem>
        <ContactItem> <Phone style={{marginRight: 10}}/>  +9100000000</ContactItem>
        
        <ContactItem> <Mail style={{marginRight: 10}}/> Corasunhealthcare00@gmail.com</ContactItem>
      </Right>
    </Container>
  )
}

export default Footer
