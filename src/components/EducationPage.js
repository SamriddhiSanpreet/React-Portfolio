import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {DarkTheme, lightTheme} from './Themes';
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import {Work} from '../data/WorkData'
import Card from '../subComponents/Card';
import { YinYang } from './AllSvgs';
import BigTitle from '../subComponents/BigTitle';
import {motion} from 'framer-motion'


const Box = styled.div`
  background-color:${props => props.theme.text};
  height:400vh;
  position:relative;
  display:flex;
  align-items:center;
`
const Main = styled(motion.ul)`
  position:fixed;
  top:12rem;
  left:calc(10rem + 15vw);
  height:40vh;
  display:flex;
  color:#fff;

  @media (max-width: 632px) {
    left:calc(5rem + 15vw);
  }

   @media (max-width: 490px) {
    left:calc(2rem + 15vw);
  }

   @media (max-width: 422px) {
    left:calc(0rem + 15vw);
  }
`
const Rotate = styled.span`
  display:block;
  position:fixed;
  right:1rem;
  bottom:1rem;
  width:80px;
  height:80px;
  z-index:1;

`
const container ={
  hidden:{opacity:0},
  show:{
    opacity:1,

    transition:{
      staggerChildren:0.5,
      duration:0.5,

    }
  }
}

const EducationPage = () =>{

  const ref= useRef(null);
  const yinyang= useRef(null);


  useEffect(() => {
    const element = ref.current; // The main container
    const yinYangElement = yinyang.current; // The rotating element
  
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
  
      let maxTranslate;
  
      // Use if-else for responsiveness
      if (window.innerWidth < 437) {
        maxTranslate = 95; // Smaller shift for mobile
      }
      else if (window.innerWidth < 632) {
        maxTranslate = 90; // Smaller shift for mobile
      }
      else if (window.innerWidth < 777) {
        maxTranslate = 85; // Smaller shift for mobile
      }
      else if (window.innerWidth < 917) {
        maxTranslate = 80; // Smaller shift for mobile
      }
      else if (window.innerWidth < 1059) {
        maxTranslate = 75; // Smaller shift for mobile
      }
      else if (window.innerWidth < 1344) {
        maxTranslate = 70; // Smaller shift for mobile
      } 
      else {
        maxTranslate = 60; // Larger shift for desktops
      }
  
      // Calculate horizontal translation
      const translateX = Math.min(0, (-scrollY / maxScroll) * maxTranslate); 
      
      // Calculate rotation degree based on scroll position
      const rotation = scrollY * 0.5; // Adjust speed by changing multiplier
  
      if (element) {
        element.style.transform = `translateX(${translateX}%)`;
      }
  
      if (yinYangElement) {
        yinYangElement.style.transform = `rotate(${rotation}deg)`;
      }
    };
  
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  
  

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark' page="about"/>
        <PowerButton/>
        <Main ref={ref} variants={container} initial='hidden' animate='show'>
          {
            Work.map(d => 
              <Card key={d.id} data={d}/>
            )
          }
        </Main>
        <Rotate ref={yinyang}>
            <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>
        <BigTitle text="EDUCATION & EXPERIENCE" top='10%' right='5%' />
      </Box>
    </ThemeProvider>
  )
}

export default EducationPage
