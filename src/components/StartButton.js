import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton'

const StartButton = ({ callback }) => (
  <StyledStartButton onclick={callback}>Start Game</StyledStartButton>
);

console.log('in start button')

export default StartButton;