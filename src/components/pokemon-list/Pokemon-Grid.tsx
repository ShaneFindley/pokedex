import { useContext } from "react";

import { usePokemon } from "./usePokemon";
import { PokedexContext } from "../context/Pokedex-Provider";
import { PokemonCard } from "../pokemon-card/Pokemon-Card";

import './Pokemon-Grid.css';

export const PokemonGrid: React.FC = () => {

    const pokemon = usePokemon(true);
    const { selected } = useContext(PokedexContext);

    if (selected) {
        return null;
    }

    const items = pokemon && Array.isArray(pokemon.results) 
        ? pokemon.results.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} className='grid-item'></PokemonCard>) 
        : [];

    return <div className="pokemon-grid">
        { pokemon?.error && <div>An error occured whilst retrieving pokemon details.</div>}
        {items}
    </div>;
}