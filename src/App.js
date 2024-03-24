import { useState,useEffect } from 'react';
import './App.css';
import BtnBar from './components/BtnBar/BtnBar';
import SolveBtn from './components/BtnBar/SolveBtn/SolveBtn';
import ColumnContainer from './components/ColumnContainer/ColumnContainer';
import { FOURxFOUR } from './puzzleLogic/globalStrings';
import { createPuzzle } from './puzzleLogic/puzzleCreation'

function App() {

  const [puzzleDimensions,setPuzzleDimensions] = useState(FOURxFOUR)
  const [puzzleState,setPuzzleState] = useState(createPuzzle(puzzleDimensions))

  useEffect(() => {
    setPuzzleState(createPuzzle(puzzleDimensions))
  },[puzzleDimensions])

  const updatePuzzlecontent = (x,y,color) => {
    puzzleState[x][y].nextColor(color)
    setPuzzleState([...puzzleState])
  }

  const updateDimensions = (dimensions) => {
    setPuzzleDimensions(dimensions)
  }

  return (
    <div className="App">
      <h1 className='headerText'>Binary Sudoku Solver</h1>
      <ColumnContainer puzzleDimensions={puzzleDimensions}
      updatePuzzlecontent={updatePuzzlecontent}
      puzzleState={puzzleState}/>
      <SolveBtn puzzleState={puzzleState} setPuzzleState={setPuzzleState}/>
      <BtnBar updateDimensions={updateDimensions}/>
    </div>
  );
}

export default App;
