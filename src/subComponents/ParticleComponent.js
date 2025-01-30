import styled from 'styled-components';
import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import configDark from "../config/particlesjs-config.json"
import configLight from "../config/particlesjs-config-light.json"

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
  background-color: transparent; 
  width: 100%; 
  height: 100%; 
  display: block;
`;

const ParticleComponent = ({ theme }) => {
  const particlesInit = async (main) => {
    await loadFull(main); 
  };

  // Select configuration based on the theme
  const config = theme === 'light' ? configLight : configDark;

  return (
    <Box>
        <Particles init={particlesInit} options={config} style={{position:'absolute',top:0}}/>
    </Box>
  );
};

export default ParticleComponent;

