import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const  Box = styled(NavLink)`
    width:calc(10rem + 15vw);
    text-decoration:none;
    height:20rem;
    padding:1rem;
    color:${props => props.theme.body};
    border:2px solid ${props => props.theme.body};
    backdrop-filter:blur(2px);
    box-shadow:0 0 1rem 0 rgba(0,0,0,0.2);
    cursor:pointer;
    z-index:5;
    &:hover{
        color:${props => props.theme.text};
        background-color:${props => props.theme.body};
        transition:all 0.3s ease;
    }
`

const Image = styled.div`
    background-image: ${props => `url(${props.img})`};
    width:100%;
    height:60%;
    background-size:cover;
    border:1px solid transparent;
    background-position:center center;
    ${Box}:hover &{
        border:1px solid ${props => props.theme.text};
    }

`

const Title = styled.h3`
    color:inherit;
    padding:0.5rem 0;
    padding-top:1rem;
    font-family:'Karla',sans-serif;
    font-weight:700;
    border-bottom:1px solid ${props => props.theme.body};
    ${Box}:hover &{
        border-bottom:1px solid ${props => props.theme.text};
    }
`

const HashTags = styled.div`
    padding:0.5rem 0;
`

const Tag = styled.span`
    padding:0.5rem;
`

const WorkComponent = (props) => {
    const{name, tags,imgSrc,link} =props.work;
    return (
        <Box target="_blank" to={{pathname:link}}>
            <Image img={imgSrc}/>
            <Title>{name}</Title>
            <HashTags>
                {
                    tags.map((t,id)=>{
                        return <Tag key={id}>#{t}</Tag>
                    })
                }
            </HashTags>
        </Box>
    )
}

export default WorkComponent
