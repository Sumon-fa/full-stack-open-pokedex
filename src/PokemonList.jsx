import React from 'react';
import { Link } from 'react-router-dom';

const PokemonList = ({ pokemonList }) => {
  return (
    <div className='list-container'>
      {pokemonList.map(({ id, name }) => (
        <Link
          key={id}
          to={`/pokemon/${name}`}
          className='list-item'
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})`,
          }}
        >
          <div className='list-item-name'>{name}</div>
        </Link>
      ))}
      <h1>gdggg</h1>
      <h2>yfhfhfhf</h2>
    </div>
  );
};

export default PokemonList;
