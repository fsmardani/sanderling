import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import { Badge } from '@material-ui/core'

const Container = styled.div`
    height: 60px;
    margin: 15px;
    
`

const Wrapper = styled.div`
    padding: 10 px 20 px;
    display: flex;
    align-items: center;
    margin: 3px;
`

const Left = styled.div`
    flex 1;
    display: flex;
    align-items: center;

`

const Lang = styled.span`
    cursor: pointer;
        
`

const SearchContainer = styled.div`
    border: 1px lightgray solid;
    padding: 5px;
    align-items: center;
    margin-left: 25px;
    justify-content: center;

`

const Input = styled.input `
    border: none
`

const Center = styled.div`
    flex 1;
    text-align: center;
        
`

const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex 1;
    text-align: center;
    display: flex;
    justify-content: flex-end;
    
        
`

const MenuItem = styled.div`
    font-size: 14px;
    margin: 10px;
    cursor: pointer;
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Lang>EN</Lang>/
                <Lang>FA</Lang>
                <SearchContainer>
                    <Search/>
                    <Input/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>Sanderling</Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar