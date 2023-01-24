
import styled from "styled-components";

export const StyleDiv = styled.div `
    width: 200px;
    height: 150px;
`

export const StyledUl = styled.ul `
    list-style: none;
    margin-left: -50px;
`

export const BotonCart = styled.button `
    background-color: black;
    border-bottom: solid grey;
    color: grey;
    cursor: pointer;
    margin-left: 10px;
    padding: 5px;
    &:hover {
        border-bottom: solid blue;
        color: white;
    }
`