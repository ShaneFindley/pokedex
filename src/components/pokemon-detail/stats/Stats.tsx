import { IPokemon } from "../../../types/Pokemon";

import './Stats.css';

export const PokemonStats: React.FC<{ pokemon: IPokemon }> = ({ pokemon }) => {

    const { stats } = pokemon;

    let hp;
    let attack;
    let defense;
    let specialAttack;
    let specialDefense;
    let speed;

    for (let stat of stats) {
        switch (stat.stat.name) {
            case 'hp':
                hp = stat.base_stat;
                break;
            case 'attack':
                attack = stat.base_stat;
                break;
            case 'defense':
                defense = stat.base_stat;
                break;
            case 'special-attack':
                specialAttack = stat.base_stat;
                break;
            case 'special-defense':
                specialDefense = stat.base_stat;
                break;
            case 'speed':
                speed = stat.base_stat;
                break;
            default:
                break;
        }
    }

    return <div className='pokemon-stats'>
        <label className='stat'>HP</label>
        <div className='value'>{hp}</div>

        <label className='stat'>Attack</label>
        <div className='value'>{attack}</div>

        <label className='stat'>Defense</label>
        <div className='value'>{defense}</div>

        <label className='stat'>Special Attack</label>
        <div className='value'>{specialAttack}</div>

        <label className='stat'>Special Defense</label>
        <div className='value'>{specialDefense}</div>
        
        <label className='stat'>Speed</label>
        <div className='value'>{speed}</div>
    </div>;
}