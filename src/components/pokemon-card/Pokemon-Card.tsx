import { useContext } from 'react';
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

    const inMyPokemon = items.indexOf(pokemon.id) >= 0;
    const onClickMyPokemon = (e: React.MouseEvent<HTMLButtonElement>) => { 
        e.stopPropagation();
        if (inMyPokemon) {
            dispatch(remove(pokemon));
        } else {
            dispatch(add(pokemon));
        }
    }

    return <section
        className={`pokemon-card ${className}`}
        onClick={(e: React.MouseEvent<HTMLElement>) => { e.stopPropagation(); dispatch(select(pokemon)); }}
    >
        <PokemonImg className='item-img' id={pokemon.id} />
        <header className='item-header'>{pokemon.name}</header>
        <Icon className='item-status' onClick={onClickMyPokemon} >{ inMyPokemon ? 'favorite' : 'favorite_border' }</Icon>
    </section>
}