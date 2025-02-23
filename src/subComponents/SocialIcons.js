import React, { useState, useEffect } from 'react';
import { Instagram, Github, Linkedin } from '../components/AllSvgs';
import styled from 'styled-components';
import { DarkTheme } from '../components/Themes';
import {motion } from 'framer-motion'

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background: ${(props) => props.color};
`;

const SocialIcons = ({ theme, page }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine icon color
  const getIconColor = () => {
    if (windowWidth <= 768) {
      return page === "about" ? "#fff" : "#000"; // White on About Page, Black on Main Page
    }
    return theme === "dark" ? DarkTheme.text : DarkTheme.body;
  };

  // Determine line color
  const getLineColor = () => {
    if (windowWidth <= 768) {
      return page === "about" ? "#fff" : "#000"; // White on About Page, Black on Main Page
    }
    return theme === "dark" ? DarkTheme.text : DarkTheme.body;
  };

  return (
    <Icons>
            <motion.div 
        initial={{ opacity: 0, scale: 0.5 }} // Start from slightly smaller with opacity 0
        animate={{ opacity: 1, scale: 1 }} // Fade in and scale up
        transition={{
          type: 'spring',
          stiffness: 120,
          duration: 1,
          delay: 1
        }}
      >
        <a style={{ color: 'inherit' }} target="_blank" rel="noopener noreferrer" href="https://github.com/SamriddhiSanpreet">
          <Github width={25} height={25} fill={getIconColor()} />
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 120,
          duration: 1,
          delay: 1.2
        }}
      >
        <a style={{ color: 'inherit' }} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/samriddhi-sanpreet-714277323/">
          <Linkedin width={25} height={25} fill={getIconColor()} />
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 120,
          duration: 1,
          delay: 1.4
        }}
      >
        <a style={{ color: 'inherit' }} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sam_sanpreet">
          <Instagram width={25} height={25} fill={getIconColor()} />
        </a>
      </motion.div>


      {/* Dynamic Line Color */}
      <Line color={getLineColor()}
        initial={
          {
            height:0
          }
        }
        animate={{height:'8rem'}}
        transition={{
          type:'spring', duration:1, delay:0.8
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
