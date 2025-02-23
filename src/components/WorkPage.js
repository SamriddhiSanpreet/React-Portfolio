import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'  // Importing Framer Motion
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { Blogs } from '../data/BlogData'
import WorkComponent from './WorkComponent'
import AnchorComponent from '../subComponents/Anchor'
import BigTitle from '../subComponents/BigTitle'

const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
`

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.textRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`

const Grid = styled(motion.div)`  /* Motion Grid */
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 18.2vw), 1fr));
  grid-gap: calc(1rem + 2vw);

  @media (max-width: 796px) {
    grid-template-columns: 1fr; /* Ensures one-column layout */
  }
`

// Animation Variants for Staggered Pop-In Effect
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,  // Delays each card
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const WorkPage = () => {
  const [numbers, setNumbers] = useState(0)

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30
    setNumbers(parseInt(num))
  }, [])

  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent numbers={numbers} />
        <Center>
          <Grid
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {Blogs.map(work => (
              <motion.div key={work.id} variants={itemVariants}>
                <WorkComponent work={work} />
              </motion.div>
            ))}
          </Grid>
        </Center>
        <BigTitle text="WORK" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  )
}

export default WorkPage
