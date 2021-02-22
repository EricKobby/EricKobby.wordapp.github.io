import { GET_NEXT_QUESTION, GET_QUESTIONS } from '.'
import { sampleData } from '../../sample-data'

const getQuestions = (dispatch: any) => {

    dispatch({
        type: GET_QUESTIONS,
        payload: sampleData
    })
}

const getNextQuestion = (dispatch: any, index: number) => {
    
    dispatch({
        type: GET_NEXT_QUESTION,
        payload: index
    })
}

export const bindActionCreators = (dispatch: any) => ({

    getQuestions: getQuestions.bind(this, dispatch),
    getNextQuestion: getNextQuestion.bind(this, dispatch)
})