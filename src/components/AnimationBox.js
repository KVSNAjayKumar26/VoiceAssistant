import { animated, useSpring } from '@react-spring/web'
import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

const Box = styled(animated.div)`
width: 100px;
height: 100px;
background: ${colors.primary}
border-radius: 10px;
margin: 2rem auto;
`;
const AnimationBox = ({ isActive }) => {
    const animation = useSpring({
        transform: isActive ? "scale(1.5)" : "scale(1)",
        config: { tension: 200, friction: 12 },
    });
  return <Box style={animation} />
};

export default AnimationBox;