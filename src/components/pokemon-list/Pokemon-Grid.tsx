import { useContext, useMemo } from "react";

import { usePokemon } from "./usePokemon";
import { PokedexContext } from "../context/Pokedex-Provider";
import { PokemonCard } from "../pokemon-card/Pokemon-Card";
import { PokemonPagination } from "./Pokemon-Pagination";

import './Pokemon-Grid.css';

export const PokemonGrid: React.FC = () => {

    const { selected, pageSize, page } = useContext(PokedexContext);
    const pokemon = usePokemon(true);

    const startPosition = (page - 1) * pageSize;
    const endPosition = page * pageSize - 1;

    const items = useMemo(() => {
        if (selected) {
            return null;
        }

        return pokemon && Array.isArray(pokemon.results)
        ? pokemon.results.slice(startPosition, endPosition).map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} className='grid-item'></PokemonCard>)
        : [];
    }, [endPosition, pokemon, selected, startPosition]);

    if (selected) {
        return null;
    }

    return <PokemonPagination count={pokemon.count}>
        <div className="pokemon-grid">
            {items}
        </div>
    </PokemonPagination>;
}