import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Particles from "react-tsparticles";


const Notfound = () => {
    let naviguate = useNavigate()

    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

    return (

        <Container>

            <p>Nothing here</p>
            <p onClick={()=>{naviguate('/')}}>Back</p>
            <Particles style={{position:'absolute', zIndex: -9999}}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: true
                },
                fpsLimit: 60,
                particles: {
                    groups: {
                    z5000: {
                        number: {
                        value: 70
                        },
                        zIndex: {
                        value: 5000
                        }
                    },
                    z7500: {
                        number: {
                        value: 30
                        },
                        zIndex: {
                        value: 75
                        }
                    },
                    z2500: {
                        number: {
                        value: 50
                        },
                        zIndex: {
                        value: 25
                        }
                    },
                    z1000: {
                        number: {
                        value: 40
                        },
                        zIndex: {
                        value: 10
                        }
                    }
                    },
                    number: {
                    value: 200,
                    density: {
                        enable: false,
                        value_area: 800
                    }
                    },
                    color: {
                    value: "#000000",
                    animation: {
                        enable: false,
                        speed: 20,
                        sync: true
                    }
                    },
                    shape: {
                    type: "circle"
                    },
                    opacity: {
                    value: 1,
                    random: false,
                    animation: {
                        enable: false,
                        speed: 3,
                        minimumValue: 0.1,
                        sync: false
                    }
                    },
                    size: {
                    value: 3
                    },
                    links: {
                    enable: false,
                    distance: 100,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                    },
                    move: {
                    angle: {
                        value: 10,
                        offset: 0
                    },
                    enable: true,
                    speed: 5,
                    direction: "right",
                    random: false,
                    straight: true,
                    outModes: {
                        default: "out"
                    },
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                    },
                    zIndex: {
                    value: 5,
                    opacityRate: 0.5
                    }
                },
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                    onHover: {
                        enable: false,
                        mode: "repulse"
                    },
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                    },
                    modes: {
                    grab: {
                        distance: 400,
                        links: {
                        opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 0.8
                    },
                    repulse: {
                        distance: 200
                    },
                    push: {
                        quantity: 4,
                        groups: ["z5000", "z7500", "z2500", "z1000"]
                    },
                    remove: {
                        quantity: 2
                    }
                    }
                },
                detectRetina: true,
                background: {
                    color: "transparent",
                    image: "",
                    position: "50% 50%",
                    repeat: "no-repeat",
                    size: "50px"
                },
                emitters: {
                    position: {
                    y: 55,
                    x: -30
                    },
                    rate: {
                    delay: 7,
                    quantity: 1
                    },
                    size: {
                    width: 0,
                    height: 0
                    },
                    particles: {
                    shape: {
                        type: "images",
                        options: {
                        images: [
                            {
                            src: "https://particles.js.org/images/amongus_blue.png",
                            width: 205,
                            height: 267
                            },
                            {
                            src: "https://particles.js.org/images/amongus_cyan.png",
                            width: 207,
                            height: 265
                            },
                            {
                            src: "https://particles.js.org/images/amongus_green.png",
                            width: 204,
                            height: 266
                            },
                            {
                            src: "https://particles.js.org/images/amongus_lime.png",
                            width: 206,
                            height: 267
                            },
                            {
                            src: "https://particles.js.org/images/amongus_orange.png",
                            width: 205,
                            height: 265
                            },
                            {
                            src: "https://particles.js.org/images/amongus_pink.png",
                            width: 205,
                            height: 265
                            },
                            {
                            src: "https://particles.js.org/images/amongus_red.png",
                            width: 204,
                            height: 267
                            },
                            {
                            src: "https://particles.js.org/images/amongus_white.png",
                            width: 205,
                            height: 267
                            }
                        ]
                        }
                    },
                    size: {
                        value: 40
                    },
                    move: {
                        speed: 10,
                        outModes: {
                        default: "destroy",
                        left: "none"
                        },
                        straight: true
                    },
                    zIndex: {
                        value: 0
                    },
                    rotate: {
                        value: {
                        min: 0,
                        max: 360
                        },
                        animation: {
                        enable: true,
                        speed: 10,
                        sync: true
                        }
                    }
                }
                },
        }
    }
      />
        </Container>
    )
}

const Container = styled.div`
    & div{
        z-index: -1 !important;
    }
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
