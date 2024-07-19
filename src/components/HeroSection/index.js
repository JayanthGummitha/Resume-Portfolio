import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import '../../App.css'
import {motion} from 'framer-motion'
import StarsCanvas from './StarBackground';
import zIndex from '@mui/material/styles/zIndex';
import { height } from '@mui/system';

const HeroSection = () => {
    return (
        <div id="about">
               <HeroContainer>
            <HeroBg>
                <HeroBgAnimation />
            </HeroBg>
            <HeroInnerContainer >
                <HeroLeftContainer id="Left">
                    <Title>
                        <motion.p
                        initial={{x:-100,opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{duration:0.5,delay:0}}
                        >Hi, I am
                         <br />  {Bio.name}
                        </motion.p>
                         
                    </Title>
                    <motion.div 
                    initial={{x:-100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.5}}>

                    <TextLoop>
                        I am a
                        <Span>
                            <Typewriter
                                options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Span>
                        
                    </TextLoop>
                    </motion.div>

                    <motion.div
                    initial={{x:-100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:1}}>

                    <SubTitle>{Bio.description}</SubTitle>
                    </motion.div>
                    <motion.div
                    initial={{x:-100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:1.5}}>
                        <div style={{ display: "flex", gap: "10px" }} >
                        <ResumeButton href={Bio.resume} target='display' >Check Resume</ResumeButton>
                        <ResumeButton href={Bio.resume} target='display' >Check CV</ResumeButton>
                    </div>
                    </motion.div>

                </HeroLeftContainer>

                <HeroRightContainer id="Right">

                    <motion.span 
                     initial={{x:100,opacity:0}}
                     animate={{x:0,opacity:1}}
                     transition={{duration:0.5,delay:2}}
                    style={{width: "100%", marginLeft:"10rem",alignItems:"center",justifyContent:"center"}}>

                    <Img src={HeroImg} alt="hero-image" />
                    </motion.span>

                </HeroRightContainer>
            </HeroInnerContainer>

        </HeroContainer>
        </div >
    )
}

export default HeroSection