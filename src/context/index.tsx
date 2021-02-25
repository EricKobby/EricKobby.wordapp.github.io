import React, { createContext, useReducer } from 'react'
import { InitialState } from '../types';
import { bindActionCreators } from './action-creators/quiz-action-creator';
import { questionsReducer } from './reducer/questionsReducer';


export const initialState: InitialState = {
    questions: Array<any>(),
    current: null,
    score: 0,
    actions: null,
    currentIndex: 0
};

export const DataContext = createContext(initialState);

const DataContextProvider: React.FC = ({ children }) => {

    const [state, dispatch] = useReducer(questionsReducer, initialState);

    return (
        <DataContext.Provider value={{ ...state, actions: bindActionCreators(dispatch) }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;