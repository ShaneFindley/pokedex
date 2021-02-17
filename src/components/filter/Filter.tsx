import { useContext } from "react";
import { Switch } from 'react-materialize';
import { useDispatch } from "react-redux";

import { setOnlyMyPokemon } from "../../reducers/MyPokemon-Reducer";
import { MyPokemonContext } from "../context/MyPokemon-Provider";
import { setFilter } from "../../reducers/Pokedex-Reducer";
import { PokedexContext } from "../context/Pokedex-Provider";

import './Filter.css';

export const Filter = () => {

    const dispatch = useDispatch();
    const { onlyMyPokemon } = useContext(MyPokemonContext);
    const { filter, selected } = useContext(PokedexContext);

    if (selected) {
        return null;
    }

    // Adding a full autocomplete dropdown here would be nice.
    return <div className='filters'>
        <label className='text-filter-label'>Filter</label>
        <input
            id="autocomplete-filter"
            className='text-filter'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setFilter(e.target.value))}
            placeholder="Type to filter for your favourite!"
            value={filter ?? ''}
        />
        <label className='my-pokemon-label'>My Pokemon</label>
        <Switch
            id="my-pokemon-switch"
            className='my-pokemon-toggle'
            offLabel="Off"
            onChange={() => { dispatch(setOnlyMyPokemon(!onlyMyPokemon)); }}
            onLabel="On"
            checked={onlyMyPokemon}
        />
    </div>;
}