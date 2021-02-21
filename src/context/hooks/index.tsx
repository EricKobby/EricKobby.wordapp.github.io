import { useContext } from 'react'
import { DataContext } from '..'
import { WordActionCreatorType } from '../../types';



export function useAction(action: WordActionCreatorType) {

    const { actions } = useContext(DataContext)

    return actions[action];
}
