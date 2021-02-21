import React, { createContext, useReducer } from 'react'
import { InitialState } from '../types';
import { bindActionCreators } from './action-creators/words-action-creator';
import { wordsReducer } from './reducer/wordReducer';


export const initialState: InitialState = {
    questions: Array<any>(),
    current: null,
    score: 0,
    actions: null
};

export const DataContext = createContext(initialState);

const DataContextProvider: React.FC = ({ children }) => {

    const [state, dispatch] = useReducer(wordsReducer, initialState);

    return (
        <DataContext.Provider value={{ ...state, actions: bindActionCreators(dispatch) }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;