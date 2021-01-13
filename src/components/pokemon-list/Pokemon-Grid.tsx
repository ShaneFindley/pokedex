import { useContext } from "react";

import { usePokemon } from "./usePokemon";
import { PokedexContext } from "../context/Pokedex-Provider";
import { PokemonCard } from "../pokemon-card/Pokemon-Card";

import './Pokemon-Grid.css';
import { PokemonPagination } from "./Pokemon-Pagination";

export const PokemonGrid: React.FC = () => {

    const { selected, pageSize, page } = useContext(PokedexContext);
    const pokemon = usePokemon(true);

    if (selected) {
        return null;
    }

    const startPosition = (page - 1) * pageSize;
    const endPosition = page * pageSize - 1;

    const items = pokemon && Array.isArray(pokemon.results)
        ? pokemon.results.slice(startPosition, endPosition).map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} className='grid-item'></PokemonCard>)
        : [];

    return <PokemonPagination count={pokemon.count}>
        <div className="pokemon-grid">
            {items}
        </div>
    </PokemonPagination>;
}