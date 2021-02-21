import { InitialState, ReducerAction } from "../../types"
import { GET_QUESTIONS } from '../action-creators'

export function wordsReducer(state: InitialState, action: ReducerAction): InitialState {
    
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                questions: action.payload
            }
        default:
            return state;
    }
}
