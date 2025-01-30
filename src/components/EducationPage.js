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


const Box = styled.div`
  background-color:${props => props.theme.text};
  height:400vh;
  position:relative;
  display:flex;
  align-items:center;
`
const Main = styled.ul`
  position:fixed;
  top:12rem;
  left:calc(10rem + 15vw);
  height:40vh;
  display:flex;
  color:#fff;
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


const EducationPage = () =>{

  const ref= useRef(null);
  const yinyang= useRef(null);


  useEffect(() => {
    const element = ref.current; // The main container for the Education section
  
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
  
      // Calculate the percentage of scrolling and translate the section left
      const translateX = Math.min(0, -scrollY / maxScroll * 110); // Moves left to -100%
  
      if (element) {
        element.style.transform = `translateX(${translateX}%)`;
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark'/>
        <PowerButton/>
        <Main ref={ref}>
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
