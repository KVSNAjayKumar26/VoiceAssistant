import React, { useState } from 'react'
import styled from 'styled-components'
import colors from './styles/colors'
import Header from './components/Header';
import Assistant from './components/Assistant';
import AnimationBox from './components/AnimationBox';

const AppContainer = styled.div`
background: ${colors.background};
min-height: 100vh;
`;

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const handleCommand = (command) => {
    if (command.toLowerCase().includes("start animation")) {
      setIsActive(true);
    } else if (command.toLowerCase().includes("stop animation")) {
      setIsActive(false);
    }
  };

  return (
    <AppContainer>
      <Header />
      <Assistant handleCommand={handleCommand} />
      <AnimationBox isActive={isActive} />
    </AppContainer>
  );
};

export default App;