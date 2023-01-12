
import styled from "styled-components";

export const Body = styled.body `
    background-color: black;
    font-family: DINNext, Matterhorn, Helvetica, sans-serif;
    color: white;
    text-align:center;
    padding: 1rem;
    margin: auto;
`

export const LogoSW = styled.img `
    width: 100px;
    margin-left: 150px;
`

export const DivLogIn = styled.label `
    float: right;
`

export const LogIn = styled.button `
    font-size: 10px;
    background-color: black;
    color: grey;
    cursor: pointer;
`
export const NavButtons = styled(LogIn)`
    font-size: 12px;
    margin: 10px;
    &:hover {
        border-bottom: solid blue;
    }
`

export const AStyle = styled.a `
    color: grey;
    text-decoration: none;
`

export const DivButtons = styled.nav `
border-top: solid grey;
border-bottom: solid grey;
margin-top: 1rem;
`