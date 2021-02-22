import React, { useEffect } from 'react'
import { withDataContext } from '../context/hooks-hocs';
import { WithContextProp } from '../types';
import Answers from './Answers'
import { Question } from './Question'



const QuestionsBoard: React.FC<WithContextProp> = ({ current }) => {

    useEffect(() => {

    }, [current]);

    return (
        <div className="board">
            {current ?
                (<React.Fragment>
                    <Question current={current} />
                    <Answers answers={current.suggestions} />
                </React.Fragment>) : <h2>Loading...</h2>}
        </div>
    )
}

export default withDataContext(QuestionsBoard)
