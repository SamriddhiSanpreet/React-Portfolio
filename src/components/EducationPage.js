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
    let scrollOffset = 0; // Virtual horizontal scroll tracking
  
    const getMaxTranslate = () => {
      if (window.innerWidth < 437) return 95;
      if (window.innerWidth < 632) return 90;
      if (window.innerWidth < 777) return 85;
      if (window.innerWidth < 917) return 80;
      if (window.innerWidth < 1059) return 75;
      if (window.innerWidth < 1344) return 70;
      return 60; // Default for larger screens
    };
  
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScrollY = document.body.scrollHeight - window.innerHeight;
      const maxTranslate = getMaxTranslate();
  
      // Slower and smoother translation (reduced effect)
      let translateX = (-scrollY / maxScrollY) * maxTranslate * 1.2;
      translateX = Math.max(-maxTranslate, Math.min(0, translateX + scrollOffset));
  
      if (element) {
        element.style.transform = `translateX(${translateX}%)`;
      }
  
      if (yinYangElement) {
        yinYangElement.style.transform = `rotate(${(scrollY + scrollOffset) * 0.8}deg)`; // Slower rotation
      }
    };
  
    const handleWheel = (event) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        scrollOffset += event.deltaX * 0.15; // **Slower horizontal movement**
        scrollOffset = Math.max(-getMaxTranslate(), Math.min(0, scrollOffset)); // Clamping to prevent overshoot
        handleScroll();
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
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
