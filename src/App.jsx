import React from 'react';
import styled from 'styled-components';
import Counter from './containers/Counter.jsx';

const SDiv = styled.div `
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: xx-large;
  color: wheat;
  background-color: #282c34;
  font-family: fantasy;
`;

export default function App() {
    return(
        <SDiv>
            <Counter/>
        </SDiv>
    )
};