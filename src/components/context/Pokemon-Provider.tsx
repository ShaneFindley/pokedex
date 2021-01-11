import { createContext } from "react"
import { useSelector } from "react-redux";

import { IPokemonSlice } from "../../reducers/Pokemon-Reducer";

export const PokemonContext = createContext<IPokemonSlice>({} as IPokemonSlice);

export const PokemonProvider: React.FC = ({children}) => {
    const state = useSelector((state: { pokemon: IPokemonSlice }) => state.pokemon);
    return <PokemonContext.Provider value={ state }>
        {children}
    </PokemonContext.Provider>
}