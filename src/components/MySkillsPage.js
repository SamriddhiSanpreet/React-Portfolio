import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'
import { DarkTheme } from './Themes'
import { Develope } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitle'

const Box = styled.div`
  background-color: ${props => props.theme.text};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Main = styled(motion.div)` /* Motion applied */
  border: 2px solid ${props => props.theme.body};
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
  }

  @media (max-width: 616px) {
    padding: 2rem 2rem 3rem 2rem;
  }

  @media (max-width: 473px) {
    padding: 2rem 2rem 4rem 2rem;
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${props => props.theme.text};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }

  @media (max-width: 664px) {
    margin-left: 2.8rem;
  }

  @media (max-width: 639px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 527px) {
    margin-left: 1.5rem;
  }

  @media (max-width: 473px) {
    margin-left: 1rem;
  }

  @media (max-width: 430px) {
    margin-left: 0;
  }
`

const Description = styled.div`
  color: ${props => props.theme.body};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }

  ${Main}:hover & {
    color: ${props => props.theme.text};
  }
`

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme='light' />
        <SocialIcons theme='light' />
        <PowerButton />
        <ParticleComponent theme='light' />

        {/* Animated Skills Box */}
        <Main
          initial={{ opacity: 0, y: 50 }} // Starts invisible and slightly below
          animate={{ opacity: 1, y: 0 }} // Fades in and moves up
          transition={{ duration: 1, ease: 'easeOut' }} // Smooth animation
        >
          <Title>
            <Develope width={40} height={40} /> FullStack Web Developer
          </Title>
          <Description>
            I bring ideas to life with code, crafting seamless web experiences that are as functional as they are intuitive.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Html, Css, Javascript, React, Node, JQuery, Bootstrap, C language, Tailwind, Responsive Design, etc.</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>Vscode, MongoDB Compass, Codepen, etc.</p>
          </Description>
        </Main>

        <BigTitle text='SKILLS' top='80%' right='30%' />
      </Box>
    </ThemeProvider>
  )
}

export default MySkillsPage
