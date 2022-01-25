import React from 'react'
import styled from 'styled-components';

const Repo = (props) => {
    const repo = props.data

    const clickLink = () => {
        window.open(
            repo.html_url, "_blank");
    }

    return (
        <Container onClick={clickLink} >
            <p>{repo.description}</p>
            <p>{repo.pushed_at.substr(0,10)}</p>
            <p>{repo.language}</p>
        </Container>
    )
}

const Container = styled.div`
    cursor: pointer;
    background-color: $backgroung-color;
    margin:10px 10px;
    padding: 10px;
    border-radius: 10px;
    border: solid rgb(38, 35, 51) 2px;
    border-color:rgb(38, 35, 51) ;
    position: relative;
    width: 350px;
    min-width: 200px;
    & p{
        padding: 10px 0;
    }
    {
        font-size: 25px;
        font-weight: bold;
    }
    & p:nth-child(2){
        opacity: 0.6;
    }
    & p:nth-child(3){
        opacity: 0.1;
        font-size: 40px;
        font-weight: bold;
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
    &:hover{
        border-color: #cc5454;
    }
`

export default Repo
