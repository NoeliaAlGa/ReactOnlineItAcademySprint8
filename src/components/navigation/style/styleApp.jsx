
import styled from "styled-components";

export const BodyStyle = styled.div `
    background-color: black;
    font-family: DINNext, Matterhorn, Helvetica, sans-serif;
    color: white;
    text-align:center;
    padding: 1rem;
    margin: auto;
    width: auto;
    min-height: 100vh;
    max-height: 100%;
`

export const LogoSW = styled.img `
    width: 100px;
    margin-left: 150px;
`

export const DivLogIn = styled.label `
    float: right;
    margin-top: 10px;
`

export const LogIn = styled.button `
    font-size: 10px;
    font-weight: bold;
    background-color: black;
    color: grey;
    cursor: pointer;
    margin: 0 10px 0 10px;
    &:hover {
        border-bottom: solid blue;
        color: white;
    }
`
export const NavButtons = styled.button`
    font-size: 12px;
    margin: 10px;
    font-weight: bold;
    background-color: black;
    color: grey;
    cursor: pointer;
    &:hover {
        border-bottom: solid blue;
        color: white;
    }
`

export const AStyle = styled.a `
    color: grey;
    text-decoration: none;
    &:hover {
        color: white;
    }
`

export const DivButtons = styled.nav `
    border-top: solid grey;
    border-bottom: solid grey;
    margin-top: 1rem;
`
export const TextRegUser = styled.p `
    margin: 0 1rem 0 0;
    text-align: right;
    font-size: 12px;
`   