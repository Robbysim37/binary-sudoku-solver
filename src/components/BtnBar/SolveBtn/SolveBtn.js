import React from 'react'
import "./SolveBtn.css"
import { solvePuzzle } from '../../../puzzleLogic/puzzleSolveLogic'
import { createPuzzle } from '../../../puzzleLogic/puzzleCreation'

export default function SolveBtn(props) {

  const {puzzleState,setPuzzleState,
    puzzleDimensions,
    isPuzzleSolved,setIsPuzzleSolved} = props

  const solveClickHandler = (e) => {
    try{
      const solvedPuzzle = solvePuzzle(puzzleState)
      setPuzzleState([...solvedPuzzle])
      setIsPuzzleSolved(true)
    }catch(err){
      window.alert("Invalid puzzle, please double check your entry.")
      setPuzzleState(createPuzzle(puzzleDimensions))
    }
  }

  const resetPuzzle = (e) => {
    setPuzzleState(createPuzzle(puzzleDimensions))
    setIsPuzzleSolved(false)
  }

  return (
    <div>
      {!isPuzzleSolved && <button className='solveBtn' onClick={solveClickHandler}>Solve!</button>}
      {isPuzzleSolved && <button className='solveBtn' onClick={resetPuzzle}>Reset</button>}
    </div>
  )
}
