import React from 'react';
import { SWRConfig } from 'swr';

import logo from './pokeapi_256.png';
import { PokemonGrid } from '../pokemon-list/Pokemon-Grid';
import { PokemonDetail } from '../pokemon-detail/Pokemon-Detail';
import { fetcher } from '../../utils/fetcher';
import { PokedexProvider } from '../context/Pokedex-Provider';
import { MyPokemonProvider } from '../context/MyPokemon-Provider';
import { PokemonProvider } from '../context/Pokemon-Provider';
import { Filter } from '../filter/Filter';

import './App.css';

function App() {
  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <div className="app container">

        <header className="app-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>All the Pokémon data you'll ever need in one place, easily accessible through a modern RESTful API.</p>
        </header>

        <section>
          <PokedexProvider>
            <MyPokemonProvider>

              <PokemonProvider>
                <PokemonDetail />
              </PokemonProvider>

              <Filter />
              <PokemonGrid />

            </MyPokemonProvider>
          </PokedexProvider>
        </section>
      </div>
    </SWRConfig>
  );
}

export default App;
