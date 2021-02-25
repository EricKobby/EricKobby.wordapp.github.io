import { InitialState, ReducerAction } from "../../types"
import { GET_NEXT_QUESTION, GET_QUESTIONS } from '../action-creators'

export function questionsReducer(state: InitialState, action: ReducerAction): InitialState {
    
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                questions: action.payload,
                current: action.payload[0]
            }
        case GET_NEXT_QUESTION:
            return {
                ...state,
                current: state.questions[action.payload],
                currentIndex: action.payload
            }
        default:
            return state;
    }
}
