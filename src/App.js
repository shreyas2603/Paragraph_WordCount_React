import './App.css';
import { useState } from 'react';

function App() {

  const [words,setWords]=useState('');

  const countWords = (text) => {
    const wordsArray = text.split(/\s+/);
    const filteredWords = wordsArray.filter(word => word.trim() !== '');
    return filteredWords.length;
  };

  return (
    <div className="App">
      <div className='container'>
          <h1>Responsive Paragraph Word Counter</h1>
          <textarea id="box" cols="50" rows="10" 
            placeholder='Enter your text here'
            onChange={(e) => setWords(e.target.value)}/>
          <h2>{`Word Count : ${countWords(words)}`}</h2>
      </div>
    </div>
  );
}

export default App;
