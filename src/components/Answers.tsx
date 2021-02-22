import React from 'react'
import { Answer } from './Answer'

interface Prop {
    answers: Array<string>
}

const Answers: React.FC<Prop> = ({ answers }) => {

    return (
        <ul className="list-group mb-3">{answers.map((answer, i) => <Answer answer={answer} key={i} />)}</ul>
    )
}

export default Answers
