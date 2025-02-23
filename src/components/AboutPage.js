import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent';
import astronaut from '../assets/Images/spaceman.png'
import BigTitle from '../subComponents/BigTitle';


const Box = styled.div`
  background-color:${props => props.theme.text};
  width:100vw;
  height:100vh;
  position:relative;
  overflow:hidden;
`
const float = keyframes`
  0% {transform:translateY(-10px)}
  50% {transform:translateY(15px) translateX(15px)}
  100% {transform:translateY(-10px)}
`

const Spaceman = styled.div`
  position:absolute;
  top:10%;
  right:5%;
  width:20vw;
  animation:${float} 4s ease infinite;

  img{
    width:100%;
    height:auto;

  }
`

const Main = styled.div`
  border:2px solid ${props => props.theme.body};
  color:${props => props.theme.body};
  padding:2rem;
  width:50vw;
  height:60vh;
  z-index:3;
  line-height:1.5;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:calc(0.5rem + 1vw);
  backdrop-filter:blur(4px);
  position:absolute;
  left:calc(5rem + 5vw);
  top:10rem;
  font-family:'Ubuntu Mono',monospace;
  font-style:italic;

  @media (max-width:869px) {
      padding:1rem 2rem;
  }

  @media (max-width:750px) {
      padding:0.3rem 2rem;
  }

  @media (max-width:739px) {
      padding:2rem 2rem;
  }

  @media (max-width:660px) {
      padding:2rem 1.5rem;
  }

  @media (max-width:610px) {
      padding:1rem 1.5rem;
  }

  @media (max-width:470px) {
      padding:2rem 1.5rem;
  }
`


const AboutPage = () =>{
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='dark'/>
        <SocialIcons theme="dark" page="about" />
        <PowerButton/>
        <ParticleComponent theme='dark'/>
        <Spaceman>
            <img src={astronaut} alt="spaceman"/>
        </Spaceman>
        <Main>
            Hi, I’m Samriddhi Sanpreet, a passionate full-stack developer who loves to create elegant and efficient web solutions. From pixel-perfect front-end designs to powerful back-end architectures, I enjoy crafting experiences that are both functional and visually captivating.
            <br/><br/>

            I’m always curious to explore new technologies, improve my skills, and bring innovative ideas to life through code. To me, development is more than just building websites—it’s about creating intuitive digital spaces that make a difference.
            <br/><br/>

            Let’s connect and build something extraordinary!
        </Main>
        <BigTitle text="ABOUT" top='10%' left='5%' />
      </Box>
    </ThemeProvider>
  )
}

export default AboutPage
