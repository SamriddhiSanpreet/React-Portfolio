import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Me from '../assets/Images/profile-img.png';

const Box = styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 65vw;
    display: flex;
    background: linear-gradient(to right, ${props => props.theme.text} 50%, ${props => props.theme.body} 50%) bottom,
                linear-gradient(to right, ${props => props.theme.text} 50%, ${props => props.theme.body} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.text};
    border-right: 2px solid ${props => props.theme.body};
    z-index: 1;

    @media (max-width: 768px) {
        background: linear-gradient(to right, ${props => props.theme.body} 50%, ${props => props.theme.body} 50%) bottom,
                linear-gradient(to right, ${props => props.theme.text} 50%, ${props => props.theme.text} 50%) top;
        background-repeat: no-repeat;
        background-size: 100% 2px;
        border-left: 2px solid ${props => props.theme.text};
        border-image: linear-gradient(to bottom, white 50%, black 50%) 1;
        border-right: 2px solid ${props => props.theme.text};
        display:block;
        width:50vw;
        height:65vw;
    }
    @media (max-width: 597px) {
        background: linear-gradient(to right, ${props => props.theme.body} 50%, ${props => props.theme.body} 50%) bottom,
                linear-gradient(to right, ${props => props.theme.text} 50%, ${props => props.theme.text} 50%) top;
        background-repeat: no-repeat;
        background-size: 100% 2px;
        border-left: 2px solid ${props => props.theme.text};
        border-image: linear-gradient(to bottom, white 50%, black 50%) 1;
        border-right: 2px solid ${props => props.theme.text};
        display:block;
        width:50vw;
    }
`;

const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;

    .pic {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 100%;
        height: auto;
    }

    @media (max-width: 1190px) {
        .pic {
            width: 100%;
            height: 390px;
        }
    }

    @media (max-width:769px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -3%);
        width: 100%;
        height: 32vw;
    }

    @media (max-width:742px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -10%);
        width: 100%;
        height: 34vw;
    }

    @media (max-width:720px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -12%);
        width: 100%;
        height: 34vw;
    }

    @media (max-width:710px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -8%);
        width: 100%;
        height: 34vw;
    }

    @media (max-width:695px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -7%);
        width: 100%;
        height: 34vw;
    }

    @media (max-width:675px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -10%);
        width: 100%;
        height: 34vw;
    }

    @media (max-width:655px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -8%);
        width: 100%;
        height: 33vw;
    }

    @media (max-width:648px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -10%);
        width: 100%;
        height: 33vw;
    }

    @media (max-width:639px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -10%);
        width: 100%;
        height: 33vw;
    }

    @media (max-width:620px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -5%);
        width: 100%;
        height: 38vw;
    }

    @media (max-width:600px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -7%);
        width: 100%;
        height: 38vw;
    }

    @media (max-width:597px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, 0%);
        width: 100%;
        height: 40vw;
    }

    @media (max-width:586px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -5%);
        width: 100%;
        height: 42vw;
    }

    @media (max-width:577px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -6%);
        width: 100%;
        height: 42vw;
    }

    @media (max-width:572px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -7%);
        width: 100%;
        height: 42vw;
    }

     @media (max-width:561px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -8%);
        width: 100%;
        height: 42vw;
    }

    @media (max-width:547px) {
        display:block;
        width:100%;
        .pic {
            position: absolute;
            bottom: 0;
            top: 50%;
            transform: translate(-50%, -10%);
            width: 100%;
            height: 42vw;
    }

    @media (max-width:533px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -12%);
        width: 100%;
        height: 42vw;
    }

    @media (max-width:516px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -13%);
        width: 100%;
        height: 42vw;
    }

    @media (max-width:508px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -14%);
        width: 100%;
        height: 42vw;
    }

     @media (max-width:492px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -16%);
        width: 100%;
        height: 42vw;
    }

    @media (max-width:480px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -16%);
        width: 100%;
        height: 41vw;
    }

    @media (max-width:465px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -4%);
        width: 100%;
        height: 45vw;
    }

    @media (max-width:460px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -3%);
        width: 100%;
        height: 45vw;
    }

    @media (max-width:449px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -6%);
        width: 100%;
        height: 45vw;
    }

    @media (max-width:443px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -6%);
        width: 100%;
        height: 45vw;
    }

    @media (max-width:430px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -9%);
        width: 100%;
        height: 45vw;
    }

    @media (max-width:420px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -5%);
        width: 100%;
        height: 48vw;
    }

    @media (max-width:415px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -6%);
        width: 100%;
        height: 48vw;
    }
    @media (max-width:405px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -9%);
        width: 100%;
        height: 48vw;
    }

    @media (max-width:382px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -12%);
        width: 100%;
        height: 48vw;
    }

    @media (max-width:370px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -15%);
        width: 100%;
        height: 48vw;
    }

    @media (max-width:356px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -18%);
        width: 100%;
        height: 48vw;
    }

    @media (max-width:352px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -17%);
        width: 100%;
        height: 48vw;
    }

    @media (max-width:341px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -19%);
        width: 100%;
        height: 48vw;
    }

    @media (max-width:338px) {
        display:block;
        width:100%;
        .pic {
        position: absolute;
        bottom: 0;
        top: 50%;
        transform: translate(-50%, -21%);
        width: 100%;
        height: 48vw;
    }
   
`;

const Text = styled.div`
    font-size: calc(0.5em + 1.5vw);
    color: ${props => props.theme.text};
    padding: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3{
        padding: 2rem 0
    }

    & > *:last-child {
        color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
        font-size: calc(0.3rem + 1.5vw);
        font-weight: 300;
    }

    @media (max-width:769px) {
         h3{
            padding:1rem 0;
         }
        text-align:center;
        margin-top:1rem;
    }

    @media (max-width:710px) {
        text-align:center;
        margin-top:0rem;
    }

    @media (max-width:620px) {
        text-align:center;
        margin-top:1rem;
    }
    @media (max-width:533px) {
        text-align:center;
        margin-top:0rem;
    }

    @media (max-width:352px) {
       h3{
            padding:0.5rem 0;
         }
    }
`;

const Intro = () => {
    const controls = useAnimation();

    useEffect(() => {
        const updateHeight = () => {
            const width = window.innerWidth;
            if(width <= 420){
                controls.start({ height: '90vw' });
            }
            else if(width <= 465){
                controls.start({ height: '85vw' });
            }
            else if(width <= 597){
                controls.start({ height: '75vw' });
            }
            else if(width <= 621){
                controls.start({ height: '70vw' });
            }
            else if (width <= 768) {
                controls.start({ height: '60vw' });
            } 
             else {
                controls.start({ height: '55vh' });
            }
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, [controls]);

    return (
        <Box 
            initial={{ height: 0 }} 
            animate={controls}   
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Samriddhi.</h3>
                    <h6>I build efficient and elegant web applications that bring ideas to life.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <img className='pic' src={Me} alt='Profile Pic' title='Profile Pic' />
                </motion.div>
            </SubBox>
        </Box>
    );
};

export default Intro;
