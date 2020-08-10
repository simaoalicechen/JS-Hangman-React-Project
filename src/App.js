import React, {useState, useEffect} from 'react';
import Header from './companents/Header'; 
import Figure from './companents/Figure';
import WrongLetters from './companents/WrongLetters';
import Word from './companents/Word';
import Notification from './companents/Notification';
import Popup from './companents/Popup';
import {showNotification as show} from './helpers/helpers'; 

import './App.css';

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {
  const [playable, setPlayable] = useState(true); 
  const [correctLetters, setCorrectLetters] = useState([]); 
  const [wrongLetters, setwrongLetters] = useState([]); 
  const [showNotification, setShowNotification] = useState([false]);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode} = event;
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter]); 
            } else {
              show(setShowNotification); 
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setCorrectLetters(wrongLetters => [...wrongLetters, letter]); 
            } else {
              show(setShowNotification);
            }
          }
        }
    }
    window.addEventListener('keydown', handleKeydown); 
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]); 

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]); 
    setwrongLetters([]); 

    const random = Math.floor(math.random() = words.length); 
    selectedWord = words[random]; 

  }

  return (
    <>
      <Header />
      <div className = 'game-container'>
        <Figure wrongLetters = {wrongLetters}/>
        <WrongLetters wrongLetters = {wrongLetters}/>
        <Word selectedWord ={selectedWord} correctLetters = {correctLetters}/>
      </div>
      <Popup correctLetters = {correctLetters} wrongLetters = {wrongLetters} selectedWord = {selectedWord} setPlayable = {setPlayable} playAgain = {playAgain} />
      <Notification showNotification = {showNotification}/>
    </>
  );
}

export default App;
