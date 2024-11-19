import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'
const HeaderContainer = styled.header`
background: ${colors.primary};
padding: 1rem;
color: white;
text-align: center;
font-size: 1.5rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
        🎙️ Voice Assistant
    </HeaderContainer>
  );
};

export default Header;