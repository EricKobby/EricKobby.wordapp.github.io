import { useEffect } from 'react'
import './App.css'
import QuestionsBoard from './components/QuestionsBoard'
import { useAction } from './context/hooks-hocs'
import { WordActionCreatorType } from './types'

const App = () => {
  
  const getQuestions = useAction(WordActionCreatorType.GetQuestions)
  
  useEffect(() => getQuestions(), []);

  return (
    <div className="App">
      <QuestionsBoard />
    </div>
  );
}

export default App
