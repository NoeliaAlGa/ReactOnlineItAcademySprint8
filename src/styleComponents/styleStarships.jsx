
import styled from "styled-components";

export const StyleUl = styled.ul `
    displey: flex;
    flex-direction: column;
`

export const ListaNaves = styled.li `
    list-style: none;
    background-color: rgba(255,255,255, 0.1);
    width: 400px;
    margin: auto;
    color: grey;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 10px grey;
        color: white;
    }
`

export const NombreNave = styled.p `
    font-size: 16px;
    margin: 10px 0px 5px 0px;
    padding-top: 8px;    
`

export const ModeloNave = styled.p `
    font-size: 12px;
    margin: 0;
    padding-bottom: 8px; 
`

export const BotonPages = styled.button `
    background-color: black;
    border-bottom: solid grey;
    color: grey;
    cursor: pointer;
    padding: 5px;
    margin-left: 1rem;
    &:hover {
        border-bottom: solid blue;
        color: white;
    }
`