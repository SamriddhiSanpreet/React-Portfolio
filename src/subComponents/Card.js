import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';

const Box = styled(motion.li)`
    width:16rem;
    height:40vh;
    background-color:${props => props.theme.body};
    color:${props => props.theme.text};
    padding:1.5rem 2rem;
    margin-right:8rem;
    border-radius:0 50px 0 50px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border: 1px solid ${props => props.theme.text};
    transition:all 0.2s ease;

    &:hover{
    background-color:${props => props.theme.text};
    color:${props => props.theme.body};
    border: 1px solid ${props => props.theme.body};
    }
     
    @media (max-width: 400px) {
        width:10rem;
        height:40vh;
    }
`

const Title = styled.h2`
    font-size:calc(1em + 0.5vw);

`
const Description = styled.h2`
    font-size:calc(0.8em + 0.3vw);
    font-family:'Karla',sans-serif;
    font-weight:500;
`
const Tags = styled.div`
    border-top:2px solid ${props => props.theme.text};
    padding-top:0.5rem;
    display:flex;
    flex-wrap:wrap;
    ${Box}:hover &{
        border-top:2px solid ${props => props.theme.body};
    }
`
const Tag = styled.span`
    margin-right:1rem;
    font-size:calc(0.8rem + 0.3vw);
`

const Item ={
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition:{
            type:'spring',
            duration:0.5
        }
    }
}

const Card = (props) => {
    const {id, name, description, tags, github, demo}= props.data;
  return (
    <Box key={id} variants={Item}>
        <Title>{name}</Title>
        <Description>
            {description}
        </Description>
        <Tags>
            {
                tags.map((t,id)=>{
                    return <Tag key={id}>#{t}</Tag>
                })
            }
        </Tags> 
    </Box>
  )
}

export default Card
