import React, { useEffect, useState } from 'react'
import { useAction, withDataContext } from '../context/hooks-hocs';
import { WithContextProp, WordActionCreatorType } from '../types';
import Answers from './Answers'
import Commands from './Commands';
import { Question } from './Question'



const QuestionsBoard: React.FC<WithContextProp> = ({ current, currentIndex }) => {

    const getNextQuestion = useAction(WordActionCreatorType.GetNextQuestion)
    const [index, setIndex] = useState(currentIndex)

    useEffect(() => {
        setIndex(currentIndex)
    }, [current, currentIndex]);

    const onNextClickHandler = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        getNextQuestion((index as number) + 1)
    }

    return (
        current ?
            (<div className="board">
                <Question current={current} />
                <Answers answers={current.suggestions} />
                <Commands onNextClick={onNextClickHandler} />
            </div>) : <h2>Loading...</h2>
    )

}

export default withDataContext(QuestionsBoard)
