import React from 'react'
import styled from 'styled-components'
import { Badge, Search, ShoppingCartOutlined } from '@mui/icons-material';



const Container =  styled.div `
   height: 60px;
`;

const Wrapper =  styled.div `
   padding: 10px 20px;
   display : flex;
   justify-content: space-between;
   align-items: center;
`;
const Left  = styled.div` 
  flex: 1;  
  display: flex;
  align-items: center;
`;

const Language  = styled.div `
  font-size : 14px;
  cursor: pointer;
`;
 
const Right  = styled.div `
  flex: 1; 
  display: flex;
  justify-content: flex-end;
`;
const Center  = styled.div `
  flex: 1; 
 `;

 const SearchContainer = styled.div `
   border : 0.5px solid lightgray;
   display: flex;
   align-items : center;
   margin-left: 25px;
   padding: 5px; 
 `; 

 const Input  = styled.input `
    border : none;
 `;

 const Logo = styled.h1 `
    font-weight: bold;
 `;

 const MenuItem = styled.div `
    font-size : 14px;
    cursor: pointer;
    margin-left: 25px;
 `;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                     <Input placeholder='Search'/>
                     <Search style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>DUKALETU.</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                        <Badge badgeContent={0} color="primary">
                             <ShoppingCartOutlined/>
                        </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar