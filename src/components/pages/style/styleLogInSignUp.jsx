
import styled from "styled-components";

export const DivLogInSignUpImg = styled.div `
    display: flex;
    
`

export const ImgLogInSignUp = styled.img `
    margin: 2rem;
    height: 45vh;
    float:left;
`

export const H2LogInSignUp = styled.h2 `
    border-bottom: solid blue;
`

export const StyleForm = styled.form `
    padding-top:10px;
    text-align: left;
`
export const TextInformation = styled.p `
    font-size: 10px;
    color: grey;
    margin-top: 1rem;
    text-align: right;
`
export const InformationRegistered = styled(TextInformation) `
    font-size: 12px;
    text-align: left;
    color: white;
    margin-left: 10px;
    border-bottom: solid blue;
`

export const DivLogInSignUp = styled.div `
    margin: 1rem;
    text-align: left;
`

export const LabelsLogInSignUp = styled.label `
    padding-right: 1rem;
    color: grey;
    &:hover {
        color: white;
    }
`

export const BotonLogInSignUp = styled.button `
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



