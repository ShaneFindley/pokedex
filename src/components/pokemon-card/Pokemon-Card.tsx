import { useContext, useMemo } from 'react';
import { Icon } from 'react-materialize';
import { useDispatch } from 'react-redux';

import { add, remove } from '../../reducers/MyPokemon-Reducer';
import { select } from '../../reducers/Pokedex-Reducer';
import { MyPokemonContext } from '../context/MyPokemon-Provider';
import { PokemonImg } from '../pokemon-image/Pokemon-Image';
import { IEnrichedDetail } from "../../types/Pokemon"

import './Pokemon-Card.css';

export const PokemonCard: React.FC<{ pokemon: IEnrichedDetail, className: string }> = ({pokemon, className }) => {
    const dispatch = useDispatch();
    const { items } = useContext(MyPokemonContext)

    // creating a dictionary of ids would probably increase performance.
    const inMyPokemon = items.indexOf(pokemon.id) >= 0;

    // switch to using useMemo to improve performance, doesnt require constant regenerating.
    const onClickMyPokemon = useMemo(() => (e: React.MouseEvent<HTMLButtonElement>) => { 
        e.stopPropagation();
        // Consideration: this will create a closure on the inMyPokemon value.
        if (inMyPokemon) {
            dispatch(remove(pokemon));
        } else {
            dispatch(add(pokemon));
        }
    }, [dispatch, inMyPokemon, pokemon]);

    return <section
        className={`pokemon-card ${className}`}
        onClick={(e: React.MouseEvent<HTMLElement>) => { e.stopPropagation(); dispatch(select(pokemon)); }}
    >
        <PokemonImg className='item-img' id={pokemon.id} />
        <header className='item-header'>{pokemon.name}</header>
        <Icon className='item-status' onClick={onClickMyPokemon} >{ inMyPokemon ? 'favorite' : 'favorite_border' }</Icon>
    </section>
}