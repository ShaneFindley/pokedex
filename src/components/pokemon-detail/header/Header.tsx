import { useDispatch } from "react-redux";
import { Button, Icon } from 'react-materialize';

import { IEnrichedDetail } from "../../../types/Pokemon";
import { select } from "../../../reducers/Pokedex-Reducer";

import './Header.css';

export const PokemonHeader: React.FC<{pokemon: IEnrichedDetail, allPokemon: IEnrichedDetail[]}> = ({pokemon, allPokemon}) => {
    const dispatch = useDispatch();
    const pokemonIdText = String(pokemon.id).padStart(4, '0');

    const index = allPokemon.indexOf(pokemon);
    const next = index + 1 <= allPokemon.length - 1 ? allPokemon[index+1] : null;
    const previous = index - 1 >= 0 ? allPokemon[index-1] : null;

    const onClickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        dispatch(select(previous));
    };

    const onClickForward = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        dispatch(select(next));
    };

    return <>
        <header className='pokemon-header'>{pokemon?.name} #{pokemonIdText}</header>
        <Button className='pokemon-header action back' onClick={onClickBack}><Icon>chevron_left</Icon></Button>
        <Button className='pokemon-header action forward' onClick={onClickForward}><Icon>chevron_right</Icon></Button>
    </>;
}