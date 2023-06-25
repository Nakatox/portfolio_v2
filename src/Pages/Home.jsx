import React from 'react';
import styled, {keyframes}from 'styled-components';
import logoSVG from '/assets/logoSVG.svg';
import githubLogo from '/assets/github.svg';
import linkedinLogo from '/assets/linkedin.svg';
import mailLogo from '/assets/mail.png';
import phoneLogo from '/assets/phone.png';
import me from '/assets/me.svg';


import Techno from '../Components/Techno';


const Home = () => {
    const techno = [
        {
            "name" : "React",
            "logo" : "react",
            "description" : "oyujyihntb vfb",
            "link" : "https://github.com/Nakatox/react-article",
            "place": "1"
        },
        {
            "name" : "NodeJs",
            "logo" : "node",
            "description" : "oyujyihntb vfb",
            "link" : "https://github.com/Nakatox/api-node-express",
            "place": "2"
        },
        {
            "name" : "Symfony",
            "logo" : "symfony",
            "description" : "oyujyihntb vfb",
            "link" : "https://github.com/Nakatox/tutube-ultime",
            "place": "3"
        },
        {
            "name" : "Django",
            "logo" : "django",
            "description" : "oyujyihntb vfb",
            "link" : "https://github.com/Nakatox/django-habits",
            "place": "4"
        }
    ]
    return (
        <div>
            <Container>
                <img src={logoSVG} alt="logo"/>
                <h1>incent</h1>
            </Container>
            <ContainerText>
                <p>My name is Vincent, I am a 21 years old <span>developer</span></p>
            </ContainerText>    
            <ContainerLink>
                <div>
                    <div>
                        <img src={githubLogo} alt="logo" onClick={()=>{window.open("https://github.com/Nakatox")}} />
                        <p>Nakatox</p>
                    </div>
                    <div>
                        <img src={linkedinLogo} alt="logo" onClick={()=>{window.open('https://www.linkedin.com/in/vincent-loron-181464207/','_blank')}} />
                        <p>Vincent Loron</p>
                    </div>

                    <div>
                        <img src={mailLogo} alt="email" />
                        <p>vincent.loron@supinternet.fr</p>
                    </div>
                    <div>
                        <img src={
                            phoneLogo
                        } alt="phone" />
                        <p>07 83 83 29 48</p>
                    </div>
                </div>
            </ContainerLink>
            {/* <ContainerTechno>
                {techno.map(techno => (
                    <Techno key={techno.name} data={techno} />
                ))}
            </ContainerTechno> */}

        </div>
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
const Wigle = keyframes`
    0% {
        transform: rotate(-8deg);
    }
    50% {
        transform: rotate(8deg);
    }
    100% {
        transform: rotate(-8deg);
    }
`;
const Button = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation:${fadeIn} 1s;
    & img{
        width: 50px;
        cursor: pointer;
        transition: all .2s ease-in-out;
        &:hover{
            scale: 1.2;
        }
        filter: drop-shadow( 4px 4px 4px rgba(0, 0, 0, .15));
    }
    & p{
        cursor: pointer;
        font-size: 17px;
        padding: 0px 10px;
        background-color: #cc5454;
        color: white;
        border-radius: 5px;
        margin-top: 0.5rem;
        width: fit-content;
    }`
const ContainerLink = styled.div`
    
    display: flex;
    flex-direction: column;
    padding-top: 35px;
    padding-bottom: 50px;
    justify-content: space-between;
    margin: 0 10%;
    animation:${fadeIn} 1s;
    & div {
        @media (max-width: 768px){
            flex-direction: column;
        }
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-around;
        & div{
            display: flex;
            align-items: center;
            flex-direction: column;
            @media (max-width: 768px){
                margin-bottom: 1rem;
                margin-top: 1.5rem;
            }
            & img {
                width: 50px;
                filter: drop-shadow( 4px 4px 4px rgba(0, 0, 0, .15));
            }
            & p {
                font-size: 17px;
                padding: 0px 10px;
                background-color: #cc5454;
                color: white;
                border-radius: 5px;
                margin-top: 90px;
                position:absolute;

            }
        }
        & div:nth-child(1), & div:nth-child(2){
            & img {
                cursor: pointer;
                transition: all .2s ease-in-out;
                &:hover{
                    scale: 1.2;
                }
            }
        }
    }
`;

const ContainerText = styled.div`
    animation:${fadeIn} 1s;
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    & p{
        font-size: 30px;
        & span{
            font-weight: bold;
        }
        & span{
            color: #cc5454;
        }
    }
    `
const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 150px;
    & h1 {
        animation: fadeIn 1.4s;
        animation-fill-mode: forwards;
        animation-name: ${fadeIn};
        font-size: 3rem;
        font-weight: 700;
        margin-right:65px;

    }

    & img {
        transform-origin: 63% 25%; 
        animation: ${fadeIn} 1s ease-in-out, ${Wigle} 4s ease-in-out infinite;
        width: 150px;
        padding-bottom: 40px;
        padding-left: 40px;
    }
`;
const ContainerTechno = styled.div`
    animation:${fadeIn} 1s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 50px;
    margin-bottom: 50px;
    `;


export default Home

