import React, { useEffect, useRef, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme, lightTheme } from './Themes';
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import { Work } from '../data/WorkData'
import Card from '../subComponents/Card';
import { YinYang } from './AllSvgs';
import BigTitle from '../subComponents/BigTitle';
import { motion } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Box = styled.div`
  background-color: ${props => props.theme.text};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`
const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: #fff;
  transition: transform 0.5s ease-in-out;

  @media (max-width: 632px) {
    left: calc(5rem + 15vw);
  }

  @media (max-width: 490px) {
    left: calc(2rem + 15vw);
  }

  @media (max-width: 422px) {
    left: calc(0rem + 15vw);
  }
`
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`
const ButtonContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
`
const Button = styled(motion.button)`
  padding: 12px 24px;
  background: linear-gradient(145deg, #2e2e2e, #1a1a1a);
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #2e2e2e;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: linear-gradient(145deg, #3a3a3a, #222222);
    box-shadow: inset 5px 5px 10px #1a1a1a, inset -5px -5px 10px #2e2e2e;
    transform: scale(1.1);
  }
`
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }
}

const EducationPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const step = 20;
  const maxTranslate = 60;

  const handleNext = () => {
    setTranslateX(prev => Math.max(prev - step, -maxTranslate));
  };

  const handleBack = () => {
    setTranslateX(prev => Math.min(prev + step, 0));
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translateX(${translateX}%)`;
    }
  }, [translateX]);

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='dark' />
        <SocialIcons theme='dark' page="about" />
        <PowerButton />
        <Main ref={ref} variants={container} initial='hidden' animate='show'>
          {
            Work.map(d =>
              <Card key={d.id} data={d} />
            )
          }
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>
        <BigTitle text="EDUCATION & EXPERIENCE" top='10%' right='5%' />
        <ButtonContainer>
          <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleBack}>
            <FaArrowLeft />
          </Button>
          <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleNext}>
            <FaArrowRight />
          </Button>
        </ButtonContainer>
      </Box>
    </ThemeProvider>
  )
}

export default EducationPage
