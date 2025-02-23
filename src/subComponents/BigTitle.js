import React from 'react'
import styled from 'styled-components'

const Text = styled.h1`
    position:fixed;
    top:${props => props.top};
    left:${props => props.left};
    right:${props => props.right};
    color:${props => `rgba(${props.theme.bodyRgba}, 0.1)`};
    font-size:calc(5rem + 5vw);
    z-index:0;

    @media (max-width: 749px) {
      font-size:calc(5rem + 3vw);
    }

    @media (max-width: 599px) {
      font-size:calc(5rem + 2vw);
    }

    @media (max-width: 624px) {
      font-size:calc(3rem + 2vw);
      margin-top:2rem;
    }
`

const BigTitle = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
        {props.text}
    </Text>
  )
}

export default BigTitle
