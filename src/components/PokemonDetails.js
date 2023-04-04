import React, { useState, useEffect } from 'react';
import Card from './Card';

function PokemonDetails({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(error => console.log(error));
  }, [pokemonName]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <h2>{pokemon.name}</h2>
      {pokemon.sprites && <img src={pokemon.sprites.front_default} alt={`${pokemon.name} sprite`} />}
      {pokemon.sprites && <p>Height: {pokemon.height}</p>}
      {pokemon.sprites && <p>Weight: {pokemon.weight}</p>}
    </Card>
  );
}

export default PokemonDetails;

