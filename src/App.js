import styled from "styled-components";
import React, { useState } from 'react';
import PokemonDetails from "./components/PokemonDetails"
import Wrapper from "./components/GenerativeArt";

function App() {
  const [pokemonName, setPokemonName] = useState('');

  const handleInputChange = event => {
    setPokemonName(event.target.value);
  };

  return (
    <Wrapper>
      
        <PokemonDetails pokemonName={pokemonName}/>
        <Header>
          <Title>
            Which Pokemon do you want to see?
          </Title>
          <Input type="text" value={pokemonName} onChange={handleInputChange}/>
        </Header>
      
    </Wrapper>
  );
}

const Header = styled.div`
  display:flex;
  flex-direction: column;
  background-color: hsl(245deg 30% 90%);
  border-radius: 10px;
  height:100px;
  padding: 50px;
  transform: translateX(250px);
  `;

  const Title = styled.label`
    margin-bottom: 10px;
  `;

  const Input = styled.input`
    background-color: hsl(245deg 40% 80%);
    color: aliceblue;
    border-radius: 15px;
    padding: 12px;
    border-bottom: 4px solid blacks;
  `;

export default App;
