import React from 'react'
import styled, { keyframes } from 'styled-components'
import reactLogo from '/assets/react.svg'
import nodeLogo from '/assets/nodejs.svg'
import symfonyLogo from '/assets/symfony.svg'
import djangoLogo from '/assets/django.svg'

const Techno = (props) => {

    const callImage = () => {
        if (props.data.logo === "react") {
            return (
                    <img src={reactLogo} alt="logo" width={"150px"}/>
            )
        } else if (props.data.logo === "node") {
            return (
                    <img src={nodeLogo} alt="logo" width={"150px"}/>
            )
        } else if (props.data.logo === "symfony") {
            return (
                    <img src={symfonyLogo} alt="logo" width={"150px"}/>
            )
        } else if (props.data.logo === "django") {
            return (
                    <img src={djangoLogo} alt="logo" width={"150px"}/>
            )
        }
    }

    
    const techno = props.data
    return (
        <Container>
            <p>{techno.name}</p>
            {callImage()}
            <p onClick={()=>{window.open(techno.link)}}>Project with this tech</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #e9e3d8;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    height: 400px;
    justify-content: space-between;
    box-shadow:
  0px 0px 1.1px -23px rgba(0, 0, 0, 0.043),
  0px 0px 2.5px -23px rgba(0, 0, 0, 0.063),
  0px 0px 4.3px -23px rgba(0, 0, 0, 0.077),
  0px 0px 6.9px -23px rgba(0, 0, 0, 0.09),
  0px 0px 10.6px -23px rgba(0, 0, 0, 0.103),
  0px 0px 16.6px -23px rgba(0, 0, 0, 0.117),
  0px 0px 27.5px -23px rgba(0, 0, 0, 0.137),
  0px 0px 55px -23px rgba(0, 0, 0, 0.18)
;
    & p{    
        padding: 10px 0;

    }
    & p:nth-child(1){
        font-size: 30px;
        font-weight: bold;
        text-align: center;
    }
    & p:nth-child(3){
        /* font-size: 22px; */
    }
    & p:nth-child(3){
        cursor: pointer;
        font-size: 17px;
        font-weight: bold;
        text-align: center;
        align-self: center;
        transition: all 0.3s;
        &:hover{
            color: white;
            background-color: black;
            box-shadow: 0px 0px 1.1px -23px rgba(0, 0, 0, 0.043);
            scale: 1.05;
        }
        border: solid black 1px;
        padding: 5px 10px;
        border-radius: 10px;
        width: 200px;
        
    }
    & img{
        align-self: center;
    }
`;




export default Techno
