import React from 'react'
import "./Cell.css"

export default function Cell(props) {

  let {x,y,color,isPuzzleSolved} = props

  const cellClickHandler = (e) => {
    props.updatePuzzle(x,y,color)
  }

    
  return (
    <>
    {!isPuzzleSolved && <div className={`cell ${color}`} onClick={cellClickHandler}></div>}
    {isPuzzleSolved && <div className={`cell ${color}`}></div>}
    </>
  )
}
