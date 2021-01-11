import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Button } from 'react-materialize';

import { MyPokemonContext } from "../../context/MyPokemon-Provider";
import { IEnrichedDetail } from "../../../types/Pokemon";
import { select } from "../../../reducers/Pokedex-Reducer";
import { add, remove } from "../../../reducers/MyPokemon-Reducer";

import './Actions.css';

export const PokemonActions: React.FC<{pokemon: IEnrichedDetail}> = ({pokemon}) => {
    const dispatch = useDispatch();
    const { items } = useContext(MyPokemonContext)

    const inMyPokemon = items.indexOf(pokemon.id) >= 0;

    const myPokemonAction = inMyPokemon
        ? <Button className='action' onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); dispatch(remove(pokemon)); }}>Remove My Pokemon</Button>
        : <Button className='action' onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); dispatch(add(pokemon)); }}>Add My Pokemon</Button>

    return <div className='actions'>
        { myPokemonAction }
        <Button className='action' onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); dispatch(select(null)); }}>Back to Pokemon</Button>
    </div>;
}