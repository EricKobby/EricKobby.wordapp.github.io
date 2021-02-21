import { GET_QUESTIONS } from '.'
import { sampleData } from '../../sample-data/data'

const getQuestions = (dispatch: any) => {

    dispatch({
        type: GET_QUESTIONS,
        payload: sampleData
    })
}

const submitAnswer = (dispatch: any, obj: any) => {

}


export const bindActionCreators = (dispatch: any) => ({

    getQuestions: getQuestions.bind(this, dispatch),
    submitAnswer: submitAnswer.bind(this, dispatch)
})