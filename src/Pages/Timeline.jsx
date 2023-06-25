import React from 'react'
import { Chrono } from "react-chrono";
import styled, { keyframes } from 'styled-components';
import dessinImage from "/assets/dessin.jpeg";
import musiqueImage from "/assets/musique.jpeg";
import cinemaImage from "/assets/cinema.jpeg";

const Timeline = () => {

    const items = [{
        title: "2023 January -> 2023 July",
        cardTitle: "Fullstack developer internship - Golem.ai",
        cardDetailedText: "Improvement and maintenance of a SaaS product / Improvements and addition of features related to AI (sdk) / Ideation and creation of media aimed at promoting Golem.ai technology",
      },{
        title: "2022 March -> 2022 September",
        cardTitle: "Fullstack developer internship - Golem.ai",
        cardDetailedText: "Improvement and maintenance of a SaaS product / Development of features on in-house technologies",
      },{
        title: "2020 -> 2023",
        cardTitle: "Epitech Digital - Paris",
        cardDetailedText: "I am currently learning front and back web languages in order to create websites. The school also trains me to work in a group. ",
      },{
        title: "2017 -> 2020",
        cardTitle: "Lycée Raoul Follereau - Nevers",
        cardDetailedText: "I learned the fundamentals of creating databases and SQL queries in the SIG specialty of the STMG subsidiary. ",
      },{
        title: "June 2018",
        cardTitle: "Stage Animation ISART - Paris",
        cardDetailedText:"I learned the basics of 3D animation and how to work in an animation studio. ",
      },
    ]

    return (
        <div>
            <ContainerText>
                <p>I have always been in IT, doing<span> web development</span> was obvious to me. That's why I've been studying at Epitech Digital as a web developer for two years.</p><br /><p>  I love making <span>APIs with Node</span> and adding a good <span>React</span> on top of it for the front side. I like the synergy that these technologies have.
</p><br /><p>I like to do <span>small projects alongside work</span> (check out my github). And the rest of the time I draw, play video games and hang out on the internet.</p>
            </ContainerText>
            <Container style={{ height: "max-content", display:"flex", width:"fit-content", justifyContent:"center" }}>
                <p style={{marginBottom:"40px", fontSize:"25px", fontWeight:"bold"}}>Here is a summary of my student journey: </p>
                <Chrono 
                    items={items} 
                    theme={{ 
                        primary: "black",
                        secondary: "white",
                        cardBgColor: "#fffcf5",
                        cardForeColor: "black",
                        titleColor: "black"
                    }}
                    mode="VERTICAL_ALTERNATING"
                    />
            </Container>
                <p style={{marginBottom:"20px", fontSize:"25px", fontWeight:"bold", textAlign:"center"}}>My hobbies</p>
            <ContainerHobby>
                <div>
                    <div>
                        <img src={dessinImage} alt="" />
                    </div>
                    <div>
                        <p>I've always been interested in art in general, I draw myself sometimes. </p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={cinemaImage} alt="" />
                    </div>
                    <div>
                        <p>I like good films that are wrongly misunderstood, such as those by Pierre Richard, which fascinate me.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={musiqueImage} alt="" />
                    </div>
                    <div>
                        <p>I like to work in music, especially with classical or soundtracks. </p>
                    </div>
                </div>
            </ContainerHobby>
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

const Container = styled.div`
    margin-top: 2rem;
    animation: ${fadeIn} 1s;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    `

const ContainerText = styled.div`
    animation:${fadeIn} 1s;
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
    & p{
        font-size: 25px;
        white-space: pre-line;
        margin-bottom: 10px;
        & span{
            font-weight: bold;
            color: #cc5454;
        }
    }
    `;
const ContainerHobby = styled.div`
    animation:${fadeIn} 1s;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    & >div{
        display: flex;
        flex-direction: column;
        border: 1px solid #e9e3d8;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        align-items: center;
        width: 30%;
        min-width: 200px;
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
        &  div{
            & p{
                margin: 10px 0;
                text-align:center;
            }
            & img{
                align-self: center;
                height: 100px;
                border: solid 1px #e9e3d8;
            }
        }
    }
}`

export default Timeline
