import styled from "styled-components";

export const DivImgButton = styled.div `
    position: relative;
    display: inline-block;
`

export const TextEncimaImg = styled.h1 `
    position: absolute;
    top: 55%;
    color: grey;
    background-color: black;
    font-size: 40px;
    text-align: left;
    padding: 2rem;
    width: 100%;
    cursor: pointer;
    &:hover {
        border-bottom: solid 5px blue;
        border-top: solid 5px blue;
        color: white;
    }
`

export const ImgWallpaper = styled.img `
    margin-top: 1rem;
    width: 100%;
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