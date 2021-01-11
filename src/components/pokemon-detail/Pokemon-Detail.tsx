import { useContext } from "react";

import { PokedexContext } from "../context/Pokedex-Provider";
import { usePokemonDetail } from "./usePokemonDetail";
import { PokemonImg } from "../pokemon-image/Pokemon-Image";
import { PokemonInformation } from "./information/Information";
import { PokemonStats } from "./stats/Stats";
import { PokemonActions } from "./actions/Actions";
import { PokemonHeader } from "./header/Header";

import './Pokemon-Detail.css';

export const PokemonDetail: React.FC = () => {
    const { selected, options } = useContext(PokedexContext);
    const pokemonDetails = usePokemonDetail(selected);

    if (!selected) {
        return null;
    }

    return <div className='pokemon-detail'>
        <PokemonHeader pokemon={selected} allPokemon={options} />
        <PokemonImg id={selected.id} />
        { 
            !!pokemonDetails
                ? <>
                    <PokemonInformation pokemon={pokemonDetails} />
                    <PokemonStats pokemon={pokemonDetails} />
                </>
                : <div className='loading'>Locating pokemon data, these critters are tough to find!</div>
        }
        <PokemonActions pokemon={selected} />
    </div>;
}