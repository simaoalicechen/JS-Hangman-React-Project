import React, { useEffect } from 'react'; 
import {checkWin} from '../helpers/helpers'; 

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain} ) => {
  let finalMessage = ''; 
  let finalMessageRevealWord = ''; 
  let setPlayable = true; 

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulations! You won! :)';
    playable = false; 
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ){
    finalMessagge = 'Unfortunately you lost. :('; 
    finalMessageRevealWord = `.. the word was: ${selectedWord}`; 
    playable = false; 
  }

useEffect(() => setPlayable(playable)); 

  return (
    <div className="popup-container" style = {finalMessage !== '' ? {display: 'flex'}: {}}>
      <div class="popup">
        <h2>{finalMessage}</h2>
        <h3>{rinalMessageRevealWord}</h3>
        <button onClick = {playAgain} >Play Again</button>
      </div>
    </div>
)
  }
  
export default Popup
