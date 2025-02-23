import React from 'react'
import styled, { keyframes } from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import { NavLink } from 'react-router-dom'
import { YinYang } from './AllSvgs'
import { useState } from 'react'
import Intro from './Intro'
import { delay, motion } from 'framer-motion'



const MainContainer = styled.div`
  background: ${props => props.theme.text};
  width:100vw;
  height:100vh;
  overflow:hidden;

  position:relative;

  h2,h3,h4,h5,h6{
    font-family:'Karla', sans-serif;
    font-weight:500;
  }

`

const Container = styled.div`
  padding:2rem;

`

const Contact = styled.a`
  color:#000;
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;

  @media (max-width: 768px) {
    color:${props => props.click ? props.theme.text : props.theme.body};
  }
`;

const WORK = styled(NavLink)`
  color:#000;
  position:absolute;
  top:50%;
  right:calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%,-50%);
  text-decoration:none;
  z-index:1;

  @media (max-width: 768px) {
      color:${props => props.click ? props.theme.text : props.theme.body};
      top: ${props => (props.click ? "45%" : "50%")};
  }
`
const EDUCATION = styled(NavLink)`
  color:${props => props.click ? props.theme.text : props.theme.body};
  position:absolute;
  top:37%;
  left:0.2rem;
  transform: rotate(-90deg) translate(-50%,-50%);
  text-decoration:none;
  z-index:1;

  @media (max-width: 1496px) {
     top:27%;
  }

  @media (max-width: 768px) {
      color:${props => props.click ? props.theme.text : props.theme.body};
      top:27%
  }
`
const BottomBar = styled.div`
  position:absolute;
  bottom:1rem;
  left:0;
  right:0;
  width:100%;
  display:flex;
  justify-content:space-evenly;
`
const ABOUT = styled(NavLink)`
  color:${props => props.click ? props.theme.text : props.theme.body};
  text-decoration:none;
  z-index:1;

  @media (max-width: 768px) {
      color:#000;
  }
`
const SKILLS = styled(NavLink)`
  color:#000;
  text-decoration:none;
  z-index:1;
`
const rotate = keyframes`
  from{
    transform:rotate(0)
  }
  to{
    transform:rotate(360deg)
  }
`

const Center = styled.button`
  position:absolute;
  top:${props => props.click ? '85%': '50%' };
  left:${props => props.click ? '92%': '50%' };
  transform: translate(-50%,-50%);
  border:none;
  outline:none;
  background-color:transparent;
  cursor:pointer;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  transition:all 1s ease;

  &>:first-child{
    animation:${rotate} infinite 1.5s linear;
  }

  &>:last-child{
    display:${props => props.click ? 'none': 'inline-block' };
    padding-top:1rem;
  }
`

const DarkDiv = styled.div`
  position:absolute;
  background:#000;
  top:0;
  bottom:0;
  right:50%;
  width:${props => props.click ? '50%': '0%'};
  height:${props => props.click ? '100%': '0%'};
  transition:height 0.5s ease, width 1s ease 0.5s;
  z-index:1;

  @media (max-width: 768px) {
        top:0;
        left:0;
        right:0;
        width:${props => props.click ? '100%': '0%'};
        height:${props => props.click ? '50%': '0%'};
  }

`
const ResponsiveYinYang = styled(YinYang)`
  width: ${props => (props.click ? '120px' : '200px')};
  height: ${props => (props.click ? '120px' : '200px')};

  @media (max-width: 1024px) {
    width: ${props => (props.click ? '100px' : '180px')};
    height: ${props => (props.click ? '100px' : '180px')};
  }

  @media (max-width: 768px) {
    width: ${props => (props.click ? '80px' : '150px')};
    height: ${props => (props.click ? '80px' : '150px')};
  }

  @media (max-width: 480px) {
    width: ${props => (props.click ? '60px' : '120px')};
    height: ${props => (props.click ? '60px' : '120px')};
  }
`;



const Main = () =>{
  const [click,setClick]=useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click}/>
        <Container>
          <PowerButton/>
          <LogoComponent theme={click?'dark':'light'}/>
          <SocialIcons theme={click ? "dark" : "light"} page="main" />
          <Center click={click}>
          <ResponsiveYinYang onClick={handleClick} click={click} fill="currentColor" />
              <span>click here</span>
          </Center>
          <Contact target="_blank" href="mailto:samriddhisanpreet2005@gmail.com" click={click}>
              <motion.h2
                initial={{
                  y:-200,
                  transition:{type:'spring', duration:1.5, delay:1}
                }}
                animate={{
                  y:0,
                  transition:{type:'spring', duration:1.5, delay:1}
                }}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
              >
                  Say hi..
              </motion.h2>
          </Contact>
          <WORK to="/work" click={click}>
              <motion.h2
              initial={{
                y:-200,
                transition:{type:'spring', duration:1.5, delay:1}
              }}
              animate={{
                y:0,
                transition:{type:'spring', duration:1.5, delay:1}
              }}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}>
                  Work
              </motion.h2>
          </WORK>
          <EDUCATION to="/education" click={click}>
              <motion.h2
              initial={{
                y:-200,
                transition:{type:'spring', duration:1.5, delay:1}
              }}
              animate={{
                y:0,
                transition:{type:'spring', duration:1.5, delay:1}
              }}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}>
                  Education
              </motion.h2>
          </EDUCATION>
          <BottomBar>
              <ABOUT to="/about" click={click}>
                <motion.h2
                initial={{
                  y:200,
                  transition:{type:'spring', duration:1.5, delay:1}
                }}
                animate={{
                  y:0,
                  transition:{type:'spring', duration:1.5, delay:1}
                }}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}>
                  About.
                </motion.h2>
              </ABOUT>
              <SKILLS to="/skills" click={click}>
                <motion.h2
                initial={{
                  y:200,
                  transition:{type:'spring', duration:1.5, delay:1}
                }}
                animate={{
                  y:0,
                  transition:{type:'spring', duration:1.5, delay:1}
                }}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}>
                  My Skills.
                </motion.h2>
              </SKILLS>
          </BottomBar>
        </Container>
        {click ? <Intro click={click} /> : null}
    </MainContainer>
  )
}

export default Main
