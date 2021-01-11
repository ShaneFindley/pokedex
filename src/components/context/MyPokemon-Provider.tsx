import { createContext } from "react"
import { useSelector } from "react-redux";

import { IMyPokemonSlice } from "../../reducers/MyPokemon-Reducer";

export const MyPokemonContext = createContext<IMyPokemonSlice>({} as IMyPokemonSlice);

export const MyPokemonProvider: React.FC = ({children}) => {
    const state = useSelector((state: { myPokemon: IMyPokemonSlice }) => state.myPokemon);
    return <MyPokemonContext.Provider value={ state }>
        {children}
    </MyPokemonContext.Provider>
}