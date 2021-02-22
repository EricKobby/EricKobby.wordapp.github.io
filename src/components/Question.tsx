import React from 'react'
import { WithContextProp } from '../types'



export const Question: React.FC<WithContextProp> = ({ current }) => {
    return(
    <div className="mb-3">
        <div className="h5"><b>Q{current.id}:</b></div>
        <div>{current.question}</div>
    </div>
    )
}