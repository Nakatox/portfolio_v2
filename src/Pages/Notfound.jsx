import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Notfound = () => {
    let naviguate = useNavigate()

    return (
        <Container>
            <p>Nothing here</p>
            <p onClick={()=>{naviguate('/')}}>Back</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    & p:nth-child(1){
        font-size: 3rem;
        font-weight: 700;

    }
    & p:nth-child(2){
        cursor: pointer;
        font-size: 17px;
        font-weight: bold;
        text-align: center;
        align-self: center;
        trasiition: all 0.5s;
        &:hover{
            color: white;
            background-color: black;
            box-shadow: 0px 0px 1.1px -23px rgba(0, 0, 0, 0.043),
        }
        border: solid black 1px;
        padding: 5px 10px;
        border-radius: 10px;
        width: 200px;
    }`

export default Notfound
