import { IPokemon } from "../../../types/Pokemon";

import './Information.css';

export const PokemonInformation: React.FC<{ pokemon: IPokemon }> = ({ pokemon }) => {

    const { abilities, types } = pokemon;

    const abilityContent = abilities.map(a => {
        return <div key={a.slot} className={`item ${a.is_hidden ? 'hidden' : ''}`}>{a.ability.name}</div>;
    });

    const categoryContent = types.map(t => {
        return <div key={t.slot} className={`item ${t.type.name}`}>{t.type.name}</div>;
    });

    return <div className='pokemon-info'>
        <div className='height'>
            <label>Height: </label>
            <div>{pokemon.height}</div>
        </div>
        <div className='weight'>
            <label>Weight: </label>
            <div>{pokemon.weight}</div>
        </div>
        <div className='abilities'>
            <label>Abilities: </label>
            <div className='pokemon-abilities'>
                {abilityContent}
            </div>
        </div>
        <div className='classes'>
            <label>Classes: </label>
            <div className='pokemon-class'>
                {categoryContent}
            </div>
        </div>
    </div>;
}