import { useEffect } from 'react';
import './App.css';
import { Question } from './components/Question';
import { useAction } from './context/hooks';
import { WordActionCreatorType } from './types';

const App = () => {
  
  const getQuestions = useAction(WordActionCreatorType.GetQuestions)
  
  useEffect(() => getQuestions(), []);

  return (
    <div className="App">
      <Question />
    </div>
  );
}

export default App;
