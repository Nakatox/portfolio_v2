import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    const location = useLocation()
    return (
        <Container>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'activeLink link_header' : 'inactive link_header')}><CustomLink>Home</CustomLink></NavLink>
            <NavLink to='/projects' className={({ isActive }) => (isActive ? 'activeLink link_header' : 'inactive link_header')}><CustomLink>Projects</CustomLink></NavLink>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'activeLink link_header' : 'inactive link_header')}><CustomLink>About me</CustomLink></NavLink>
            <NavLink to='/resume' className={({ isActive }) => (isActive ? 'activeLink link_header' : 'inactive link_header')}><CustomLink>Resume</CustomLink></NavLink>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 200px;
    `;
const CustomLink = styled.p`
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 10px;
    
`;
export default Header
