import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Repo from '../Components/Repo'
import { getAllRepositories } from '../Services/API';


const Projects = (props) => {

    const [repo, setrepo] = useState(props.data)

    useEffect(async () => {
        const data = await getAllRepositories()
        setrepo(data)
    }, [])

    return (
        <Container>
            {repo.map(repo => (
                <Repo key={repo.id} data={repo} />
            ))}
        </Container>
    )
}
const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Container = styled.div`
    animation: ${fadeIn} 1s;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    `


export default Projects
